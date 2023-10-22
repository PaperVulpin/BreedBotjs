const { SlashCommandBuilder } = require('discord.js');
const Sequelize = require('sequelize');

/*
// Setting up database
const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false,
  // SQLite only
  storage: 'database.sqlite',
});

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
*/
module.exports = {
  data: new SlashCommandBuilder()
    .setName('add-tame')
    .setDescription('Adds a tamed dinosaur.')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('The name of the dinosaur.')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('species')
      .setDescription('The species of the dinosaur.')
      .setRequired(true))
    .addBooleanOption(option =>
      option.setName('female')
      .setDescription('Is the dinosaur female?')
      .setRequired(true))
    .addBooleanOption(option =>
      option.setName('neutered')
      .setDescription('Is the dinosaur neutered?'))
    .addStringOption(option =>
      option.setName('tamer')
      .setDescription('The name of who tamed the dinosaur.'))
    .addStringOption(option =>
      option.setName('imprinter')
      .setDescription('The name of who imprinted on the dinosaur.'))
    .addNumberOption(option =>
      option.setName('imprinting-quality')
      .setDescription('The imprinting quality.'))
    .addIntegerOption(option =>
      option.setName('mutations-male')
      .setDescription('The number of paternal mutations.'))
    .addIntegerOption(option =>
      option.setName('mutations-female')
      .setDescription('The number of maternal mutations.'))
    .addNumberOption(option =>
      option.setName('baby-age')
      .setDescription('Baby age, 0 = birth, 1 = adult.'))
    .addIntegerOption(option =>
      option.setName('level')
      .setDescription('The tamed/birthed level of the dinosaur.'))
    /*
    .addStringOption(option =>
      option.setName('color-0')
      .setDescription('The string of the first dinosaur color.'))
    .addStringOption(option =>
      option.setName('color-1')
      .setDescription('The string of the second dinosaur color.'))
    .addStringOption(option =>
      option.setName('color-2')
      .setDescription('The string of the third dinosaur color.'))
    .addStringOption(option =>
      option.setName('color-3')
      .setDescription('The string of the fourth dinosaur color.'))
    .addStringOption(option =>
      option.setName('color-4')
      .setDescription('The string of the fifth dinosaur color.'))
    .addStringOption(option =>
      option.setName('color-5')
      .setDescription('The string of the sixth dinosaur color.'))
      */
    .addNumberOption(option =>
      option.setName('health')
      .setDescription('The maximum health value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('stamina')
      .setDescription('The maximum stamina value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('torpidity')
      .setDescription('The maximum torpidity value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('oxygen')
      .setDescription('The maximum oxygen value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('food')
      .setDescription('The maximum food value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('water')
      .setDescription('The maximum water value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('temperature')
      .setDescription('The maximum temperature value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('weight')
      .setDescription('The maximum weight value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('melee')
      .setDescription('The maximum melee value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('movement')
      .setDescription('The maximum movement value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('fortitude')
      .setDescription('The maximum fortitude value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('crafting')
      .setDescription('The maximum crafting value of the dinosaur when it was tamed/birthed.'))
  ,
  async execute(interaction) {
    const tagName = interaction.options.getString('name');
    const tagSpecies = interaction.options.getString('species');
    const tagFemale = interaction.options.getBoolean('female');
    const tagNeutered = interaction.options.getBoolean('neutered');
    const tagTamer = interaction.options.getString('tamer');
    const tagImprinter = interaction.options.getString('imprinter');
    const tagImprinting = interaction.options.getNumber('imprinting-quality');
    const tagMutationsMale = interaction.options.getInteger('mutations-male');
    const tagMutationsFemale = interaction.options.getInteger('mutations-female');
    const tagBabyAge = interaction.options.getNumber('baby-age');
    const tagLevel = interaction.options.getInteger('level');
    /*
    const tagColor0 = interaction.options.getString('color-0');
    const tagColor1 = interaction.options.getString('color-1');
    const tagColor2 = interaction.options.getString('color-2');
    const tagColor3 = interaction.options.getString('color-3');
    const tagColor4 = interaction.options.getString('color-4');
    const tagColor5 = interaction.options.getString('color-5');
    */
    const tagHealth = interaction.options.getNumber('health');
    const tagStamina = interaction.options.getNumber('stamina');
    const tagTorpidity = interaction.options.getNumber('torpidity');
    const tagOxygen = interaction.options.getNumber('oxygen');
    const tagFood = interaction.options.getNumber('food');
    const tagWater = interaction.options.getNumber('water');
    const tagTemperature = interaction.options.getNumber('temperature');
    const tagWeight = interaction.options.getNumber('weight');
    const tagMelee = interaction.options.getNumber('melee');
    const tagMovement = interaction.options.getNumber('movement');
    const tagFortitude = interaction.options.getNumber('fortitude');
    const tagCrafting = interaction.options.getNumber('crafting');
    
    try {
      // equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
      const tag = await Tags.create({
        name: tagName,
        //description: tagDescription,
        //username: interaction.user.username,
        //
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
        /*
        colorSet0: tagColor0,
        colorSet1: tagColor1,
        colorSet2: tagColor2,
        colorSet3: tagColor3,
        colorSet4: tagColor4,
        colorSet5: tagColor5,
        */
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
        statCrafting: tagCrafting
        //
      });

      return interaction.reply(`Dino ${tag.name} added.`);
    }
    catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return interaction.reply('That dino name already exists.');
      }
      console.log('add-dino-tag: ' + error);
      return interaction.reply('Something went wrong with adding a tag.');
    }
  },
};