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
    //const tagList = await interaction.client.Tags.findAll({ attributes: ['name'] });
    const tagList = await interaction.client.Tags.findAll({ attributes: ['name', 'speciesTag', 'statHealth', 'statStamina', 'statWeight', 'statMelee', 'isFemale', 'dinoLevel', 'mutationsMale', 'mutationsFemale'] });
    
    const species = interaction.options.getString('species');

    if (species !== null) {
      const filtered = tagList.filter(tag => tag.speciesTag === species);
      var result = '';

      filtered.forEach((tag) => result = (result + ((tag.isFemale.toLowerCase() === "true") ? ':female_sign: ' : ':male_sign: ') + tag.name + ' - Lv. ' + tag.dinoLevel + ': <:Health:1168864273779404861>: ' + (tag.statHealth).toFixed(2) + ', <:Stamina:1168864280771313694>: ' + (tag.statStamina).toFixed(2) + ', <:Melee:1168864277097103413>: ' + (tag.statMelee).toFixed(2) + ', <:Weight:1168864283250151494>: ' + (tag.statWeight).toFixed(2) + ((tag.mutationsMale !== 0) ? (', Paternal Mutations: ' + tag.mutationsMale) : '' ) + ((tag.mutationsFemale !== 0) ? (', Maternal Mutations: ' + tag.mutationsFemale) : '' ) + '\n'));
      
      
      if (filtered.length === 0) {
        await interaction.reply(`No dinosaurs found with the species ${species}.`);
      } else {
        //result = 'Dinosaurs of the species ' + species + ':\n' + result;
        if (result.length > 1900) {
          result = 'Dinosaurs of the species ' + species + ':\n' + result;
          var charToSplit = result;
          //
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

          if (currentChunk !== "") {
            messageChunks.push(currentChunk);
          }

          messageChunks.forEach(async chunk => {
            //await interaction.reply(chunk);
            await interaction.channel.send(chunk);
          });
          
          await interaction.channel.send(splitLines.length + ' ' + species + 's found.');
          //
          //
        }
        else{
          await interaction.reply(`Dinosaurs of the species ${species}:\n${result}`);
        }
        
        //await interaction.reply(`Dinosaurs of the species ${species}:\n${result}`);
      }
    
    } else {
      //const speciesList = await interaction.client.Tags.findAll({ attributes: ['speciesTag'] });
      //speciesList.forEach((species) => console.log(species));
      /*
      tagList.forEach((tag) => result = (result + ((tag.isFemale.toLowerCase() === "true") ? ':female_sign: ' : ':male_sign: ') + tag.name + ': ' + '<:Health:1168864273779404861>: ' + (tag.statHealth).toFixed(2) + ', <:Stamina:1168864280771313694>: ' + (tag.statStamina).toFixed(2) + ', <:Melee:1168864277097103413>: ' + (tag.statMelee).toFixed(2) + ', <:Weight:1168864283250151494>: ' + (tag.statWeight).toFixed(2) + '\n'));m
      var filtered = tagList.filter(tag => tag.speciesTag === species);
      */
      const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
      return interaction.reply('List of dinos: ' + tagString);
    }
    
    
    
    //const tagName = interaction.options.getString('name');
    //const tag = await interaction.client.Tags.findOne({ where: {name: tagName } } );
    }
  }