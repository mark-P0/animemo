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
      favorites: 44536,
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
      favorites: 8565,
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
      favorites: 2047,
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
      favorites: 2184,
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
      favorites: 31090,
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
      favorites: 8025,
      about:
        "Occupation: Shinigami in the 13th Division \nBirthday: January 14 (Capricorn)\nHeight: 144 cm (4' 8\")\nWeight: 33 kg (72.6 lb)\nHair: Black\nEyes: Violet/Dark Purple\nZanpakutou: Sode no Shirayuki\nShikai Command: Mae (Dance), Sode no Shirayuki\nTheme Song: \"Wing-Stock\" by Ashley MacIsaac\n\nRukia and her older sister, Hisana, were brought together to 78th District of Rukongai after they died in the human world. Hisana abandoned Rukia when she was still a baby since she could not continue to support both herself and Rukia. Rukia grew up on her own until she met Renji Abarai and other children her age. They worked together to steal food in order to survive and became a makeshift family. She's a bit of a tomboy to show that she's tough. During this time, Rukia and Renji showed signs of having spiritual power. While they initially opted against becoming shinigami, the death of all their friends prompted Rukia to suggest joining the academy for a better life.\n\nAt the shinigami academy, Renji was admitted into the top class and Rukia into the second ranked one. Renji and Rukia started growing further apart as Renji got further ahead in his training. The emotional distance continued until Rukia was asked to join the Kuchiki family. Renji expressed happiness for Rukia's opportunity but both did not admit that they disagreed with the arrangement since they would likely never see each other again. Rukia reluctantly joined the family and was immediately inducted into the 13th Division without having to graduate or take a squad entrance exam. Unknown to Rukia, Byakuya had adopted her in order to fulfill the last wish of Hisana, whom he had taken as his wife.\n\nIn the 13th Division, Rukia was not given a seat position, due to Byakuya Kuchiki's influence, since he did not want her sent on dangerous missions. She became friends with the division lieutenant, Kaien Shiba, who trained and mentored her. Their first training location was Mount Koifushi of Hokutan, the 3rd district of West Rukongai.\n\nRukia greatly admired Kaien's wife, 3rd Seat Miyako Shiba. When Miyako was killed by a hollow, Rukia, Kaien, and the division's captain, Jūshirō Ukitake hunted the hollow down. Kaien faced the hollow alone but the hollow's special ability destroyed his zanpakutō. Rukia attempted to draw her sword and help but was stopped by Ukitake. He told her that Kaien's fight was one of honor rather than a fight for his life. If Rukia helped, Kaien would be saved but his honor would be damaged forever. Meanwhile, the hollow entered Kaien and possessed him. Ukitake faced the hollow but his illness allowed the hollow the opportunity to attack Rukia. Kaien momentarily regained control and thrust himself through Rukia's zanpakutō. He thanked Rukia and Ukitake for letting him fight for his honor and died in Rukia's arms. Rukia brought the corpse to the Shiba family but was afraid to apologize since she felt guilty about her role in Kaien's death.\n\n(Source: Wikipedia)",
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
      favorites: 2792,
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
      favorites: 84879,
      about:
        "Age: 15-16 (series), 18 (movie, end of the series)\nBirthday: 1899\nBirthplace: Resembool, Amestris\nFamily: Alphonse Elric (brother), Trisha Elric (mother, deceased), Van Hohenheim (father)\nAffiliations: State Military\nWinry Rockbell\nPinako Rockbell\nIzumi Curtis (teacher)\nRoy Mustang (Commander)\nSpecies: Human\nOccupation: State Alchemist\nAbilities: Alchemy, Martial Arts\nWeapon: Alchemy, Automail arm and leg\n\nEdward \"Fullmetal Alchemist\" Elric is a young alchemical prodigy. He is the youngest State Alchemist ever to be recognized by the Amestris State Military, having received the title at the age of 12. Ed's primary motivation throughout the series is to return his younger brother, Alphonse, to his original body, which was lost in a failed human transmutation. Edward, despite his occasional bouts of immaturity, is a selfless boy who gains a reputation as a \"hero of the people\" throughout his youth. Notably, he doesn't seem concerned about returning his own arm and leg, instead focusing entirely on Al's suffering.\n\nEdward is small for his age, standing at only 149 cm (4'11\"), however, his body is that of an experienced martial artist, with noticeable muscles and a wealth of agility. Although he lacks both his right arm and left leg, Ed's ability to fight is not impaired and is in fact improved, as he will often use alchemy to cause his metal arm to partly transform into a blade or shield. His heavy automail limbs are considered by him to be the very best in Amestris. They were made by his childhood friend, Winry Rockbell, and she is constantly working on them. He is able to think quickly, even in desperate situations, though can still be frightened into paralysis. These qualities, combined with his alchemical powers and physical strength, make him a formidable fighter.\n\nBorn to Trisha Elric and Van Hohenheim of Resembool in the winter of 1899, Edward's first few years were relatively happy; but after the sudden departure of his father during the lad's formative years, Ed was left with his mother and younger brother Alphonse as his only family. The three Elrics lived in peace in the rural village and the boys began displaying a remarkable talent for alchemy at a young age, much to the joyful astonishment of his mother. However, early in the year 1904, Trisha contracted an illness that had been spreading in the area and died, leaving her two sons orphaned. Even while mourning, mired in grief, Edward vowed to his brother that the two of them would find a way to bring their dead mother back to life with the power of alchemy.\n\nEdward and Alphonse spent the next few years living on their own in the Elric family home, supported by their close childhood friend Winry Rockbell and her grandmother Pinako, and pursuing the alchemical knowledge necessary for their planned resurrection. Although they had gained a great deal of information and comprehension regarding the extended basics of the craft, before long it became apparent to the young prodigies that there was only so far they could go while being self-taught. In a stroke of good fortune, Resembool was visited by an exceptionally skilled alchemist named Izumi Curtis who, after some persuasion, agreed to take the Elric brothers on as her apprentices provided they pass a preliminary test. After they do, the Elric brothers were subjected to Izumi's intensive alchemy and martial arts training, growing significantly in both mind and body and gaining a great deal of alchemical knowledge before returning to Resembool. \n\nThough instructed specifically by Izumi to understand that death is an irreversible part of the flow of the world and that acceptance of such is important to the \"One is All, All is One\" concept, the boys dove headlong into their plan to resurrect their mother upon their homecoming, having advanced their knowledge while abroad and discovered the basics of a forbidden practice called Human Transmutation.\n\nDevising a Human Transmutation Circle, amassing the elemental ingredients for an adult human body and offering their own blood as soul and biological data, the boys secretly initiated the Human Transmutation in their home. Unfortunately, the Human Transmutation resulted in a Rebound.\n\nAlphonse and Edward were pulled into The Gate. Encountering the mysterious being called Truth, Edward was stripped of his left leg in exchange for crossing into God's domain and peeking at the Gate's vast wealth of alchemical knowledge. Maimed and bleeding, Edward was returned to the human dimension to find that Alphonse had not yet returned from his disappearance into the Gate, that the mother they had attempted to revive was a grotesque mass of organs only capable of sustaining life for a few moments and that his own sojourn into the Gate had granted him the curious ability to perform transmutations merely by clapping his hands together, without the aid of a Transmutation Circle - in the same style used by Izumi. Desperate to at least have his brother by his side, Edward willfully performed another Human Transmutation to call him back, this time sacrificing his right arm in exchange for Al's soul, which he bound alchemically to an antique suit of armor with a Blood Rune before passing out from severe blood loss. Alphonse carried Ed to the Rockbell house, where a shocked Pinako and Winry performed emergency surgery to save the young boy's life.\n\nOn the night of the failed transmutation. Lt. Colonel Flame Alchemist Roy Mustang came to the Rockbell's in response to a letter that Edward and Alphonse had sent him in the mail asking about their Father. He was shocked at the fact that the two boys had tried human alchemy and survived, and informed them that they could become state alchemist and maybe one day find a way to return their bodies to the way they were. Desperate to get His younger brother's body back, Edward asked the Rockbells to give him prosthetic limbs called automail. Though they warned him the surgery would be painful, he said the pain was nothing compared to what his brother had given up. He only took a year to adapt to the automail at age 11 when it took most adults three years.",
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
      favorites: 14260,
      about:
        "Birthplace: Resembool\nDate of Birth: 1900\nAge: 14-15 (10 at the 2003 end, 13 at movie, 17 at the manga/fmab end)\nFamily: Edward Elric (brother), Trisha Elric (mother, deceased), Van Hohenheim (father)\nSpecies: Human\nOccupation: Alchemist\nAbilities: Alchemy, Martial Arts, High Intelligence, Highly Resistant Armor Body\nWeapon: Fists, Alchemy\n\nAlphonse Elric is a human child who lost his body during a forbidden alchemical transmutation to bring his deceased mother back to life, and had his soul transmuted into a suit of armor by his brother, Edward Elric. Al's blood seal lies just below the base of the neck at the back of the suit, on the inside. It is drawn with Ed's blood. According to Edward, he needs to be careful whenever he reconstructs Alphonse's body because he must keep the blood seal intact during the transmutation. If the blood seal is removed, Al's soul will be lost.\n \n\"Kindness in a can.\" - Edward Elric\n\n(Source: Wikipedia)",
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
      favorites: 27910,
      about:
        "Age: 12-13 (I); 16-17 (II); 19 (The Last: Naruto the Movie); 32 (Boruto: Naruto the Movie)\nBirthday: July 23\nNinja Registration No: 012606\nHoroscope: Leo\nBlood type: AB\nHeight: 153.2 cm(I); 168 cm (II); 175 cm (The Last: Naruto the Movie); 182 cm (Boruto: Naruto the Movie)\nWeight: 43.5kg(I); 52.2kg (II); 55kg (The Last: Naruto the Movie); 65kg (Boruto: Naruto the Movie)\nHair: Ebony Black with Blue tints\nEyes: Black; Right eye Red (when using Sharingan) &amp; \nRank: Genin; \nKekkei Genkai: Sharingan (Part 1)\n\n\nLikes: Omusubi (Okaka) (omusubi is like Onigiri: Okaka is dried Bonito) Tomato\nDislikes: Everything that gets in the way of his revenge, natto (fermented soybeans) and sweet food\nHates: Itachi (Part I)\n\nTalents: Highly skilled ninja, specializes in fire and lightning jutsu.\n\nWhen Sasuke was young, his clan was murdered by his older brother, Itachi. With his parents and family now gone, his brother spared him and left him to survive by himself. He told Sasuke to hate him. Sasuke tried to forget about the past by applying himself in the ninja academy and fitting in with the rest of the leaf village.\n\nAfter his fight with Naruto, he believes he's been wasting his time \"playing ninja\" with the people of the leaf village. His new goal is to get stronger so he can avenge his clan by killing Itachi and then restore the Uchiha clan.\n\nAs a wielder of the Sharingan (the kekkei genkai of the Uchiha clan), he learns to use Chidori and has a vast knowledge of the various Fire Jutsus. The curse seal which Orichimaru gives him during the Chuunin exam, at first, enhanced his power but at the risk of killing him. Now he can use it of his own free will.\n\nClaiming at first that he doesn't need any friends, he is forced to contradict himself when he sees that either Naruto or Sakura are in danger. Remembering this type of Sasuke is what brings motivation to Naruto. Sasuke openly admitted to Naruto that he was his closest friend.\n\nAppearance\nSasuke has black hair with a blue tint that lengthens as the story goes with onyx eyes and has lighter skin than his brother Itachi. Like many other members of his clan, his hair hangs over both sides of his face to roughly his cheeks. In his curse seal form, he has grey skin with wings on his back that resemble giant webbed hands. He also has hair similar to Madara Uchiha except in a greyish-blue color.\n\nAt the beginning of Part I, Sasuke's clothing made up a blue, short-sleeved shirt with a raised collar and the Uchiha crest on the back and white shorts. An interesting thing is that during Part I the Uchiha symbol on his back gets smaller each time he changes his outfit. In the last stage of the Chunin exams, he wore a black, one pieced version of this outfit but eventually went back to his original clothes.\n\nIn Part II, Sasuke has grown noticeably taller (almost eye height with Itachi) and slightly more muscular. wears a white long sleeved shirt that's open at the torso with a smaller version of the Uchiha crest on his collar. He wears black pants with a blue cloth hanging from his half way up his stomach to his knees. He also wears a purple rope belt (Japanese name: Shimenawa) tied in a bow fashion found on many Sound ninja, only the bow is in a different style and is tied in the front instead of the back. He also will at points remove his shirt and hang it from his belt around his waist to give his wings in Curse Seal Level 2 room to move (also without transforming).",
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
      favorites: 62414,
      about:
        "Age: 17-18 (I); 21 (II)\nBirthday: June 9th (Gemini)\nHeight: 175 cm (I); 178 cm (II)\nWeight: 57 kg (I); 58 kg (II)\nBlood Type: AB\nNature Type: Fire and Water\nFrom: Konohagakure (Leaf)\nRank: S-class Missing-Nin\nRegistered Ninja #: 012110\nAffiliation: Akatsuki\nRing: Shu (Red)\nFinger Position: Right Ring\nPartner: Hoshigaki Kisame\nFavorite Foods: Rice balls (kelp), cabbage, Dango\nLeast Favorite Foods: Steak\nHobby: Visiting traditional Japanese cafés\nFirst Manga Appearance: Ch. 139\nFirst Anime Appearance: Ep. 80\nAssignments Completed: 53 D-Rank, 152 C-Rank, 134 B-Rank, 0 A-Rank, 1 S-Rank\nFamous Quote: Foolish little brother, if you wish to kill me, hate me, detest me, and survive in an unsightly way. Run, run and cling to life.\n\nBackground:\nItachi Uchiha is a missing-nin from Konohagakure, and a prominent member of Akatsuki, partnered with Kisame Hoshigaki. He is Sasuke Uchiha's older brother. \n\nItachi is relatively popular among many fans of Naruto, often having ranked in the top ten in Shonen Jump magazine's popularity polls since his introduction. He was first ranked in the third character popularity poll ranked in 11th place. He was ranked 9th place during the fourth popularity poll, and 6th place in the fifth popularity poll. During the sixth popularity poll, he again was ranked in 11th place. In the last poll, he was ranked in 5th place.\n\nItachi was born into the Uchiha clan and was praised by all as the best of his generation - a genius above all others. Even by the standards of the battle-adept Uchiha clan, Itachi's prowess far outshined all others. However, not even his family, friends, or teachers could understand him. When he was only 4, Itachi had already witnessed countless lives lost due to the Third Great Shinobi World War, which emotionally traumatized him and turned him into a pacifist. At age 7, he graduated from the Ninja Academy at the top of his class after only one year, mastered the Sharingan at age 8, passed the Chunin Exams at age 10, and became ANBU Captain at age 13. According to Madara Uchiha, Itachi also had a lover, whom he killed during the Uchiha clan massacre.\n\nHe was praised highly by his father, who saw the family's future in Itachi, hence neglecting his other son - Itachi's younger brother, Sasuke. However, during this time Itachi showed great affection towards his little brother, Sasuke, and even encouraged his father to come to the Academy when Sasuke was enrolled, something their dad had otherwise forgotten, by saying that he would not go to an important mission, that would establish Itachi a place in the ANBU ranks, otherwise.\n\n\nPersonality:\n\nAs a member of Akatsuki, he possessed incredible self-control of his emotions. He constantly displayed an emotionless personality. He only showed surprise when opponents proved more powerful or skilled than he had expected, and even then he didn't lose his composure. He did not possess any arrogance, and fully justified any statements he made about his power, even complimenting his opponents at times on their abilities.\n\nIn addition to being an extremely powerful ninja, Itachi had equally impressive intelligence, and was shown to be very wise. He was exceedingly sharp and observant to any situation at hand, as he was rarely surprised or caught off guard. He also displayed great intuition, as he was almost never deceived and even then almost instantly realized the truth. Despite his status as a wanted criminal, and having murdered a significant portion of his family, Itachi took no enjoyment in violence or combat, instead preferring to avoid battle or, if this was not possible, end it as quickly as he could.\n\nItachi's only initial interest was in Akatsuki's goals, and his only loyalties appeared to be to the organization and its members, seeming to put the organization's success and secrecy before everything else. As such, Itachi got along with his partner, Kisame, much better than most other Akatsuki members did with their own partners. Kisame appeared to have a deep loyalty to Itachi, immediately doing as he instructed and constantly looking out for his well-being. Itachi treated all of his fellow Akatsuki members to this same, more respectful personality, although his courtesy was rarely returned by the other members.\n\n\nDespite his status as an infamous shinobi, his appearance was not the most intimidating, apart from the intensity of his eyes. While living in Konoha, he would regularly have a gentle and caring look in his eyes, especially directed towards his younger brother. After joining Akatsuki, he would regularly have a stern look to them. He was a fairly tall shinobi, whose basic appearance was very much like the rest of his clan.\n\nHe, like all members of his clan, possessed dark grey eyes, and also had black hair that hung near his cheeks to frame his face. He also had the addition of a long ponytail in the back of his hair (which he obscured with his Akatsuki cloak after joining the organization). Being brothers, Itachi and Sasuke had a similar appearance, but with subtle differences. Itachi's hair color appeared slightly duller and with a softer flow to it, without the spiky style at the back. His skin was also slightly darker. Itachi's most distinguishing characteristics were the long pronounced creases under his eyes.\n\nWhen he lived in Konoha, his casual clothes would consist of a black shirt with a large Uchiha clan symbol on the back of it, and black pants with a weapons pouch strapped to them. When on duty, he would wear the traditional ANBU uniform, although he was never shown wearing a mask. As a member of Akatsuki, he wore the traditional Akatsuki cloak, and usually kept the center of it buttoned down. After his cloak was incinerated by Sasuke's Kirin during their fight in Part II, it was revealed that he still wore his casual clothes underneath it. Like almost all members of Akatsuki, he wore the headband of his home village, Konoha, with a line gouged through it, to symbolize his broken ties with the village \nAbilities:\nSince a young age, Itachi's intellect and talent showed their brilliance in everything he did, as even his teachers said his progress hardly required any help. In the few battles he had been seen in since the start of the series, Itachi was shown to be an incredibly powerful ninja, and easily one of the strongest in the Naruto series, as demonstrated by his ability to easily defeat Deidara, Sasuke, Kakashi Hatake, Kurenai Yuhi and Orochimaru (twice), who themselves are considered amongst the strongest ninjas in Naruto. Being a pacifist, Itachi did not actively take part in battle, typically only acting in self-defense.\n\nSharingan:\nBeing of the Uchiha Clan, and as noted by Kakashi, Itachi was a true successor of the Sharingan Eye. From a stationary position, he would study an opponent's movements with his Sharingan and respond accordingly, often with a genjutsu. He could cast a genjutsu by merely pointing at or looking at someone, and could similarly turn an opponent's genjutsu against them with Demonic Illusion: Mirror Heaven and Earth Change. Itachi had trained so much with his eyes that he had reached the stage where he could have his Sharingan activated the entire time, with minimal drain on his chakra levels. \n\nMangekyo Sharingan:\nItachi possessed the Mangekyo Sharingan, which increased his already great power, and enabled him to use his most powerful techniques. With his left eye, he could use Tsukuyomi, a genjutsu that traps an opponent's mind in an illusionary world, torturing them for what seems like days in a matter of seconds.With his right eye he could use Amaterasu, a ninjutsu which allowed him to create a black flame that he could direct by moving his eye to burn through seemingly anything in its path, including fire itself. His final technique was Susanoo, a technique that manifested itself as a spectral being, labelled as the \"Raging God of Battle\" in the databook. It wielded the Totsuka Sword, an ethereal sword with the ability to seal anything it pierces into the gourd that serves as its hilt, and Yata's Mirror, a shield that can reflect any attack. Zetsu, a fellow Akatsuki member, stated that Itachi's mastery of the Sharingan, combined with the legendary weapons of Susanoo, made him invincible.\n\n\n(Source: Naruto.com, Naruto Wikia)",
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
      favorites: 6704,
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
      favorites: 5762,
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
      favorites: 80528,
      about:
        "Age: 12-13 (Naruto part I), 15-17 (part II), 19 (The Last: Naruto the Movie), 27 (Naruto epilogue), 32 (Boruto: Naruto the Movie)\nBirthday: October 10\nBlood type: B\nHeight: 145–147 cm (I), 166 cm (II), 174 cm (The Last: Naruto the Movie), 180 cm (Boruto: Naruto the Movie)\nWeight: 41–44 kg (I), 52 kg (II), 56 kg (The Last: Naruto the Movie), 66 kg (Boruto: Naruto the Movie)\nFavorite food: Ichiraku ramen\n\nBorn in Konohagakure, a ninja village hidden in the leaves, Naruto Uzumaki was destined for greatness. When born, a powerful nine-tailed demon fox attacked his village. With a wave of its tail, the demon fox could raise tsunamis and shatter mountains. In a valiant attempt to save the village from destruction, the Fourth Hokage, the leader of the Hidden Leaf Village, sealed the demon fox within Naruto's newborn body. This was his final act, for the battle with the fox cost him his life.\n\nDespite the Fourth Hokage's dying wish that Naruto be viewed as a hero for serving as the container for the demon (a Jinchuuriki) the adult villagers of Konoha harbored a fierce hatred for him, with many believing that Naruto and the demon were one and the same. Cast aside as an inhuman monster, Naruto was outcast and ostracized by the villagers for reasons he could not understand. The children his age could only ever follow their parents' example; and they too came to harbor a fierce hatred for Naruto.\n\nNaruto eventually came to accept that he would live and die alone, and his external response was to perform harmless pranks on the village. Coy, raffish and full of life, Naruto soon came to display a somewhat unexpected determination to succeed and be accepted by others. Upon being assigned to \"Team Seven\" as a Genin-ranked ninja, his true potential soon became outwardly apparent.\n\nVowing to become Hokage one day and using his will to never give in, Naruto saves the village from invading forces and earns his acceptance. Eventually, Naruto learns to harness the power of the Demon Fox sealed inside him to perform acts of strength far beyond what any other human is capable of.\n\nIn all, Naruto is an admirable character whose sheer determination to succeed despite the odds, earns him respect and devotion from his fellow villagers.",
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
      favorites: 6841,
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
      favorites: 9447,
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
      favorites: 2395,
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
      favorites: 1159,
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
      favorites: 4072,
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
      favorites: 3401,
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
      favorites: 3236,
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
      favorites: 127,
      about:
        "The Host Club's (self-proclaimed) manageress who tends to be very loud and outspoken. She grew up in France before she came to attend Ouran, right after she saw Kyoya in a picture her dad gave her. Renge first came across the Host Club by maintaining the belief she was Kyoya's fiancée despite never having met him in person. This is due to her love of visual novel-type video games to a point that she sometimes confuses them with real life. Her fascination with Kyoya originated from her obsession with one such dating game. Still, her experience with dating sims causes her to be more aware of character development and a thickening plot. Tamaki initially allowed Renge to become the host club's manager in hopes that she would be a female friend to Haruhi and inspire her to act and dress more feminine.",
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
      favorites: 1114,
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
      favorites: 91808,
      about:
        "Age: 12 (Beginning), 14-15 (Current)\nBirthday: July 7th (2011), June 15th (1999)\nHeight: 158 cm \nWeight: 45 kg\nEye Color: Blue\nBlood Type: A\nOccupation: Assassin (Formerly), Hunter\nNen Type: Transmutation\nEquipment: Skateboard, Yo-Yos\nAbilities: \n\nKillua Zoldyck is the third child of Silva and Kikyo Zoldyck and the heir (former) of the Zoldyck Family. He is the deuteragonist of the series Hunter x Hunter.\n\nKillua is introduced as a character similar to Gon: cheeky, cheerful, and full of bad ideas. However, contrasting Gon's politeness, Killua can be pretty rude to others, mostly strangers and older people. He is also one of the quickest-thinking characters and often analyzes a situation with great ease and accuracy. Despite his young age, his way of thinking, knowledge, and pragmatism give him the attitude of an adult. He is initially very confident about his abilities and able to gauge other people's abilities accurately.\n\nA stark contrast to his best friend Gon, Killua is highly mature in both thinking and emotion. He can keep his anger in check and maintain rationality better than Gon even when facing a terrifying experience.\n\n\n\nCharacter Background:\n\nTimeline:\n\nHunter Exam Arc:\n\nZoldyck Family Arc:\n\nHeavens Arena Arc:\n\n\nYorknew City Arc:\n\n\nGreed Island Arc:\n\n\n\nChimera Ant Arc:\n\n\n\n\nFinal Arc:\n\n\n(Source: Hunterpedia Wiki)",
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
      favorites: 22394,
      about:
        "Gender: Male\nAge: 17 (beginning); 19 (current)\nHeight: 171 cm\nWeight: 59 kg\nBirthday: April 4\nZodiac: Aries\nHair color: blonde\nEye color: blue (1999); brown (manga &amp; 2011); scarlet (when angered)\nBlood type: AB\nNen type: Conjuration; Specialization (when his eyes are Scarlet)\nAbilities: Holy Chain, Dowsing Chain, Chain Jail, Judgment Chain\n\nKurapika is a member of the Kurta tribe who were massacred by the Phantom Troupe (The Spiders) 4 years prior the Hunter exam. The Kurta tribe was an isolated group of people whose eyes would turn scarlet when angered or excited. These scarlet eyes were known to be beautiful, being one of the seven most beautiful in the world. Because of this, the Kurta tribe was constantly pursued and eventually massacred. The eyes of the tribe members were all taken away during the massacre. Kurapika is so far the only known survivor with a heart bent on revenge. He strives to have his revenge against the Phantom Troupe as well as recover the eyes of his tribe members.\n\nDespite having a heart full of hatred, Kurapika is very kind and loyal towards his friends. He is an extremely intelligent person but at the same time reckless. Kurapika is from the materialization nen group and from determination, increased the power of his nen ability to the point that it was formidable against the Phantom Troupe.\n\nKurapika can conjure a unique weapon — five chains that extend from each finger on his right hand. Some of the fingers were specially designed to deal vengeance on the Phantom Troupe. To increase his effectiveness against the formidable Phantom Troupe, Kurapika places strict Limitations on the usage of his chains. The purpose of the chain on Kurapika's index finger has yet to be revealed.\n\nKurapika's Techniques\n\nHoly Chain (癒す親指の鎖 ホーリーチェーン The Healing Thumb Chain): Type Conjuration and Enhancement \nChain Jail (束縛する中指の鎖 チェーンジェイル The Restraining Middle Finger Chain): Type Conjuration, Emission, and Manipulation \nDowsing Chain (導く薬指の鎖 ダウジングチェーン The Guiding Ring Finger Chain): Type Conjuration \nJudgment Chain (律する小指の鎖 ジャッジメントチェーン The Arbiter Little Finger Chain): Type Conjuration, Emission, and Manipulation \nEmperor Time (絶対時間 エンペラータイム Absolute Mastery): Type Specialization",
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
      favorites: 6878,
      about:
        "Gender: Male\nAge: 19 (beginning); 21 (current)\nBirthday: March 3\nHeight: 193 cm\nWeight: 85 kg\nHair color: Brown (1999), Black (2011)\nEye color: Green (1999), Brown (2011)\nBlood type: O\nOccupation: Hunter, Medical Student\nNen type: Emission\n\nPrior the hunter exam, Leorio's close friend died to a curable illness. Despite being curable, Leorio was unable to save his close friend due to his lack of money and knowledge. He aims to become a doctor: One that will help those even without the money to pay for treatment. He decides to take the Hunter Exam in an attempt to earn money for tuition fees and medical treatment for others.\n\nLeorio is talented at bargaining, being able to haggle shopkeepers to no end. He may at times seem brash and rude, but in the end is obviously very kind towards his friends.",
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
      favorites: 20735,
      about:
        "Age: 12 (beginning), 14-15 (current)\nBirthday: May 5\nHeight: 154 cm\nWeight: 49 kg\nEye Color: Brown\nBlood type: B\nOccupation: Hunter\nNen type: Enhancement\nAbilities: \n\nGon Freecss (ゴン゠フリークス, Gon Furīkusu) is a Rookie Hunter and the son of Ging Freecss. Finding his father is Gon's motivation in becoming a Hunter. He has been the main protagonist for most of the series.\n\nGon wants to become a Hunter because he wishes to find out the depths of an occupation that would cause a father to choose the profession over being with his own son.\n\nGon is an athletic, rustic, and friendly boy who is searching for adventure. Also, he is not very good at math. However, having spent a lot of time in the woods as a child, he is very good with animals. Simultaneously, his flaws lie in his temper and impulsive nature. Gon sometimes fails to think things through and such actions lead to him suffering. Though possessing talent far beyond the norm for his age, anytime his abilities are challenged, he feels as if he has to prove his antagonist wrong.\n\n\n\nBackground: \n\n\nTimeline:\n\n\n\n\n\n\n\n\n\n\n\n\n(Source: Hunter x Hunter Wiki)",
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
      favorites: 34828,
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
      favorites: 74,
      about:
        "Gender: Male\nClass: Steam Gunner\nReal Name: Masato Indou\nAge: 26\nAvatar: The Rebirth, Corbenik\n\nOvan is a very mysterious person. Generally quiet, when he does speak, everybody listens. He is capable of commanding the attention of everybody around him with little effort. He seems to know quite a bit about events in The World R:2, though his quiet nature makes it unclear exactly how much knowledge he actually has. He frequently disappears from the game for long stretches of time; while he says it's related to his job in the real world, whether that is true or not is up for debate. As a Steam Gunner of an extremely high level, he has progressed beyond having to worry about trivial matters such as leveling or PKers, leaving him plenty of time to work on his long term goals, whatever they may be. One thing to note, though he never seems to lie, he has the habit of not giving a straight answer, leaving others to make their own judgments.",
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
      favorites: 533,
      about:
        "Gender: Male\nClass: Adept Rogue (MultiWeapon in Japanese)\nReal Name: Ryou Misaki\nAge: 17\nAvatar: The Terror of Death, Skeith\nHeight: 174cm\n\nIn .hack//Roots, Haseo is a newbie player to the Online game known as The World. He is an outcast in real life, and not very good at dealing with people. Upon logging into The World R:2, Haseo is attacked by PKs, (Player Killers), and rescued by Ovan, the Guild master of the Twilight Brigade.\n\nHaseo then joins the Twilight Brigade in order to learn more about Ovan. Eventually, after Ovan disappears for an extended period of time, the Twilight Brigade is disbanded and Shino is PKed by Tri-Edge. Obsessed with saving Shino, Haseo continually seeks power, culminating in his journey into the Forest of Pain, a new Lost Ground, where, after confronting another AI Harald, his PC body was transformed.\n\nAt that point level 133 and equipped with an arsenal of incredibly powerful weapons, Haseo became the Terror of Death, a PKK, or Player Killer Killer, who hunted down Player Killers. Upon finding them, he demanded information on Tri-Edge; if they failed to give any useful information, which was usual, he killed them. The name Terror of Death was the title given to him by players, as he truly cared nothing for any other player except for Shino.\n\nAround this time, Ovan returns and informs Haseo that Tri-Edge will reappear shortly at the Hidden Forbidden Holy Ground. Haseo attempts to defeat Tri-Edge, but is Data-Drained, returning some time later as a level 1 character with no items or contact info.\n\n(AIDA- a bug in [The World R:2] that when normal players come into contact with this 'bug' they get their data altered/corrupted and if AIDA doesn't just infect the player the player will fall into a coma) \n(Ephitaph users- a select few with Avatars used to fight against Tri-Edge and AIDA among other 'bugs' or 'threats') \n(Avatar- a total of 8 creatures first seen in the original DotHack where Kite and his friend defeated them all, Avatars are now used by the Ephitaph users to 'delete' the bugs called AIDA or to remove these bugs from infected players, Avatars use a special move called data drain that when used on players with out an Avatar or AIDA inside them they will drop into a coma).\n\nWhile it is never officially announced wether they are the same person or not but Haseo has the same real name as well is close to the same age time wise as the player of Sora from .hack//sign as well as sharing a connection to skeith.",
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
      favorites: 41,
      about:
        "Gender: Female\nClass: Harvest Cleric\nReal Name: Shino Nanao\nAge: 20\n\nOne of the few people close to Ovan who acts as leader of the Twilight Brigade whenever Ovan is incapable of doing so. Gentle-mannered but strong-minded, she holds the Twilight Brigade together when Ovan isn't around due to frequent absences. She and Ovan seem to have a more involved relationship than mere guildmates, as they have both known and seen each other somewhat frequently outside the game as it was alluded to when they talked about Shino's hospital visits. \n\nDuring episode 13 of .hack//Roots, Shino is attacked by Tri-Edge and Azure Kite is framed, resulting in her PC seemingly erased and her real self sent into a coma. She had been living alone and her landlord discovered her unconscious. The doctors cannot treat her because they do not know the cause behind her coma. Those who have suffered fates like hers are referred to as a Lost One, since it is rumored that once PKed by Tri-Edge a player can never return to the game. In real life, Shino is 20 and studying medicine.\n\n(Source: )",
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
      favorites: 13,
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
      favorites: 11,
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
      favorites: 1,
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
      favorites: 2,
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
      favorites: 360,
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
      favorites: 126666,
      about:
        "Age: 17; 19\nBirthdate: May 5, Taurus\nHeight: 172 cm; 174 cm\nBlood type: F\nAffiliation: Straw Hat Pirates\nPosition: Captain\nDevil fruit: Gomu Gomu no Mi (Gum Gum Fruit)\nType: Paramecia \nBounty:\nLuffy is the captain of the Straw Hat Pirates and is best friends with all of them and values them over all else. At first glance, Luffy does not appear to be very intelligent, often seeing things in a childish manner and can easily be amazed by the simplest things. However, because he views the world in a straightforward and simple manner, he is occasionally the only person who can see past the events and see what should be done.\n\nLuffy seems to have an unstoppable appetite, a characteristic that is common to the Japanese archetype of the (at times simple-minded) young male hero/adventurer with a heart of gold; perhaps the hunger more so in Luffy's case due to having an elastic stomach. Luffy is also another one of the several characters given the middle initial \"D.\"\n\nAlthough Luffy is fairly lightheaded and a funny character, he has an unstoppable sense of determination, optimism, and commitment and will do anything to stand up for his friends and comrades. Along with that, he has great courage to back it up as well as unbelievable strength. Ever since consuming the devil fruit he was shown to be not worried about his inability to swim, much like his brother. Much of these traits are common among D's. His only display of true fear is towards his grandfather, to the point that he is intimidated at the mere mention of him.\n\nLuffy never kills any of his enemies, no matter how cold-hearted they are; instead, he frequently sends the villain flying, knocking them out or beating them to a point that they are almost near death, which results in some of the villains searching for revenge, such as Buggy the Clown and Alvida. Oda explains that it's not a question of morality so much as a matter of punishing the villains for their crimes - he feels that killing the villains lets them off too lightly, whereas he considers letting them live to see their dreams be ruined a far more fitting punishment.\n\nLuffy's dream is to find the One Piece and become Pirate King. He knows that to achieve his goal, he will have to defeat many strong opponents, including the World Government and his childhood hero Shanks.",
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
      favorites: 125,
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
      favorites: 1996,
      about:
        "Birthday: 13 April\nAge: 23 Years\nBlood Type: Type O\nHeight: 175 cm\nWeight: 65 KG\nOccupation: Sweeper\nEquipment:  Decorated Gun (Hades)\nLikes: Milk, Seafood, Rice balls (onigiri)\nDislikes: Woman's Tears\nHand: Left handed, but claims to be Ambidextrous in order to forget his past. His accuracy is increased when he uses his left hand.\nSkills: Can sleep anywhere, gunman\n\nAlso known as Black Cat and the main protagonist in the story, he starts as a ruthless assassin but learns compassion from Saya Minatsuki. \n\n\n\nHe always wears a bell around his neck to remind him of what he once was and could once more become. In the manga, he already has the bell from book one. In the anime, Eve gives him the bell from the fable of the Black Cat.\n\nHis gun was made just for him by Chronos, called Hades. He also has a soft spot for women and children, especially when tears are shed.",
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
      favorites: 378,
      about:
        "Birthday: June 23\nHeight: 180cmC, Inventing support items\nHobbies: Being well groomed, polishing cars\nMotto: be kind to women and weak children\n\nFormer IBI detective, Sven is now a sweeper, and Train's partner. He also takes Eve in as a sort of daughter after the events at Torneo's place. Sven's outlook is much calmer and more logical than Train's; he often has to use his brain to win battles since he doesn't possess the Black Cat's pure physical power. He follows a strict \"gentlemen's code\", which often makes him seem older to other characters. \n\nThe Forseeing Eye (under the eyepatch) allows him to glimpse into the future at the cost of great mental strain. In the manga, it eventually evolves into the Glasper Eye which can manipulate time. He otherwise fights with a briefcase filled with gadgets.",
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
      favorites: 429,
      about:
        "Age: 11 (according to the author)\n\nEve is an artificial human who was created to be the first in a line of super soldiers, having had her DNA fused with nanomachines she has the ability to change her body's shape and genetic make-up. She was raised to be emotionless, and as a result something that is considered normal is new to her.\n\nIn the anime, she first meets Sven and Train when Sven had wanted to save her while the Chronos has sent Train to kill her and destroy all the research data used in her creation, choosing to spare her life being one of the reasons Train left the organization. In the anime she is driven berserk by her creator and ordered to attack Train, while in the manga Eve first Encounters Train and Sven as they are working as sweepers to capture Torneo Rudman (Train having never been sent by Chronos in the Manga), she is rescued by Sven and Train and Train stops Toreno from causing Eve to go Berserk. She then joins Sven and Train.\n\nAt the beginning of the anime series Eve is wary of Train claiming he smells like blood,having given Train the bell he wears on his neck after reading that bells allow you to know where a bad cat is. Where as in the manga he already had his choker bell chain. They eventually develop into rivals over the position of being Sven's partner and Train gives her the nickname \"Little Princess\".\n\nHer hobby is reading books of varying degree of difficulty; she can memorize any book she reads after reading it once, usually confusing the others by using complicated words she's learned, and her power to transform becomes more refined the more she learns.",
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
      favorites: 33,
      about:
        "Birthday: August 1\nAge: 21 years old\nBlood type: B\nHeight: 167cm\nWeight: 48kg\nOccupation: thief-for-hire\nHobbies: disguises, shopping, tarrot card reading\nLikes: money, jewelery, handsome men, cute girls, etc.\nDislikes: ghosts, narcissists, etc\nHandedness: right-handed\nComments: Her actions are always in line with her beliefs. She is very independant and won't do anything she doesn't want to. Sensing a commonality between herself and Train, she harboured an interest in him since Sapidoa.\n\n(Source: Black Cat vol. 2)\n\nA world class thief also known as Rins who she works for everyone, from the government to mob bosses. She claims she can steal anything and manipulate any man. She sometimes works alongside Train and Sven. She always comes out with money in her pockets, regardless of how it might have gotten there. \n\n(Source: Wikipedia)",
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
      favorites: 538,
      about:
        "Age: 19 \nSex: Male \nHeight: 175 cm\nWeight: 58 kg\nBirthday: December 17th\nBloodtype: B\nPowers: Jagan (Evil Eye) and Snake Bite\n\nFirst impressions of Ban are generally that he is a rude person and has a great sense of pride. With his unruly hair (He's often called \"Urchin Head\") and sunglasses, people already judge him poorly (It doesn't help that he gives unflattering nicknames to almost anyone he meets, e.g. \"monkey trainer\" Shido and \"thread spool\" Kazuki). But he is actually a great guy with a strong sense of leadership and a very talented person. He is one quarter German and he's the grandchild of the \"Last Witch of the 20th Century\".\n\nHe's also a brother-like figure to Kudou Himiko after she has gotten over her brother's death. Himiko's average fighting skills meant that she often bites off more than what she can chew. In such situations, Ban can be counted on to come to her aid (though it must be noted that she does return the favor at times).\n\nIn the GB duo, he's often the one who thinks of plans for their moves. Initially, Ginji was seen to be a sidekick to him. (In fact, when they first formed their partnership, Ban insisted that Ginji was only his sidekick.) As the story progresses, Ginji gradually held his own in their missions, and Ban acknowledged him as an equal.\n\nBan is feared due to his procession of the Jagan, a power which allows him to make anyone he makes eye contact with to watch a one minute long illusion, however, it should only be used three times per day. The Evil Eye cannot be used on the same person again for the next 24 hours. Furthermore, while the illusion only lasts for one minute, should Ban will it, the one affected by the Jagan can be placed inside a time-warp zone via the illusion created by the technique, meaning that to them, one minute in real life could last up to several hours in the Jagan's influence. \n\nBecause he is a direct descendant of the Witch clan, and being born under the star of Asclepius, he possesses incredible superhuman strength, which gives him a gripping force of 200 kgf (2 kN) in each hand. It is also shown that he is strong enough break open the doors of an armored steel truck and punch hard enough to create large craters in the ground or break walls; occasionally even collapsing multi-storied buildings.\n\nAt full power, his right hand becomes a snake's claw that can crush anything. Also, while powering up, the astral outline of a giant snake can be seen surrounding him. The general impression of people when taking their first look at him is of a skinny or ordinary person; however, a close look will reveal that he is of a fair height and has solid shoulders and large, muscular and solid arms. His unruly ordinary appearance often deceive enemies and they don't expect his level of superhuman super strength.",
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
      favorites: 400,
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
      favorites: 140,
      about:
        "Age: 20 \nSex: Male \nBirthday: 1st January \nHeight: 176 cm \nWeight: 59 kg  \nBloodtype: AB\nWeapons: Threads\n\nOne of the former Emperor of the Volts, currently working as a guiding agent in Shinjuku. Kazuki is the one to go for if you want information on just about anything; chances are, he knows all of your secrets, too. He keeps in close contact with Shido and Ginji, but he doesn't usually work with them. Kazuki fights with strings, as one might expect from the Fuuchouin String Style; there are a great many elusive fragments of this art that can't be traced. However, it is an incredibly flexible skill -- he can overhear conversations that take place in the presence of one of his strings, change his physical appearance and voice, sew people's mouths and eyes shut.",
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
      favorites: 28,
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
      favorites: 4,
      about:
        "Name: Hevn\nAge: 21\nSex: Female\nBirthday: September 23rd\nHeight: 162 cm\nWeight: 52 kg\nBloodtype: AB\n\nHevn is the negotiator for the GetBackers. She finds clients and brings them to the attention of Ginji and Ban. Aside from that she doesn't do much else. The most noticable feature on Hevn are her very large breasts that she makes no effort to conceal.",
    },
  ],
];
/* cspell:enable */

export default PREFETCHED_DATA;
