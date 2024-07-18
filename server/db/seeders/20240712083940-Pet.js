"use strict";
const pets = [
  {
    shelterId: 1,
    petType: "Собака",
    petSize: "Большой",
    name: "Ti Big Dog",
    age: 1,
    description: "Очень любит гулять",
    isSex: true,
    isCastration: false,
    isTemperament: true,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    shelterId: 1,
    petType: "Собака",
    petSize: "Маленький",
    name: "Lil Li Dog",
    age: 4,
    description: "Очень любит есть",
    isSex: false,
    isCastration: false,
    isTemperament: true,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    shelterId: 1,
    petType: "Кошка",
    petSize: "Средний",
    name: "Cat Li",
    age: 10,
    description: "Очень любит спать",
    isSex: false,
    isCastration: false,
    isTemperament: true,
    isChipping: true,
    isVaccination: true,
    isPassport: false,
  },
  {
    //4
    shelterId: 2,
    petType: "Собака",
    petSize: "Средний",
    name: "Ума",
    age: 1,
    description:
      "Очень добрая девочка-метис. Любит бегать по зелёной травке, хорошо дружит с другими собаками. Не любит кошек.",
    isSex: false,
    isCastration: false,
    isTemperament: true,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //5
    shelterId: 2,
    petType: "Кошка",
    petSize: "Маленький",
    name: "Легенда",
    age: 4,
    description: "Ласковая бывшедомашняя кошечка.",
    isSex: false,
    isCastration: true,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: false,
  },
  {
    //6
    shelterId: 2,
    petType: "Кошка",
    petSize: "Большой",
    name: "Брунгильда",
    age: 5,
    description: "Бывшедомашняя, крупная, спокойная кошка.",
    isSex: false,
    isCastration: false,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: false,
  },
  {
    //7
    shelterId: 2,
    petType: "Кошка",
    petSize: "Маленький",
    name: "Рыжик",
    age: 7,
    description: "Найден на улице, боязливый, осторожный котик.",
    isSex: true,
    isCastration: true,
    isTemperament: true,
    isChipping: true,
    isVaccination: true,
    isPassport: false,
  },
  {
    //8
    shelterId: 2,
    petType: "Собака",
    petSize: "Большой",
    name: "Аврора",
    age: 1,
    description:
      "История: у найденной беременной собаки родилось четыре щенка, двое нашли свой новый дом, а две девочки приехали в приют (сестра Афина). Спокойные и адаптированные подростки.",
    isSex: false,
    isCastration: false,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //9
    shelterId: 3,
    petType: "Собака",
    petSize: "Большой",
    name: "Перчик",
    age: 1,
    description:
      "Когда Перчик только попал в приют он был трепетным и скромным щеночком. Сейчас же он открыл свое сердечко этому миру, с удовольствем гуляет, нежится в объятиях человека, и, конечно, как и все малыши с трепетом ждет свою семью. Он отлично ладит с другими собаками, поэтому, если у вас уже есть питомец, то Перчику будет ему отличным другом. Хоть Перчик и не самого приметного окраса, но за его черной шубкой скрывается доброе и преданное сердце. Он точно так же, как и другие щенки, мечтает стать домашним и с нетерпением ждет тех самых людей, которые смогут разглядеть его очарование и уникальность. Должна же и для такого малыша, как Перчик где-то быть самая лучшая на свете семья? Ему всего 6 месяцев, привит и обработан ото всех паразитов. Полностью готов к переезду домой. Обязательно присмотритесь к этому обаяшке.",
    isSex: true,
    isCastration: false,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //10
    shelterId: 3,
    petType: "Собака",
    petSize: "Маленький",
    name: "Брускетта",
    age: 2,
    description:
      "Когда кроха Бру попала в приют - она была осторожной и тревожной девочкой. Большое количество собак, незнакомые и часто меняющиеся лица, крупные и активные соседи по вольеру - все это пугало ее. Чуть привыкнув и немного освоившись, Брускетта любопытно наблюдала за происходящим вокруг: волонтеры и гости начали вызывать интерес, а не страх, а еда из протянутой руки стала как будто более привлекательной :) Совсем скоро Бру отправилась на свою первую прогулку, познакомилась с амуницией , городом и жизнью за пределами приюта. Сейчас мы можем сказать наверняка, что это добрая и чудесная девочка, которая знает поводок, не прочь пообщаться с сородичами и перекусить чем-нибудь вкусненьким в компании своего человека :) И хоть Бру не побежит с первой встречи в объятия, любовь и забота помогут выстроить крепкие доверительные отношения, и эта кроха станет преданным и любимым другом семьи! Бру около 2х лет, размер в холке около 45 см (чуть ниже колена) - отличный кандидат для любой семьи :) Привита и стерилизована, мечтает отправиться в домашнюю жизнь!",
    isSex: false,
    isCastration: true,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //11
    shelterId: 3,
    petType: "Кошка",
    petSize: "Маленький",
    name: "Маша",
    age: 6,
    description:
      "Попала в приют, взяли из приюта, вернули в приют - какие только перипетии не встречались на жизненном пути Маши! Но научили они её одному: не унывать и везде искать позитив и решение. Поэтому Машенька такая шустрая, несмотря на свой возраст, любопытная, активная и привлекающая к себе внимание! Из-за её энергичного и живого темперамента на окнах в будущем доме обязательно нужно установить крепкие сетки (обязательное условие). Маша замечательно ладит с людьми и животными и с удовольствием будет разделять с каким-нибудь пушистым товарищем игру и, может быть, даже лежанку, но ей так хочется уже обрести всё своё: дом, семью, заботу... Машенька привита и стерилизована, ей примерно 6 лет.",
    isSex: false,
    isCastration: true,
    isTemperament: true,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Pets", pets, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pets", null, {});
  },
};
