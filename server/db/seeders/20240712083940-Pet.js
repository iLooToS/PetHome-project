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
  {
    //12
    shelterId: 3,
    petType: "Кошка",
    petSize: "Маленький",
    name: "Малыш Джон",
    age: 1,
    description:
      "Этот котёнок пухлее некоторых взрослых котов. И покрупнее! Но при этом, он остается ребёнком, обожает играть, носиться, прыгать и охотиться. Поэтому мы ищем ему дом, в котором хозяева позаботятся о защите окон для кота. Малыш Джон отлично ладит с другими котами и кошками, и возможно даже – не боится собак! Кастрированный, привит, красив, готов ехать домой. Ему чуть меньше года :)",
    isSex: true,
    isCastration: true,
    isTemperament: true,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //13
    shelterId: 3,
    petType: "Собака",
    petSize: "Средний",
    name: "Энцо",
    age: 2,
    description:
      "Малышу нужен дом и заботливый хозяин. С Энцо легко подружиться и полюбить его. Если вам нужен верный и веселый друг, Энцо – то, что надо. Приходите познакомиться с невероятным псом! Поболтайте с ним, поиграйте, угостите вкусняшками и убедитесь, что Энцо умеет быть благодарным и ласковым.",
    isSex: true,
    isCastration: true,
    isTemperament: true,
    isChipping: true,
    isVaccination: true,
    isPassport: true,
  },
  {
    //14
    shelterId: 4,
    petType: "Кошка",
    petSize: "Маленький",
    name: "Мадлен",
    age: 5,
    description:
      "Трехцветная, гладкошерстная. Метис. Дата рождения: июль 2019. Стерилизована. Спокойная, ласковая. Хозяйка заболела и переехала в семью детей, а там аллергики.",
    isSex: false,
    isCastration: true,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //15
    shelterId: 4,
    petType: "Кошка",
    petSize: "Большой",
    name: "Спенсер",
    age: 1,
    description:
      "Кастрирован. Ласковый, с характером. Отдали хозяева в связи с тем, что ребенок подросток издевался над животным.",
    isSex: true,
    isCastration: true,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //16
    shelterId: 4,
    petType: "Кошка",
    petSize: "Маленький",
    name: "Оника",
    age: 3,
    description:
      "Белая, гладкошерстная. Метис. Дата рождения: июнь 2021. Стерилизована. Спокойная, ласковая. Умерла хозяйка.",
    isSex: false,
    isCastration: true,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //17
    shelterId: 4,
    petType: "Кошка",
    petSize: "Средний",
    name: "Бачата",
    age: 5,
    description:
      "Рыже-белая, пушистая. Метис. Дата рождения: июнь 2019. Стерилизована. Ласковая, общительная. Умерла хозяйка.",
    isSex: false,
    isCastration: true,
    isTemperament: false,
    isChipping: false,
    isVaccination: false,
    isPassport: true,
  },
  {
    //18
    shelterId: 4,
    petType: "Кошка",
    petSize: "Большой",
    name: "Сигни",
    age: 2,
    description:
      "Табби с белым, пушистый. Метис. Дата рождения: май 2022. Кастрирован. Вакцинирован. Осторожный, спокойный. Был спасен из квартиры наркоманов.",
    isSex: true,
    isCastration: true,
    isTemperament: false,
    isChipping: true,
    isVaccination: true,
    isPassport: false,
  },
  {
    //19
    shelterId: 5,
    petType: "Собака",
    petSize: "Большой",
    name: "Ник",
    age: 2,
    description:
      "Волонтеры говорят: «Никусика надо своими глазами увидеть, чтобы безвозвратно влюбиться! Он даже сальто умеет делать (не знаю, кто за кем повторяет - он за соседом Плинтом или Плинт за Ником)»",
    isSex: true,
    isCastration: true,
    isTemperament: true,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //20
    shelterId: 5,
    petType: "Собака",
    petSize: "Средний",
    name: "Нюша",
    age: 5,
    description:
      "Нюшу нашли на улице, где она долго бродила. Когда поступила в приют, то была почти слепая, потом практически ослепла, и её оперировали. Сейчас прекрасно видит. Она диабетик, ей регулярно измеряют сахар в крови, делают уколы. Нюша чудесная собака с изумительным характером!!",
    isSex: false,
    isCastration: false,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //21
    shelterId: 5,
    petType: "Собака",
    petSize: "Большой",
    name: "Алмаз",
    age: 4,
    description:
      "Добродушный пушистый пёс ждёт свою семью в нашем приюте уже почти целый год. Ему очень нужны ласковые мама с папой!",
    isSex: true,
    isCastration: true,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //22
    shelterId: 5,
    petType: "Кошка",
    petSize: "Большой",
    name: "Нестор Петрович",
    age: 3,
    description:
      "Нестор Петрович – с характером: контактный, крутится рядом с человеком, дает себя погладить, но считает, что во всем должна быть мера - при попытке поднять на руки дает четко понять, что ему этого не хочется. Ну, такому красивому мужчине это простительно)) Лоялен к собачьим носам, но ревнив в отношении других кошачьих. Как все коты любопытен и деятелен ;)",
    isSex: true,
    isCastration: true,
    isTemperament: true,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //23
    shelterId: 5,
    petType: "Кошка",
    petSize: "Большой",
    name: "Аменхотеп",
    age: 4,
    description:
      "Подвальный затворник из Североморска. Такой славный, жЫрненький котей, почти сфинкс браш, ласковый-приласковый, тепленький такой и уютный. Назвали котьку Аменхотепом первым (ну почти сфинкс ведь!).",
    isSex: true,
    isCastration: false,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //24
    //6
    shelterId: 6,
    petType: "Кошка",
    petSize: "Средний",
    name: "Пушок",
    age: 2,
    description:
      "Котику 1,5-2 года, он кастрирован, привит и чипирован, знает лоточек, любит вкусно перекусить и поваляться. По характеру Пух настоящая личность, деловой, «да, потискай меня, я такой классный», «все, надоела, отстань». Котик не для игр с детьми… Пушок – это украшение дома, ему нужна тишина и ласка... абсолютно ненавязчивый. Он сам поиграет, когда захочет... На руки идёт, но не надолго – негоже барина сюсюкать.",
    isSex: true,
    isCastration: true,
    isTemperament: false,
    isChipping: true,
    isVaccination: true,
    isPassport: true,
  },
  {
    //25
    //6
    shelterId: 6,
    petType: "Собака",
    petSize: "Большой",
    name: "Ларри",
    age: 2,
    description:
      "Попал в приют по программе ОСВВ (отлов стерилизация вакцинация выпуск). Поэтому времени на его пристройство очень мало, дайте мальчишке шанс на счастливую жизнь",
    isSex: true,
    isCastration: true,
    isTemperament: true,
    isChipping: true,
    isVaccination: true,
    isPassport: false,
  },
  {
    //26
    //6
    shelterId: 6,
    petType: "Собака",
    petSize: "Большой",
    name: "Кирюша",
    age: 4,
    description:
      "Это Кирюша. Ему около 4 лет, совершенно глухой(после травмы), пристраивается в свой дом(на цепь либо в вольер), т.к есть проблемы после травмы",
    isSex: true,
    isCastration: false,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: false,
  },
  {
    //27
    //6
    shelterId: 6,
    petType: "Собака",
    petSize: "Большой",
    name: "Изабелла",
    age: 2,
    description:
      "У Изабеллы очень тяжелая судьба, она пережила предательство хозяина, который пытался зарезать ее в кустах. Проходящая мимо женщина заметила и позвонила нам. Экстренно прооперировали. Несмотря на такое предательство, девочка не потеряла доверие к людям. Абсолютно контактна. Изабелла пристраивается в семью без других животных, может конфликтовать. Без маленьких детей. С проживанием в квартире или в доме.",
    isSex: false,
    isCastration: true,
    isTemperament: false,
    isChipping: true,
    isVaccination: true,
    isPassport: true,
  },
  {
    //28
    //6
    shelterId: 6,
    petType: "Кошка",
    petSize: "Маленький",
    name: "Сара",
    age: 2,
    description:
      "Сара - кошечка с самым глубоким взглядом прекрасных глаз, глядящим прямо в душу! Нужно с ней пообщаться, чтобы понять, насколько кошка умеет быть благодарной за еду, кров и ласковое обращение! Сара молода (1,5-2 г), СТЕРИЛИЗОВАНА, ПРИВИТА, очень чистоплотна, лоточек знает на 5+, безумно обаятельна и нежна с человеком, по темпераменту спокойная.",
    isSex: false,
    isCastration: true,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //29
    //7
    shelterId: 7,
    petType: "Собака",
    petSize: "Средний",
    name: "Майло",
    age: 1,
    description:
      "Сейчас Майло обычный здоровый щенок, которые с осторожностью относится к людям, но как только понимает, что опасности нет, с радостью идет на контакт",
    isSex: true,
    isCastration: true,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: false,
  },
  {
    //30
    //7
    shelterId: 7,
    petType: "Кошка",
    petSize: "Средняя",
    name: "Фелиция",
    age: 2,
    description:
      "Девочка на улице дошла до состояния истощения, но мир не без добрых людей. Кошечку подобрала девушка, а в последствии привезла к нам в приют «Омские хвостики». Мы взяли ПЦР тесты и к сожалению, жизнь на улице оставила свой неизгладимый след. У малышки вирусная инфекция, но это было только лишь частью страшного списка... Фелиции была ещё беременной, при этом из-за вируса плоды остановились в развитии со всеми последствиями ",
    isSex: false,
    isCastration: true,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //31
    //7
    shelterId: 7,
    petType: "Собака",
    petSize: "Средний",
    name: "Айза",
    age: 2,
    description:
      "Она заслуживает любви и заботы, и мы верим, что найдётся семья, которая подарит ей счастливую и безопасную жизнь.",
    isSex: false,
    isCastration: true,
    isTemperament: true,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //32
    //7
    shelterId: 7,
    petType: "Собака",
    petSize: "Большой",
    name: "Алтай",
    age: 2,
    description:
      "Друзья эффектный Хаски по клички Алтай всё ещё у нас он к сожалению так и не нашел своего хозяина!",
    isSex: true,
    isCastration: true,
    isTemperament: true,
    isChipping: true,
    isVaccination: true,
    isPassport: true,
  },
  {
    //33
    //7
    shelterId: 7,
    petType: "Собака",
    petSize: "Большой",
    name: "Заза",
    age: 6,
    description:
      "Сначала Заза был очень замкнутым и недоверчивым, он воспринимал людей как врагов и даже огрызался. Но со временем, благодаря нашей работе, он понял, что мы не желаем ему зла. Теперь он с радостью бежит обниматься и целоваться.",
    isSex: true,
    isCastration: true,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //34
    //8
    shelterId: 8,
    petType: "Кошка",
    petSize: "Маленький",
    name: "Монти",
    age: 2,
    description: "Весёлая, активная кошечка ищет своих хозяев.",
    isSex: false,
    isCastration: true,
    isTemperament: true,
    isChipping: true,
    isVaccination: true,
    isPassport: true,
  },
  {
    //35
    //8
    shelterId: 8,
    petType: "Кошка",
    petSize: "Средний",
    name: "Ева",
    age: 1,
    description:
      "Ева жила в подвале жилого дома, жила не одна – с мамой кошкой и еще двумя котятами.. Увы, что нередко бывает – кто то пожаловался и дырку в подвал замуровали. Еву получилось словить, а вот судьба остальных неизвестна... Ева с виду самая обычная киса, совсем обычной расцветки, но она такая милашка!!! Ева ждёт не дождётся, когда же за ней приедут хозяева.",
    isSex: false,
    isCastration: true,
    isTemperament: false,
    isChipping: true,
    isVaccination: true,
    isPassport: true,
  },
  {
    //36
    //8
    shelterId: 8,
    petType: "Кошка",
    petSize: "Большой",
    name: "Туся",
    age: 5,
    description:
      "Взгляните на Тусю от ее затейливо раскрашенной шубки, белоснежных лапок и зеленых глаз просто взгляд не оторвать. Туся точно может стать той самой недостающей хвостатой частичкой вашего всеобъемлющего счастья! И пусть судьба уже проверила ее на прочность ,побывав на улице, Туся доверяет людям. Ведь трехцветная, приносящая счастье кошечка уверена, что где-то в этом мире совершенно точно есть семья, которой для полного счастья не хватает именно ее – Туси. Может быть, эта семья – Ваша?",
    isSex: false,
    isCastration: true,
    isTemperament: false,
    isChipping: true,
    isVaccination: true,
    isPassport: true,
  },
  {
    //37
    //8
    shelterId: 8,
    petType: "Кошка",
    petSize: "Средний",
    name: "Геворг",
    age: 1,
    description: "Чёрный пантер с добрым сердцем ждёт своих родителей!",
    isSex: true,
    isCastration: true,
    isTemperament: true,
    isChipping: true,
    isVaccination: false,
    isPassport: true,
  },
  {
    //38
    //8
    shelterId: 8,
    petType: "Кошка",
    petSize: "Маленький",
    name: "Сашка",
    age: 3,
    description:
      'Сашка небольшая кисонька, которая будет недовольна когда ее бесцеремонно возьмут на руки, зато она будет безмерно счастлива поглаживанию ее спинки, почесушек за ушками. А еще она будет с удовольствием "бодать" вашу протянутую к ней руку. Сашка - это кошка для спокойных людей. Короче, приходите, знакомьтесь с нашей Сашкой и забирайте ее ДОМОЙ!',
    isSex: false,
    isCastration: true,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: true,
  },
  {
    //39
    //9
    shelterId: 9,
    petType: "Собака",
    petSize: "Средний",
    name: "Боб",
    age: 5,
    description:
      "В приюте есть разные собаки, но иногда встречаются те, кто запоминается надолго и отличается от большинства особой харизмой. Особенный Боб вызывает скорее восхищение, чем жалость - настоящий красавчик! Боб пес взрослый, рассудительный и спокойный. Он не большого роста, крепкого телосложения, с милыми ушками конвертиком и умилительными бровками. ",
    isSex: true,
    isCastration: false,
    isTemperament: true,
    isChipping: false,
    isVaccination: true,
    isPassport: false,
  },
  {
    //40
    //9
    shelterId: 9,
    petType: "Собака",
    petSize: "Большой",
    name: "Базилио",
    age: 10,
    description:
      " Он чудесный пёс, который всю жизнь служил своим хозяевам и был предан ими. Может найдётся человек, готовый подарить ему домашнюю счастливую жизнь, готовый полюбить большого слепого пса не за то, что он охраняет а дом, просто потому, что он хороший.",
    isSex: true,
    isCastration: true,
    isTemperament: false,
    isChipping: false,
    isVaccination: true,
    isPassport: false,
  },
  {
    //41
    //9
    shelterId: 9,
    petType: "Собака",
    petSize: "Большой",
    name: "Жук",
    age: 4,
    description:
      "Жук та собака, которой можно доверять. В больших шкодствах не замечен. Очень рачительный хозяин, зря ничего не портит, если только случайно. Отлично подойдёт для двора в качестве охранника и в качестве компаньона. Великолепный выбор для того , кто живёт один и для того, кому нужен настоящий верный друг.",
    isSex: true,
    isCastration: false,
    isTemperament: true,
    isChipping: true,
    isVaccination: true,
    isPassport: true,
  },
  {
    //42
    //9
    shelterId: 9,
    petType: "Кошка",
    petSize: "Средний",
    name: "Удача",
    age: 3,
    description:
      "Для Удачи идеальной будет жизнь в спокойной обстановке без других питомцев и без маленьких детей, может быть, с одиноким человеком. Отдается только в квартиру без самовыгула.",
    isSex: false,
    isCastration: true,
    isTemperament: true,
    isChipping: true,
    isVaccination: true,
    isPassport: false,
  },
  {
    //43
    //9
    shelterId: 9,
    petType: "Кошка",
    petSize: "Большой",
    name: "Буба",
    age: 7,
    description:
      "Буба кот старенький, вредный, с коротким кривым хвостом, и малым количеством зубов. Иногда забывает убрать язык, так и сидит высунув... Покушать очень любит. А вот других кошек не любит. Не дерётся, но и общаться не желает с ними. Присмотритесь к Бубе, несмотря на комичную внешность, он отличный кот в самом расцвете сил!",
    isSex: true,
    isCastration: true,
    isTemperament: true,
    isChipping: true,
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
