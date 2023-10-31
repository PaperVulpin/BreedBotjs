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
    const tagList = await interaction.client.Tags.findAll({ attributes: ['name', 'speciesTag', 'statHealth', 'statStamina', 'statWeight', 'statMelee', 'isFemale'] });
    
    const species = interaction.options.getString('species');

    if (species !== null) {
      const filtered = tagList.filter(tag => tag.speciesTag === species);
      var result = '';

      console.log(tagList);
      filtered.forEach((tag) => result = (result + ((tag.isFemale.toLowerCase() === "true") ? ':female_sign: ' : ':male_sign: ') + tag.name + ': ' + '<:Health:1168864273779404861>: ' + (tag.statHealth).toFixed(2) + ', <:Stamina:1168864280771313694>: ' + (tag.statStamina).toFixed(2) + ', <:Melee:1168864277097103413>: ' + (tag.statMelee).toFixed(2) + ', <:Weight:1168864283250151494>: ' + (tag.statWeight).toFixed(2) + '\n'));
      //tagList.forEach((tag) => result = (result + filtered.map(tag => tag.name) + ': ' + 'HP: ' + filtered.map(tag => tag.statHealth) + ', Sta: ' + filtered.map(tag => tag.statStamina) + ', Mel: ' + filtered.map(tag => tag.statMelee) + ', Wei: ' + filtered.map(tag => tag.statWeight) + '\n'));
      console.log(result);
      
      if (filtered.length === 0) {
        await interaction.reply(`No dinosaurs found with the species ${species}.`);
      } else {
        await interaction.reply(`Dinosaurs of the species ${species}:\n${result}`);
        //await interaction.reply(`Dinosaurs of the species ${species}: ${filtered.map(tag => tag.name).join(', ')}`);
        //await interaction.reply('Dinosaurs of the species ${species}:\n' + foreach(tagList){ } + '${filtered.map(tag => tag.name).join(', ')}`);
        //await interaction.reply(`Dinosaurs of the species ${species}:\n${filtered.map(tag => `${tag.name}: Health=${tag.health}, Melee=${tag.melee}, Weight=${tag.weight}, Stamina=${tag.stamina}`).join('\n')}`);
      }
    
    } else {
      const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
      return interaction.reply('List of dinos: ' + tagString);
    }
    
    
    
    //const tagName = interaction.options.getString('name');
    //const tag = await interaction.client.Tags.findOne({ where: {name: tagName } } );
    }
  }