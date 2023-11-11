const keep_alive = require("./keep_alive.js");
const lookup_species = require("./species_lookup.js");
const fs = require('node:fs');
const Sequelize = require('sequelize');
const path = require('node:path');
//const { Configuration, OpenAIApi, OpenAI } = require("openai");
/*
import OpenAI from 'openai';

const AIconfig = new OpenAI({
  organization: "org-Zq5p0F4tp2gpe3q2uFBUnHMB",
  apikey: process.env['openai_token'],
});

const openai = new OpenAIApi(AIconfig);
*/

//const fetch = require('node-fetch');

//import keep_alive from "./keep_alive.js";
/* If I switch the type: module
import fs from "node:fs";
import Sequelize from "sequelize";
import path from "node:path";
import fetch from "node-fetch";
import pkg from 'discord.js';
const { Client, Collection, Events, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, SlashCommandBuilder } = pkg;
*/

//import { Client, Collection, Events, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, SlashCommandBuilder } from 'discord.js';
const { Client, Collection, Events, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, SlashCommandBuilder} = require('discord.js');

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent,
                                      GatewayIntentBits.GuildMembers]});
client.cooldowns = new Collection();
client.commands = new Collection();

// Secret values
const token = process.env['token']
const CLIENT_ID = process.env['client_id']
const GUILD_ID = process.env['guild_id']
const ai_token = process.env['openai_token']

// Setting up database
const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false,
  // SQLite only
  storage: 'database.sqlite',
});

// Setting up tags in database
const Tags = sequelize.define('tags', {
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  speciesTag: Sequelize.STRING,
  isFemale: Sequelize.BOOLEAN,
  isNeutered: Sequelize.BOOLEAN,
  tamer: Sequelize.STRING,
  imprinter: Sequelize.STRING,
  imprintingQuality: Sequelize.DOUBLE,
  mutationsMale: Sequelize.INTEGER,
  mutationsFemale: Sequelize.INTEGER,
  babyAge: Sequelize.DOUBLE,
  dinoLevel: Sequelize.INTEGER,
  colorSet0: Sequelize.STRING,
  colorSet1: Sequelize.STRING,
  colorSet2: Sequelize.STRING,
  colorSet3: Sequelize.STRING,
  colorSet4: Sequelize.STRING,
  colorSet5: Sequelize.STRING,
  statHealth: Sequelize.DOUBLE,
  statStamina: Sequelize.DOUBLE,
  statTorpidity: Sequelize.DOUBLE,
  statOxygen: Sequelize.DOUBLE,
  statFood: Sequelize.DOUBLE,
  statWater: Sequelize.DOUBLE,
  statTemperature: Sequelize.DOUBLE,
  statWeight: Sequelize.DOUBLE,
  statMelee: Sequelize.DOUBLE,
  statMovement: Sequelize.DOUBLE,
  statFortitude: Sequelize.DOUBLE,
  statCrafting: Sequelize.DOUBLE
});

// Testing reminders
const Reminders = sequelize.define('reminders', {
  user: Sequelize.STRING,
  time: Sequelize.STRING,
  reminder: Sequelize.STRING
});
// End Reminders

client.Tags = Tags;
client.Fetch = fetch;
client.LookupSpecies = lookup_species;
//client.AI = openai;
//module.exports = { Tags };

//Reads the commands in the commands folder.
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
  }
}

//Reads the events in the events folder.
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.login(token);