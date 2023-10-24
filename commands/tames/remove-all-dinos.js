const { SlashCommandBuilder } = require('discord.js');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const Sequelize = require('sequelize');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('remove-all-dinos')
    .setDescription('Removes all dinosaurs in the database.')
  ,
  async execute(interaction) { 
    const rowCount = await interaction.client.Tags.destroy({ where: {} });

    if (!rowCount) return interaction.reply('No tags found.');

    return interaction.reply('All dinos deleted.');
  }
}