//const { Client } = require('discord.js');
const { Client, Events, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    //console.log('Client: ' + client);
    console.log('Message: ' + message);
    console.log('Message content:' + message.content);
    console.log('Message channel:' + message.channel);
    console.log('Message author:' + message.author);
    console.log('Message embeds:' + message.embeds);
    console.log('Message attachments:' + message.attachments);
    console.log('Message attachment array size:' + message.attachments.size);
    console.log('Message components:' + message.components);
    
    var tagName, tagSpecies, tagFemale, tagLevel, tagNeutered, tagTamer, tagImprinter, tagImprinting, tagMutationsMale, 
tagMutationsFemale, tagBabyAge, tagColor0, tagColor1, tagColor2, tagColor3, tagColor4, tagColor5,
tagHealth, tagStamina, tagTorpidity, tagOxygen, tagFood, tagWater, tagTemperature, tagWeight,
tagMelee, tagMovement, tagFortitude, tagCrafting, dinoClass, result = "";
    
    if (message.author.bot) return;

    // get the file's URL
    const file = message.attachments.first()?.url;
    //if (!file) return;
    console.log('File : ' + file);
    console.log('Attachments: ' + message.attachments);
    if (!file) return console.log('No attached file found');
    if (!(file.includes('DinoExport') && file.includes('.ini'))) return console.log('Not a dino export.');

    const res = await axios.get(file).catch(e => console.error);
    
    var dataImport = res.data;

    console.log('res: ' + res);
    console.log('dataImport: ' + dataImport);    
    
    var lines = dataImport.split('\n');

    //console.log('DataImport: ', dataImport);
    //console.log('Lines : ' + lines);
    

    lines.forEach(line => {
      if (line.includes('TamedName')) {
        tagName = line.split('=')[1].trim();
        console.log('Tag name: ' + tagName);
        // Do something with tagName
      }
      if (line.includes('DinoClass')) {
        dinoClass = line.split('=')[1].trim();
        console.log('Dino class: ' + dinoClass);
        // Do something with tagName
      }
      if (line.includes('DinoNameTag')) {
        tagSpecies = line.split('=')[1].trim();
        if (dinoClass.includes('Bionic')) {
          tagSpecies = 'Tek ' + tagSpecies;
        }
        else if (dinoClass.includes('Crystal') && dinoClass.includes('Blood')) {
          tagSpecies = 'Blood Crystal ' + tagSpecies;
        }
        else if (dinoClass.includes('Crystal') && dinoClass.includes('Ember')) {
          tagSpecies = 'Ember Crystal ' + tagSpecies;
        }
        else if (dinoClass.includes('Crystal') && dinoClass.includes('WS_C')) {
          tagSpecies = 'Tropical Crystal ' + tagSpecies;
        }
        else if (dinoClass.includes('Tek') && dinoClass.includes('Wyvern')) { //Need to see this tested!!
          tagSpecies = 'Tek ' + tagSpecies;
        }
        console.log('Tag species: ' + tagSpecies);
        // Do something with tagSpecies
      }
      if (line.includes('CharacterLevel')) {
        tagLevel = line.split('=')[1].trim();
        console.log('Tag level: ' + tagLevel);
        // Do something with tagSpecies
      }
     // lines.forEach(line => {
      if (line.includes('IsFemale')) {
        tagFemale = line.split('=')[1].trim();
        console.log('Is female: ' + tagFemale);
        // Do something with tagFemale
      }
      if (line.includes('bNeutered')) {
        tagNeutered = line.split('=')[1].trim();
        console.log('Is neutered: ' + tagNeutered);
        // Do something with tagNeutered
      }
      if (line.includes('TamerString')) {
        tagTamer = line.split('=')[1].trim();
        console.log('Tamer: ' + tagTamer);
        // Do something with tagTamer
      }
      if (line.includes('ImprinterName')) {
        tagImprinter = line.split('=')[1].trim();
        console.log('Imprinter: ' + tagImprinter);
        // Do something with tagImprinter
      }
      if (line.includes('ImprintingQuality')) {
        tagImprinting = line.split('=')[1].trim();
        console.log('Imprinting quality: ' + tagImprinting);
        // Do something with tagImprinting
      }
      if (line.includes('MutationsMale')) {
        tagMutationsMale = line.split('=')[1].trim();
        console.log('Mutations (Male): ' + tagMutationsMale);
        // Do something with tagMutationsMale
      }
      if (line.includes('MutationsFemale')) {
        tagMutationsFemale = line.split('=')[1].trim();
        console.log('Mutations (Female): ' + tagMutationsFemale);
        // Do something with tagMutationsFemale
      }
      if (line.includes('BabyAge')) {
        tagBabyAge = line.split('=')[1].trim();
        console.log('Baby age: ' + tagBabyAge);
        // Do something with tagBabyAge
      }
      if (line.includes('ColorSet[0]')) {
        tagColor0 = line.split(']=')[1].trim();
        console.log('Color Set 0: ' + tagColor0);
        // Do something with tagColor0
      }
      if (line.includes('ColorSet[1]')) {
        tagColor1 = line.split(']=')[1].trim();
        console.log('Color Set 1: ' + tagColor1);
        // Do something with tagColor1
      }
      if (line.includes('ColorSet[2]')) {
        tagColor2 = line.split(']=')[1].trim();
        console.log('Color Set 2: ' + tagColor2);
        // Do something with tagColor2
      }
      if (line.includes('ColorSet[3]')) {
        tagColor3 = line.split(']=')[1].trim();
        console.log('Color Set 3: ' + tagColor3);
        // Do something with tagColor3
      }
      if (line.includes('ColorSet[4]')) {
        tagColor4 = line.split(']=')[1].trim();
        console.log('Color Set 4: ' + tagColor4);
        // Do something with tagColor4
      }
      if (line.includes('ColorSet[5]')) {
        tagColor5 = line.split(']=')[1].trim();
        console.log('Color Set 5: ' + tagColor5);
        // Do something with tagColor5
      }
      if (line.includes('Health')) {
        tagHealth = line.split('=')[1].trim();
        console.log('Stat Health: ' + tagHealth);
        // Do something with tagHealth
      }
      if (line.includes('Stamina')) {
        tagStamina = line.split('=')[1].trim();
        console.log('Stat Stamina: ' + tagStamina);
        // Do something with tagStamina
      }
      if (line.includes('Torpidity')) {
        tagTorpidity = line.split('=')[1].trim();
        console.log('Stat Torpidity: ' + tagTorpidity);
        // Do something with tagTorpidity
      }
      if (line.includes('Oxygen')) {
        tagOxygen = line.split('=')[1].trim();
        console.log('Stat Oxygen: ' + tagOxygen);
        // Do something with tagOxygen
      }
      if (line.includes('food') || line.includes('Food')) {
        tagFood = line.split('=')[1].trim();
        console.log('Stat Food: ' + tagFood);
        // Do something with tagFood
      }
      if (line.includes('Water')) {
        tagWater = line.split('=')[1].trim();
        console.log('Stat Water: ' + tagWater);
        // Do something with tagWater
      }
      if (line.includes('Temperature')) {
        tagTemperature = line.split('=')[1].trim();
        console.log('Stat Temperature: ' + tagTemperature);
        // Do something with tagTemperature
      }
      if (line.includes('Weight')) {
        tagWeight = line.split('=')[1].trim();
        console.log('Stat Weight: ' + tagWeight);
        // Do something with tagWeight
      }
      if (line.includes('Melee')) {
        tagMelee = line.split('=')[1].trim();
        console.log('Stat Melee: ' + tagMelee);
        // Do something with tagMelee
      }
      if (line.includes('Movement')) {
        tagMovement = line.split('=')[1].trim();
        console.log('Stat Movement: ' + tagMovement);
        // Do something with tagMovement
      }
      if (line.includes('Fortitude')) {
        tagFortitude = line.split('=')[1].trim();
        console.log('Stat Fortitude: ' + tagFortitude);
        // Do something with tagFortitude
      }
      if (line.includes('Crafting')) {
        tagCrafting = line.split('=')[1].trim();
        console.log('Stat Crafting: ' + tagCrafting);
        // Do something with tagCrafting
      }
    });


    
    //console.log('res: ', dataImport);
    //console.log(message.client);

    
    
    //

    try {   
      const tag = await message.client.Tags.create({
        name: tagName,
        speciesTag: tagSpecies,
        isFemale: tagFemale,
        isNeutered: tagNeutered,
        tamer: tagTamer,
        imprinter: tagImprinter,
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
      });
      const species = tag.speciesTag;
      result = message.client.LookupSpecies.lookup(species); //lookup(species);
      message.delete();
      
      
      console.log(result);

      const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('Dinosaur imported: ' + tag.name)
      .setURL(result[0])
      .setAuthor({ name: tag.imprinter ? tag.imprinter + '\'s imprinted ' + result[1] : tag.tamer ? tag.tamer + '\'s tamed ' + result[1] : result[1]/*, iconURL: result[2]*/ })
      .setDescription('Level ' + tag.dinoLevel + ' ' + ((tag.isNeutered.toLowerCase() === "true") ? 'neutered ' : '') + ((tag.isFemale.toLowerCase() === "true") ? 'female :female_sign:' : 'male :male_sign:'))
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
        //{ name: 'Water', value: tag.statWater.toString(), inline: true },
        //{ name: 'Movement', value: tag.statMovement.toString(), inline: true }
        //{ name: 'Temperature', value: tag.statTemperature, inline: true },
        //{ name: 'Torpidity', value: tag.statTorpidity, inline: true }
        //
      )
      //.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
      .setImage(result[3])
      .setTimestamp()
      .setFooter({ text: 'Test footer', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

      //return interaction.reply({ embeds: [exampleEmbed] });
      return message.channel.send({ embeds: [exampleEmbed] });
      //return message.channel.send(`Dinosaur imported: ` + tagName + " the level " + tagLevel + " " + tagSpecies);
    }
    catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return message.channel.send('That dino name (' + tagName + ') already exists.');
      }
      console.log('add-dino-tag: ' + error);
      if (result === 'Unknown species.'){
        console.log('Success!');
        message.client.Tags.destroy({ where: {name: tagName } });
        return message.channel.send('Something went wrong with adding a dinosaur. (' + tagSpecies + ' was not found in the species-lookup, either not added yet or not matching the DinoNameTag in the export .ini.)');
      }
      return message.channel.send('Something went wrong with adding a dinosaur.');
    }
  }
}