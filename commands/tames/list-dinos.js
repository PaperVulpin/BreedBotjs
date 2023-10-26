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
    const tagList = await interaction.client.Tags.findAll({ attributes: ['name', 'speciesTag'] });
    
    const species = interaction.options.getString('species');

    if (species !== null) {
      const filtered = tagList.filter(tag => tag.speciesTag === species);
      if (filtered.length === 0) {
        await interaction.reply(`No dinosaurs found with the species ${species}.`);
      } else {
        await interaction.reply(`Dinosaurs of the species ${species}: ${filtered.map(tag => tag.name).join(', ')}`);
      }
    
    } else {
      const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
      return interaction.reply('List of dinos: ' + tagString);
    }
    
    
    
    //const tagName = interaction.options.getString('name');
    //const tag = await interaction.client.Tags.findOne({ where: {name: tagName } } );
    }
  }