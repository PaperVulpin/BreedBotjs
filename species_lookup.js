module.exports = {
  // we need to declare the name first, then add the function
  lookup: function (species) { 
    
    switch (species) {
      //Dododex URL, species, small icon, image
      case 'DINO':
        return [ 'DODODEX', 'FULLDINONAME', 'SMALLICON' , 'IBB' ];
      case 'Archaeopteryx'://
        return [ 'https://www.dododex.com/taming/archaeopteryx', 'Archaeopteryx', 'https://arkids.net/image/creature/120/archaeopteryx.png' , 'https://i.ibb.co/tppCbRv/archaeopteryx.webp' ];
      case 'Argentavis'://
        return [ 'https://www.dododex.com/taming/argentavis', 'Argentavis', 'https://arkids.net/image/creature/120/argentavis.png' , 'https://i.ibb.co/YjMQ4dx/argentavis.webp' ];
      case 'Astrocetus'://
        return [ 'https://www.dododex.com/taming/astrocetus', 'Astrocetus', 'https://arkids.net/image/creature/120/astrocetus.png' , 'https://i.ibb.co/pj1Zznk/parasaur.webphttps://i.ibb.co/8BmygPC/astrocetus.webp' ];
      case 'Astrodelphis'://
        return [ 'https://www.dododex.com/taming/astrodelphis', 'Astrodelphis', 'https://arkids.net/image/creature/120/astrodelphis.png' , 'https://i.ibb.co/bLX3nk6/astrodelphis.webp' ];
      case 'Blood Crystal Wyvern':
        return [ 'https://www.dododex.com/taming/crystalwyvern', 'Blood Crystal Wyvern', 'https://arkids.net/image/creature/120/crystal-wyvern-blood.png' , 'https://i.ibb.co/v4wxQVx/crystalwyvern.webp' ];
      case 'Managarmr':
        return [ 'https://www.dododex.com/taming/magmasaur', 'Magmasaur', 'https://arkids.net/image/creature/120/magmasaur.png' , 'https://i.ibb.co/mRCcxw7/magmasaur.webp' ];
      case 'Para':
        return [ 'https://www.dododex.com/taming/parasaur', 'Parasaurolophus', 'https://arkids.net/image/creature/120/parasaurolophus.png' , 'https://i.ibb.co/pj1Zznk/parasaur.webp' ];
      case 'Ptera':
        return [ 'https://www.dododex.com/taming/pteranodon', 'Pteranodon', 'https://arkids.net/image/creature/120/pteranodon.png' , 'https://i.ibb.co/P98s8f4/pteranodon.webp' ];
      case 'Rex':
        return [ 'https://www.dododex.com/taming/rex', 'Rex', 'https://arkids.net/image/creature/120/rex.png' , 'https://i.ibb.co/5BJR32Q/rex.webp' ];
      case 'Tek Rex':
        return [ 'https://www.dododex.com/taming/rex', 'Tek Rex', 'https://arkids.net/image/creature/120/rex.png' , 'https://i.ibb.co/tzH9S5m/Tek-Rex-Paint-Region0.webp' ];
      case 'Turtle':
        return [ 'https://www.dododex.com/taming/carbonemys', 'Carbonemys', 'https://arkids.net/image/creature/120/carbonemys.png' , 'https://i.ibb.co/sbCTTzJ/carbonemys.webp' ];
      default:
        return 'Unknown species.';
    }
  }
  // here we can add more functions, divided by a comma
}

// if you want to export only one function
// declare it normally and then export it
//module.exports = lookup;