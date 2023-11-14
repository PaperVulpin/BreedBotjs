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
    /*
    console.log("N: " + tag.isNeutered + " F : " + tag.isFemale);
    console.log(tag.isNeutered.toLowerCase() === "true");
    console.log(tag.isNeutered.toLowerCase() == "true");
    console.log(tag.isFemale.toLowerCase() === "true");
    console.log(tag.isFemale.toLowerCase() == "true");
    */
    if (tag) {
      const species = tag.speciesTag;
      const result = interaction.client.LookupSpecies.lookup(species); //lookup(species);
      const colorRegion0 = interaction.client.LookupColor.lookup(tag.colorSet0);
      const colorRegion1 = interaction.client.LookupColor.lookup(tag.colorSet1);
      const colorRegion2 = interaction.client.LookupColor.lookup(tag.colorSet2);
      const colorRegion3 = interaction.client.LookupColor.lookup(tag.colorSet3);
      const colorRegion4 = interaction.client.LookupColor.lookup(tag.colorSet4);
      const colorRegion5 = interaction.client.LookupColor.lookup(tag.colorSet5);
      console.log(result);
      
      const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle(tag.name)
      .setURL(result[0])
      .setAuthor({ name: tag.imprinter ? tag.imprinter + '\'s imprinted ' + result[1] : tag.tamer ? tag.tamer + '\'s tamed ' + result[1] : result[1]/*, iconURL: result[2]*/ })
      //.setDescription('Level ' + tag.dinoLevel + ' ' + ((tag.isNeutered.toLowerCase() === "true") ? 'neutered ' : '') + ((tag.isFemale.toLowerCase() === "true") ? 'female :female_sign:' : 'male :male_sign:'))
      .setDescription('Level ' + tag.dinoLevel + ' ' + ((tag.isNeutered === "true" || tag.isNeutered === "True") ? 'neutered ' : '') + ((tag.isFemale === "true" || tag.isFemale === "True") ? 'female :female_sign:' : 'male :male_sign:'))
      .setThumbnail(result[2])
      .addFields(
        //{ name: 'Regular field title', value: 'Some value here' },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Health', value: tag.statHealth.toString(), inline: true },
        { name: 'Stamina', value: tag.statStamina.toString(), inline: true },
        //{ name: 'Melee', value: (tag.statMelee * 146.6720869051628).toFixed(1) + '%', inline: true },
        { name: 'Melee', value: (tag.statMelee * 1.0).toFixed(2), inline: true },
        { name: 'Weight', value: tag.statWeight.toString(), inline: true },
        { name: 'Oxygen', value: tag.statOxygen.toString(), inline: true },
        { name: 'Food', value: tag.statFood.toString(), inline: true },
        { name: 'Paternal Mutations', value: tag.mutationsMale.toString(), inline: true },
        { name: 'Maternal Mutations', value: tag.mutationsFemale.toString(), inline: true },
        { name: 'Color Regions', value: '0: ' + colorRegion0[1] + ' 1: ' + colorRegion1[1] + ' 2: ' + colorRegion2[1] + ' 3: ' + colorRegion3[1] + ' 4: ' + colorRegion4[1] + ' 5: ' + colorRegion5[1] },
        //{ name: 'Water', value: tag.statWater.toString(), inline: true },
        //{ name: 'Movement', value: tag.statMovement.toString(), inline: true }
        //{ name: 'Temperature', value: tag.statTemperature, inline: true },
        //{ name: 'Torpidity', value: tag.statTorpidity, inline: true }
        //
      )
      //.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
      .setImage(result[3])
      .setTimestamp()
      .setFooter({ text: interaction.user.globalName + '\'s ' + species, iconURL: interaction.user.displayAvatarURL() });
      //.setFooter({ text: 'Test footer', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

      return interaction.reply({ embeds: [exampleEmbed] });

      ///
      /*
        imprintingQuality: tagImprinting,
        mutationsMale: tagMutationsMale,
        mutationsFemale: tagMutationsFemale,
        babyAge: tagBabyAge,
        colorSet0: tagColor0,
        colorSet1: tagColor1,
        colorSet2: tagColor2,
        colorSet3: tagColor3,
        colorSet4: tagColor4,
        colorSet5: tagColor5,

        
      */
    }
    return interaction.reply('Could not find a dinosaur named: ' + tagName);
  }
}