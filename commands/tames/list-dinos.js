const { SlashCommandBuilder } = require('discord.js');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const Sequelize = require('sequelize');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('list-dinos')
    .setDescription('Lists all dinosaurs in the database.')
  ,
  async execute(interaction) { 
    const tagList = await interaction.client.Tags.findAll({ attributes: ['name'] });
    const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';

    return interaction.reply('List of dinos: ' + tagString);
    
    const tagName = interaction.options.getString('name');
    const tag = await interaction.client.Tags.findOne({ where: {name: tagName } } );
    }
  }