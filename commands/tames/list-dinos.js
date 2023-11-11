const { SlashCommandBuilder } = require('discord.js');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const Sequelize = require('sequelize');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('list-dinos')
    .setDescription('Lists all dinosaurs in the database.')
    .addStringOption(option =>
      option.setName('species')
        .setDescription('Show only the specified species.'))
  ,
  async execute(interaction) {
    const tagList = await interaction.client.Tags.findAll({ attributes: ['name', 'speciesTag', 'statHealth', 'statStamina', 'statWeight', 'statMelee', 'statFood', 'statOxygen', 'isFemale', 'dinoLevel', 'mutationsMale', 'mutationsFemale'] });
    
    var species = interaction.options.getString('species');

    //Replaces similar species names with the one matching the DinoData.ini
    if (species === 'Argentavis' || species === 'Argy' || species === 'Arg') {
      species = 'Argent';
    }
    else if (species === 'Ankylosaurus' || species === 'Anklyo' || species === 'Ank') {
      species = 'Anky';
    }
    else if (species === 'Araneo') {
      species = 'Spider';
    }
    else if (species === 'Pteranodon') {
      species = 'Ptera';
    }

    //Araneo
    
    //Creates a list of all the dinosaurs in the database, showing only matching species
    if (species !== null) {
      const filtered = tagList.filter(tag => tag.speciesTag === species);
      let result = '';

      filtered.sort((a, b) => a.dinoLevel - b.dinoLevel);

      filtered.forEach((tag) => {
        //result += ((tag.isFemale.toLowerCase() === "true") ? ':female_sign: ' : ':male_sign: ') + tag.name + ' - Lv. ' + tag.dinoLevel + ': <:Health:1168864273779404861>: ' + (tag.statHealth).toFixed(2) + ', <:Stamina:1168864280771313694>: ' + (tag.statStamina).toFixed(2) + ', <:Melee:1168864277097103413>: ' + (tag.statMelee).toFixed(2) + ', <:Weight:1168864283250151494>: ' + (tag.statWeight).toFixed(2) + ', <:Food:1168864087883653170>: ' + (tag.statFood).toFixed(2) + ', <:Oxygen:1168864278485413928>: ' + (tag.statOxygen).toFixed(2) + ((tag.mutationsMale !== 0) ? (', Paternal Mutations: ' + tag.mutationsMale) : '') + ((tag.mutationsFemale !== 0) ? (', Maternal Mutations: ' + tag.mutationsFemale) : '') + '\n';
        result += ((tag.isFemale === "true" || tag.isFemale === "True") ? ':female_sign: ' : ':male_sign: ') + tag.name + ' - Lv. ' + tag.dinoLevel + ': <:Health:1168864273779404861>: ' + (tag.statHealth).toFixed(2) + ', <:Stamina:1168864280771313694>: ' + (tag.statStamina).toFixed(2) + ', <:Melee:1168864277097103413>: ' + (tag.statMelee).toFixed(2) + ', <:Weight:1168864283250151494>: ' + (tag.statWeight).toFixed(2) + ', <:Food:1168864087883653170>: ' + (tag.statFood).toFixed(2) + ', <:Oxygen:1168864278485413928>: ' + (tag.statOxygen).toFixed(2) + ((tag.mutationsMale !== 0) ? (', Paternal Mutations: ' + tag.mutationsMale) : '') + ((tag.mutationsFemale !== 0) ? (', Maternal Mutations: ' + tag.mutationsFemale) : '') + '\n';
      });

      if (filtered.length === 0) {
        await interaction.reply(`No dinosaurs found with the species ${species}.`);
      } else {
        if (result.length > 1900) {
          result = 'Dinosaurs of the species ' + species + ':\n' + result;
          let charToSplit = result;
          const messageChunks = [];
          let currentChunk = "";
          const splitLines = charToSplit.split("\n");

          splitLines.forEach(line => {
            if (currentChunk.length + line.length + 1 <= 1900) {
              currentChunk += line + "\n";
            } else {
              messageChunks.push(currentChunk);
              currentChunk = line + "\n";
            }
          });

          if ((currentChunk !== "") && (currentChunk !== "\n")) {
            messageChunks.push(currentChunk);
          }

          for (const chunk of messageChunks) {
            await interaction.channel.send(chunk);
          }
          

          await interaction.channel.send(splitLines.length + ' ' + species + 's found.');
        } else {
          await interaction.reply(`Dinosaurs of the species ${species}:\n${result}`);
        }
      }
    } else {
      const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
      return interaction.reply('List of dinos: ' + tagString);

      //Testing showing list of all dinos, sorted by species
      /*
      const speciesList = tagList.map(tag => tag.speciesTag);
      const uniqueSpecies = speciesList.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });

      uniqueSpecies.sort();

      let result = '';
      let replyChunks = [];

      uniqueSpecies.forEach((species) => {
        const filtered = tagList.filter(tag => tag.speciesTag === species);
  
        filtered.sort((a, b) => a.dinoLevel - b.dinoLevel);

        let chunk = `List of dinosaurs for species ${species}:\n`;
        filtered.forEach((tag) => {
          const line = `${tag.name} - Lv. ${tag.dinoLevel}\n`;
          if (chunk.length + line.length <= 1900) {
            chunk += line;
          } else {
            replyChunks.push(chunk);
            chunk = line;
          }
        });

        replyChunks.push(chunk);
      });

      for (const chunk of replyChunks) {
        await interaction.channel.send(chunk);
      }
      */
    }
  }
}