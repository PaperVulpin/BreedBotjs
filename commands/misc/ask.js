const { SlashCommandBuilder } = require('discord.js');
/*
import OpenAI from 'openai';

const AIconfig = new OpenAI({
  organization: "org-Zq5p0F4tp2gpe3q2uFBUnHMB",
  apikey: process.env['openai_token'],
});

const openai = new OpenAIApi(AIconfig);
*/
module.exports = {
  data: new SlashCommandBuilder()
    .setName('ask')
    .setDescription('Asks the bot a question.')
    .addStringOption(option =>
      option.setName('question')
        .setDescription('The question to be asked.')
        .setRequired(true)),
  async execute(interaction) {
    /*
    const commandName = interaction.options.getString('command', true).toLowerCase();
    const command = interaction.client.commands.get(commandName);

    if (!command) {
      return interaction.reply(`There is no command with name \`${commandName}\`!`);
    }

    delete require.cache[require.resolve(`./${command.data.name}.js`)];

    try {
          interaction.client.commands.delete(command.data.name);
          const newCommand = require(`./${command.data.name}.js`);
          interaction.client.commands.set(newCommand.data.name, newCommand);
          await interaction.reply(`Command \`${newCommand.data.name}\` was reloaded!`);
    } catch (error) {
          console.error(error);
          await interaction.reply(`There was an error while reloading a command \`${command.data.name}\`:\n\`${error.message}\``);
    }
    */
  },
};