// Модуль с данными. Которые в будущем будут загружаться с сервера.
const NAME_AUTHORS = [
  'Алёша Попович',
  'Илья Муромец',
  'Добрыня Никитич',
  'Алёнушка',
  'Любава',
  'Настасья'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Пустой осенний пляж с прозрачной водой, жёлтыми и зелеными деревьями, вечернее время около 17:00. Ясное небо, но вдалеке дымка, обещающая пасмурную погоду.',
  'На зелёной поляне стоит указатель из двух обвитых канатом деревянных столбов с белой надписью Go to the beach и стрелками вверх. Слева от указателя слегка заросшая тропинка.',
  'Песчаный пляж окружён густой зеленью, высокое голубое небо усыпано облаками. Прозрачное голубое море омывает невысокие скалы.',
  'Молодая женщина в тёмно-зелёном бикини прогуливается по пляжу с фотоаппаратом. Солнце светит, создавая тёплую атмосферу.',
  'Две тарелки с супом, в которых погружены креативно оформленные фигурки из риса в виде улыбающихся человечков, с лицами из нори, создающее весёлую атмосферу. Видны овощи и мясо, благодаря чему блюдо выглядит аппетитно.',
  'Роскошный спортивный автомобиль McLaren матового чёрного цвета с агрессивным дизайном. Двери открываются вверх, передняя часть выделяется узкими фарами и большими воздухозаборниками. Фон состоит из элитного городского окружения с роскошными зданиями.',
  'Аккуратно сервированная свежая спелая клубника на деревянной тарелке с изысканной вилкой. В правом верхнем углу фото текст из двух традиционных китайских иероглифов.',
  'На столе стоят две прозрачные кружки с насыщенным красным соком из винограда. Рядом лежат две лозы с крупными, сочными ягодами.',
  'Тёплый пляж, прозрачная голубая вода. Над морем летит двухмоторный самолёт. В воде отдыхают люди. Молодая девушка в купальнике стоит спиной. Поднятыми руками, приветствует самолёт.',
  'Выкатная сетчатая полка для обуви под белым шкафом с несколькими парами обуви.',
  'На фото представлен пляж с деревянным забором и песчаной дорожкой, ведущей к морю. Высокое чистое небо с небольшим количеством облаков.',
  'На фото представлен белый спортивный автомобиль Audi RS7 с зелеными фарами.',
  'Свежая сёмга с золотистой корочкой и свежие овощи — сельдерей, сладкий перец и морковь. Специи подчеркивают вкус блюда.',
  'Рыжий котик с жёлтой ленточкой на шее в костюме суши, лежит на подушке из риса, накрыт желтым одеяльцем и обвязан широким пояском, напоминающим полоску нори.',
  'На белом диване уютно расположились чьи-то ноги в серых музыкальных тапочках-роботах с красными элементами. Тапочки выглядят современно. Рядом, на деревянной тумбе, лежат две книги, горшок с цветком и торшер с мягким светом.',
  'На фото из иллюминатора — горный пейзаж с заснеженными вершинами и чистым небом. Вдали виден параллельно летящий самолёт, оставляющий за собой белую полосу.',
  'На сцене концертного зала стоит хор, состоящий преимущественно из мужчин, в черной форменной одежде. Дирижёр, пожилая женщина в строгом черном костюме, ведет хоровое исполнение, в центре сцены расположена барабанная установка, барабанщик аккомпанирует ритмом.',
  'Американский полноразмерный автомобиль, выпускавшийся подразделением корпорации GM Chevrolet как модель с 1958 по 1985 год, с 1994 по 1996 год и с 1999 по 2020 год.',
  'Ноги в белых тапочках с яркой светодиодной подсветкой. Тапочки освещают путь по темноте, предотвращая столкновения с мебелью.',
  'Высокие пальмы, освещенные ночью и сдания отеля Long Beach A Sun Resort 5 звёзд, расположенного на острове Маврикий.',
  'Тайское блюдо с рисом, курицей и овощами, украшенное дольками лайма.',
  'Закат на море, где яркие облака окрашены в розовые и оранжевые оттенки. Легкие волны нежно касаются берега, отражая солнечные блики.',
  'Инфраотряд десятиногих ракообразных, обитающих в солёной и пресной воде.',
  'Сцена концерта группы «Эпидемия» в Санкт-Петербурге 10.09.2017 с ярким освещением и силуэтами людей.',
  'Белый внедорожник Land Rover Defender 110 расположен на затопленной дороге. Из воды, рядом с авто, высунул голову бегемот демонстрируя недовольство вмешательством внедорожника в его спокойствие.'
];

const RANGE_COMMENTS = { // Диапазон комментариев к каждой фотке.
  MIN: 0,
  MAX: 30
};

const RANGE_LIKES = { // Диапазон лайков к каждой фотке.
  MIN: 15,
  MAX: 200
};

const RANGE_COMMENTS_ID = { // Диапазон идентификаторов для комментариев.(По условию любое число).
  MIN: 1,
  MAX: 1000
};
export {NAME_AUTHORS, COMMENTS, DESCRIPTIONS, RANGE_COMMENTS, RANGE_LIKES, RANGE_COMMENTS_ID};
