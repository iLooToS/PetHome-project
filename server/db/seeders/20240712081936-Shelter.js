"use strict";
const shelters = [
  {
    userId: 1,
    locationId: 1,
    name: "John Shelter",
    logo: "/img/johnShelter.jpg",
    description: "A family-friendly shelter for dogs.",
    phone: "+7 (900) 000-00-00",
    status: true,
  },
  {
    userId: 4,
    locationId: 2,
    name: "Ржевка",
    logo: "/img/logo 1.jpg",
    description: "Приют для бездомных кошек и собак",
    phone: "+7(921) 741-49-01",
    status: true,
  },
  {
    //3
    userId: 5,
    locationId: 3,
    name: "Приют Бирюлёво",
    logo: "/img/LOGO 2.png",
    description:
      "Приют для бездомных животных в Москве. У нас живёт более 2500 собак и кошек. Им нужна ваша помощь!",
    phone: "+7 (915) 120-16-21",
    status: true,
  },
  {
    //4
    userId: 6,
    locationId: 4,
    name: "Преданное сердце",
    logo: "/img/logo 3.jpg",
    description:
      "«Преданное Сердце» – это про ответственное обращение с животными. «Преданное Сердце» – это про победу над низким уровнем культуры по отношению к братьям нашим меньшим. Про заботу и любовь. Про защиту и опеку. Про осознанное отношение человека к выбору питомца.",
    phone: "+7 (921) 953-09-18",
    status: true,
  },
  {
    //5
    userId: 7,
    locationId: 5,
    name: "ПРИЮТ г. Мурманск",
    logo: "/img/logo 5.jpg",
    description:
      'ПРИЮТ - место, где можно спастись (Д.М. Ушаков Толковый словарь). Приют – Региональная общественная организация Мурманской области "Добровольное общество защиты бездомных животных "Приют".',
    phone: "+7 (921) 514-01-95",
    status: true,
  },
  {
    //6
    userId: 8,
    locationId: 6,
    name: "Шанс на жизнь",
    logo: "/img/logo6.jpg",
    description:
      "Частный приют в г. Новокузнецк. На данный момент порядка 1000 брошенных и покалеченных судеб расположилось под нашей крышей и более 1000 уже нашли свой дом с момента открытия. Приют не имеет государственного обеспечения и полностью содержится за счет пожертвований неравнодушных людей .",
    phone: "+7 (983) 251-06-66",
    status: true,
  },
  {
    //7
    userId: 9,
    locationId: 7,
    name: "Омские хвостики",
    logo: "/img/logo7.jpg",
    description:
      'Приют для бездомных животных "Омские хвостики". Наш БОЛЬШОЙ приют образовался еще в 2014 г. Первые 30 собак были спасены из "усыпалки" по ул.Барабинская...", phone: "+7 (381) 249-87-66',
    phone: "+7 (381) 249-87-66",
    status: true,
  },
  {
    //8
    userId: 10,
    locationId: 8,
    name: "ЛЮСЬКИН ДОМ",
    logo: "/img/logo8.jpg",
    description:
      "Частный приют для кошек, который содержится на пожертвования благодетелей и личные средства волонтёров.",
    phone: "+7 (989) 343-33-33",
    status: true,
  },
  {
    //9
    userId: 11,
    locationId: 9,
    name: "Лучший друг",
    logo: "/img/logo9.jpg",
    description:
      "В задачи приюта входит лечение и последующее пристройство пострадавших, больных и травмированных бездомных животных города Ставрополя, а также стерилизация и вакцинация безнадзорных животных с целью решения проблемы численности безнадзорных животных на улицах города.",
    phone: "+7 (928) 316-39-65",
    status: true,
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Shelters", shelters, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Shelters", null, {});
  },
};
