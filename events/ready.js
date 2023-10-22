const { Client, Events, GatewayIntentBits } = require('discord.js');



module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    //Tags.sync(); //This is causing an error. This should be inside the ready.js event, but it keeps saying Tags is undefined.
    console.log(`Ready! Logged in as ${client.user.tag}`);
    client.user.setActivity('Jiyao is a sexy bitch.');
  },
};