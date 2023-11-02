module.exports = {
  lookup: function (species) { 
    console.log("Species: " + species);
    switch (species) {
      //Dododex URL, species, small icon, image
      // A '//' after the case: species indicates I have not verified this name matches that which is listed in the DinoData.ini yet.
      case 'DINO'://
        return [ 'DODODEX', 'FULLDINONAME', 'SMALLICON' , 'IBB' ];
      case 'Achatina'://
        return [ 'https://www.dododex.com/taming/achatina', 'Achatina', 'https://arkids.net/image/creature/120/achatina.png' , 'https://i.ibb.co/s69h22L/achatina.webp' ];
      case 'Allosaurus'://
        return [ 'https://www.dododex.com/taming/allosaurus', 'Allosaurus', 'https://arkids.net/image/creature/120/allosaurus.png' , 'https://i.ibb.co/bBDYF3c/allosaurus.webp' ];
      case 'Amargasaurus'://
        return [ 'https://www.dododex.com/taming/amargasaurus', 'Amargasaurus', 'https://arkids.net/image/creature/120/amargasaurus.png' , 'https://i.ibb.co/zQHM6F2/amargasaurus.webp' ];
      case 'Andrewsarchus'://
        return [ 'https://www.dododex.com/taming/andrewsarchus', 'Andrewsarchus', 'https://arkids.net/image/creature/120/andrewsarchus.png' , 'https://i.ibb.co/vkbkvwk/andrewsarchus.webp' ];
      case 'Anky':
        return [ 'https://www.dododex.com/taming/ankylosaurus', 'Ankylosaurus (Anky)', 'https://arkids.net/image/creature/120/ankylosaurus.png' , 'https://i.ibb.co/xJ7cS7w/ankylosaurus.webp' ];
      case 'Araneo'://
        return [ 'https://www.dododex.com/taming/araneo', 'Araneo', 'https://arkids.net/image/creature/120/araneo.png' , 'https://i.ibb.co/fG4Qh9h/araneo.webp' ];
      case 'Archaeopteryx'://
        return [ 'https://www.dododex.com/taming/archaeopteryx', 'Archaeopteryx', 'https://arkids.net/image/creature/120/archaeopteryx.png' , 'https://i.ibb.co/tppCbRv/archaeopteryx.webp' ];
      case 'Argent':
        return [ 'https://www.dododex.com/taming/argentavis', 'Argentavis (Argent)', 'https://arkids.net/image/creature/120/argentavis.png' , 'https://i.ibb.co/YjMQ4dx/argentavis.webp' ];
      case 'Arthropluera'://
        return [ 'https://www.dododex.com/taming/arthropluera', 'Arthropluera', 'https://arkids.net/image/creature/120/arthropluera.png' , 'https://i.ibb.co/g4zRMcG/arthropluera.webp' ];
      case 'Astrocetus'://
        return [ 'https://www.dododex.com/taming/astrocetus', 'Astrocetus', 'https://arkids.net/image/creature/120/astrocetus.png' , 'https://i.ibb.co/pj1Zznk/parasaur.webphttps://i.ibb.co/8BmygPC/astrocetus.webp' ];
      case 'Astrodelphis'://
        return [ 'https://www.dododex.com/taming/astrodelphis', 'Astrodelphis', 'https://arkids.net/image/creature/120/astrodelphis.png' , 'https://i.ibb.co/bLX3nk6/astrodelphis.webp' ];
      case 'Baryonyx':
        return [ 'https://www.dododex.com/taming/baryonyx', 'Baryonyx', 'https://arkids.net/image/creature/120/baryonyx.png' , 'https://i.ibb.co/XtfT73p/baryonyx.webp' ];
      case 'Basilisk'://
        return [ 'https://www.dododex.com/taming/basilisk', 'Basilisk', 'https://arkids.net/image/creature/120/basilisk.png' , 'https://i.ibb.co/nj34vsY/basilisk.webp' ];
      case 'Toad':
        return [ 'https://www.dododex.com/taming/beelzebufo', 'Beelzebufo (Toad)', 'https://arkids.net/image/creature/120/beelzebufo.png' , 'https://i.ibb.co/84PyRqb/beelzebufo.webp' ];
      case 'Bloodstalker'://
        return [ 'https://www.dododex.com/taming/bloodstalker', 'Bloodstalker', 'https://arkids.net/image/creature/120/bloodstalker.png' , 'https://i.ibb.co/0yM4Rhx/bloodstalker.webp' ];
      case 'Bronto':
        return [ 'https://www.dododex.com/taming/brontosaurus', 'Brontosaurus (Bronto)', 'https://arkids.net/image/creature/120/brontosaurus.png' , 'https://i.ibb.co/bFtq36L/brontosaurus.webp' ];
      case 'Bulbdog'://
        return [ 'https://www.dododex.com/taming/bulbdog', 'Bulbdog', 'https://arkids.net/image/creature/120/bulbdog.png' , 'https://i.ibb.co/sHrLJm0/bulbdog.webp' ];
      case 'Carcharodontosaurus'://
        return [ 'https://www.dododex.com/taming/carcharodontosaurus', 'Carcharodontosaurus', 'https://arkids.net/image/creature/120/carcharodontosaurus.png' , 'https://i.ibb.co/99BmK6D/carcharodontosaurus.webp' ];
      case 'Carno':
        return [ 'https://www.dododex.com/taming/carnotaurus', 'Carnotaurus (Carno)', 'https://arkids.net/image/creature/120/carnotaurus.png' , 'https://i.ibb.co/Mg0TmN3/carnotaurus.webp' ];
      case 'Beaver':
        return [ 'https://www.dododex.com/taming/castoroides', 'Castoroides (Beaver)', 'https://arkids.net/image/creature/120/castoroides.png' , 'https://i.ibb.co/TK3mHLx/castoroides.webp' ];
      case 'Chalicotherium'://
        return [ 'https://www.dododex.com/taming/chalicotherium', 'Chalicotherium', 'https://arkids.net/image/creature/120/chalicotherium.png' , 'https://i.ibb.co/DpmNHBY/chalicotherium.webp' ];
      case 'Compy'://
        return [ 'https://www.dododex.com/taming/compy', 'Compy', 'https://arkids.net/image/creature/120/compy.png' , 'https://i.ibb.co/Hh9KXVq/compy.webp' ];
      //Crystal Wyverns
      case 'Blood Crystal Wyvern':
        return [ 'https://www.dododex.com/taming/crystalwyvern', 'Blood Crystal Wyvern', 'https://arkids.net/image/creature/120/crystal-wyvern-blood.png' , 'https://i.ibb.co/v4wxQVx/crystalwyvern.webp' ];
      case 'Ember Crystal Wyvern':
        return [ 'https://www.dododex.com/taming/crystalwyvern', 'Ember Crystal Wyvern', 'https://arkids.net/image/creature/120/crystal-wyvern-ember.png' , 'https://i.ibb.co/v4wxQVx/crystalwyvern.webp' ];
      case 'Tropical Crystal Wyvern'://
        return [ 'https://www.dododex.com/taming/crystalwyvern', 'Tropical Crystal Wyvern', 'https://arkids.net/image/creature/120/crystal-wyvern-tropical.png' , 'https://i.ibb.co/v4wxQVx/crystalwyvern.webp' ];
      //
      case 'Daeodon':
        return [ 'https://www.dododex.com/taming/daeodon', 'Daeodon', 'https://arkids.net/image/creature/120/daeodon.png' , 'https://i.ibb.co/sWzZrSZ/daeodon.webp' ];
      case 'Deinonychus'://
        return [ 'https://www.dododex.com/taming/deinonychus', 'Deinonychus', 'https://arkids.net/image/creature/120/deinonychus.png' , 'https://i.ibb.co/jrkqBQM/deinonychus.webp' ];
      case 'Desmodus'://
        return [ 'https://www.dododex.com/taming/desmodus', 'Desmodus', 'https://ark.wiki.gg/images/thumb/f/f0/Desmodus.png/43px-Desmodus.png' , 'https://i.ibb.co/7bcFLgG/desmodus.webp' ];
      case 'Dilophosaur'://
        return [ 'https://www.dododex.com/taming/dilophosaur', 'Dilophosaur', 'https://arkids.net/image/creature/120/dilophosaur.png' , 'https://i.ibb.co/P5LS04R/dilophosaur.webp' ];
      case 'Dimetrodon':
        return [ 'https://www.dododex.com/taming/dimetrodon', 'Dimetrodon', 'https://arkids.net/image/creature/120/dimetrodon.png' , 'https://i.ibb.co/7XDxrck/dimetrodon.webp' ];
      case 'Dimorphodon'://
        return [ 'https://www.dododex.com/taming/dimorphodon', 'Dimorphodon', 'https://arkids.net/image/creature/120/dimorphodon.png' , 'https://i.ibb.co/yWgNk4G/dimorphodon.webp' ];
      case 'Dinopithecus'://
        return [ 'https://www.dododex.com/taming/dinopithecus', 'Dinopithecus', 'https://arkids.net/image/creature/120/dinopithecus.png' , 'https://i.ibb.co/DVDfXSL/dinopithecus.webp' ];
      case 'Diplocaulus':
        return [ 'https://www.dododex.com/taming/diplocaulus', 'Diplocaulus', 'https://arkids.net/image/creature/120/diplocaulus.png' , 'https://i.ibb.co/zFgbrWK/diplocaulus.webp' ];
      case 'Diplodocus'://
        return [ 'https://www.dododex.com/taming/diplodocus', 'Diplodocus', 'https://arkids.net/image/creature/120/diplodocus.png' , 'https://i.ibb.co/YfV4Fbx/diplodocus.webp' ];
      case 'Direbear'://
        return [ 'https://www.dododex.com/taming/direbear', 'Direbear', 'https://arkids.net/image/creature/120/direbear.png' , 'https://i.ibb.co/KFQnVNM/direbear.webp' ];
      case 'Direwolf':
        return [ 'https://www.dododex.com/taming/direwolf', 'Direwolf', 'https://arkids.net/image/creature/120/direwolf.png' , 'https://i.ibb.co/v4LYRL4/direwolf.webp' ];
      case 'Dodo'://
        return [ 'https://www.dododex.com/taming/dodo', 'Dodo', 'https://arkids.net/image/creature/120/dodo.png' , 'https://i.ibb.co/S5byFhD/dodo.webp' ];
      case 'Doed'://
        return [ 'https://www.dododex.com/taming/doedicurus', 'Doedicurus', 'https://arkids.net/image/creature/120/doedicurus.png' , 'https://i.ibb.co/7GbPTDQ/doedicurus.webp' ];
      case 'Dung Beetle'://
        return [ 'https://www.dododex.com/taming/dungbeetle', 'Dung Beetle', 'https://arkids.net/image/creature/120/dung-beetle.png' , 'https://i.ibb.co/s6fFGC5/dungbeetle.webp' ];
      case 'Equus'://
        return [ 'https://www.dododex.com/taming/equus', 'Equus', 'https://arkids.net/image/creature/120/equus.png' , 'https://i.ibb.co/V3Yfwjh/equus.webp' ];
      case 'Featherlight'://
        return [ 'https://www.dododex.com/taming/featherlight', 'Featherlight', 'https://arkids.net/image/creature/120/featherlight.png' , 'https://i.ibb.co/M123RvN/featherlight.webp' ];
      case 'Fenrir'://
        return [ 'https://www.dododex.com/taming/fenrir', 'Fenrir', 'https://arkids.net/image/creature/120/fenrir.png' , 'https://i.ibb.co/P63yRJR/fenrir.webp' ];
      case 'Ferox'://
        return [ 'https://www.dododex.com/taming/ferox', 'Ferox', 'https://arkids.net/image/creature/120/ferox-small.png' , 'https://i.ibb.co/SvsMhRV/ferox.webp' ];
      case 'Fjordhawk'://
        return [ 'https://www.dododex.com/taming/fjordhawk', 'Fjordhawk', 'https://ark.wiki.gg/images/thumb/b/b9/Fjordhawk.png/43px-Fjordhawk.png' , 'https://i.ibb.co/yR1fdtx/fjordhawk.webp' ];
      case 'Gacha'://
        return [ 'https://www.dododex.com/taming/gacha', 'Gacha', 'https://arkids.net/image/creature/120/gacha.png' , 'https://i.ibb.co/f1QRG1p/gacha.webp' ];
      case 'Gallimimus'://
        return [ 'https://www.dododex.com/taming/gallimimus', 'Gallimimus', 'https://arkids.net/image/creature/120/gallimimus.png' , 'https://i.ibb.co/HrDVkLG/gallimimus.webp' ];
      case 'GasBags':
        return [ 'https://www.dododex.com/taming/gasbags', 'GasBags', 'https://arkids.net/image/creature/120/gasbags.png' , 'https://i.ibb.co/4g38cTZ/gasbags.webp' ];
      case 'Giant Bee'://
        return [ 'https://www.dododex.com/taming/giantbee', 'Giant Bee', 'https://arkids.net/image/creature/120/giant-bee.png' , 'https://i.ibb.co/g7Wkwk6/giantbee.webp' ];
      case 'Griffin'://
        return [ 'https://www.dododex.com/taming/griffin', 'Griffin', 'https://arkids.net/image/creature/120/griffin.png' , 'https://i.ibb.co/FXyXY89/griffin.webp' ];
      case 'Gigant':
        return [ 'https://www.dododex.com/taming/giganotosaurus', 'Giganotosaurus (Gigant)', 'https://arkids.net/image/creature/120/giganotosaurus.png' , 'https://i.ibb.co/gv92Fmy/giganotosaurus.webp' ];
      case 'Gigantopithecus'://
        return [ 'https://www.dododex.com/taming/gigantopithecus', 'Gigantopithecus', 'https://arkids.net/image/creature/120/gigantopithecus.png' , 'https://i.ibb.co/ZM30dDB/gigantopithecus.webp' ];
      case 'Glowtail'://
        return [ 'https://www.dododex.com/taming/glowtail', 'Glowtail', 'https://arkids.net/image/creature/120/glowtail.png' , 'https://i.ibb.co/fQJzX5s/glowtail.webp' ];
      case 'Hesperornis'://
        return [ 'https://www.dododex.com/taming/hesperornis', 'Hesperornis', 'https://arkids.net/image/creature/120/hesperornis.png' , 'https://i.ibb.co/wyNfm0F/hesperornis.webp' ];
      case 'Hyaenodon'://
        return [ 'https://www.dododex.com/taming/hyaenodon', 'Hyaenodon', 'https://arkids.net/image/creature/120/hyaenodon.png' , 'https://i.ibb.co/V94SFGm/hyaenodon.webp' ];
      case 'Ichthyornis'://
        return [ 'https://www.dododex.com/taming/ichthyornis', 'Ichthyornis', 'https://arkids.net/image/creature/120/ichthyornis.png' , 'https://i.ibb.co/bXVcnfr/ichthyornis.webp' ];
      case 'Iguanodon'://
        return [ 'https://www.dododex.com/taming/iguanodon', 'Iguanodon', 'https://arkids.net/image/creature/120/iguanodon.png' , 'https://i.ibb.co/fpp8L3K/iguanodon.webp' ];
      case 'Jerboa'://
        return [ 'https://www.dododex.com/taming/jerboa', 'Jerboa', 'https://arkids.net/image/creature/120/jerboa.png' , 'https://i.ibb.co/R699tV9/jerboa.webp' ];
      case 'Kairu':
        return [ 'https://www.dododex.com/taming/kairuku', 'Kairuku (Kairu)', 'https://arkids.net/image/creature/120/kairuku.png' , 'https://i.ibb.co/3CdRK87/kairuku.webp' ];
      case 'Kaprosuchus'://
        return [ 'https://www.dododex.com/taming/kaprosuchus', 'Kaprosuchus', 'https://arkids.net/image/creature/120/kaprosuchus.png' , 'https://i.ibb.co/Jmdf7Ty/kaprosuchus.webp' ];
      case 'Karkinos'://
        return [ 'https://www.dododex.com/taming/karkinos', 'Karkinos', 'https://arkids.net/image/creature/120/karkinos.png' , 'https://i.ibb.co/ysYZDCg/karkinos.webp' ];
      case 'Kentrosaurus'://
        return [ 'https://www.dododex.com/taming/kentrosaurus', 'Kentrosaurus', 'https://arkids.net/image/creature/120/kentrosaurus.png' , 'https://i.ibb.co/QkfQHJD/kentrosaurus.webp' ];
      case 'Lymantria'://
        return [ 'https://www.dododex.com/taming/lymantria', 'Lymantria', 'https://arkids.net/image/creature/120/lymantria.png' , 'https://i.ibb.co/28Yrs6g/lymantria.webp' ];
      case 'Lystrosaurus'://
        return [ 'https://www.dododex.com/taming/lystrosaurus', 'Lystrosaurus', 'https://arkids.net/image/creature/120/lystrosaurus.png' , 'https://i.ibb.co/TqrcGhw/lystrosaurus.webp' ];
      case 'Maewing'://
        return [ 'https://www.dododex.com/taming/maewing', 'Maewing', 'https://arkids.net/image/creature/120/maewing.png' , 'https://i.ibb.co/2yTBpHX/maewing.webp' ];
      case 'Mammoth'://
        return [ 'https://www.dododex.com/taming/mammoth', 'Mammoth', 'https://arkids.net/image/creature/120/mammoth.png' , 'https://i.ibb.co/f4pLqqC/mammoth.webp' ];
      case 'Managarmr':
        return [ 'https://www.dododex.com/taming/magmasaur', 'Magmasaur', 'https://arkids.net/image/creature/120/magmasaur.png' , 'https://i.ibb.co/mRCcxw7/magmasaur.webp' ];
      case 'Mantis'://
        return [ 'https://www.dododex.com/taming/mantis', 'Mantis', 'https://arkids.net/image/creature/120/mantis.png' , 'https://i.ibb.co/4mqQpkQ/mantis.webp' ];
      case 'Megalania'://
        return [ 'https://www.dododex.com/taming/megalania', 'Megalania', 'https://arkids.net/image/creature/120/megalania.png' , 'https://i.ibb.co/NSQJKHn/megalania.webp' ];
      case 'Stag'://
        return [ 'https://www.dododex.com/taming/megaloceros', 'Megaloceros', 'https://arkids.net/image/creature/120/megaloceros.png' , 'https://i.ibb.co/yXPjB3N/megaloceros.webp' ];
      case 'Mega':
        return [ 'https://www.dododex.com/taming/megalodon', 'Megalodon (Mega)', 'https://arkids.net/image/creature/120/megalodon.png' , 'https://i.ibb.co/2S1cB6n/megalodon.webp' ];
      case 'Megalosaurus'://
        return [ 'https://www.dododex.com/taming/megalosaurus', 'Megalosaurus', 'https://arkids.net/image/creature/120/megalosaurus.png' , 'https://i.ibb.co/yRsBRZw/megalosaurus.webp' ];
      case 'Megatherium'://
        return [ 'https://www.dododex.com/taming/megatherium', 'Megatherium', 'https://arkids.net/image/creature/120/megatherium.png' , 'https://i.ibb.co/HVcFsBB/megatherium.webp' ];
      case 'Mesopithecus'://
        return [ 'https://www.dododex.com/taming/mesopithecus', 'Mesopithecus', 'https://arkids.net/image/creature/120/mesopithecus.png' , 'https://i.ibb.co/RcV4L8N/mesopithecus.webp' ];
      case 'Microraptor'://
        return [ 'https://www.dododex.com/taming/microraptor', 'Microraptor', 'https://arkids.net/image/creature/120/microraptor.png' , 'https://i.ibb.co/PYN4F25/microraptor.webp' ];
      case 'Morellatops'://
        return [ 'https://www.dododex.com/taming/morellatops', 'Morellatops', 'https://arkids.net/image/creature/120/morellatops.png' , 'https://i.ibb.co/gdsTtBg/morellatops.webp' ];
      case 'Moschops'://
        return [ 'https://www.dododex.com/taming/moschops', 'Moschops', 'https://arkids.net/image/creature/120/moschops.png' , 'https://i.ibb.co/1rF29Lj/moschops.webp' ];
      case 'Noglin'://
        return [ 'https://www.dododex.com/taming/noglin', 'Noglin', 'https://arkids.net/image/creature/120/noglin.png' , 'https://i.ibb.co/JpsvGNz/noglin.webp' ];
      case 'Onyc'://
        return [ 'https://www.dododex.com/taming/onyc', 'Onychonycteris', 'https://arkids.net/image/creature/120/onychonycteris.png' , 'https://i.ibb.co/nLHkMyk/onyc.webp' ];
      case 'Otter':
        return [ 'https://www.dododex.com/taming/otter', 'Otter', 'https://arkids.net/image/creature/120/otter.png' , 'https://i.ibb.co/TT31Lf4/otter.webp' ];
      case 'Oviraptor'://
        return [ 'https://www.dododex.com/taming/oviraptor', 'Oviraptor', 'https://arkids.net/image/creature/120/oviraptor.png' , 'https://i.ibb.co/1RPQ3cn/oviraptor.webp' ];
      case 'Ovis'://
        return [ 'https://www.dododex.com/taming/ovis', 'Ovis', 'https://arkids.net/image/creature/120/ovis.png' , 'https://i.ibb.co/jrfv10g/ovis.webp' ];
      case 'Pachy'://
        return [ 'https://www.dododex.com/taming/pachy', 'Pachycephalosaurus (Pachy)', 'https://arkids.net/image/creature/120/pachy.png' , 'https://i.ibb.co/TBFRX05/pachy.webp' ];
      case 'Pachyrhinosaurus'://
        return [ 'https://www.dododex.com/taming/pachyrhinosaurus', 'Pachyrhinosaurus', 'https://arkids.net/image/creature/120/pachyrhinosaurus.png' , 'https://i.ibb.co/YcVDpPM/pachyrhinosaurus.webp' ];
      case 'Paracer'://
        return [ 'https://www.dododex.com/taming/paracer', 'Paraceratherium (Paracer)', 'https://arkids.net/image/creature/120/paraceratherium.png' , 'https://i.ibb.co/WP89xzd/paracer.webp' ];
      case 'Para':
        return [ 'https://www.dododex.com/taming/parasaur', 'Parasaurolophus (Para)', 'https://arkids.net/image/creature/120/parasaurolophus.png' , 'https://i.ibb.co/pj1Zznk/parasaur.webp' ];
      case 'Pegomastax'://
        return [ 'https://www.dododex.com/taming/pegomastax', 'Pegomastax', 'https://arkids.net/image/creature/120/pegomastax.png' , 'https://i.ibb.co/ftnVHr2/pegomastax.webp' ];
      case 'Pelagornis'://
        return [ 'https://www.dododex.com/taming/pelagornis', 'Pelagornis', 'https://arkids.net/image/creature/120/pelagornis.png' , 'https://i.ibb.co/Wc0nq03/pelagornis.webp' ];
      case 'Phiomia':
        return [ 'https://www.dododex.com/taming/phiomia', 'Phiomia', 'https://arkids.net/image/creature/120/phiomia.png' , 'https://i.ibb.co/86P6n2J/phiomia.webp' ];
      case 'Phoenix'://
        return [ 'https://www.dododex.com/taming/phoenix', 'Phoenix', 'https://arkids.net/image/creature/120/pelagornis.png' , 'https://i.ibb.co/25xKfBM/phoenix.webp' ];
      case 'Plesiosaur':
        return [ 'https://www.dododex.com/taming/plesiosaur', 'Plesiosaur', 'https://arkids.net/image/creature/120/plesiosaur.png' , 'https://i.ibb.co/2WSLGPw/plesiosaur.webp' ];
      case 'Ptera':
        return [ 'https://www.dododex.com/taming/pteranodon', 'Pteranodon', 'https://arkids.net/image/creature/120/pteranodon.png' , 'https://i.ibb.co/P98s8f4/pteranodon.webp' ];
      case 'Quetzal'://
        return [ 'https://www.dododex.com/taming/quetzal', 'Quetzalcoatlus', 'https://arkids.net/image/creature/120/quetzalcoatlus.png' , 'https://i.ibb.co/P6qH8Gm/quetzal.webp' ];
      case 'Raptor'://
        return [ 'https://www.dododex.com/taming/raptor', 'Raptor', 'https://arkids.net/image/creature/120/raptor.png' , 'https://i.ibb.co/V26Q4F7/raptor.webp' ];
      case 'Rex':
        return [ 'https://www.dododex.com/taming/rex', 'Rex', 'https://arkids.net/image/creature/120/rex.png' , 'https://i.ibb.co/5BJR32Q/rex.webp' ];
      case 'Tek Rex':
        return [ 'https://www.dododex.com/taming/rex', 'Tek Rex', 'https://arkids.net/image/creature/120/rex.png' , 'https://i.ibb.co/tzH9S5m/Tek-Rex-Paint-Region0.webp' ];
      case 'Turtle':
        return [ 'https://www.dododex.com/taming/carbonemys', 'Carbonemys (Turtle)', 'https://arkids.net/image/creature/120/carbonemys.png' , 'https://i.ibb.co/sbCTTzJ/carbonemys.webp' ];
      case 'Rhyniognatha':// using placehold icon
        return [ 'https://www.dododex.com/taming/rhyniognatha', 'Rhyniognatha', 'https://arkids.net/image/creature/120/eden-direwolf.png' , 'https://i.ibb.co/Vgthb1H/rhyniognatha.webp' ];
      case 'Sinomacrops'://
        return [ 'https://www.dododex.com/taming/sinomacrops', 'Sinomacrops', 'https://arkids.net/image/creature/120/sinomacrops.png' , 'https://i.ibb.co/BjJ8RdP/sinomacrops.webp' ];
      case 'Spino':
        return [ 'https://www.dododex.com/taming/spinosaur', 'Spinosaurus (Spino)', 'https://arkids.net/image/creature/120/spino.png' , 'https://i.ibb.co/XkdNrHn/spinosaur.webp' ];
      case 'Snow Owl'://
        return [ 'https://www.dododex.com/taming/snowowl', 'Snow Owl', 'https://arkids.net/image/creature/120/snow-owl.png' , 'https://i.ibb.co/JxWM2cz/snowowl.webp' ];
      case 'Tapejara'://
        return [ 'https://www.dododex.com/taming/tapejara', 'Tapejara', 'https://arkids.net/image/creature/120/tapejara.png' , 'https://i.ibb.co/rFQCyph/tapejara.webp' ];
      case 'Tropeognathus':
        return [ 'https://www.dododex.com/taming/tropeognathus', 'Tropeognathus', 'https://arkids.net/image/creature/120/tropeognathus.png' , 'https://i.ibb.co/Lp7JzHs/tropeognathus.webp' ];
      case 'Tek Wyvern'://
        return [ 'https://www.dododex.com/taming/voidwyrm', 'Voidwyrm', 'https://arkids.net/image/creature/120/tek-wyvern.png' , 'https://i.ibb.co/j6jPcC4/voidwyrm.webp' ];
      case 'Vulture'://
        return [ 'https://www.dododex.com/taming/vulture', 'Vulture', 'https://arkids.net/image/creature/120/vulture.png' , 'https://i.ibb.co/QppVNDF/vulture.webp' ];
      case 'Wyvern'://
        return [ 'https://www.dododex.com/taming/wyvern', 'Wyvern', 'https://arkids.net/image/creature/120/wyvern.png' , 'https://i.ibb.co/QP6g5ys/wyvern.webp' ];
      case 'Yutyrannus'://
        return [ 'https://www.dododex.com/taming/yutyrannus', 'Yutyrannus', 'https://arkids.net/image/creature/120/yutyrannus.png' , 'https://i.ibb.co/HhzrbnS/yutyrannus.webp' ];
        //
      default:
        return 'Unknown species.';
        //return [ '', 'Unknown species.', '', '' ];
    }
  }
  // here we can add more functions, divided by a comma
}

// if you want to export only one function
// declare it normally and then export it
//module.exports = lookup;