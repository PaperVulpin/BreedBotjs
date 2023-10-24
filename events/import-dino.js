//const { Client } = require('discord.js');
const { Client, Events, GatewayIntentBits } = require('discord.js');
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
    var tagName, tagSpecies, tagLevel = "";
    
    if (message.author.bot) return;

    // get the file's URL
    const file = message.attachments.first()?.url;
    console.log('File : ' + file);
    console.log('Attachments: ' + message.attachments);
    if (!file) return console.log('No attached file found');

    const res = await axios.get(file).catch(e => console.error);

    
    var dataImport = res.data;

    console.log('res: ' + res);
    //console.log('res: ' + JSON.stringify(res)); 
    
    //
    //
    console.log('dataImport: ' + dataImport);
    //dataImport2 = dataImport.toUnicodeString();
    //console.log('dataImport2: ' + dataImport2);
    
    //Attempted workaround to cut off the symbols.
    /*
    if (dataImport.includes("DinoID1")) {
      var dataImport2 = dataImport.split("DinoID1")[1].trim();
      console.log('DataImport split!');
    }
    */
    //console.log('Data after split: ' + dataImport2);
    
    
    var lines = dataImport.split('\n');

    //console.log('DataImport: ', dataImport);
    //console.log('Lines : ' + lines);
    

    lines.forEach(line => {
      if (line.includes('TamedName')) {
        tagName = line.split('=')[1].trim();
        console.log('Tag name: ' + tagName);
        // Do something with tagName
      }
      if (line.includes('DinoNameTag')) {
        tagSpecies = line.split('=')[1].trim();
        console.log('Tag species: ' + tagSpecies);
        // Do something with tagSpecies
      }
      if (line.includes('CharacterLevel')) {
        tagLevel = line.split('=')[1].trim();
        console.log('Tag level: ' + tagLevel);
        // Do something with tagSpecies
      }
    });


    
    //console.log('res: ', dataImport);
    //console.log(message.client);

    
    
    //

    try {   
      const tag = await message.client.Tags.create({
        name: tagName,
        speciesTag: tagSpecies,
        dinoLevel: tagLevel,
        /*
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
        */
        //
      });

      return message.channel.send(`Dinosaur imported: ` + tagName + " the level " + tagLevel + " " + tagSpecies);
    }
    catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return message.channel.send('That dino name already exists.');
      }
      console.log('add-dino-tag: ' + error);
      return message.channel.send('Something went wrong with adding a dinosaur.');
    }
  }
}