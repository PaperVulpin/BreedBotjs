//const { Client } = require('discord.js');
//const fetch = require('node-fetch');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

//const client = new Client();
/*
client.on('message', async (message) => {
  if (message.author.bot) return;

  // get the file's URL
  const file = message.attachments.first()?.url;
  if (!file) return console.log('No attached file found');

  try {
    message.channel.send('Reading the file! Fetching data...');

    // fetch the file from the external URL
    const response = await fetch(file);

    // if there was an error send a message with the status
    if (!response.ok)
      return message.channel.send(
        'There was an error with fetching the file:',
        response.statusText,
      );

    // take the response stream and read it to completion
    const text = await response.text();

    if (text) {
      message.channel.send(`\`\`\`${text}\`\`\``);
    }
  } catch (error) {
    console.log(error);
  }
});
*/



module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    //console.log('Client: ' + client);
    console.log('Message: ' + message);
    console.log('Message content:' + message.content);
    console.log('Message author:' + message.author);
    console.log('Message embeds:' + message.embeds);
    console.log('Message attachments:' + message.attachments);
    console.log('Message attachment array size:' + message.attachments.size);
    console.log('Message components:' + message.components);
    

    
    
    if (message.author.bot) return;

    // get the file's URL
    const file = message.attachments.first()?.url;
    console.log('File : ' + file);
    console.log('Attachments: ' + message.attachments);
    if (!file) return console.log('No attached file found');

    const res = await axios.get(file).catch(e => console.error);
    var dataImport = res.data; 
    console.log('res: ', dataImport);
    
    //const fetch = require("node-fetch");
/*
    try {
      message.channel.send('Reading the file! Fetching data...');

      // fetch the file from the external URL
      const response = await fetch(file);
      

      // if there was an error send a message with the status
      if (!response.ok)
        return message.channel.send(
          'There was an error with fetching the file:',
          response.statusText,
        );

      // take the response stream and read it to completion
      const text = await response.text();

      if (text) {
        message.channel.send(`\`\`\`${text}\`\`\``);
      }
    } catch (error) {
      console.log(error);
    }
    */
  },
};

/*
const { Client, Events, GatewayIntentBits } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(client, message) {
    if (message.author.bot) return;

    // get the file's URL
    const file = message.attachments.first()?.url;
    if (!file) return console.log('No attached file found');

    const fetch = require('node-fetch').default;

    try {
      message.channel.send('Reading the file! Fetching data...');

      // fetch the file from the external URL
      const response = await fetch(file);

      // if there was an error send a message with the status
      if (!response.ok)
        return message.channel.send(
          'There was an error with fetching the file:',
          response.statusText,
        );

      // take the response stream and read it to completion
      const text = await response.text();

      if (text) {
        message.channel.send(`\`\`\`${text}\`\`\``);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
*/