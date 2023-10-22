const { Client, Events, GatewayIntentBits } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    const Tags = client.Tags;
    Tags.sync(); 
    
    console.log(`Ready! Logged in as ${client.user.tag}`);
    client.user.setActivity('Jiyao is a sexy bitch.');
  },
};