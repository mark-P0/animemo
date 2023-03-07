import { Character } from './types.js';

/**
 * As of 2023-02-28
 *
 * https://docs.api.jikan.moe/#tag/characters/operation/getCharactersSearch
 * - https://api.jikan.moe/v4/characters?page=1
 * - https://api.jikan.moe/v4/characters?page=2
 */
/* cspell:disable */
const PREFETCHED_DATA: [number, Character | null][] = [
  [
    1,
    {
      mal_id: 1,
      url: 'https://myanimelist.net/character/1/Spike_Spiegel',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/4/50197.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/4/50197.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/4/50197t.webp',
        },
      },
      name: 'Spike Spiegel',
      name_kanji: 'スパイク・スピーゲル',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    2,
    {
      mal_id: 2,
      url: 'https://myanimelist.net/character/2/Faye_Valentine',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/15/264961.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/15/264961.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/15/264961t.webp',
        },
      },
      name: 'Faye Valentine',
      name_kanji: 'フェイ・バレンタイン',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    3,
    {
      mal_id: 3,
      url: 'https://myanimelist.net/character/3/Jet_Black',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/11/253723.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/11/253723.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/11/253723t.webp',
        },
      },
      name: 'Jet Black',
      name_kanji: 'ジェット・ブラック',
      nicknames: ['Running Rock', 'Black Dog'],
      favorites: null,
      about: null,
    },
  ],
  [
    4,
    {
      mal_id: 4,
      url: 'https://myanimelist.net/character/4/Ein',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/5/30624.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/5/30624.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/5/30624t.webp',
        },
      },
      name: 'Ein',
      name_kanji: 'アイン',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    5,
    {
      mal_id: 5,
      url: 'https://myanimelist.net/character/5/Ichigo_Kurosaki',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/3/89190.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/3/89190.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/3/89190t.webp',
        },
      },
      name: 'Ichigo Kurosaki',
      name_kanji: '黒崎 一護',
      nicknames: ['Ichi-nii', 'Shinigami Daiko (Substitute Soul Reaper)', 'Itsygo', 'Ryoka Boy'],
      favorites: null,
      about: null,
    },
  ],
  [
    6,
    {
      mal_id: 6,
      url: 'https://myanimelist.net/character/6/Rukia_Kuchiki',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/2/78215.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/2/78215.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/2/78215t.webp',
        },
      },
      name: 'Rukia Kuchiki',
      name_kanji: '朽木 ルキア',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    7,
    {
      mal_id: 7,
      url: 'https://myanimelist.net/character/7/Orihime_Inoue',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/15/495573.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/15/495573.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/15/495573t.webp',
        },
      },
      name: 'Orihime Inoue',
      name_kanji: '井上 織姫',
      nicknames: ['Hime'],
      favorites: null,
      about: null,
    },
  ],
  [8, null],
  [9, null],
  [10, null],
  [
    11,
    {
      mal_id: 11,
      url: 'https://myanimelist.net/character/11/Edward_Elric',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/9/72533.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/9/72533.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/9/72533t.webp',
        },
      },
      name: 'Edward Elric',
      name_kanji: 'エドワード・エルリック',
      nicknames: ['Ed', 'Fullmetal Alchemist', 'Hagane no shounen', 'Chibi', 'Pipsqueak'],
      favorites: null,
      about: null,
    },
  ],
  [
    12,
    {
      mal_id: 12,
      url: 'https://myanimelist.net/character/12/Alphonse_Elric',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/5/54265.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/5/54265.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/5/54265t.webp',
        },
      },
      name: 'Alphonse Elric',
      name_kanji: 'アルフォンス・エルリック',
      nicknames: ['Al', 'Armored Alchemist'],
      favorites: null,
      about: null,
    },
  ],
  [
    13,
    {
      mal_id: 13,
      url: 'https://myanimelist.net/character/13/Sasuke_Uchiha',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/9/131317.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/9/131317.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/9/131317t.webp',
        },
      },
      name: 'Sasuke Uchiha',
      name_kanji: 'うちは サスケ',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    14,
    {
      mal_id: 14,
      url: 'https://myanimelist.net/character/14/Itachi_Uchiha',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/9/284122.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/9/284122.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/9/284122t.webp',
        },
      },
      name: 'Itachi Uchiha',
      name_kanji: 'うちは イタチ',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    15,
    {
      mal_id: 15,
      url: 'https://myanimelist.net/character/15/Ippo_Makunouchi',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/11/32678.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/11/32678.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/11/32678t.webp',
        },
      },
      name: 'Ippo Makunouchi',
      name_kanji: '幕之内 一歩',
      nicknames: ['The Wind God'],
      favorites: null,
      about: null,
    },
  ],
  [
    16,
    {
      mal_id: 16,
      url: 'https://myanimelist.net/character/16/Edward_Wong_Hau_Pepelu_Tivrusky_IV',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/16/30533.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/16/30533.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/16/30533t.webp',
        },
      },
      name: 'Edward Wong Hau Pepelu Tivrusky IV',
      name_kanji: 'エドワード・ウォン・ハウ・ペペル・チブルスキー4世',
      nicknames: ['Ed', 'Radical Ed', 'Françoise'],
      favorites: null,
      about: null,
    },
  ],
  [
    17,
    {
      mal_id: 17,
      url: 'https://myanimelist.net/character/17/Naruto_Uzumaki',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/2/284121.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/2/284121.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/2/284121t.webp',
        },
      },
      name: 'Naruto Uzumaki',
      name_kanji: 'うずまき ナルト',
      nicknames: ['Nine-Tails Jinchuuriki'],
      favorites: null,
      about: null,
    },
  ],
  [
    18,
    {
      mal_id: 18,
      url: 'https://myanimelist.net/character/18/Haruhi_Fujioka',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/13/55779.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/13/55779.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/13/55779t.webp',
        },
      },
      name: 'Haruhi Fujioka',
      name_kanji: '藤岡ハルヒ',
      nicknames: ['Haru-chan'],
      favorites: null,
      about: null,
    },
  ],
  [
    19,
    {
      mal_id: 19,
      url: 'https://myanimelist.net/character/19/Tamaki_Suou',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/3/48467.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/3/48467.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/3/48467t.webp',
        },
      },
      name: 'Tamaki Suou',
      name_kanji: '須王 環',
      nicknames: ['Tama-chan', 'The Host King', 'Daddy', 'Lord', 'Boss', 'Milord'],
      favorites: null,
      about: null,
    },
  ],
  [
    20,
    {
      mal_id: 20,
      url: 'https://myanimelist.net/character/20/Mitsukuni_Haninozuka',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/13/48471.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/13/48471.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/13/48471t.webp',
        },
      },
      name: 'Mitsukuni Haninozuka',
      name_kanji: '埴之塚 光邦',
      nicknames: ['Honey'],
      favorites: null,
      about: null,
    },
  ],
  [
    21,
    {
      mal_id: 21,
      url: 'https://myanimelist.net/character/21/Takashi_Morinozuka',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/11/128685.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/11/128685.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/11/128685t.webp',
        },
      },
      name: 'Takashi Morinozuka',
      name_kanji: '銛之塚 崇',
      nicknames: ['Mori'],
      favorites: null,
      about: null,
    },
  ],
  [
    22,
    {
      mal_id: 22,
      url: 'https://myanimelist.net/character/22/Hikaru_Hitachiin',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/2/48468.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/2/48468.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/2/48468t.webp',
        },
      },
      name: 'Hikaru Hitachiin',
      name_kanji: '常陸院光',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    23,
    {
      mal_id: 23,
      url: 'https://myanimelist.net/character/23/Kyouya_Ootori',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/13/90675.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/13/90675.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/13/90675t.webp',
        },
      },
      name: 'Kyouya Ootori',
      name_kanji: '鳳 鏡夜',
      nicknames: ['Mommy', 'Shadow Prince', 'Low Blood Pressure Demon Lord'],
      favorites: null,
      about: null,
    },
  ],
  [
    24,
    {
      mal_id: 24,
      url: 'https://myanimelist.net/character/24/Kaoru_Hitachiin',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/9/48469.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/9/48469.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/9/48469t.webp',
        },
      },
      name: 'Kaoru Hitachiin',
      name_kanji: '常陸院 馨',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    25,
    {
      mal_id: 25,
      url: 'https://myanimelist.net/character/25/Renge_Houshakuji',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/10/55457.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/10/55457.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/10/55457t.webp',
        },
      },
      name: 'Renge Houshakuji',
      name_kanji: null,
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    26,
    {
      mal_id: 26,
      url: 'https://myanimelist.net/character/26/Ging_Freecss',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/2/231795.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/2/231795.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/2/231795t.webp',
        },
      },
      name: 'Ging Freecss',
      name_kanji: 'ジン＝フリークス',
      nicknames: ['Boar'],
      favorites: null,
      about: null,
    },
  ],
  [
    27,
    {
      mal_id: 27,
      url: 'https://myanimelist.net/character/27/Killua_Zoldyck',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/2/327920.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/2/327920.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/2/327920t.webp',
        },
      },
      name: 'Killua Zoldyck',
      name_kanji: 'キルア=ゾルディック',
      nicknames: ['Kil'],
      favorites: null,
      about: null,
    },
  ],
  [
    28,
    {
      mal_id: 28,
      url: 'https://myanimelist.net/character/28/Kurapika',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/4/174563.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/4/174563.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/4/174563t.webp',
        },
      },
      name: 'Kurapika',
      name_kanji: 'クラピカ',
      nicknames: ['Chain User'],
      favorites: null,
      about: null,
    },
  ],
  [
    29,
    {
      mal_id: 29,
      url: 'https://myanimelist.net/character/29/Leorio_Paladiknight',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/11/174519.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/11/174519.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/11/174519t.webp',
        },
      },
      name: 'Leorio Paladiknight',
      name_kanji: 'レオリオ=パラディナｲﾄ',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    30,
    {
      mal_id: 30,
      url: 'https://myanimelist.net/character/30/Gon_Freecss',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/11/174517.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/11/174517.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/11/174517t.webp',
        },
      },
      name: 'Gon Freecss',
      name_kanji: 'ゴン＝フリークス',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    31,
    {
      mal_id: 31,
      url: 'https://myanimelist.net/character/31/Hisoka_Morow',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/3/174561.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/3/174561.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/3/174561t.webp',
        },
      },
      name: 'Hisoka Morow',
      name_kanji: 'ヒソカ・モロウ',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    32,
    {
      mal_id: 32,
      url: 'https://myanimelist.net/character/32/Ovan',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/13/61258.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/13/61258.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/13/61258t.webp',
        },
      },
      name: 'Ovan',
      name_kanji: 'オーヴァン',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    33,
    {
      mal_id: 33,
      url: 'https://myanimelist.net/character/33/Haseo',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/12/86036.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/12/86036.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/12/86036t.webp',
        },
      },
      name: 'Haseo',
      name_kanji: 'ハセヲ',
      nicknames: ['The Terror Of Death'],
      favorites: null,
      about: null,
    },
  ],
  [
    34,
    {
      mal_id: 34,
      url: 'https://myanimelist.net/character/34/Shino',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/8/85961.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/8/85961.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/8/85961t.webp',
        },
      },
      name: 'Shino',
      name_kanji: '志乃',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    35,
    {
      mal_id: 35,
      url: 'https://myanimelist.net/character/35/Tabby',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/10/85962.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/10/85962.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/10/85962t.webp',
        },
      },
      name: 'Tabby',
      name_kanji: 'タビー',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    36,
    {
      mal_id: 36,
      url: 'https://myanimelist.net/character/36/Phyllo',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/11/137791.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/11/137791.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/11/137791t.webp',
        },
      },
      name: 'Phyllo',
      name_kanji: 'フィロ',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    37,
    {
      mal_id: 37,
      url: 'https://myanimelist.net/character/37/Sakisaka',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/10/131571.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/10/131571.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/10/131571t.webp',
        },
      },
      name: 'Sakisaka',
      name_kanji: '匂坂',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    38,
    {
      mal_id: 38,
      url: 'https://myanimelist.net/character/38/Tawaraya',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/7/4383.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/7/4383.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/7/4383t.webp',
        },
      },
      name: 'Tawaraya',
      name_kanji: '俵屋',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    39,
    {
      mal_id: 39,
      url: 'https://myanimelist.net/character/39/Tsukasa',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/2/86095.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/2/86095.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/2/86095t.webp',
        },
      },
      name: 'Tsukasa',
      name_kanji: '司',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    40,
    {
      mal_id: 40,
      url: 'https://myanimelist.net/character/40/Luffy_Monkey_D',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/9/310307.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/9/310307.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/9/310307t.webp',
        },
      },
      name: 'Luffy Monkey D.',
      name_kanji: 'モンキー・D・ルフィ',
      nicknames: ['Mugiwara', 'Straw Hat', 'Lucy', 'Luffytaro', 'Nightmare Luffy'],
      favorites: null,
      about: null,
    },
  ],
  [
    41,
    {
      mal_id: 41,
      url: 'https://myanimelist.net/character/41/Subaru',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/14/85930.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/14/85930.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/14/85930t.webp',
        },
      },
      name: 'Subaru',
      name_kanji: '昴',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    42,
    {
      mal_id: 42,
      url: 'https://myanimelist.net/character/42/Train_Heartnet',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/15/78799.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/15/78799.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/15/78799t.webp',
        },
      },
      name: 'Train Heartnet',
      name_kanji: 'トレイン ハートネット',
      nicknames: ['Black Cat', 'Chrono Number XIII', 'Kuro-sama'],
      favorites: null,
      about: null,
    },
  ],
  [
    43,
    {
      mal_id: 43,
      url: 'https://myanimelist.net/character/43/Sven_Vollfied',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/5/58282.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/5/58282.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/5/58282t.webp',
        },
      },
      name: 'Sven Vollfied',
      name_kanji: 'スヴェン＝ボルフィード',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    44,
    {
      mal_id: 44,
      url: 'https://myanimelist.net/character/44/Eve',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/12/52806.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/12/52806.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/12/52806t.webp',
        },
      },
      name: 'Eve',
      name_kanji: 'イヴ',
      nicknames: ['Little Princess'],
      favorites: null,
      about: null,
    },
  ],
  [
    45,
    {
      mal_id: 45,
      url: 'https://myanimelist.net/character/45/Rinslet_Walker',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/16/78923.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/16/78923.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/16/78923t.webp',
        },
      },
      name: 'Rinslet Walker',
      name_kanji: 'リンスレット ウォーカー',
      nicknames: ['Rins'],
      favorites: null,
      about: null,
    },
  ],
  [
    46,
    {
      mal_id: 46,
      url: 'https://myanimelist.net/character/46/Ban_Midou',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/8/30608.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/8/30608.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/8/30608t.webp',
        },
      },
      name: 'Ban Midou',
      name_kanji: '美堂 蛮',
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
  [
    47,
    {
      mal_id: 47,
      url: 'https://myanimelist.net/character/47/Ginji_Amano',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/16/30607.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/16/30607.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/16/30607t.webp',
        },
      },
      name: 'Ginji Amano',
      name_kanji: '天野 銀次',
      nicknames: ['Lightning Lord'],
      favorites: null,
      about: null,
    },
  ],
  [
    48,
    {
      mal_id: 48,
      url: 'https://myanimelist.net/character/48/Kazuki_Fuuchouin',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/12/33496.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/12/33496.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/12/33496t.webp',
        },
      },
      name: 'Kazuki Fuuchouin',
      name_kanji: '風鳥院 花月',
      nicknames: ['Kazuki of the String', 'Prince of Fear', 'Thread Spool'],
      favorites: null,
      about: null,
    },
  ],
  [
    49,
    {
      mal_id: 49,
      url: 'https://myanimelist.net/character/49/Shido_Fuyuki',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/2/30668.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/2/30668.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/2/30668t.webp',
        },
      },
      name: 'Shido Fuyuki',
      name_kanji: '冬木 士度',
      nicknames: ['Beast Master', 'Monkey Boy'],
      favorites: null,
      about: null,
    },
  ],
  [
    50,
    {
      mal_id: 50,
      url: 'https://myanimelist.net/character/50/Hevn',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/characters/16/30579.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/characters/16/30579.webp',
          small_image_url: 'https://cdn.myanimelist.net/images/characters/16/30579t.webp',
        },
      },
      name: 'Hevn',
      name_kanji: null,
      nicknames: [],
      favorites: null,
      about: null,
    },
  ],
];
/* cspell:enable */

export default PREFETCHED_DATA;
