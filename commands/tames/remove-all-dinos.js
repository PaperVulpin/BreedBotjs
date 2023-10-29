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
  ,
  async execute(interaction) { 
    const undefinedOnly = interaction.options.getBoolean('clear-undefined');

    console.log("Undefined: " + undefinedOnly);

    if (undefinedOnly) {
      const rowCount = await interaction.client.Tags.destroy({ where: { name: null } });
      
      //if (!rowCount) return interaction.reply('No tags found.');
      return interaction.reply('All undefined dinos deleted.');
    }
    else {
      const rowCount = await interaction.client.Tags.destroy({ where: {} });
      if (!rowCount) return interaction.reply('No tags found.');
      return interaction.reply('All dinos deleted.');
    }

  }
}