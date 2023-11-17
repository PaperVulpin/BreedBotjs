module.exports = {
  lookup: function (color) { 
    console.log("Color: " + color);
    switch (color) {
      //Copy/paste
      case 'XXX': //RGBA value, including parantheses
        return [ 'COLORNAME', 'COLOREMOJI', 'COLORID' ];
      // Colors Saved in Breed Bot - Dino Colors 1
      case '(R=1.000000,G=0.000000,B=0.000000,A=0.000000)':
        return [ 'Red', '<:Red:1174031795252117584>', '1' ];
      case '(R=0.000000,G=0.000000,B=1.000000,A=0.000000)':
        return [ 'Blue', '<:Blue:1174070009950130267>', '2' ];
      case '(R=0.000000,G=1.000000,B=0.000000,A=0.000000)':
        return [ 'Green', '<:Green:1174070057094103130>', '3' ];
      case '(R=1.000000,G=1.000000,B=0.000000,A=0.000000)':
        return [ 'Yellow', '<:Yellow:1174070076652134511>', '4' ];
      case '(R=0.000000,G=1.000000,B=1.000000,A=0.000000)':
        return [ 'Cyan', '<:Cyan:1174070093177692300>', '5' ];
      case '(R=1.000000,G=0.000000,B=1.000000,A=0.000000)':
        return [ 'Magenta', '<:Magenta:1174070123921944646>', '6' ];
      case '(R=0.532500,G=1.000000,B=0.500000,A=0.000000)':
        return [ 'Light Green', '<:LightGreen:1174070147456188518>', '7' ];
      case '(R=0.581026,G=0.600000,B=0.594170,A=0.000000)':
        return [ 'Light Grey', '<:LightGrey:1174070170256408656>', '8' ];
      case '(R=0.190000,G=0.137402,B=0.098800,A=0.000000)':
        return [ 'Light Brown', '<:LightBrown:1174070206478434347>', '9' ];
      case '(R=1.000000,G=0.462179,B=0.150000,A=0.000000)':
        return [ 'Light Orange', '<:LightOrange:1174070240703938582>', '10' ];
      case '(R=1.000000,G=0.951947,B=0.260000,A=0.000000)':
        return [ 'Light Yellow', '<:LightYellow:1174070272840716318>', '11' ];
      case '(R=1.000000,G=0.180907,B=0.150000,A=0.000000)':
        return [ 'Light Red', '<:LightRed:1174070303182307440>', '12' ];
      case '(R=0.200000,G=0.200000,B=0.200000,A=0.000000)':
        return [ 'Dark Grey', '<:DarkGrey:1174070387944980481>', '13' ];
      case '(R=0.040000,G=0.040000,B=0.040000,A=0.000000)':
        return [ 'Black', '<:Black:1174070419708452955>', '14' ];
      case '(R=0.100000,G=0.038777,B=0.019477,A=0.000000)':
        return [ 'Brown', '<:Brown:1174070488440520855>', '15' ];
      case '(R=0.012339,G=0.065000,B=0.000000,A=0.000000)':
        return [ 'Dark Green', '<:DarkGreen:1174070505410670672>', '16' ];
      case '(R=0.225000,G=0.011337,B=0.005625,A=0.000000)':
        return [ 'Dark Red', '<:DarkRed:1174070522410184855>', '17' ];
      case '(R=1.000000,G=1.000000,B=1.000000,A=0.000000)':
        return [ 'White', '<:White:1174070541234212894>', '18' ];
      case '(R=1.000000,G=0.400000,B=0.400000,A=0.000000)':
        return [ 'Dino Light Red', '<:DinoLightRed:1174070612902289460>', '19' ];
      case '(R=0.100000,G=0.020000,B=0.020000,A=0.000000)':
        return [ 'Dino Dark Red', '<:DinoDarkRed:1174070648096698511>', '20' ];
      case '(R=1.000000,G=0.475000,B=0.300000,A=0.000000)':
          return [ 'Dino Light Orange', '<:DinoLightOrange:1174070842842427533>', '21' ];
      case '(R=0.250000,G=0.084211,B=0.025000,A=0.000000)':
        return [ 'Dino Dark Orange', '<:DinoDarkOrange:1174070887092342794>', '22' ];
      case '(R=0.600000,G=0.600000,B=0.360000,A=0.000000)':
        return [ 'Dino Light Yellow', '<:DinoLightYellow:1174070917454905444>', '23' ];
      case '(R=0.300000,G=0.300000,B=0.150000,A=0.000000)':
        return [ 'Dino Dark Yellow', '<:DinoDarkYellow:1174070941127544852>', '24' ];
      case '(R=0.750000,G=1.000000,B=0.750000,A=0.000000)':
        return [ 'Dino Light Green', '<:DinoLightGreen:1174070978335227966>', '25' ];
      case '(R=0.195000,G=0.300000,B=0.195000,A=0.000000)':
        return [ 'Dino Medium Green', '<:DinoMediumGreen:1174071015991685250>', '26' ];
      case '(R=0.012500,G=0.050000,B=0.012500,A=0.000000)':
        return [ 'Dino Dark Green', '<:DinoDarkGreen:1174071028847226920>', '27' ];
      case '(R=0.700000,G=0.749999,B=1.000000,A=0.000000)':
        return [ 'Dino Light Blue', '<:DinoLightBlue:1174071055116144710>', '28' ];
      case '(R=0.037500,G=0.052084,B=0.125000,A=0.000000)':
        return [ 'Dino Dark Blue', '<:DinoDarkBlue:1174071107465265243>', '29' ];
      case '(R=0.780000,G=0.700000,B=1.000000,A=0.000000)':
        return [ 'Dino Light Purple', '<:DinoLightPurple:1174071141560746157>', '30' ];
      case '(R=0.048667,G=0.030000,B=0.100000,A=0.000000)':
        return [ 'Dino Dark Purple', '<:DinoDarkPurple:1174071172435038389>', '31' ];
      case '(R=1.000000,G=0.750000,B=0.500000,A=0.000000)':
        return [ 'Dino Light Brown', '<:DinoLightBrown:1174071272158810123>', '32' ];
      case '(R=0.300000,G=0.240000,B=0.180000,A=0.000000)':
        return [ 'Dino Medium Brown', '<:DinoMediumBrown:1174071291238695012>', '33' ];
      case '(R=0.100000,G=0.075000,B=0.050000,A=0.000000)':
        return [ 'Dino Dark Brown', '<:DinoDarkBrown:1174071325476782181>', '34' ];
      case '(R=0.100000,G=0.100000,B=0.100000,A=0.000000)':
        return [ 'Dino Darker Grey', '<:DinoDarkerGrey:1174071351150125169>', '35' ];
      case '(R=1.750000,G=1.750000,B=1.750000,A=0.000000)':
        return [ 'Dino Albino', '<:DinoAlbino:1174072155726696458>', '36' ];
      case '(R=0.480000,G=0.310437,B=0.231047,A=1.000000)':
        return [ 'BigFoot0', '<:BigFoot0:1174072168808730665>', '37' ];
      case '(R=0.825000,G=0.704920,B=0.668250,A=1.000000)':
        return [ 'BigFoot4', '<:BigFoot4:1174072179579682908>', '38' ];
      case '(R=0.635000,G=0.393327,B=0.301625,A=1.000000)':
        return [ 'BigFoot5', '<:BigFoot5:1174072191978053782>', '39' ];
      case '(R=0.555000,G=0.459457,B=0.352425,A=1.000000)':
        return [ 'WolfFur', '<:WolfFur:1174072209061445673>', '40' ];
      case '(R=0.250000,G=0.185219,B=0.133750,A=1.000000)':
        return [ 'DarkWolfFur', '<:DarkWolfFur:1174072240766210048>', '41' ];
      case '(R=0.360000,G=0.133418,B=0.067490,A=0.000000)':
        return [ 'DragonBase0', '<:DragonBase0:1174072298374975599>', '42' ];
      case '(R=0.605000,G=0.193228,B=0.090750,A=0.000000)':
        return [ 'DragonBase1', '<:DragonBase1:1174072314254610453>', '43' ];
      case '(R=0.510000,G=0.077267,B=0.000000,A=0.000000)':
        return [ 'DragonFire', '<:DragonFire:1174072328141942846>', '44' ];
      case '(R=0.192700,G=0.235000,B=0.150400,A=0.000000)':
        return [ 'DragonGreen0', '<:DragonGreen0:1174072343144960001>', '45' ];
      case '(R=0.285735,G=0.340000,B=0.192384,A=0.000000)':
        return [ 'DragonGreen1', '<:DragonGreen1:1174072356482855024>', '46' ];
      case '(R=0.385000,G=0.375473,B=0.263252,A=0.000000)':
        return [ 'DragonGreen2', '<:DragonGreen2:1174072368629547039>', '47' ];
      case '(R=0.176800,G=0.296233,B=0.340000,A=0.000000)':
        return [ 'DragonGreen3', '<:DragonGreen3:1174072393275289631>', '48' ];
      case '(R=0.190928,G=0.175266,B=0.310000,A=1.000000)':
        return [ 'WyvernPurple0', '<:WyvernPurple0:1174072420987052082>', '49' ];
      case '(R=0.441761,G=0.369150,B=0.535000,A=0.000000)':
        return [ 'WyvernPurple1', '<:WyvernPurple1:1174072435268661288>', '50' ];
      // Colors Saved in Breed Bot - Dino Colors 2
      case '(R=0.122450,G=0.223903,B=0.395000,A=0.000000)':
        return [ 'WyvernBlue0', '<:WyvernBlue0:1174078480716156928>', '51' ];
      case '(R=0.063000,G=0.106552,B=0.180000,A=0.000000)':
        return [ 'WyvernBlue1', '<:WyvernBlue1:1174078495090032831>', '52' ];
      case '(R=0.115500,G=0.379603,B=0.825000,A=0.000000)':
        return [ 'Dino Medium Blue', '<:DinoMediumBlue:1174078545027399710>', '53' ];
      case '(R=0.056525,G=0.138854,B=0.665000,A=0.000000)':
        return [ 'Dino Deep Blue', '<:DinoDeepBlue:1174078569819938846>', '54' ];
      case '(R=0.850000,G=0.850000,B=0.850000,A=0.000000)':
        return [ 'NearWhite', '<:NearWhite:1174078597519114360>', '55' ];
      case '(R=0.080000,G=0.080000,B=0.080000,A=0.000000)':
        return [ 'NearBlack', '<:NearBlack:1174078621456011295>', '56' ];
      case '(R=0.005605,G=0.056128,B=0.057805,A=0.000000)':
        return [ 'DarkTurquoise', '<:DarkTurquoise:1174078647297114122>', '57' ];
      case '(R=0.000000,G=0.165132,B=0.116971,A=0.000000)':
        return [ 'MediumTurquoise', '<:MediumTurquoise:1174078679001874554>', '58' ];
      case '(R=0.000000,G=0.564712,B=0.412543,A=0.000000)':
        return [ 'Turquoise', '<:Turquoise:1174078720391270452>', '59' ];
      case '(R=0.048172,G=0.099899,B=0.070360,A=0.000000)':
        return [ 'GreenSlate', '<:GreenSlate:1174078907792765038>', '60' ];
      case '(R=0.045186,G=0.076185,B=0.048172,A=0.000000)':
        return [ 'Sage', '<:Sage:1174078935814914118>', '61' ];
      case '(R=0.040915,G=0.036889,B=0.035601,A=0.000000)':
        return [ 'DarkWarmGray', '<:DarkWarmGray:1174078959261061141>', '62' ];
      case '(R=0.097587,G=0.088656,B=0.086500,A=0.000000)':
        return [ 'MediumWarmGray', '<:MediumWarmGray:1174079326967316571>', '63' ];
      case '(R=0.332452,G=0.291771,B=0.283149,A=0.000000)':
        return [ 'LightWarmGray', '<:LightWarmGray:1174079355245297795>', '64' ];
      case '(R=0.082283,G=0.104616,B=0.093059,A=0.000000)':
        return [ 'DarkCement', '<:DarkCement:1174079392310378607>', '65' ];
      case '(R=0.258183,G=0.361307,B=0.309469,A=0.000000)':
        return [ 'LightCement', '<:LightCement:1174079421729218571>', '66' ];
      case '(R=0.806952,G=0.439657,B=1.000000,A=0.000000)':
        return [ 'LightPink', '<:LightPink:1174079446333014156>', '67' ];
      case '(R=1.000000,G=0.002732,B=0.327778,A=0.000000)':
        return [ 'DeepPink', '<:DeepPink:1174079463571603598>', '68' ];
      case '(R=0.174647,G=0.000000,B=0.059511,A=0.000000)':
        return [ 'DarkViolet', '<:DarkViolet:1174079484165640253>', '69' ];
      case '(R=0.479320,G=0.000000,B=0.051269,A=0.000000)':
        return [ 'DarkMagenta', '<:DarkMagenta:1174079499667771402>', '70' ];
      case '(R=0.212231,G=0.029557,B=0.009134,A=0.000000)':
        return [ 'BurntSienna', '<:BurntSienna:1174079517334192188>', '71' ];
      case '(R=0.401978,G=0.026241,B=0.000000,A=0.000000)':
        return [ 'MediumAutumn', '<:MediumAutumn:1174079540214116455>', '72' ];
      case '(R=0.863157,G=0.027321,B=0.000000,A=0.000000)':
        return [ 'Vermillion', '<:Vermillion:1174079566747271178>', '73' ];
      case '(R=1.000000,G=0.097587,B=0.030713,A=0.000000)':
        return [ 'Coral', '<:Coral:1174079583620976691>', '74' ];
      case '(R=1.000000,G=0.215861,B=0.000000,A=0.000000)':
        return [ 'Orange', '<:Orange:1174079604483440790>', '75' ];
      case '(R=1.000000,G=0.391573,B=0.039546,A=0.000000)':
        return [ 'Peach', '<:Peach:1174079624003735625>', '76' ];
      case '(R=0.428691,G=0.165132,B=0.000000,A=0.000000)':
        return [ 'LightAutumn', '<:LightAutumn:1174079660213145630>', '77' ];
      case '(R=0.300544,G=0.300544,B=0.016807,A=0.000000)':
        return [ 'Mustard', '<:Mustard:1174079679980908565>', '78' ];
      case '(R=0.005000,G=0.005000,B=0.005000,A=0.000000)':
        return [ 'ActualBlack', '<:ActualBlack:1174079693461405699>', '79' ];
      case '(R=0.006049,G=0.008568,B=0.033105,A=0.000000)':
        return [ 'MidnightBlue', '<:MidnightBlue:1174079833710542898>', '80' ];
      case '(R=0.004391,G=0.020289,B=0.038204,A=0.000000)':
        return [ 'DarkBlue', '<:DarkBlue:1174079872927289354>', '81' ];
      case '(R=0.026241,G=0.014444,B=0.027321,A=0.000000)':
        return [ 'BlackSands', '<:BlackSands:1174079889939382432>', '82' ];
      case '(R=0.396755,G=1.000000,B=0.054480,A=0.000000)':
        return [ 'LemonLime', '<:LemonLime:1174079910688587836>', '83' ];
      case '(R=0.035601,G=0.814847,B=0.238398,A=0.000000)':
        return [ 'Mint', '<:Mint:1174079931249070160>', '84' ];
      case '(R=0.000000,G=0.250158,B=0.048172,A=0.000000)':
        return [ 'Jade', '<:Jade:1174079954410033163>', '85' ];
      case '(R=0.002125,G=0.088656,B=0.023153,A=0.000000)':
        return [ 'PineGreen', '<:PineGreen:1174079975767416883>', '86' ];
      case '(R=0.000000,G=0.104616,B=0.056128,A=0.000000)':
        return [ 'SpruceGreen', '<:SpruceGreen:1174079994302058587>', '87' ];
      case '(R=0.104616,G=0.313989,B=0.014444,A=0.000000)':
        return [ 'LeafGreen', '<:LeafGreen:1174080018779996231>', '88' ];
      case '(R=0.111932,G=0.016807,B=0.114435,A=0.000000)':
        return [ 'DarkLavender', '<:DarkLavender:1174080040984653925>', '89' ];
      case '(R=0.238398,G=0.031896,B=0.246201,A=0.000000)':
        return [ 'MediumLavender', '<:MediumLavender:1174080059015966730>', '90' ];
      case '(R=0.514918,G=0.187821,B=0.520996,A=0.000000)':
        return [ 'Lavender', '<:Lavender:1174080078435602502>', '91' ];
      case '(R=0.001821,G=0.048172,B=0.066626,A=0.000000)':
        return [ 'DarkTeal', '<:DarkTeal:1174080095955197995>', '92' ];
      case '(R=0.002428,G=0.088656,B=0.124772,A=0.000000)':
        return [ 'MediumTeal', '<:MediumTeal:1174080115400003736>', '93' ];
      case '(R=0.003677,G=0.234551,B=0.337164,A=0.000000)':
        return [ 'Teal', '<:Teal:1174080631995650080>', '94' ];
      case '(R=0.226966,G=0.391573,B=1.000000,A=0.000000)':
        return [ 'PowderBlue', '<:PowderBlue:1174080656339378247>', '95' ];
      case '(R=0.417885,G=0.822786,B=1.000000,A=0.000000)':
        return [ 'Glacial', '<:Glacial:1174080677621268582>', '96' ];
      case '(R=0.078187,G=0.080220,B=0.005605,A=0.000000)':
        return [ 'Cammo', '<:Cammo:1174080694562070548>', '97' ];
      case '(R=0.184475,G=0.158961,B=0.046665,A=0.000000)':
        return [ 'DryMoss', '<:DryMoss:1174080716871565413>', '98' ];
      case '(R=0.533276,G=0.514918,B=0.111932,A=0.000000)':
        return [ 'Custard', '<:Custard:1174080729760682044>', '99' ];
      case '(R=0.904661,G=1.000000,B=0.533276,A=0.000000)':
        return [ 'Cream', '<:Cream:1174094010428694538>', '100' ];
      // Mutated Colors Manually Found and Added
      /*
      case 'XXX':
        return [ 'COLORNAME', 'COLOREMOJI', 'N/A' ];
      */
      case '(R=0.033105,G=0.000000,B=0.033105,A=1.000000)':
        return [ 'MutatedPurple1', '<:MutatedPurple1:1174260997846994944>', 'N/A' ];
      case '(R=0.450786,G=0.693872,B=0.266356,A=1.000000)':
        return [ 'MutatedGreen1', '<:MutatedGreen1:1174261017501503509>', 'N/A' ];
      case '(R=0.693872,G=0.266356,B=0.266356,A=1.000000)':
        return [ 'MutatedPink1', '<:MutatedPink1:1174427639512043611>', 'N/A' ];
      case '(R=0.791298,G=0.584079,B=0.171441,A=1.000000)':
        return [ 'MutatedYellow1', '<:MutatedYellow1:1174429952179961866>' , 'N/A' ];
      case '(R=1.000000,G=0.485150,B=0.171441,A=1.000000)':
        return [ 'MutatedOrange1', '<:MutatedOrange1:1174469303261728830>', 'N/A' ];
      case '(R=1.000000,G=0.171441,B=0.171441,A=1.000000)':
        return [ 'MutatedPink2', '<:MutatedPink2:1174479850095005806>', 'N/A' ];
      case '(R=0.262251,G=0.262251,B=0.693872,A=1.000000)':
        return [ 'MutatedPurple2', '<:MutatedPurple2:1174949683932696576>', 'N/A' ];
      //      
      case '(R=0.000000,G=0.000000,B=0.000000,A=1.000000)': //No Color
        return [ 'No Color', '<:NoColor:1174024382637682719>', '0' ];
      default:
        return [ 'Color Not Recognized', '<:UnknownColor:1174478951415021698>', '0' ];
    }
  }
}