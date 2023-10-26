const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
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
    console.log("N: " + tag.isNeutered + " F : " + tag.isFemale);
    console.log(tag.isNeutered.toLowerCase() === "true");
    console.log(tag.isNeutered.toLowerCase() == "true");
    console.log(tag.isFemale.toLowerCase() === "true");
    console.log(tag.isFemale.toLowerCase() == "true");
    if (tag) {
      const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle(tag.name)
      .setURL('https://www.dododex.com/taming/pteranodon')
      //.setAuthor({ name: if(tag.imprinter){tag.imprinter + '\'s imprinted ' + tag.speciesTag}else if(tag.tamer){tag.tamer + '\'s tamed ' + tag.speciesTag}else{tag.speciesTag}, iconURL: 'https://i.imgur.com/AfFp7pu.png' })
      .setAuthor({ name: tag.imprinter ? tag.imprinter + '\'s imprinted ' + tag.speciesTag : tag.tamer ? tag.tamer + '\'s tamed ' + tag.speciesTag : tag.speciesTag, iconURL: 'https://arkids.net/image/creature/120/pteranodon.png' })
        //(lemon) ? document.write("foo gave me a bar") : document.write("if condition is FALSE");
      .setDescription('Level ' + tag.dinoLevel + ' ' + ((tag.isNeutered.toLowerCase() === "true") ? 'neutered ' : '') + ((tag.isFemale.toLowerCase() === "true") ? 'female' : 'male'))
      .setThumbnail('https://i.ibb.co/P98s8f4/pteranodon.webp')
      .addFields(
        //{ name: 'Regular field title', value: 'Some value here' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Health', value: tag.statHealth.toString(), inline: true },
        { name: 'Stamina', value: tag.statStamina.toString(), inline: true },
        { name: 'Melee', value: tag.statMelee.toString(), inline: true },
        { name: 'Weight', value: tag.statWeight.toString(), inline: true },
        { name: 'Oxygen', value: tag.statOxygen.toString(), inline: true },
        { name: 'Food', value: tag.statFood.toString(), inline: true },
        { name: 'Water', value: tag.statWater.toString(), inline: true },
        { name: 'Movement', value: tag.statMovement.toString(), inline: true }
        //{ name: 'Temperature', value: tag.statTemperature, inline: true },
        //{ name: 'Torpidity', value: tag.statTorpidity, inline: true }
        //
      )
      //.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
      .setImage('https://imageupload.io/ib/oQDNVVKDkMCwEeS_1698216766.png')
      .setTimestamp()
      .setFooter({ text: 'Test footer', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

      return interaction.reply({ embeds: [exampleEmbed] });

      ///
      /*
        imprintingQuality: tagImprinting,
        mutationsMale: tagMutationsMale,
        mutationsFemale: tagMutationsFemale,
        babyAge: tagBabyAge,
        dinoLevel: tagLevel,
        colorSet0: tagColor0,
        colorSet1: tagColor1,
        colorSet2: tagColor2,
        colorSet3: tagColor3,
        colorSet4: tagColor4,
        colorSet5: tagColor5,

        statHealth: tagHealth,
        statStamina: tagStamina,
        statTorpidity: tagTorpidity,
        statOxygen: tagOxygen,
        statFood: tagFood,
        statWater: tagWater,
        statTemperature: tagTemperature,
        statWeight: tagWeight,
        statMelee: tagMelee,
        statMovement: tagMovement,
        statFortitude: tagFortitude,
        statCrafting: tagCrafting,
      */
      ////
      /*
      //return interaction.reply(tag.get('name') + ' found! Its species is: ' + tag.get('speciesTag'));
      let response = `Name: ${tag.get('name')}\n`;
      response += `Species Tag: ${tag.get('speciesTag')}\n`;
      response += `Is Female: ${tag.get('isFemale')}\n`;
      response += `Is Neutered: ${tag.get('isNeutered')}\n`;
      response += `Tamer: ${tag.get('tamer')}\n`;
      response += `Imprinter: ${tag.get('imprinter')}\n`;
      response += `Imprinting Quality: ${tag.get('imprintingQuality')}\n`;
      response += `Mutations Male: ${tag.get('mutationsMale')}\n`;
      response += `Mutations Female: ${tag.get('mutationsFemale')}\n`;
      response += `Baby Age: ${tag.get('babyAge')}\n`;
      response += `Dino Level: ${tag.get('dinoLevel')}\n`;
      response += `Color Set 0: ${tag.get('colorSet0')}\n`;
      response += `Color Set 1: ${tag.get('colorSet1')}\n`;
      response += `Color Set 2: ${tag.get('colorSet2')}\n`;
      response += `Color Set 3: ${tag.get('colorSet3')}\n`;
      response += `Color Set 4: ${tag.get('colorSet4')}\n`;
      response += `Color Set 5: ${tag.get('colorSet5')}\n`;
      response += `Stat Health: ${tag.get('statHealth')}\n`;
      response += `Stat Stamina: ${tag.get('statStamina')}\n`;
      response += `Stat Torpidity: ${tag.get('statTorpidity')}\n`;
      response += `Stat Oxygen: ${tag.get('statOxygen')}\n`;
      response += `Stat Food: ${tag.get('statFood')}\n`;
      response += `Stat Water: ${tag.get('statWater')}\n`;
      response += `Stat Temperature: ${tag.get('statTemperature')}\n`;
      response += `Stat Weight: ${tag.get('statWeight')}\n`;
      response += `Stat Melee: ${tag.get('statMelee')}\n`;
      response += `Stat Movement: ${tag.get('statMovement')}\n`;
      response += `Stat Fortitude: ${tag.get('statFortitude')}\n`;
      response += `Stat Crafting: ${tag.get('statCrafting')}\n`;
      return interaction.reply(response);
      */
    }
    return interaction.reply('Could not find a dinosaur named: ' + tagName);
  }
}