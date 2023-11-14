const { SlashCommandBuilder } = require('discord.js');
const path = require('path');
const fs = require('fs');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('reload')
    .setDescription('Reloads a command.')
    .addStringOption(option =>
      option.setName('command')
        .setDescription('The command to reload.')
        .setRequired(true)),
  async execute(interaction) {
    const commandName = interaction.options.getString('command', true).toLowerCase();
    let command;

    

    if (!interaction.client.commands.has(commandName)) {
      return interaction.reply(`There is no command with name \`${commandName}\`!`);
    } else {
      command = interaction.client.commands.get(commandName);
    }

    
    if (command.data.name === 'remind' || command.data.name === 'ask' || command.data.name === 'server' || command.data.name === 'user' ) {
      delete require.cache[require.resolve(`../misc/${command.data.name}.js`)];
    }
    else if (command.data.name === 'add-tame' || command.data.name === 'edit-dino' || command.data.name === 'find-dino' || command.data.name === 'list-dinos' || command.data.name === 'remove-all-dinos' || command.data.name === 'remove-dino' ) {
        delete require.cache[require.resolve(`../tames/${command.data.name}.js`)];
    }
    else {
      delete require.cache[require.resolve(`./${command.data.name}.js`)];
    }
    

    try {
      interaction.client.commands.delete(command.data.name);

      const commandFolders = ['debugging', 'misc', 'tames'];
      let newCommand;

      for (const folder of commandFolders) {
        console.log("Folder: " + folder);
        const newCommandPath = path.join(__dirname, '..', folder, `${command.data.name}.js`);
        if (fs.existsSync(newCommandPath)) {
          newCommand = require(newCommandPath);
          interaction.client.commands.set(newCommand.data.name, newCommand);
          await interaction.reply(`Command \`${newCommand.data.name}\` was reloaded!`);
          return;
        }
      }
      await interaction.reply(`There was an error while reloading a command \`${command.data.name}\`: Command file not found`);
    } catch (error) {
      console.error(error);
      await interaction.reply(`There was an error while reloading a command \`${command.data.name}\`:\n\`${error.message}\``);
    }
  },
};