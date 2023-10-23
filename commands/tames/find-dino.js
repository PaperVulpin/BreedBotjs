const { SlashCommandBuilder } = require('discord.js');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const Sequelize = require('sequelize');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('find-dino')
    .setDescription('Finds a dinosaur in the database.')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('The name of the dinosaur.')
        .setRequired(true))
  ,
  async execute(interaction) { 
    const tagName = interaction.options.getString('name');
     
    const tag = await interaction.client.Tags.findOne({ where: {name: tagName } } );

    if (tag) {
      return interaction.reply(tag.get('name') + ' found! Its species is: ' + tag.get('speciesTag'));
    }
    return interaction.reply('Could not find a dinosaur named: ' + tagName);
    }
  }