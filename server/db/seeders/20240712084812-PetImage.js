"use strict";
const petImages = [
  {
    petId: 1,
    url: "/img/petImage11.jpg",
  },
  {
    petId: 1,
    url: "/img/PetImage12.jpeg",
  },
  {
    petId: 2,
    url: "/img/petImage22.jpg",
  },
  {
    petId: 2,
    url: "/img/wdawda22.jpg",
  },
  {
    petId: 3,
    url: "/img/petImage33.jpg",
  },
  {
    petId: 3,
    url: "/img/wadawdawd.jpg",
  },
  {
    petId: 4,
    url: "/img/uma.jpg",
  },
  {
    petId: 5,
    url: "/img/Legenda.jpg",
  },
  {
    petId: 6,
    url: "/img/brungilda.jpg",
  },
  {
    petId: 7,
    url: "/img/rhizkic.jpg",
  },
  {
    petId: 8,
    url: "/img/avrora.jpg",
  },
  {
    petId: 9,
    url: "/img/per4ik.jpg",
  },
  {
    petId: 9,
    url: "/img/per4ik2.jpg",
  },
  {
    petId: 9,
    url: "/img/per4ik3.jpg",
  },
  {
    petId: 10,
    url: "/img/brusketka.jpg",
  },
  {
    petId: 10,
    url: "/img/brusketka2.jpg",
  },
  {
    petId: 10,
    url: "/img/brusketka3.jpg",
  },
  {
    petId: 11,
    url: "/img/masha.jpg",
  },
  {
    petId: 12,
    url: "/img/malishdgjen.jpg",
  },
  {
    petId: 13,
    url: "/img/enzo.jpg",
  },
  {
    petId: 13,
    url: "/img/enzo2.jpg",
  },
  {
    petId: 13,
    url: "/img/enzo3.jpg",
  },
  {
    petId: 14,
    url: "/img/madlen.jpg",
  },
  {
    petId: 15,
    url: "/img/spenser.png",
  },
  {
    petId: 16,
    url: "/img/onika.jpg",
  },
  {
    petId: 17,
    url: "/img/ba4hata.jpg",
  },
  {
    petId: 18,
    url: "/img/signi.jpg",
  },
  {
    petId: 19,
    url: "/img/nick.jpg",
  },
  {
    petId: 19,
    url: "/img/nick.jpg",
  },
  {
    petId: 20,
    url: "/img/nusha.jpg",
  },
  {
    petId: 21,
    url: "/img/akmaz1.jpg",
  },
  {
    petId: 21,
    url: "/img/akmaz2.jpg",
  },
  {
    petId: 21,
    url: "/img/akmaz3.jpg",
  },
  {
    petId: 22,
    url: "/img/nesterpetrovi4.jpg",
  },
  {
    petId: 22,
    url: "/img/nesterpetrovi42.jpg",
  },
  {
    petId: 23,
    url: "/img/amenhotep.jpg",
  },
  {
    petId: 23,
    url: "/img/amenhotep2.jpg",
  },
  {
    petId: 24,
    url: "/img/poshok.jpg",
  },
  {
    petId: 24,
    url: "/img/poshok2.jpg",
  },
  {
    petId: 25,
    url: "/img/larry.jpg",
  },
  {
    petId: 25,
    url: "/img/larry2.jpg",
  },
  {
    petId: 26,
    url: "/img/kirysha.jpg",
  },
  {
    petId: 26,
    url: "/img/kirysha2.jpg",
  },
  {
    petId: 27,
    url: "/img/izabella.jpg",
  },
  {
    petId: 27,
    url: "/img/izabella2.jpg",
  },
  {
    petId: 28,
    url: "/img/sara.jpg",
  },
  {
    petId: 28,
    url: "/img/sara2.jpg",
  },
  {
    petId: 28,
    url: "/img/sara3.jpg",
  },
  {
    petId: 29,
    url: "/img/mailo.jpg",
  },
  {
    petId: 29,
    url: "/img/mailo2.jpg",
  },
  {
    petId: 29,
    url: "/img/mailo3.jpg",
  },
  {
    petId: 30,
    url: "/img/felizia.jpg",
  },
  {
    petId: 30,
    url: "/img/felizia2.jpg",
  },
  {
    petId: 31,
    url: "/img/aiza.jpg",
  },
  {
    petId: 31,
    url: "/img/aiza2.jpg",
  },
  {
    petId: 31,
    url: "/img/aiza3.jpg",
  },
  {
    petId: 32,
    url: "/img/altai.jpg",
  },
  {
    petId: 32,
    url: "/img/altai2.jpg",
  },
  {
    petId: 32,
    url: "/img/altai3.jpg",
  },
  {
    petId: 33,
    url: "/img/zaza.jpg",
  },
  {
    petId: 33,
    url: "/img/zaza2.jpg",
  },
  {
    petId: 34,
    url: "/img/monti.jpg",
  },
  {
    petId: 34,
    url: "/img/monti2.jpg",
  },
  {
    petId: 34,
    url: "/img/monti3.jpg",
  },
  {
    petId: 35,
    url: "/img/eva.jpg",
  },
  {
    petId: 35,
    url: "/img/eva2.jpg",
  },
  {
    petId: 36,
    url: "/img/tyzua.jpg",
  },
  {
    petId: 36,
    url: "/img/tyzua2.jpg",
  },
  {
    petId: 37,
    url: "/img/gevorg.jpg",
  },
  {
    petId: 37,
    url: "/img/gevorg2.jpg",
  },
  {
    petId: 38,
    url: "/img/saskha.jpg",
  },
  {
    petId: 38,
    url: "/img/saskha2.jpg",
  },
  {
    petId: 39,
    url: "/img/bob.jpg",
  },
  {
    petId: 39,
    url: "/img/bob2.jpg",
  },
  {
    petId: 40,
    url: "/img/bazilio.jpg",
  },
  {
    petId: 40,
    url: "/img/bazilio2.jpg",
  },
  {
    petId: 41,
    url: "/img/zhuk.jpg",
  },
  {
    petId: 41,
    url: "/img/zhuk2.jpg",
  },
  {
    petId: 42,
    url: "/img/ydakha.jpg",
  },
  {
    petId: 42,
    url: "/img/ydakha2.jpg",
  },
  {
    petId: 43,
    url: "/img/byba.jpg",
  },
  {
    petId: 43,
    url: "/img/byba2.jpg",
  },
  {
    petId: 43,
    url: "/img/byba3.jpg",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("PetImages", petImages, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PetImages", null, {});
  },
};
