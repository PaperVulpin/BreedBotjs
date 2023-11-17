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
    .addBooleanOption(option =>
      option.setName('show-colors')
        .setDescription('Shows a list of colors instead of stats.'))
  ,
  async execute(interaction) {
    const tagList = await interaction.client.Tags.findAll({ attributes: ['name', 'speciesTag', 'statHealth', 'statStamina', 'statWeight', 'statMelee', 'statFood', 'statOxygen', 'isFemale', 'dinoLevel', 'mutationsMale', 'mutationsFemale', 'colorSet0', 'colorSet1', 'colorSet2', 'colorSet3', 'colorSet4', 'colorSet5' ] });
    
    var species = interaction.options.getString('species');
    const showColors = interaction.options.getBoolean('show-colors') || false;

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
    else if (species === 'Giganotosaurus') {
      species = 'Gigant';
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

      if (showColors) {
        filtered.forEach((tag) => {
          const colorRegion0 = interaction.client.LookupColor.lookup(tag.colorSet0);
          const colorRegion1 = interaction.client.LookupColor.lookup(tag.colorSet1);
          const colorRegion2 = interaction.client.LookupColor.lookup(tag.colorSet2);
          const colorRegion3 = interaction.client.LookupColor.lookup(tag.colorSet3);
          const colorRegion4 = interaction.client.LookupColor.lookup(tag.colorSet4);
          const colorRegion5 = interaction.client.LookupColor.lookup(tag.colorSet5);
          //result += ((tag.isFemale === "true" || tag.isFemale === "True") ? ':female_sign: ' : ':male_sign: ') + tag.name + ' - Lv. ' + tag.dinoLevel + ': 0: ' + colorRegion0[1] + ', 1: ' + colorRegion1[1] + ', 2: ' + colorRegion2[1] + ', 3: ' + colorRegion3[1] + ', 4: ' + colorRegion4[1] + ', 5: ' + colorRegion5[1] + '\n';
          result += ((tag.isFemale === "true" || tag.isFemale === "True") ? ':female_sign: ' : ':male_sign: ') + tag.name + ' - Lv. ' + tag.dinoLevel + ((colorRegion0[1] === '<:NoColor:1174024382637682719>') ? '' : ': 0: ' + colorRegion0[1]) + ((colorRegion1[1] === '<:NoColor:1174024382637682719>') ? '' : ', 1: ' + colorRegion1[1]) + ((colorRegion2[1] === '<:NoColor:1174024382637682719>') ? '' : ', 2: ' + colorRegion2[1]) + ((colorRegion3[1] === '<:NoColor:1174024382637682719>') ? '' : ', 3: ' + colorRegion3[1]) + ((colorRegion4[1] === '<:NoColor:1174024382637682719>') ? '' : ', 4: ' + colorRegion4[1]) + ((colorRegion5[1] === '<:NoColor:1174024382637682719>') ? '' : ', 5: ' + colorRegion5[1]) + '\n';
        });
      }
      else {
        filtered.forEach((tag) => {
          result += ((tag.isFemale === "true" || tag.isFemale === "True") ? ':female_sign: ' : ':male_sign: ') + tag.name + ' - Lv. ' + tag.dinoLevel + ': <:Health:1168864273779404861>: ' + (tag.statHealth).toFixed(2) + ', <:Stamina:1168864280771313694>: ' + (tag.statStamina).toFixed(2) + ', <:Melee:1168864277097103413>: ' + (tag.statMelee).toFixed(2) + ', <:Weight:1168864283250151494>: ' + (tag.statWeight).toFixed(2) + ', <:Food:1168864087883653170>: ' + (tag.statFood).toFixed(2) + ', <:Oxygen:1168864278485413928>: ' + (tag.statOxygen).toFixed(2) + ((tag.mutationsMale !== 0) ? (', Paternal Mutations: ' + tag.mutationsMale) : '') + ((tag.mutationsFemale !== 0) ? (', Maternal Mutations: ' + tag.mutationsFemale) : '') + '\n';
        });
      }

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
          

          //await interaction.channel.send(splitLines.length + ' ' + species + 's found.');
          await interaction.reply(splitLines.length + ' ' + species + 's found.');
        } else {
          await interaction.reply(`Dinosaurs of the species ${species}:\n${result}`);
        }
      }
    } else {
      const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
      //return interaction.reply('List of dinos: ' + tagString);

      //Testing showing list of all dinos, sorted by species
      
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
      
    }
  }
}