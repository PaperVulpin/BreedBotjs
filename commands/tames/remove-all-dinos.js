const { SlashCommandBuilder } = require('discord.js');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const Sequelize = require('sequelize');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('remove-all-dinos')
    .setDescription('Removes all dinosaurs in the database.')
    .addBooleanOption(option =>
      option.setName('clear-undefined')
        .setDescription('Whether or not to only clear the undefined entries'))
    .addBooleanOption(option =>
      option.setName('confirm-delete-all')
        .setDescription('Type \'True\' to verify you really want to delete all dinosaurs from the database.'))
  ,
  async execute(interaction) { 
    const undefinedOnly = interaction.options.getBoolean('clear-undefined');
    const confirmDelete = interaction.options.getBoolean('confirm-delete-all');

    console.log("Undefined: " + undefinedOnly);

    if (undefinedOnly) {
      if (confirmDelete) {
        const rowCount = await interaction.client.Tags.destroy({ where: { name: null } });
      //if (!rowCount) return interaction.reply('No tags found.');
        return interaction.reply('All undefined dinos deleted.');
      }
      else {
        return interaction.reply('Please try the command again but confirm you want to delete all by typing True in the confirm-delete-all field.');
      }
    }
    else {
      const rowCount = await interaction.client.Tags.destroy({ where: {} });
      if (!rowCount) return interaction.reply('No tags found.');
      return interaction.reply('All dinos deleted.');
    }

  }
}