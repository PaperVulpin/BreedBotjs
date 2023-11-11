module.exports = {
  lookup: function (species) { 
    console.log("Species: " + species);
    switch (species) {
      //Dododex URL, species, small icon, image
      // A '//' after the case: species indicates I have not verified this name matches that which is listed in the DinoData.ini yet.
      case 'DINO'://
        return [ 'DODODEX', 'FULLDINONAME', 'SMALLICON' , 'IBB' ];
      case 'Achatina':
        return [ 'https://www.dododex.com/taming/achatina', 'Achatina', 'https://arkids.net/image/creature/120/achatina.png' , 'https://i.ibb.co/s69h22L/achatina.webp' ];
      case 'Allo':
        return [ 'https://www.dododex.com/taming/allosaurus', 'Allosaurus (Allo)', 'https://arkids.net/image/creature/120/allosaurus.png' , 'https://i.ibb.co/bBDYF3c/allosaurus.webp' ];
      case 'Amargasaurus'://Cannot test yet
        return [ 'https://www.dododex.com/taming/amargasaurus', 'Amargasaurus', 'https://arkids.net/image/creature/120/amargasaurus.png' , 'https://i.ibb.co/zQHM6F2/amargasaurus.webp' ];
      case 'Andrewsarchus'://Cannot test yet
        return [ 'https://www.dododex.com/taming/andrewsarchus', 'Andrewsarchus', 'https://arkids.net/image/creature/120/andrewsarchus.png' , 'https://i.ibb.co/vkbkvwk/andrewsarchus.webp' ];
      case 'Angler':
        return [ 'https://www.dododex.com/taming/angler', 'Anglerfish (Angler)', 'https://arkids.net/image/creature/120/anglerfish.png' , 'https://i.ibb.co/2k0V8Hh/angler.webp' ];
      case 'Anky':
        return [ 'https://www.dododex.com/taming/ankylosaurus', 'Ankylosaurus (Anky)', 'https://arkids.net/image/creature/120/ankylosaurus.png' , 'https://i.ibb.co/xJ7cS7w/ankylosaurus.webp' ];
      case 'Spider':
        return [ 'https://www.dododex.com/taming/araneo', 'Araneo (Spider)', 'https://arkids.net/image/creature/120/araneo.png' , 'https://i.ibb.co/fG4Qh9h/araneo.webp' ];
      case 'Archa':
        return [ 'https://www.dododex.com/taming/archaeopteryx', 'Archaeopteryx (Archa)', 'https://arkids.net/image/creature/120/archaeopteryx.png' , 'https://i.ibb.co/tppCbRv/archaeopteryx.webp' ];
      case 'Argent':
        return [ 'https://www.dododex.com/taming/argentavis', 'Argentavis (Argent)', 'https://arkids.net/image/creature/120/argentavis.png' , 'https://i.ibb.co/YjMQ4dx/argentavis.webp' ];
      case 'Arthro':
        return [ 'https://www.dododex.com/taming/arthropluera', 'Arthropluera (Arthro)', 'https://arkids.net/image/creature/120/arthropluera.png' , 'https://i.ibb.co/g4zRMcG/arthropluera.webp' ];
      case 'Astrocetus':// Can't test
        return [ 'https://www.dododex.com/taming/astrocetus', 'Astrocetus', 'https://arkids.net/image/creature/120/astrocetus.png' , 'https://i.ibb.co/pj1Zznk/parasaur.webphttps://i.ibb.co/8BmygPC/astrocetus.webp' ];
      case 'Astrodelphis':// Can't test
        return [ 'https://www.dododex.com/taming/astrodelphis', 'Astrodelphis', 'https://arkids.net/image/creature/120/astrodelphis.png' , 'https://i.ibb.co/bLX3nk6/astrodelphis.webp' ];
      case 'Baryonyx':
        return [ 'https://www.dododex.com/taming/baryonyx', 'Baryonyx', 'https://arkids.net/image/creature/120/baryonyx.png' , 'https://i.ibb.co/XtfT73p/baryonyx.webp' ];
      case 'Basilisk':// cant test
        return [ 'https://www.dododex.com/taming/basilisk', 'Basilisk', 'https://arkids.net/image/creature/120/basilisk.png' , 'https://i.ibb.co/nj34vsY/basilisk.webp' ];
      case 'Basilosaurus':
        return [ 'https://www.dododex.com/taming/basilosaurus', 'Basilosaurus', 'https://arkids.net/image/creature/120/basilosaurus.png' , 'https://i.ibb.co/TRDBkp2/basilosaurus.webp' ];
      case 'Toad':
        return [ 'https://www.dododex.com/taming/beelzebufo', 'Beelzebufo (Toad)', 'https://arkids.net/image/creature/120/beelzebufo.png' , 'https://i.ibb.co/84PyRqb/beelzebufo.webp' ];
      case 'Bloodstalker':// Can't test
        return [ 'https://www.dododex.com/taming/bloodstalker', 'Bloodstalker', 'https://arkids.net/image/creature/120/bloodstalker.png' , 'https://i.ibb.co/0yM4Rhx/bloodstalker.webp' ];
      case 'Bronto':
        return [ 'https://www.dododex.com/taming/brontosaurus', 'Brontosaurus (Bronto)', 'https://arkids.net/image/creature/120/brontosaurus.png' , 'https://i.ibb.co/bFtq36L/brontosaurus.webp' ];
      case 'Bulbdog':// Can't test
        return [ 'https://www.dododex.com/taming/bulbdog', 'Bulbdog', 'https://arkids.net/image/creature/120/bulbdog.png' , 'https://i.ibb.co/sHrLJm0/bulbdog.webp' ];
      case 'Carcha':
        return [ 'https://www.dododex.com/taming/carcharodontosaurus', 'Carcharodontosaurus (Carcha)', 'https://arkids.net/image/creature/120/carcharodontosaurus.png' , 'https://i.ibb.co/99BmK6D/carcharodontosaurus.webp' ];
      case 'Carno':
        return [ 'https://www.dododex.com/taming/carnotaurus', 'Carnotaurus (Carno)', 'https://arkids.net/image/creature/120/carnotaurus.png' , 'https://i.ibb.co/Mg0TmN3/carnotaurus.webp' ];
      case 'Beaver':
        return [ 'https://www.dododex.com/taming/castoroides', 'Castoroides (Beaver)', 'https://arkids.net/image/creature/120/castoroides.png' , 'https://i.ibb.co/TK3mHLx/castoroides.webp' ];
      case 'Chalico':
        return [ 'https://www.dododex.com/taming/chalicotherium', 'Chalicotherium (Chalico)', 'https://arkids.net/image/creature/120/chalicotherium.png' , 'https://i.ibb.co/DpmNHBY/chalicotherium.webp' ];
      case 'Cnidaria':// Can't test
        return [ 'https://www.dododex.com/taming/cnidaria', 'Cnidaria', 'https://arkids.net/image/creature/120/cnidaria.png' , 'https://i.ibb.co/q9JHVkQ/cnidaria.webp' ];
      case 'Coelacanth':// Can't test
        return [ 'https://www.dododex.com/taming/coelacanth', 'Coelacanth', 'https://arkids.net/image/creature/120/coelacanth.png' , 'https://i.ibb.co/0Z7Q24f/coelacanth.webp' ];
      case 'Compy':
        return [ 'https://www.dododex.com/taming/compy', 'Compy', 'https://arkids.net/image/creature/120/compy.png' , 'https://i.ibb.co/Hh9KXVq/compy.webp' ];
      //Crystal Wyverns
      case 'Blood Crystal Wyvern':// Can't test
        return [ 'https://www.dododex.com/taming/crystalwyvern', 'Blood Crystal Wyvern', 'https://arkids.net/image/creature/120/crystal-wyvern-blood.png' , 'https://i.ibb.co/v4wxQVx/crystalwyvern.webp' ];
      case 'Ember Crystal Wyvern':// Can't test
        return [ 'https://www.dododex.com/taming/crystalwyvern', 'Ember Crystal Wyvern', 'https://arkids.net/image/creature/120/crystal-wyvern-ember.png' , 'https://i.ibb.co/v4wxQVx/crystalwyvern.webp' ];
      case 'Tropical Crystal Wyvern':// Can't test
        return [ 'https://www.dododex.com/taming/crystalwyvern', 'Tropical Crystal Wyvern', 'https://arkids.net/image/creature/120/crystal-wyvern-tropical.png' , 'https://i.ibb.co/v4wxQVx/crystalwyvern.webp' ];
      //
      case 'Daeodon':
        return [ 'https://www.dododex.com/taming/daeodon', 'Daeodon', 'https://arkids.net/image/creature/120/daeodon.png' , 'https://i.ibb.co/sWzZrSZ/daeodon.webp' ];
      case 'Deinonychus':// cant test
        return [ 'https://www.dododex.com/taming/deinonychus', 'Deinonychus', 'https://arkids.net/image/creature/120/deinonychus.png' , 'https://i.ibb.co/jrkqBQM/deinonychus.webp' ];
      case 'Desmodus'://
        return [ 'https://www.dododex.com/taming/desmodus', 'Desmodus', 'https://ark.wiki.gg/images/thumb/f/f0/Desmodus.png/43px-Desmodus.png' , 'https://i.ibb.co/7bcFLgG/desmodus.webp' ];
      case 'Dilo':
        return [ 'https://www.dododex.com/taming/dilophosaur', 'Dilophosaur (Dilo)', 'https://arkids.net/image/creature/120/dilophosaur.png' , 'https://i.ibb.co/P5LS04R/dilophosaur.webp' ];
      case 'Dimetrodon':
        return [ 'https://www.dododex.com/taming/dimetrodon', 'Dimetrodon', 'https://arkids.net/image/creature/120/dimetrodon.png' , 'https://i.ibb.co/7XDxrck/dimetrodon.webp' ];
      case 'Dimorph':
        return [ 'https://www.dododex.com/taming/dimorphodon', 'Dimorphodon (Dimorph)', 'https://arkids.net/image/creature/120/dimorphodon.png' , 'https://i.ibb.co/yWgNk4G/dimorphodon.webp' ];
      case 'Dinopithecus':// cant test
        return [ 'https://www.dododex.com/taming/dinopithecus', 'Dinopithecus', 'https://arkids.net/image/creature/120/dinopithecus.png' , 'https://i.ibb.co/DVDfXSL/dinopithecus.webp' ];
      case 'Diplocaulus':
        return [ 'https://www.dododex.com/taming/diplocaulus', 'Diplocaulus', 'https://arkids.net/image/creature/120/diplocaulus.png' , 'https://i.ibb.co/zFgbrWK/diplocaulus.webp' ];
      case 'Diplo':
        return [ 'https://www.dododex.com/taming/diplodocus', 'Diplodocus (Diplo)', 'https://arkids.net/image/creature/120/diplodocus.png' , 'https://i.ibb.co/YfV4Fbx/diplodocus.webp' ];
      case 'Direbear':
        return [ 'https://www.dododex.com/taming/direbear', 'Direbear', 'https://arkids.net/image/creature/120/direbear.png' , 'https://i.ibb.co/KFQnVNM/direbear.webp' ];
      case 'Direwolf':
        return [ 'https://www.dododex.com/taming/direwolf', 'Direwolf', 'https://arkids.net/image/creature/120/direwolf.png' , 'https://i.ibb.co/v4LYRL4/direwolf.webp' ];
      case 'Dodo':
        return [ 'https://www.dododex.com/taming/dodo', 'Dodo', 'https://arkids.net/image/creature/120/dodo.png' , 'https://i.ibb.co/S5byFhD/dodo.webp' ];
      case 'Doed':
        return [ 'https://www.dododex.com/taming/doedicurus', 'Doedicurus (Doed)', 'https://arkids.net/image/creature/120/doedicurus.png' , 'https://i.ibb.co/7GbPTDQ/doedicurus.webp' ];
      case 'Beetle':
        return [ 'https://www.dododex.com/taming/dungbeetle', 'Dung Beetle (Beetle)', 'https://arkids.net/image/creature/120/dung-beetle.png' , 'https://i.ibb.co/s6fFGC5/dungbeetle.webp' ];
      case 'Dunkle':
        return [ 'https://www.dododex.com/taming/dunkleosteus', 'Dunkleosteus (Dunkle)', 'https://arkids.net/image/creature/120/dunkleosteus.png' , 'https://i.ibb.co/ysvG8Rb/dunkleosteus.webp' ];
      case 'Eel':
        return [ 'https://www.dododex.com/taming/electrophorus', 'Electrophorus (Eel)', 'https://arkids.net/image/creature/120/electrophorus.png' , 'https://i.ibb.co/K7qv02p/electrophorus.webp' ];
      case 'Equus':
        return [ 'https://www.dododex.com/taming/equus', 'Equus', 'https://arkids.net/image/creature/120/equus.png' , 'https://i.ibb.co/V3Yfwjh/equus.webp' ];
      case 'Featherlight'://cant test
        return [ 'https://www.dododex.com/taming/featherlight', 'Featherlight', 'https://arkids.net/image/creature/120/featherlight.png' , 'https://i.ibb.co/M123RvN/featherlight.webp' ];
      case 'Fenrir'://cant test
        return [ 'https://www.dododex.com/taming/fenrir', 'Fenrir', 'https://arkids.net/image/creature/120/fenrir.png' , 'https://i.ibb.co/P63yRJR/fenrir.webp' ];
      case 'Ferox'://cant test
        return [ 'https://www.dododex.com/taming/ferox', 'Ferox', 'https://arkids.net/image/creature/120/ferox-small.png' , 'https://i.ibb.co/SvsMhRV/ferox.webp' ];
      case 'Fjordhawk'://cant test
        return [ 'https://www.dododex.com/taming/fjordhawk', 'Fjordhawk', 'https://ark.wiki.gg/images/thumb/b/b9/Fjordhawk.png/43px-Fjordhawk.png' , 'https://i.ibb.co/yR1fdtx/fjordhawk.webp' ];
      case 'Gacha'://cant test
        return [ 'https://www.dododex.com/taming/gacha', 'Gacha', 'https://arkids.net/image/creature/120/gacha.png' , 'https://i.ibb.co/f1QRG1p/gacha.webp' ];
      case 'Galli':
        return [ 'https://www.dododex.com/taming/gallimimus', 'Gallimimus (Galli)', 'https://arkids.net/image/creature/120/gallimimus.png' , 'https://i.ibb.co/HrDVkLG/gallimimus.webp' ];
      case 'GasBags':
        return [ 'https://www.dododex.com/taming/gasbags', 'GasBags', 'https://arkids.net/image/creature/120/gasbags.png' , 'https://i.ibb.co/4g38cTZ/gasbags.webp' ];
      case 'Giant Bee'://
        return [ 'https://www.dododex.com/taming/giantbee', 'Giant Bee', 'https://arkids.net/image/creature/120/giant-bee.png' , 'https://i.ibb.co/g7Wkwk6/giantbee.webp' ];
      case 'Griffin':// cant test
        return [ 'https://www.dododex.com/taming/griffin', 'Griffin', 'https://arkids.net/image/creature/120/griffin.png' , 'https://i.ibb.co/FXyXY89/griffin.webp' ];
      case 'Gigant':
        return [ 'https://www.dododex.com/taming/giganotosaurus', 'Giganotosaurus (Gigant)', 'https://arkids.net/image/creature/120/giganotosaurus.png' , 'https://i.ibb.co/gv92Fmy/giganotosaurus.webp' ];
      case 'Bigfoot':
        return [ 'https://www.dododex.com/taming/gigantopithecus', 'Gigantopithecus (Bigfoot)', 'https://arkids.net/image/creature/120/gigantopithecus.png' , 'https://i.ibb.co/ZM30dDB/gigantopithecus.webp' ];
      case 'Glowtail'://cant test
        return [ 'https://www.dododex.com/taming/glowtail', 'Glowtail', 'https://arkids.net/image/creature/120/glowtail.png' , 'https://i.ibb.co/fQJzX5s/glowtail.webp' ];
      case 'Hesperornis':
        return [ 'https://www.dododex.com/taming/hesperornis', 'Hesperornis', 'https://arkids.net/image/creature/120/hesperornis.png' , 'https://i.ibb.co/wyNfm0F/hesperornis.webp' ];
      case 'Hyaenodon':
        return [ 'https://www.dododex.com/taming/hyaenodon', 'Hyaenodon', 'https://arkids.net/image/creature/120/hyaenodon.png' , 'https://i.ibb.co/V94SFGm/hyaenodon.webp' ];
      case 'Ichthyornis':
        return [ 'https://www.dododex.com/taming/ichthyornis', 'Ichthyornis', 'https://arkids.net/image/creature/120/ichthyornis.png' , 'https://i.ibb.co/bXVcnfr/ichthyornis.webp' ];
      case 'Dolphin':
        return [ 'https://www.dododex.com/taming/ichthyosaurus', 'Ichthyosaurus (Dolphin)', 'https://arkids.net/image/creature/120/ichthyosaurus.png' , 'https://i.ibb.co/sQnG4Mk/ichthyosaurus.webp' ];
      case 'Iguanodon':
        return [ 'https://www.dododex.com/taming/iguanodon', 'Iguanodon', 'https://arkids.net/image/creature/120/iguanodon.png' , 'https://i.ibb.co/fpp8L3K/iguanodon.webp' ];
      case 'Jerboa':// cant test
        return [ 'https://www.dododex.com/taming/jerboa', 'Jerboa', 'https://arkids.net/image/creature/120/jerboa.png' , 'https://i.ibb.co/R699tV9/jerboa.webp' ];
      case 'Kairu':
        return [ 'https://www.dododex.com/taming/kairuku', 'Kairuku (Kairu)', 'https://arkids.net/image/creature/120/kairuku.png' , 'https://i.ibb.co/3CdRK87/kairuku.webp' ];
      case 'Kaprosuchus':
        return [ 'https://www.dododex.com/taming/kaprosuchus', 'Kaprosuchus', 'https://arkids.net/image/creature/120/kaprosuchus.png' , 'https://i.ibb.co/Jmdf7Ty/kaprosuchus.webp' ];
      case 'Karkinos':// cant test
        return [ 'https://www.dododex.com/taming/karkinos', 'Karkinos', 'https://arkids.net/image/creature/120/karkinos.png' , 'https://i.ibb.co/ysYZDCg/karkinos.webp' ];
      case 'Kentro':
        return [ 'https://www.dododex.com/taming/kentrosaurus', 'Kentrosaurus (Kentro)', 'https://arkids.net/image/creature/120/kentrosaurus.png' , 'https://i.ibb.co/QkfQHJD/kentrosaurus.webp' ];
      case 'Lamprey'://cant test
        return [ 'https://www.dododex.com/taming/lamprey', 'Lamprey', 'https://arkids.net/image/creature/120/lamprey.png' , 'https://i.ibb.co/fDbC2XG/lamprey.webp' ];
      case 'Leech'://
        return [ 'https://www.dododex.com/tips/leech', 'Leech', 'https://arkids.net/image/creature/120/leech.png' , 'https://i.ibb.co/0K50LwM/leech.webp' ];
      case 'Liopleurodon':
        return [ 'https://www.dododex.com/taming/liopleurodon', 'Liopleurodon', 'https://arkids.net/image/creature/120/liopleurodon.png' , 'https://i.ibb.co/DCGyjLf/liopleurodon.webp' ];
      case 'Lymantria':// cant test
        return [ 'https://www.dododex.com/taming/lymantria', 'Lymantria', 'https://arkids.net/image/creature/120/lymantria.png' , 'https://i.ibb.co/28Yrs6g/lymantria.webp' ];
      case 'Lystro':
        return [ 'https://www.dododex.com/taming/lystrosaurus', 'Lystrosaurus (Lystro)', 'https://arkids.net/image/creature/120/lystrosaurus.png' , 'https://i.ibb.co/TqrcGhw/lystrosaurus.webp' ];
      case 'Maewing'://cant test
        return [ 'https://www.dododex.com/taming/maewing', 'Maewing', 'https://arkids.net/image/creature/120/maewing.png' , 'https://i.ibb.co/2yTBpHX/maewing.webp' ];
      case 'Mammoth':
        return [ 'https://www.dododex.com/taming/mammoth', 'Mammoth', 'https://arkids.net/image/creature/120/mammoth.png' , 'https://i.ibb.co/f4pLqqC/mammoth.webp' ];
      case 'Managarmr':
        return [ 'https://www.dododex.com/taming/magmasaur', 'Magmasaur', 'https://arkids.net/image/creature/120/magmasaur.png' , 'https://i.ibb.co/mRCcxw7/magmasaur.webp' ];
      case 'Manta':
        return [ 'https://www.dododex.com/taming/manta', 'Manta', 'https://arkids.net/image/creature/120/manta.png' , 'https://i.ibb.co/x8ST3SS/manta.webp' ];
      case 'Mantis':// cant test
        return [ 'https://www.dododex.com/taming/mantis', 'Mantis', 'https://arkids.net/image/creature/120/mantis.png' , 'https://i.ibb.co/4mqQpkQ/mantis.webp' ];
      case 'Megachelon':// cant test
        return [ 'https://www.dododex.com/taming/megachelon', 'Megachelon', 'https://arkids.net/image/creature/120/megachelon.png' , 'https://i.ibb.co/q1Z2bxr/megachelon.webp' ];
      case 'Megalania':
        return [ 'https://www.dododex.com/taming/megalania', 'Megalania', 'https://arkids.net/image/creature/120/megalania.png' , 'https://i.ibb.co/NSQJKHn/megalania.webp' ];
      case 'Stag':
        return [ 'https://www.dododex.com/taming/megaloceros', 'Megaloceros (Stag)', 'https://arkids.net/image/creature/120/megaloceros.png' , 'https://i.ibb.co/yXPjB3N/megaloceros.webp' ];
      case 'Mega':
        return [ 'https://www.dododex.com/taming/megalodon', 'Megalodon (Mega)', 'https://arkids.net/image/creature/120/megalodon.png' , 'https://i.ibb.co/2S1cB6n/megalodon.webp' ];
      case 'Megalosaurus':
        return [ 'https://www.dododex.com/taming/megalosaurus', 'Megalosaurus', 'https://arkids.net/image/creature/120/megalosaurus.png' , 'https://i.ibb.co/yRsBRZw/megalosaurus.webp' ];
      case 'Megatherium':
        return [ 'https://www.dododex.com/taming/megatherium', 'Megatherium', 'https://arkids.net/image/creature/120/megatherium.png' , 'https://i.ibb.co/HVcFsBB/megatherium.webp' ];
      case 'Monkey':
        return [ 'https://www.dododex.com/taming/mesopithecus', 'Mesopithecus (Monkey)', 'https://arkids.net/image/creature/120/mesopithecus.png' , 'https://i.ibb.co/RcV4L8N/mesopithecus.webp' ];
      case 'Microraptor':
        return [ 'https://www.dododex.com/taming/microraptor', 'Microraptor', 'https://arkids.net/image/creature/120/microraptor.png' , 'https://i.ibb.co/PYN4F25/microraptor.webp' ];
      case 'Morellatops':// cant test
        return [ 'https://www.dododex.com/taming/morellatops', 'Morellatops', 'https://arkids.net/image/creature/120/morellatops.png' , 'https://i.ibb.co/gdsTtBg/morellatops.webp' ];
      case 'Mosasaur':
        return [ 'https://www.dododex.com/taming/mosasaurus', 'Mosasaurus', 'https://arkids.net/image/creature/120/mosasaurus.png' , 'https://i.ibb.co/Pmwnxtd/mosasaurus.webp' ];
      case 'Moschops':
        return [ 'https://www.dododex.com/taming/moschops', 'Moschops', 'https://arkids.net/image/creature/120/moschops.png' , 'https://i.ibb.co/1rF29Lj/moschops.webp' ];
      case 'Noglin':// cant test
        return [ 'https://www.dododex.com/taming/noglin', 'Noglin', 'https://arkids.net/image/creature/120/noglin.png' , 'https://i.ibb.co/JpsvGNz/noglin.webp' ];
      case 'Bat':
        return [ 'https://www.dododex.com/taming/onyc', 'Onychonycteris (Bat)', 'https://arkids.net/image/creature/120/onychonycteris.png' , 'https://i.ibb.co/nLHkMyk/onyc.webp' ];
      case 'Otter':
        return [ 'https://www.dododex.com/taming/otter', 'Otter', 'https://arkids.net/image/creature/120/otter.png' , 'https://i.ibb.co/TT31Lf4/otter.webp' ];
      case 'Ovi':
        return [ 'https://www.dododex.com/taming/oviraptor', 'Oviraptor (Ovi)', 'https://arkids.net/image/creature/120/oviraptor.png' , 'https://i.ibb.co/1RPQ3cn/oviraptor.webp' ];
      case 'Sheep':
        return [ 'https://www.dododex.com/taming/ovis', 'Ovis (Sheep)', 'https://arkids.net/image/creature/120/ovis.png' , 'https://i.ibb.co/jrfv10g/ovis.webp' ];
      case 'Pachy':
        return [ 'https://www.dododex.com/taming/pachy', 'Pachycephalosaurus (Pachy)', 'https://arkids.net/image/creature/120/pachy.png' , 'https://i.ibb.co/TBFRX05/pachy.webp' ];
      case 'Pachyrhinosaurus':
        return [ 'https://www.dododex.com/taming/pachyrhinosaurus', 'Pachyrhinosaurus', 'https://arkids.net/image/creature/120/pachyrhinosaurus.png' , 'https://i.ibb.co/YcVDpPM/pachyrhinosaurus.webp' ];
      case 'Paracer':
        return [ 'https://www.dododex.com/taming/paracer', 'Paraceratherium (Paracer)', 'https://arkids.net/image/creature/120/paraceratherium.png' , 'https://i.ibb.co/WP89xzd/paracer.webp' ];
      case 'Para':
        return [ 'https://www.dododex.com/taming/parasaur', 'Parasaurolophus (Para)', 'https://arkids.net/image/creature/120/parasaurolophus.png' , 'https://i.ibb.co/pj1Zznk/parasaur.webp' ];
      case 'Pegomastax':
        return [ 'https://www.dododex.com/taming/pegomastax', 'Pegomastax', 'https://arkids.net/image/creature/120/pegomastax.png' , 'https://i.ibb.co/ftnVHr2/pegomastax.webp' ];
      case 'Pela':
        return [ 'https://www.dododex.com/taming/pelagornis', 'Pelagornis (Pela)', 'https://arkids.net/image/creature/120/pelagornis.png' , 'https://i.ibb.co/Wc0nq03/pelagornis.webp' ];
      case 'Phiomia':
        return [ 'https://www.dododex.com/taming/phiomia', 'Phiomia', 'https://arkids.net/image/creature/120/phiomia.png' , 'https://i.ibb.co/86P6n2J/phiomia.webp' ];
      case 'Phoenix':// cant test
        return [ 'https://www.dododex.com/taming/phoenix', 'Phoenix', 'https://arkids.net/image/creature/120/pelagornis.png' , 'https://i.ibb.co/25xKfBM/phoenix.webp' ];
      case 'Piranha'://
        return [ 'https://www.dododex.com/taming/piranha', 'Piranha', 'https://arkids.net/image/creature/120/piranha.png' , 'https://i.ibb.co/swBmVtw/piranha.webp' ];
      case 'Plesiosaur':
        return [ 'https://www.dododex.com/taming/plesiosaur', 'Plesiosaur', 'https://arkids.net/image/creature/120/plesiosaur.png' , 'https://i.ibb.co/2WSLGPw/plesiosaur.webp' ];
      case 'Kangaroo':
        return [ 'https://www.dododex.com/taming/procoptodon', 'Procoptodon (Kangaroo)', 'https://arkids.net/image/creature/120/procoptodon.png' , 'https://i.ibb.co/4VSb1RY/procoptodon.webp' ];
      case 'Ptera':
        return [ 'https://www.dododex.com/taming/pteranodon', 'Pteranodon (Ptera)', 'https://arkids.net/image/creature/120/pteranodon.png' , 'https://i.ibb.co/P98s8f4/pteranodon.webp' ];
      case 'Scorpion':
        return [ 'https://www.dododex.com/taming/pulmonoscorpius', 'Pulmonoscorpius (Scorpion)', 'https://arkids.net/image/creature/120/pulmonoscorpius.png' , 'https://i.ibb.co/0QF9PqF/pulmonoscorpius.webp' ];
      case 'Purlovia':
        return [ 'https://www.dododex.com/taming/purlovia', 'Purlovia', 'https://arkids.net/image/creature/120/purlovia.png' , 'https://i.ibb.co/HKb6cjY/purlovia.webp' ];
      case 'Quetz':
        return [ 'https://www.dododex.com/taming/quetzal', 'Quetzalcoatlus (Quetz)', 'https://arkids.net/image/creature/120/quetzalcoatlus.png' , 'https://i.ibb.co/P6qH8Gm/quetzal.webp' ];
      case 'Raptor':
        return [ 'https://www.dododex.com/taming/raptor', 'Raptor', 'https://arkids.net/image/creature/120/raptor.png' , 'https://i.ibb.co/V26Q4F7/raptor.webp' ];
      case 'Ravager':// cant test
        return [ 'https://www.dododex.com/taming/ravager', 'Ravager', 'https://arkids.net/image/creature/120/ravager.png' , 'https://i.ibb.co/376zs9T/ravager.webp' ];
      case 'Reaper':// cant test
        return [ 'https://www.dododex.com/taming/reaper', 'Reaper', 'https://arkids.net/image/creature/120/reaper-king-tamed.png' , 'https://i.ibb.co/9H72t8b/reaper.webp' ];
      case 'Rex':
        return [ 'https://www.dododex.com/taming/rex', 'Rex', 'https://arkids.net/image/creature/120/rex.png' , 'https://i.ibb.co/5BJR32Q/rex.webp' ];
      case 'Tek Rex':
        return [ 'https://www.dododex.com/taming/rex', 'Tek Rex', 'https://arkids.net/image/creature/120/rex.png' , 'https://i.ibb.co/tzH9S5m/Tek-Rex-Paint-Region0.webp' ];
      case 'Rock Drake':// cant test
        return [ 'https://www.dododex.com/taming/rockdrake', 'Rock Drake', 'https://arkids.net/image/creature/120/rock-drake.png' , 'https://i.ibb.co/QJgYNRM/rockdrake.webp' ];
      case 'Rock Elemental':// cant test
        return [ 'https://www.dododex.com/taming/rockelemental', 'Rock Elemental', 'https://arkids.net/image/creature/120/rock-elemental.png' , 'https://i.ibb.co/BtN4JXj/rockelemental.webp' ];
      case 'Turtle':
        return [ 'https://www.dododex.com/taming/carbonemys', 'Carbonemys (Turtle)', 'https://arkids.net/image/creature/120/carbonemys.png' , 'https://i.ibb.co/sbCTTzJ/carbonemys.webp' ];
      case 'Rhynio':
        return [ 'https://www.dododex.com/taming/rhyniognatha', 'Rhyniognatha (Rhynio)', 'https://arkids.net/image/creature/120/rhyniognatha.png' , 'https://i.ibb.co/Vgthb1H/rhyniognatha.webp' ];
      case 'Roll Rat':// cant test
        return [ 'https://www.dododex.com/taming/rollrat', 'Roll Rat', 'https://arkids.net/image/creature/120/roll-rat.png' , 'https://i.ibb.co/z4CxV25/rollrat.webp' ];
      case 'Sabertooth':
        return [ 'https://www.dododex.com/taming/sabertooth', 'Sabertooth', 'https://arkids.net/image/creature/120/sabertooth.png' , 'https://i.ibb.co/yWW9L7K/sabertooth.webp' ];
      case 'Sabertooth Salmon'://
        return [ 'https://www.dododex.com/taming/sabertoothsalmon', 'Sabertooth Salmon', 'https://arkids.net/image/creature/120/sabertooth-salmon.png' , 'https://i.ibb.co/S628sZP/sabertoothsalmon.webp' ];
      case 'Sarco':
        return [ 'https://www.dododex.com/taming/sarco', 'Sarcosuchus (Sarco)', 'https://arkids.net/image/creature/120/sarco.png' , 'https://i.ibb.co/7YkX2T0/sarco.webp' ];
      case 'Shadowmane':// cant test
        return [ 'https://www.dododex.com/taming/shadowmane', 'Shadowmane', 'https://arkids.net/image/creature/120/shadowmane.png' , 'https://i.ibb.co/dgB5vYH/shadowmane.webp' ];
      case 'Shinehorn':// cant test
        return [ 'https://www.dododex.com/taming/shinehorn', 'Shinehorn', 'https://arkids.net/image/creature/120/shinehorn.png' , 'https://i.ibb.co/jHPJcRd/shinehorn.webp' ];
      case 'Sinomacrops':// cant test
        return [ 'https://www.dododex.com/taming/sinomacrops', 'Sinomacrops', 'https://arkids.net/image/creature/120/sinomacrops.png' , 'https://i.ibb.co/BjJ8RdP/sinomacrops.webp' ];
      case 'Spino':
        return [ 'https://www.dododex.com/taming/spinosaur', 'Spinosaurus (Spino)', 'https://arkids.net/image/creature/120/spino.png' , 'https://i.ibb.co/XkdNrHn/spinosaur.webp' ];
      case 'Snow Owl':// cant test
        return [ 'https://www.dododex.com/taming/snowowl', 'Snow Owl', 'https://arkids.net/image/creature/120/snow-owl.png' , 'https://i.ibb.co/JxWM2cz/snowowl.webp' ];
      case 'Stego':
        return [ 'https://www.dododex.com/taming/stegosaurus', 'Stegosaurus (Stego)', 'https://arkids.net/image/creature/120/stegosaurus.png' , 'https://i.ibb.co/vBVLGsZ/stegosaurus.webp' ];
      case 'Tek Stryder':// cant test
        return [ 'https://www.dododex.com/taming/stryder', 'Tek Stryder', 'https://arkids.net/image/creature/120/stryder.png' , 'https://i.ibb.co/8rVLJRC/stryder.webp' ];
      case 'Tapejara':
        return [ 'https://www.dododex.com/taming/tapejara', 'Tapejara', 'https://arkids.net/image/creature/120/tapejara.png' , 'https://i.ibb.co/rFQCyph/tapejara.webp' ];
      case 'TerrorBird':
        return [ 'https://www.dododex.com/taming/terrorbird', 'Terror Bird (TerrorBird)', 'https://arkids.net/image/creature/120/terror-bird.png' , 'https://i.ibb.co/kX7rPps/terrorbird.webp' ];
      case 'Therizinosaurus':
        return [ 'https://www.dododex.com/taming/therizinosaurus', 'Therizinosaurus', 'https://arkids.net/image/creature/120/therizinosaur.png' , 'https://i.ibb.co/vkJ0fNx/therizinosaurus.webp' ];
      case 'Thorny Dragon':// cant test
        return [ 'https://www.dododex.com/taming/thornydragon', 'Thorny Dragon', 'https://arkids.net/image/creature/120/thorny-dragon.png' , 'https://i.ibb.co/C7f1NWK/thornydragon.webp' ];
      case 'Thylacoleo':
        return [ 'https://www.dododex.com/taming/thylacoleo', 'Thylacoleo', 'https://arkids.net/image/creature/120/thylacoleo.png' , 'https://i.ibb.co/RDvJCst/thylacoleo.webp' ];
      case 'Titanboa':
        return [ 'https://www.dododex.com/taming/titanoboa', 'Titanoboa (Titanboa)', 'https://arkids.net/image/creature/120/titanoboa.png' , 'https://i.ibb.co/cY58RBx/titanoboa.webp' ];
      case 'Trike':
        return [ 'https://www.dododex.com/taming/triceratops', 'Triceratops (Trike)', 'https://arkids.net/image/creature/120/triceratops.png' , 'https://i.ibb.co/5x1Pp1B/triceratops.webp' ];
      case 'Trilobite'://
        return [ 'https://www.dododex.com/taming/trilobite', 'Trilobite', 'https://arkids.net/image/creature/120/trilobite.png' , 'https://i.ibb.co/GnG9h9f/trilobite.webp' ];
      case 'Troodon':
        return [ 'https://www.dododex.com/taming/troodon', 'Troodon', 'https://arkids.net/image/creature/120/troodon.png' , 'https://i.ibb.co/5sZV5k8/troodon.webp' ];
      case 'Tropeognathus':
        return [ 'https://www.dododex.com/taming/tropeognathus', 'Tropeognathus', 'https://arkids.net/image/creature/120/tropeognathus.png' , 'https://i.ibb.co/Lp7JzHs/tropeognathus.webp' ];
      case 'Tusoteuthis':
        return [ 'https://www.dododex.com/taming/tusoteuthis', 'Tusoteuthis', 'https://arkids.net/image/creature/120/tusoteuthis.png' , 'https://i.ibb.co/WHP4xp0/tusoteuthis.webp' ];
      case 'Tek Wyvern':// cant test
        return [ 'https://www.dododex.com/taming/voidwyrm', 'Voidwyrm', 'https://arkids.net/image/creature/120/tek-wyvern.png' , 'https://i.ibb.co/j6jPcC4/voidwyrm.webp' ];
      case 'Unicorn':
        return [ 'https://www.dododex.com/taming/unicorn', 'Unicorn', 'https://arkids.net/image/creature/120/unicorn.png' , 'https://i.ibb.co/KrDSYT7/unicorn.webp' ];
      case 'Velonasaur':// cant test
        return [ 'https://www.dododex.com/taming/velonasaur', 'Velonasaur', 'https://arkids.net/image/creature/120/velonasaur.png' , 'https://i.ibb.co/tBSDszX/velonasaur.webp' ];
      case 'Vulture':// cant test
        return [ 'https://www.dododex.com/taming/vulture', 'Vulture', 'https://arkids.net/image/creature/120/vulture.png' , 'https://i.ibb.co/QppVNDF/vulture.webp' ];
      case 'Rhino':
        return [ 'https://www.dododex.com/taming/woollyrhino', 'Woolly Rhino (Rhino)', 'https://arkids.net/image/creature/120/woolly-rhino.png' , 'https://i.ibb.co/PTtr1hS/woollyrhino.webp' ];
      case 'Wyvern':// cant test
        return [ 'https://www.dododex.com/taming/wyvern', 'Wyvern', 'https://arkids.net/image/creature/120/wyvern.png' , 'https://i.ibb.co/QP6g5ys/wyvern.webp' ];
      case 'Yutyrannus':
        return [ 'https://www.dododex.com/taming/yutyrannus', 'Yutyrannus', 'https://arkids.net/image/creature/120/yutyrannus.png' , 'https://i.ibb.co/HhzrbnS/yutyrannus.webp' ];
        //
      default:
        return 'Unknown species.';
        //return [ '', 'Unknown species.', '', '' ];
    }
  }
}