const { SlashCommandBuilder } = require('discord.js');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const Sequelize = require('sequelize');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('remove-dino')
    .setDescription('Removes a dinosaur in the database.')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('The name of the dinosaur.')
        .setRequired(true))
  ,
  async execute(interaction) { 
    const tagName = interaction.options.getString('name');

    //const tag = await interaction.client.Tags.findOne({ where: {name: tagName } } );
    const rowCount = await interaction.client.Tags.destroy({ where: {name: tagName } });

    if (!rowCount) return interaction.reply('Dino ' + tagName + ' not found.');

    return interaction.reply(tagName + ' deleted.');
    }
  }