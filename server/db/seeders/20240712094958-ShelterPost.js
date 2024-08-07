"use strict";
const posts = [
  {
    shelterId: 1,
    postName: "Зачем собаке нужны прогулки?",
    text: "В жизни собаки прогулки играют важную роль. Это возможность: Активно подвигаться. Не зря говорят, что движение - это жизнь. Регулярные прогулки положительно сказываются на опорно-двигательной и сердечно-сосудистой системах.",
  },
  {
    shelterId: 1,
    postName: "Дорогие друзья!",
    text: "Сегодня мы хотим поделиться с вами радостным событием — в нашем приюте появилось много новых пушистиков, которые мечтают о своем постоянном доме! 🌟 Каждая из наших кошек и собак уникальна и полна любви, которую они готовы подарить своим новым хозяевам.",
  },
  {
    //3
    shelterId: 2,
    postName: "Домашний привет от Дивы!",
    text: 'Свой домашний привет передает красавица Дива! Кошечка приехала в наш приют из Донбасса."Дива передает вам привет)И хочет сказать, что у нее 2 основных режима: сладкая булочка в светлое время суток и неукротимая львица в сумерки)Особенно остро желание побегать по кухонным шкафам просыпается в 3 часа ночи)',
  },
  {
    //4
    shelterId: 2,
    postName: "Спасибо нашему другу ТОКИО-CITY за поддержку!",
    text: "Сегодня наш друг и партнёр сеть ресторанов 'ТОКИО-CITY' сделали пожертвование в пользу фонда 'Ржевка' в размере 500 000 рублей. Эта сумма поможет нам оплатить медицинские расходы для нескольких десятков животных. Спасибо за помощь нашим хвостикам!",
  },
  {
    //5
    shelterId: 3,
    postName: "Вы можете помочь приюту в Москве",
    text: "Нашим питомцам нужна ваша помощь! Вы можете сделать их жизнь лучше. Приюту Бирюлево всегда требуются корма, поводки и ошейники, лекарства, материальная и информационная поддержка. А еще нашим собакам и кошкам очень нужна ласка и общение с человеком, поэтому мы всегда рады новым волонтерам.",
  },
  {
    //6
    shelterId: 3,
    postName: "Программа приюта - попечительство",
    text: "Хотите пушистого друга, но не можете взять домой? Наша попечительская программа идеальное решение! Стать попечителем – это как завести питомца, о котором всю жизнь мечтал, но по каким- то причинам не мог этого сделать. А для приюта, наша попечительская программа – это реальная помощь нашим животным!",
  },
  {
    //7
    shelterId: 4,
    postName: "Сбор средств на вакцинацию",
    text: "«Вакцинация — единственный способ профилактики здоровья кошек и обеспечения безопасности контакта с людьми, а значит, это надежда на то, что животные найдут дом и будут здоровы, — говорит директор приюта Наталья Авласевич. — Для кошек и котов из приюта это крайне важно, так как они содержатся после карантина в общей стае и риск заражения выше из-за близости друг к другу» Мы просим помощи и призываем всех неравнодушных присоединиться к нашему сбору и помочь нам обеспечить каждого подопечного своевременной вакцинацией. Помогите нам сделать их мир безопаснее.",
  },
  {
    //8
    shelterId: 4,
    postName: "Помогая животным, помогаем людям!",
    text: 'Уже 8 лет "Преданное сердце" Помощь животным помогает бездомным животным и людям, которые хотят помочь животным! И наша работа невозможна без вашей поддержки. Поддержите нашу работу пожертвованием на нашем сайте сайте https://predannoeserdce.ru/',
  },
  {
    //9
    shelterId: 5,
    postName: "ПРОСТИ И ПРОЩАЙ, наш дорогой любимый деда Боря!",
    text: 'Борюшка-ватрушка! Боль и вина бесконечные!!! О.Л. P.S. Теперь я могу со всей ответственностью сказать, что за мучительную гибель Бори ответственен коллектив врачей клиники "Котонай", дежуривших вчера, проигнорировавших диагноз заворот желудка и мои бесконечные просьбы взять собаку на операцию. Продлившие его мучения двукратным промыванием и бесполезными в данном случае инфузиями. Конечно, я не дождусь извинений от коллектива клиники, но мне вполне будет достаточно наказания виновных в суде, в который я намерена обратиться незамедлительно.',
  },
  {
    //10
    shelterId: 5,
    postName: "НИК, ЖИТЕЛЬ ПРИЮТА, ИЩЕТ ДОМ",
    text: "История появления щенка в приюте печальна: в июне Ник сначала два дня просидел, горько плачущий, в подъезде, потом был вывезен в незнакомый район, попал в ЦВСЖ, а потом домой к Оксане Львовне. Скорее всего, он от домашней собаки и был выброшен.  Он очень нуждается в хозяине, который и научит его собачьим премудростям. Тел. 8-921-271-93-93, Оксана Львовна.",
  },
  {
    //11
    shelterId: 6,
    postName: "Выходные в компании преданных друзей!",
    text: "Друзья, приглашаем вас провести выходные в компании самых преданных и верных друзей - собак и кошек! Приют для бездомных животных ждет с нетерпеньем. Вы можете угостить пушистых четвероногих друзей и поделиться своей любовью и заботой с ними. Вы сможете поиграть с собаками, погулять на свежем воздухе, тем самым очень порадовать их.",
  },
  {
    //12
    shelterId: 6,
    postName: 'Сегодня у нас "День Хвостика!"',
    text: 'Все большое когда-то начиналось с малого и любое важное дело начиналось с маленькой идеи! Так что же такое "хвостик"? Многие стесняются помогать из-за отсутствия средств и считают, что 1р или 10р погоды не сыграют, мы хотим показать обратное! Допустим у вас на карте 11271р, хвостиком в данной сумме можно считать 1р, 71р, 271р, 1271р, т.е та сумма, которая округлит ваш счёт( перфекционизм в действии)" Даже самая небольшая и на ваш взгляд незначительная помощь имеет огромное значение для нас! Это шанс для животных получить хорошее лечение, питание и реабилитацию. Обязательно ставьте пометку "хвостик" Расчетный счет для юр.лиц 40706464640000826 Сбербанк',
  },
  {
    //13
    shelterId: 7,
    postName: "Котят много не бывает?",
    text: "Видимо, так решил кошачий бог, потому что котяток этим летом в приюте «Омские хвостики» целый вагон и маленькая тележка, даже две. С наступлением тёплого времени года еженедельно нам подбрасывают бездомных котят, словно это мусор, который можно просто выбросить за угол. В пакетах, коробках. Мы уже устали писать заявления с видео (с камер по периметру). Часто, эти котята «помесь» с породистыми. Это наталкивает на мысль о том, что кото - дети от домашних кошек. Конечно, зачем тратить время, силы и деньги на стерилизацию, если можно сбросить всю ответственность на приют? Ведь мы тут так, прохлаждаемся, а вовсе не ухаживаем за пятью сотнями брошенных животных, ищем им новые дома и ресурсы для их содержания. Давайте будем честными: подбрасывая котят, которых легко пристроить за пару недель самостоятельно, эти люди отнимают шанс у тех, кто действительно нуждается в помощи Так что, пожалуйста, подумайте дважды, прежде чем приносить очередной приплод вашей кошки к нашему приюту. Может, пора взять на себя ответственность и начать решать проблему цивилизованно?",
  },
  {
    //14
    shelterId: 7,
    postName: "В поисках опекуна",
    text: "Многие из вас хотели бы помогать животным приюта, но не имеют возможности даже просто приезжать в приют для общения с хвостиками... Сейчас у нас более 450 животных. Большое количество старичком и собак-инвалидов. Все они нуждаются в кормлении (а кому-то подходит только ветеринарная диета), лечении, уходе. На это нужны огромные суммы! Государство нам никак не помогает, поэтому мы вынуждены постоянно искать средства для того, чтобы приют жил дальше! Мы просим помощи у неравнодушных людей в содержании животных приюта, которых они могут осчастливить своим участием и вниманием! Опекун-это человек, который помогает содержать и ухаживать за приютским питомцем, которого он выбрал самостоятельно. Здесь мы будем публиковать список животных под опекой и тех, кто еще без нее. Если Вы уже выбрали себе питомца под опеку и готовы ему финансово помогать, то напишите здесь в комментариях кому Вы хотите оказывать помощь.",
  },
  {
    //15
    shelterId: 8,
    postName: "Ребята, спасибо большое всем!",
    text: "Нам осталось собрать ~ 20.000 р., оплатить накопившийся по Кумиру долг и добить сумму по оплате труда.",
  },
  {
    //16
    shelterId: 8,
    postName: "Понедельник, он такой!",
    text: 'Благодаря вашим переводам на расчётный счёт фонда "ХОТИМ ДОМОЙ", оплатила утром счета: коммунальные за 4 месяца, последнюю закупку препаратов и лабораторные исследования. Спасибо вам за поддержку работы приюта. Всего было оплачено на сумму 56375.45 р. Сегодня запрошу долг по Кумиру и поделюсь новостями — на прошлой неделе мы решили вернуть его в стационар ',
  },
  {
    //17
    shelterId: 9,
    postName: "Возрастным собачкам нужен корм",
    text: "Для кормления возрастных собак с гастродиетой нужны паштеты Farmina Gastrointestinal или Organic Сhoice VET Gastrointestinal (на картинках). Ранее купили собакам паштет другого производителя, но он не подошел, закончилось всё диареей. Вышеуказанные паштеты усваиваются хорошо, но на них уже не осталось денег и, к сожалению, в ближайших зоомагазинах их нет в наличии... Пожалуйста, помогите накормить старичков, у них плохой аппетит и мало зубов, паштет помогает хоть как-то справиться с проблемой.",
  },
  {
    //18
    shelterId: 8,
    postName: "Новости из стационара",
    text: "Кошка-мама и два ее подсосных котенка в клинике, нужна финансовая помощь оплатить спасение малышей!",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ShelterPosts", posts, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ShelterPosts", null, {});
  },
};
