const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('get-dino-color-rgba')
    .setDescription('Gets the converted RGBA value to be used to convert to hexadecimal.')
    .addStringOption(option =>
      option.setName('dino-name')
        .setDescription('The dino to check.')
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName('color-region')
        .setDescription('The region to get the value of (0-5).')
        .setRequired(true))
  ,
  async execute(interaction) {
    const tagName = interaction.options.getString('dino-name');
    const colorRegion = interaction.options.getInteger('color-region');

    const tag = await interaction.client.Tags.findOne({ where: {name: tagName } } );

    var rgbValues, r, g, b;

    if (tag) {
      switch (colorRegion) {
          case 0:
            rgbValues = tag.colorSet0.match(/\(([^)]+)\)/)[1].split(',');
            r = Math.pow(parseFloat(rgbValues[0].split('=')[1]), 1/2.2) * 255.999;
            g = Math.pow(parseFloat(rgbValues[1].split('=')[1]), 1/2.2) * 255.999;
            b = Math.pow(parseFloat(rgbValues[2].split('=')[1]), 1/2.2) * 255.999;
            return interaction.reply(`R: ${r}, G: ${g}, B: ${b}`);
          case 1:
            rgbValues = tag.colorSet1.match(/\(([^)]+)\)/)[1].split(',');
            r = Math.pow(parseFloat(rgbValues[0].split('=')[1]), 1/2.2) * 255.999;
            g = Math.pow(parseFloat(rgbValues[1].split('=')[1]), 1/2.2) * 255.999;
            b = Math.pow(parseFloat(rgbValues[2].split('=')[1]), 1/2.2) * 255.999;
            return interaction.reply(`R: ${r}, G: ${g}, B: ${b}`);
          case 2:
            rgbValues = tag.colorSet2.match(/\(([^)]+)\)/)[1].split(',');
            r = Math.pow(parseFloat(rgbValues[0].split('=')[1]), 1/2.2) * 255.999;
            g = Math.pow(parseFloat(rgbValues[1].split('=')[1]), 1/2.2) * 255.999;
            b = Math.pow(parseFloat(rgbValues[2].split('=')[1]), 1/2.2) * 255.999;
            return interaction.reply(`R: ${r}, G: ${g}, B: ${b}`);
          case 3:
            rgbValues = tag.colorSet3.match(/\(([^)]+)\)/)[1].split(',');
            r = Math.pow(parseFloat(rgbValues[0].split('=')[1]), 1/2.2) * 255.999;
            g = Math.pow(parseFloat(rgbValues[1].split('=')[1]), 1/2.2) * 255.999;
            b = Math.pow(parseFloat(rgbValues[2].split('=')[1]), 1/2.2) * 255.999;
            return interaction.reply(`R: ${r}, G: ${g}, B: ${b}`);
          case 4:
            rgbValues = tag.colorSet4.match(/\(([^)]+)\)/)[1].split(',');
            r = Math.pow(parseFloat(rgbValues[0].split('=')[1]), 1/2.2) * 255.999;
            g = Math.pow(parseFloat(rgbValues[1].split('=')[1]), 1/2.2) * 255.999;
            b = Math.pow(parseFloat(rgbValues[2].split('=')[1]), 1/2.2) * 255.999;
            return interaction.reply(`R: ${r}, G: ${g}, B: ${b}`);
          case 5:
            rgbValues = tag.colorSet5.match(/\(([^)]+)\)/)[1].split(',');
            r = Math.pow(parseFloat(rgbValues[0].split('=')[1]), 1/2.2) * 255.999;
            g = Math.pow(parseFloat(rgbValues[1].split('=')[1]), 1/2.2) * 255.999;
            b = Math.pow(parseFloat(rgbValues[2].split('=')[1]), 1/2.2) * 255.999;
            return interaction.reply(`R: ${r}, G: ${g}, B: ${b}`);
          default:
            return interaction.reply('Did not work');
      }
      return interaction.reply('did not work.');
    }
    return interaction.reply('Could not find a dinosaur named: ' + tagName);
  },
};