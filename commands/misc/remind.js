const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const Sequelize = require('sequelize');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('remind')
    .setDescription('Set a reminder for yourself.')
    .addStringOption(option =>
      option.setName('reminder')
        .setDescription('What is this reminder for?')
        .setRequired(true))
    .addIntegerOption(option =>
       option.setName('minutes')
        .setDescription('How many minutes?')
        .setRequired(true)
        .setMinValue(0)
        .setMaxValue(59))
    .addIntegerOption(option =>
      option.setName('seconds')
        .setDescription('How many seconds?')
        .setRequired(false)
        .setMinValue(0)
        .setMaxValue(59))
    .addIntegerOption(option =>
      option.setName('hours')
        .setDescription('How many hours?')
        .setRequired(false)
        .setMinValue(0)
        .setMaxValue(23))
    .addIntegerOption(option =>
      option.setName('days')
        .setDescription('How many days?')
        .setRequired(false)
        .setMinValue(0)
        .setMaxValue(31))
    .addBooleanOption(option =>
      option.setName('private')
        .setDescription('Should this timer be visible to only you?')
        .setRequired(false))
  ,
  async execute(interaction) { 
    const { options, guild } = interaction;
    const reminderSet = options.getString('reminder');
    const minutes = options.getInteger('minutes') || 0;
    const hours = options.getInteger('hours') || 0;
    const days = options.getInteger('days') || 0;
    const seconds = options.getInteger('seconds') || 0;
    const privateReminder = options.getBoolean('private') || true;

    let time = Date.now() + (days * 1000 * 60 * 60 * 24) + (hours * 1000 * 60 * 60) + (minutes * 1000 * 60) + (seconds * 1000);

    try {   
      const reminderTag = await interaction.client.RemindersTags.create({
        user: interaction.user.id,
        time: time,
        reminder: reminderSet
      });
      
      const reminderEmbed = new EmbedBuilder()
      .setColor("Blue")
      .setDescription(`**Reminder:** ${reminderSet}\n**Time:** <t:${Math.floor(time / 1000)}:R>`)

      await interaction.reply({ embeds: [reminderEmbed], ephemeral: privateReminder });
    }
    catch (error) {
      console.log(error);
    }
  }
}