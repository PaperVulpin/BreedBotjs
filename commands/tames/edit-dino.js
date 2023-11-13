const { SlashCommandBuilder } = require('discord.js');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const Sequelize = require('sequelize');

// This needs to be restructed, ask in fragments. Required details first, stats together, colors together, etc after.
// Ultimately though will make a command/event for reading and importing the .ini export file.
module.exports = {
  data: new SlashCommandBuilder()
    .setName('edit-dino')
    .setDescription('Edits a dinosaur in the database.')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('The name of the dinosaur to edit.')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('change-name')
        .setDescription('Edit the name of the dinosaur.'))
    .addStringOption(option =>
      option.setName('species')
      .setDescription('Edit the species of the dinosaur.'))
    .addBooleanOption(option =>
      option.setName('female')
      .setDescription('Edit Is the dinosaur female?'))
    .addBooleanOption(option =>
      option.setName('neutered')
      .setDescription('Edit Is the dinosaur neutered?'))
    .addStringOption(option =>
      option.setName('tamer')
      .setDescription('Edit The name of who tamed the dinosaur.'))
    .addStringOption(option =>
      option.setName('imprinter')
      .setDescription('Edit The name of who imprinted on the dinosaur.'))
    .addNumberOption(option =>
      option.setName('imprinting-quality')
      .setDescription('Edit The imprinting quality.'))
    .addIntegerOption(option =>
      option.setName('mutations-male')
      .setDescription('Edit The number of paternal mutations.'))
    .addIntegerOption(option =>
      option.setName('mutations-female')
      .setDescription('Edit The number of maternal mutations.'))
    .addNumberOption(option =>
      option.setName('baby-age')
      .setDescription('Edit Baby age, 0 = birth, 1 = adult.'))
    .addIntegerOption(option =>
      option.setName('level')
      .setDescription('Edit The tamed/birthed level of the dinosaur.'))
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
      .setDescription('Edit The maximum health value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('stamina')
      .setDescription('Edit The maximum stamina value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('torpidity')
      .setDescription('Edit The maximum torpidity value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('oxygen')
      .setDescription('Edit The maximum oxygen value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('food')
      .setDescription('Edit The maximum food value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('weight')
      .setDescription('Edit The maximum weight value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('melee')
      .setDescription('Edit The maximum melee value of the dinosaur when it was tamed/birthed.'))
    .addNumberOption(option =>
      option.setName('crafting')
      .setDescription('Edit The maximum crafting value of the dinosaur when it was tamed/birthed.'))
  ,
  async execute(interaction) { 
    /*
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
    
    const tagColor0 = interaction.options.getString('color-0');
    const tagColor1 = interaction.options.getString('color-1');
    const tagColor2 = interaction.options.getString('color-2');
    const tagColor3 = interaction.options.getString('color-3');
    const tagColor4 = interaction.options.getString('color-4');
    const tagColor5 = interaction.options.getString('color-5');
    
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
*/
    //ai
    const currentName = interaction.options.getString('name');
    const tag = await interaction.client.Tags.findOne({ where: {name: currentName } } );
    
    const tagName = (interaction.options.getString('change-name') === null ? tag.tagName : interaction.options.getString('change-name'));
    const tagSpecies = (interaction.options.getString('species') === null ? tag.species : interaction.options.getString('species'));
    const tagFemale = (interaction.options.getBoolean('female') === null ? tag.isFemale : interaction.options.getBoolean('female'));
    const tagNeutered = (interaction.options.getBoolean('neutered') === null ? tag.isNeutered : interaction.options.getBoolean('neutered'));
    const tagTamer = (interaction.options.getString('tamer') === null ? tag.tamer : interaction.options.getString('tamer'));
    const tagImprinter = (interaction.options.getString('imprinter') === null ? tag.imprinter : interaction.options.getString('imprinter'));
    const tagImprinting = (interaction.options.getNumber('imprinting-quality') === null ? tag.imprintingQuality : interaction.options.getNumber('imprinting-quality'));
    const tagMutationsMale = (interaction.options.getInteger('mutations-male') === null ? tag.mutationsMale : interaction.options.getInteger('mutations-male'));
    const tagMutationsFemale = (interaction.options.getInteger('mutations-female') === null ? tag.mutationsFemale : interaction.options.getInteger('mutations-female'));
    const tagBabyAge = (interaction.options.getNumber('baby-age') === null ? tag.babyAge : interaction.options.getNumber('baby-age'));
    const tagLevel = (interaction.options.getInteger('level') === null ? tag.level : interaction.options.getInteger('level'));
    const tagHealth = (interaction.options.getNumber('health') === null ? tag.health : interaction.options.getNumber('health'));
    const tagStamina = (interaction.options.getNumber('stamina') === null ? tag.stamina : interaction.options.getNumber('stamina'));
    const tagTorpidity = (interaction.options.getNumber('torpidity') === null ? tag.torpidity : interaction.options.getNumber('torpidity'));
    const tagOxygen = (interaction.options.getNumber('oxygen') === null ? tag.oxygen : interaction.options.getNumber('oxygen'));
    const tagFood = (interaction.options.getNumber('food') === null ? tag.food : interaction.options.getNumber('food'));
    const tagWeight = (interaction.options.getNumber('weight') === null ? tag.weight : interaction.options.getNumber('weight'));

    try {
      const updatedTag = await interaction.client.Tags.update({ 
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
            statHealth: tagHealth,
            statStamina: tagStamina,
            statTorpidity: tagTorpidity,
            statOxygen: tagOxygen,
            statFood: tagFood,
            statWeight: tagWeight
      }, { where: {name: currentName } });
      //return interaction.reply(`Dino ${currentName} editted. Values changed:` + (interaction.options.getString('change-name') === null ? '' : '\nName changed to : ' + interaction.options.getString('change-name')) + (interaction.options.getString('species') === null ? '' : 'Species changed to : ' + interaction.options.getString('species')) ;
      
      return interaction.reply(`Dino ${currentName} editted, values changed:` + 
	(interaction.options.getString('change-name') === null ? '' : '\nName changed to : ' + interaction.options.getString('change-name')) + 
	(interaction.options.getString('species') === null ? '' : 'Species changed to : ' + interaction.options.getString('species')) +
	(interaction.options.getBoolean('female') === null ? '' : '\nIs female changed to : ' + interaction.options.getBoolean('female')) +
	(interaction.options.getBoolean('neutered') === null ? '' : '\nIs neutered changed to : ' + interaction.options.getBoolean('neutered')) +
	(interaction.options.getString('tamer') === null ? '' : '\nTamer changed to : ' + interaction.options.getString('tamer')) +
	(interaction.options.getString('imprinter') === null ? '' : '\nImprinter changed to : ' + interaction.options.getString('imprinter')) +
	(interaction.options.getNumber('imprinting-quality') === null ? '' : '\nImprinting quality changed to : ' + interaction.options.getNumber('imprinting-quality')) +
	(interaction.options.getInteger('mutations-male') === null ? '' : '\nPaternal mutations changed to : ' + interaction.options.getInteger('mutations-male')) +
	(interaction.options.getInteger('mutations-female') === null ? '' : '\nMaternal mutations changed to : ' + interaction.options.getInteger('mutations-female')) +
	(interaction.options.getNumber('baby-age') === null ? '' : '\nBaby age changed to : ' + interaction.options.getNumber('baby-age')) +
	(interaction.options.getInteger('level') === null ? '' : '\nLevel changed to : ' + interaction.options.getInteger('level')) +
	(interaction.options.getNumber('health') === null ? '' : '\nHealth changed to : ' + interaction.options.getNumber('health')) +
	(interaction.options.getNumber('stamina') === null ? '' : '\nStamina changed to : ' + interaction.options.getNumber('stamina')) +
	(interaction.options.getNumber('torpidity') === null ? '' : '\nTorpidity changed to : ' + interaction.options.getNumber('torpidity')) +
	(interaction.options.getNumber('oxygen') === null ? '' : '\nOxygen changed to : ' + interaction.options.getNumber('oxygen')) +
	(interaction.options.getNumber('food') === null ? '' : '\nFood changed to : ' + interaction.options.getNumber('food')) +
	(interaction.options.getNumber('weight') === null ? '' : '\nWeight changed to : ' + interaction.options.getNumber('weight'))
);
    }
    catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return interaction.reply('That dino name already exists.');
      }
      console.log('add-dino-tag: ' + error);
      return interaction.reply('Something went wrong with editting a dino.');
    }

    //return interaction.reply(`Dino ${updatedTag.name} editted.`);
    //
    
  },
};