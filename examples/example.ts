import { ChalengeType, CharacterElement, MatchInformation, SpreadsheetComparisonRule, SpreadsheetSystem, TeamMode, WeaponBanLocation, WeaponType } from './../types/match-information';
import { getDraftConfiguration } from './default-script';

const matchInformation: MatchInformation = {
    spreadsheet: {
        name: "Spreadsheet Example",
        characters: [
            {
                id: 33,
                name: "Jean",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.ANEMO,
                rarity: 5,
                costs: [
                    3,
                    3,
                    4,
                    4,
                    8,
                    8,
                    8
                ]
            },
            {
                id: 87,
                name: "Arlecchino",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.PYRO,
                rarity: 5,
                costs: [
                    65,
                    115,
                    125,
                    140,
                    143,
                    146,
                    200
                ]
            },
            {
                id: 9,
                name: "Baizhu",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.DENDRO,
                rarity: 5,
                costs: [
                    1,
                    2,
                    10,
                    11,
                    13,
                    13,
                    20
                ]
            },
            {
                id: 8,
                name: "Itto",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.GEO,
                rarity: 5,
                costs: [
                    3,
                    9,
                    11,
                    13,
                    16,
                    20,
                    47
                ]
            },
            {
                id: 32,
                name: "Hu Tao",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.PYRO,
                rarity: 5,
                costs: [
                    8,
                    23,
                    26,
                    34,
                    37,
                    39,
                    47
                ]
            },
            {
                id: 34,
                name: "Kazuha",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.ANEMO,
                rarity: 5,
                costs: [
                    19,
                    21,
                    25,
                    25,
                    25,
                    25,
                    30
                ]
            },
            {
                id: 82,
                name: "Yelan",
                weaponType: WeaponType.BOW,
                element: CharacterElement.HYDRO,
                rarity: 5,
                costs: [
                    10,
                    19,
                    44,
                    50,
                    60,
                    62,
                    80
                ]
            },
            {
                id: 92,
                name: "Emilie",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.DENDRO,
                rarity: 5,
                costs: [
                    16,
                    29,
                    43,
                    50,
                    71,
                    79,
                    140
                ]
            },
            {
                id: 41,
                name: "Klee",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.PYRO,
                rarity: 5,
                costs: [
                    2,
                    3,
                    17,
                    19,
                    24,
                    26,
                    33
                ]
            },
            {
                id: 20,
                name: "Dehya",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.PYRO,
                rarity: 5,
                costs: [
                    2,
                    2,
                    3,
                    5,
                    6,
                    6,
                    12
                ]
            },
            {
                id: 28,
                name: "Furina",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.HYDRO,
                rarity: 5,
                costs: [
                    22,
                    45,
                    85,
                    95,
                    100,
                    109,
                    160
                ]
            },
            {
                id: 73,
                name: "Wanderer",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.ANEMO,
                rarity: 5,
                costs: [
                    9,
                    10,
                    28,
                    28,
                    34,
                    36,
                    75
                ]
            },
            {
                id: 89,
                name: "Chiori",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.GEO,
                rarity: 5,
                costs: [
                    12,
                    24,
                    32,
                    42,
                    49,
                    59,
                    90
                ]
            },
            {
                id: 30,
                name: "Gaming",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.PYRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    10,
                    10,
                    33
                ]
            },
            {
                id: 47,
                name: "Lyney",
                weaponType: WeaponType.BOW,
                element: CharacterElement.PYRO,
                rarity: 5,
                costs: [
                    18,
                    25,
                    34,
                    46,
                    54,
                    57,
                    120
                ]
            },
            {
                id: 25,
                name: "Faruzan",
                weaponType: WeaponType.BOW,
                element: CharacterElement.ANEMO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    5
                ]
            },
            {
                id: 50,
                name: "Nahida",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.DENDRO,
                rarity: 5,
                costs: [
                    8,
                    10,
                    40,
                    42,
                    48,
                    50,
                    120
                ]
            },
            {
                id: 15,
                name: "Chevreuse",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.PYRO,
                rarity: 4,
                costs: [
                    10,
                    10,
                    10,
                    10,
                    15,
                    15,
                    35
                ]
            },
            {
                id: 29,
                name: "Ganyu",
                weaponType: WeaponType.BOW,
                element: CharacterElement.CRYO,
                rarity: 5,
                costs: [
                    39,
                    49,
                    50,
                    51,
                    62,
                    64,
                    95
                ]
            },
            {
                id: 39,
                name: "Keqing",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.ELECTRO,
                rarity: 5,
                costs: [
                    2,
                    2,
                    2,
                    2,
                    3,
                    3,
                    4
                ]
            },
            {
                id: 90,
                name: "Clorinde",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.ELECTRO,
                rarity: 5,
                costs: [
                    20,
                    40,
                    76,
                    84,
                    89,
                    100,
                    170
                ]
            },
            {
                id: 91,
                name: "Sigewinne",
                weaponType: WeaponType.BOW,
                element: CharacterElement.HYDRO,
                rarity: 5,
                costs: [
                    2,
                    3,
                    16,
                    16,
                    16,
                    16,
                    51
                ]
            },
            {
                id: 21,
                name: "Diluc",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.PYRO,
                rarity: 5,
                costs: [
                    1,
                    1,
                    1,
                    1,
                    2,
                    2,
                    2
                ]
            },
            {
                id: 76,
                name: "Xianyun",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.ANEMO,
                rarity: 5,
                costs: [
                    10,
                    13,
                    42,
                    42,
                    43,
                    43,
                    50
                ]
            },
            {
                id: 66,
                name: "Tighnari",
                weaponType: WeaponType.BOW,
                element: CharacterElement.DENDRO,
                rarity: 5,
                costs: [
                    4,
                    4,
                    5,
                    5,
                    7,
                    7,
                    25
                ]
            },
            {
                id: 57,
                name: "Raiden",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.ELECTRO,
                rarity: 5,
                costs: [
                    8,
                    9,
                    20,
                    37,
                    39,
                    41,
                    45
                ]
            },
            {
                id: 19,
                name: "Cyno",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.ELECTRO,
                rarity: 5,
                costs: [
                    1,
                    1,
                    4,
                    5,
                    6,
                    7,
                    12
                ]
            },
            {
                id: 37,
                name: "Ayato",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.HYDRO,
                rarity: 5,
                costs: [
                    2,
                    2,
                    5,
                    7,
                    8,
                    9,
                    20
                ]
            },
            {
                id: 60,
                name: "Kokomi",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.HYDRO,
                rarity: 5,
                costs: [
                    2,
                    2,
                    3,
                    4,
                    5,
                    6,
                    15
                ]
            },
            {
                id: 62,
                name: "Shenhe",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.CRYO,
                rarity: 5,
                costs: [
                    18,
                    26,
                    35,
                    40,
                    44,
                    46,
                    90
                ]
            },
            {
                id: 16,
                name: "Tartaglia",
                weaponType: WeaponType.BOW,
                element: CharacterElement.HYDRO,
                rarity: 5,
                costs: [
                    2,
                    3,
                    3,
                    4,
                    5,
                    6,
                    8
                ]
            },
            {
                id: 36,
                name: "Ayaka",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.CRYO,
                rarity: 5,
                costs: [
                    55,
                    57,
                    73,
                    83,
                    103,
                    103,
                    110
                ]
            },
            {
                id: 72,
                name: "Venti",
                weaponType: WeaponType.BOW,
                element: CharacterElement.ANEMO,
                rarity: 5,
                costs: [
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    2
                ]
            },
            {
                id: 74,
                name: "Wriothesley",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.CRYO,
                rarity: 5,
                costs: [
                    38,
                    57,
                    75,
                    88,
                    97,
                    99,
                    180
                ]
            },
            {
                id: 77,
                name: "Xiao",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.ANEMO,
                rarity: 5,
                costs: [
                    13,
                    14,
                    14,
                    14,
                    14,
                    14,
                    15
                ]
            },
            {
                id: 81,
                name: "Yae Miko",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.ELECTRO,
                rarity: 5,
                costs: [
                    10,
                    13,
                    20,
                    28,
                    37,
                    40,
                    70
                ]
            },
            {
                id: 24,
                name: "Eula",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.CRYO,
                rarity: 5,
                costs: [
                    1,
                    2,
                    2,
                    3,
                    3,
                    4,
                    40
                ]
            },
            {
                id: 51,
                name: "Navia",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.GEO,
                rarity: 5,
                costs: [
                    31,
                    36,
                    49,
                    59,
                    68,
                    70,
                    140
                ]
            },
            {
                id: 99,
                name: "Chasca",
                weaponType: WeaponType.BOW,
                element: CharacterElement.ANEMO,
                rarity: 5,
                costs: [
                    80,
                    100,
                    135,
                    149,
                    157,
                    162,
                    210
                ]
            },
            {
                id: 52,
                name: "Neuvillette",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.HYDRO,
                rarity: 5,
                costs: [
                    20,
                    60,
                    74,
                    94,
                    94,
                    96,
                    160
                ]
            },
            {
                id: 102,
                name: "Citlali",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.CRYO,
                rarity: 5,
                costs: [
                    30,
                    40,
                    85,
                    88,
                    96,
                    100,
                    160
                ]
            },
            {
                id: 98,
                name: "Xilonen",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.GEO,
                rarity: 5,
                costs: [
                    28,
                    29,
                    63,
                    66,
                    75,
                    81,
                    150
                ]
            },
            {
                id: 83,
                name: "Yoimiya",
                weaponType: WeaponType.BOW,
                element: CharacterElement.PYRO,
                rarity: 5,
                costs: [
                    2,
                    3,
                    5,
                    6,
                    8,
                    8,
                    35
                ]
            },
            {
                id: 2,
                name: "Kinich",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.DENDRO,
                rarity: 5,
                costs: [
                    35,
                    65,
                    114,
                    119,
                    129,
                    134,
                    195
                ]
            },
            {
                id: 105,
                name: "Mizuki",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.ANEMO,
                rarity: 5,
                costs: [
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    2
                ]
            },
            {
                id: 54,
                name: "Nilou",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.HYDRO,
                rarity: 5,
                costs: [
                    1,
                    1,
                    3,
                    3,
                    3,
                    3,
                    15
                ]
            },
            {
                id: 101,
                name: "Mavuika",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.PYRO,
                rarity: 5,
                costs: [
                    120,
                    140,
                    190,
                    205,
                    210,
                    220,
                    260
                ]
            },
            {
                id: 49,
                name: "Mona",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.HYDRO,
                rarity: 5,
                costs: [
                    6,
                    7,
                    7,
                    7,
                    12,
                    12,
                    12
                ]
            },
            {
                id: 86,
                name: "Zhongli",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.GEO,
                rarity: 5,
                costs: [
                    16,
                    17,
                    17,
                    17,
                    17,
                    17,
                    19
                ]
            },
            {
                id: 110,
                name: "Varesa",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.ELECTRO,
                rarity: 5,
                costs: [
                    72,
                    85,
                    126,
                    137,
                    149,
                    156,
                    195
                ]
            },
            {
                id: 109,
                name: "Iansan",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.ELECTRO,
                rarity: 4,
                costs: [
                    7,
                    10,
                    16,
                    16,
                    19,
                    24,
                    33
                ]
            },
            {
                id: 111,
                name: "Escoffier",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.CRYO,
                rarity: 5,
                costs: [
                    70,
                    100,
                    120,
                    145,
                    146,
                    150,
                    200
                ]
            },
            {
                id: 5,
                name: "Albedo",
                weaponType: WeaponType.BOW,
                element: CharacterElement.GEO,
                rarity: 5,
                costs: [
                    2,
                    2,
                    2,
                    3,
                    3,
                    5,
                    10
                ]
            },
            {
                id: 6,
                name: "Alhaitham",
                weaponType: WeaponType.BOW,
                element: CharacterElement.DENDRO,
                rarity: 5,
                costs: [
                    8,
                    9,
                    13,
                    14,
                    22,
                    24,
                    70
                ]
            },
            {
                id: 1,
                name: "Mualani",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.HYDRO,
                rarity: 5,
                costs: [
                    82,
                    122,
                    137,
                    147,
                    157,
                    160,
                    205
                ]
            },
            {
                id: 112,
                name: "Skirk",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.CRYO,
                rarity: 5,
                costs: [
                    85,
                    93,
                    140,
                    162,
                    177,
                    195,
                    240
                ]
            },
            {
                id: 4,
                name: "Aloy",
                weaponType: WeaponType.BOW,
                element: CharacterElement.CRYO,
                rarity: 5,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 56,
                name: "Qiqi",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.CRYO,
                rarity: 5,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 93,
                name: "Viajante",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.OMNI,
                rarity: 5,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 67,
                name: "Viajante",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.ANEMO,
                rarity: 5,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 68,
                name: "Viajante",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.DENDRO,
                rarity: 5,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 69,
                name: "Viajante",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.ELECTRO,
                rarity: 5,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 70,
                name: "Viajante",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.GEO,
                rarity: 5,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 71,
                name: "Viajante",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.HYDRO,
                rarity: 5,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 103,
                name: "Viajante",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.PYRO,
                rarity: 5,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 7,
                name: "Amber",
                weaponType: WeaponType.BOW,
                element: CharacterElement.PYRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 10,
                name: "Barbara",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.HYDRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 11,
                name: "Beidou",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.ELECTRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 12,
                name: "Bennett",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.PYRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 13,
                name: "Candace",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.HYDRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 14,
                name: "Charlotte",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.CRYO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 17,
                name: "Chongyun",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.CRYO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 18,
                name: "Collei",
                weaponType: WeaponType.BOW,
                element: CharacterElement.DENDRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 113,
                name: "Dahlia",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.HYDRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 22,
                name: "Diona",
                weaponType: WeaponType.BOW,
                element: CharacterElement.CRYO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 23,
                name: "Dori",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.ELECTRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 26,
                name: "Fischl",
                weaponType: WeaponType.BOW,
                element: CharacterElement.ELECTRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 27,
                name: "Freminet",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.CRYO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 31,
                name: "Gorou",
                weaponType: WeaponType.BOW,
                element: CharacterElement.GEO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 114,
                name: "Ifa",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.ANEMO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 3,
                name: "Kachina",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.GEO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 35,
                name: "Kaeya",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.CRYO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 38,
                name: "Kaveh",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.DENDRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 40,
                name: "Kirara",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.DENDRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 43,
                name: "Sara",
                weaponType: WeaponType.BOW,
                element: CharacterElement.ELECTRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 42,
                name: "Kuki",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.ELECTRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 104,
                name: "Lan Yan",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.ANEMO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 44,
                name: "Layla",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.CRYO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 45,
                name: "Lisa",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.ELECTRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 46,
                name: "Lynette",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.ANEMO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 48,
                name: "Mika",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.CRYO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 53,
                name: "Ningguang",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.GEO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 55,
                name: "Noelle",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.GEO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 100,
                name: "Ororon",
                weaponType: WeaponType.BOW,
                element: CharacterElement.ELECTRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 58,
                name: "Razor",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.ELECTRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 59,
                name: "Rosaria",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.CRYO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 61,
                name: "Sayu",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.ANEMO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 88,
                name: "Sethos",
                weaponType: WeaponType.BOW,
                element: CharacterElement.ELECTRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 63,
                name: "Heizou",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.ANEMO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 64,
                name: "Sucrose",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.ANEMO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 65,
                name: "Thoma",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.PYRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 75,
                name: "Xiangling",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.PYRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 78,
                name: "Xingqiu",
                weaponType: WeaponType.SWORD,
                element: CharacterElement.HYDRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 79,
                name: "Xinyan",
                weaponType: WeaponType.CLAYMORE,
                element: CharacterElement.PYRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 80,
                name: "Yanfei",
                weaponType: WeaponType.CATALYST,
                element: CharacterElement.PYRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 85,
                name: "Yaoyao",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.DENDRO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                id: 84,
                name: "Yun Jin",
                weaponType: WeaponType.SPEAR,
                element: CharacterElement.GEO,
                rarity: 4,
                costs: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        ],
        configurations: {
            comparisonRule: SpreadsheetComparisonRule.CHARACTER_POINTS,
            pointsInterval: 60,
            jokerInterval: 20,
            jokersLimit: 1,
            characterPointsLimit: 60,
            initialBanDefault: 3,
            initialBansCutoff: 570,
            removeExtraBansForHighestCostBox: false,
            weaponBanLocation: WeaponBanLocation.NO_BAN,
            weaponBansDefault: 0,
            system: SpreadsheetSystem.FRENCH,
            chalengeType: ChalengeType.ABYSS
        }
    },
    teamMode: TeamMode.SOLO,
    chalengeType: ChalengeType.ABYSS,
    side1: {
        name: "batatinho",
        players: [
            {
                name: "batatinho"
            }
        ],
        box: {
            cost: 471,
            fixedCost: 88,
            characters: [
                {
                    id: 4,
                    name: "Aloy",
                    constelation: 0,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.CRYO,
                    rarity: 5,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 6,
                    name: "Alhaitham",
                    constelation: 0,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.DENDRO,
                    rarity: 5,
                    cost: 8,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        8,
                        9,
                        13,
                        14,
                        22,
                        24,
                        70
                    ]
                },
                {
                    id: 7,
                    name: "Amber",
                    constelation: 2,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 10,
                    name: "Barbara",
                    constelation: 6,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.HYDRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 11,
                    name: "Beidou",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 12,
                    name: "Bennett",
                    constelation: 6,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 13,
                    name: "Candace",
                    constelation: 6,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.HYDRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 14,
                    name: "Charlotte",
                    constelation: 6,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 15,
                    name: "Chevreuse",
                    constelation: 6,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 35,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        10,
                        10,
                        10,
                        10,
                        15,
                        15,
                        35
                    ]
                },
                {
                    id: 17,
                    name: "Chongyun",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 18,
                    name: "Collei",
                    constelation: 6,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.DENDRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 22,
                    name: "Diona",
                    constelation: 6,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 23,
                    name: "Dori",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 26,
                    name: "Fischl",
                    constelation: 6,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 27,
                    name: "Freminet",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 28,
                    name: "Furina",
                    constelation: 2,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.HYDRO,
                    rarity: 5,
                    cost: 85,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        22,
                        45,
                        85,
                        95,
                        100,
                        109,
                        160
                    ]
                },
                {
                    id: 30,
                    name: "Gaming",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 33,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        10,
                        10,
                        33
                    ]
                },
                {
                    id: 31,
                    name: "Gorou",
                    constelation: 6,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.GEO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 34,
                    name: "Kazuha",
                    constelation: 0,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.ANEMO,
                    rarity: 5,
                    cost: 19,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        19,
                        21,
                        25,
                        25,
                        25,
                        25,
                        30
                    ]
                },
                {
                    id: 35,
                    name: "Kaeya",
                    constelation: 4,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 38,
                    name: "Kaveh",
                    constelation: 1,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.DENDRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 40,
                    name: "Kirara",
                    constelation: 3,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.DENDRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 42,
                    name: "Kuki",
                    constelation: 5,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 43,
                    name: "Sara",
                    constelation: 6,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 44,
                    name: "Layla",
                    constelation: 6,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 45,
                    name: "Lisa",
                    constelation: 5,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 46,
                    name: "Lynette",
                    constelation: 5,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.ANEMO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 48,
                    name: "Mika",
                    constelation: 5,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 50,
                    name: "Nahida",
                    constelation: 2,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.DENDRO,
                    rarity: 5,
                    cost: 40,
                    fixedCost: 32,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        8,
                        10,
                        40,
                        42,
                        48,
                        50,
                        120
                    ]
                },
                {
                    id: 53,
                    name: "Ningguang",
                    constelation: 6,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.GEO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 55,
                    name: "Noelle",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.GEO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 56,
                    name: "Qiqi",
                    constelation: 3,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.CRYO,
                    rarity: 5,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 57,
                    name: "Raiden",
                    constelation: 2,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.ELECTRO,
                    rarity: 5,
                    cost: 20,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        8,
                        9,
                        20,
                        37,
                        39,
                        41,
                        45
                    ]
                },
                {
                    id: 58,
                    name: "Razor",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 59,
                    name: "Rosaria",
                    constelation: 6,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 61,
                    name: "Sayu",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.ANEMO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 63,
                    name: "Heizou",
                    constelation: 6,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.ANEMO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 64,
                    name: "Sucrose",
                    constelation: 6,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.ANEMO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 65,
                    name: "Thoma",
                    constelation: 6,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 75,
                    name: "Xiangling",
                    constelation: 6,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 78,
                    name: "Xingqiu",
                    constelation: 6,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.HYDRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 79,
                    name: "Xinyan",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 80,
                    name: "Yanfei",
                    constelation: 6,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 82,
                    name: "Yelan",
                    constelation: 0,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.HYDRO,
                    rarity: 5,
                    cost: 10,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        10,
                        19,
                        44,
                        50,
                        60,
                        62,
                        80
                    ]
                },
                {
                    id: 84,
                    name: "Yun Jin",
                    constelation: 6,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.GEO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 85,
                    name: "Yaoyao",
                    constelation: 3,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.DENDRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 88,
                    name: "Sethos",
                    constelation: 1,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 93,
                    name: "Viajante",
                    constelation: 6,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.OMNI,
                    rarity: 5,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 3,
                    name: "Kachina",
                    constelation: 6,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.GEO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 87,
                    name: "Arlecchino",
                    constelation: 1,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.PYRO,
                    rarity: 5,
                    cost: 115,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        65,
                        115,
                        125,
                        140,
                        143,
                        146,
                        200
                    ]
                },
                {
                    id: 90,
                    name: "Clorinde",
                    constelation: 2,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.ELECTRO,
                    rarity: 5,
                    cost: 76,
                    fixedCost: 56,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        20,
                        40,
                        76,
                        84,
                        89,
                        100,
                        170
                    ]
                },
                {
                    id: 100,
                    name: "Ororon",
                    constelation: 3,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 102,
                    name: "Citlali",
                    constelation: 0,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.CRYO,
                    rarity: 5,
                    cost: 30,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        30,
                        40,
                        85,
                        88,
                        96,
                        100,
                        160
                    ]
                },
                {
                    id: 104,
                    name: "Lan Yan",
                    constelation: 6,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.ANEMO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 113,
                    name: "Dahlia",
                    constelation: 0,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.HYDRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 114,
                    name: "Ifa",
                    constelation: 0,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.ANEMO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                }
            ]
        }
    },
    side2: {
        name: "arrozcomfrango",
        players: [
            {
                name: "arrozcomfrango"
            }
        ],
        box: {
            cost: 996,
            fixedCost: 461,
            characters: [
                {
                    id: 34,
                    name: "Kazuha",
                    constelation: 0,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.ANEMO,
                    rarity: 5,
                    cost: 19,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        19,
                        21,
                        25,
                        25,
                        25,
                        25,
                        30
                    ]
                },
                {
                    id: 55,
                    name: "Noelle",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.GEO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 17,
                    name: "Chongyun",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 35,
                    name: "Kaeya",
                    constelation: 1,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 38,
                    name: "Kaveh",
                    constelation: 2,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.DENDRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 41,
                    name: "Klee",
                    constelation: 0,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.PYRO,
                    rarity: 5,
                    cost: 2,
                    fixedCost: 2,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        2,
                        3,
                        17,
                        19,
                        24,
                        26,
                        33
                    ]
                },
                {
                    id: 45,
                    name: "Lisa",
                    constelation: 4,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 48,
                    name: "Mika",
                    constelation: 6,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 56,
                    name: "Qiqi",
                    constelation: 3,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.CRYO,
                    rarity: 5,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 64,
                    name: "Sucrose",
                    constelation: 6,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.ANEMO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 65,
                    name: "Thoma",
                    constelation: 6,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 78,
                    name: "Xingqiu",
                    constelation: 6,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.HYDRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 87,
                    name: "Arlecchino",
                    constelation: 1,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.PYRO,
                    rarity: 5,
                    cost: 115,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        65,
                        115,
                        125,
                        140,
                        143,
                        146,
                        200
                    ]
                },
                {
                    id: 14,
                    name: "Charlotte",
                    constelation: 6,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 18,
                    name: "Collei",
                    constelation: 5,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.DENDRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 23,
                    name: "Dori",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 27,
                    name: "Freminet",
                    constelation: 2,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 32,
                    name: "Hu Tao",
                    constelation: 1,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.PYRO,
                    rarity: 5,
                    cost: 23,
                    fixedCost: 23,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        8,
                        23,
                        26,
                        34,
                        37,
                        39,
                        47
                    ]
                },
                {
                    id: 82,
                    name: "Yelan",
                    constelation: 0,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.HYDRO,
                    rarity: 5,
                    cost: 10,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        10,
                        19,
                        44,
                        50,
                        60,
                        62,
                        80
                    ]
                },
                {
                    id: 13,
                    name: "Candace",
                    constelation: 6,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.HYDRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 80,
                    name: "Yanfei",
                    constelation: 6,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 7,
                    name: "Amber",
                    constelation: 2,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 11,
                    name: "Beidou",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 33,
                    name: "Jean",
                    constelation: 6,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.ANEMO,
                    rarity: 5,
                    cost: 8,
                    fixedCost: 8,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        3,
                        3,
                        4,
                        4,
                        8,
                        8,
                        8
                    ]
                },
                {
                    id: 75,
                    name: "Xiangling",
                    constelation: 6,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 10,
                    name: "Barbara",
                    constelation: 6,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.HYDRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 25,
                    name: "Faruzan",
                    constelation: 6,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.ANEMO,
                    rarity: 4,
                    cost: 5,
                    fixedCost: 5,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        5
                    ]
                },
                {
                    id: 28,
                    name: "Furina",
                    constelation: 2,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.HYDRO,
                    rarity: 5,
                    cost: 85,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        22,
                        45,
                        85,
                        95,
                        100,
                        109,
                        160
                    ]
                },
                {
                    id: 31,
                    name: "Gorou",
                    constelation: 6,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.GEO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 39,
                    name: "Keqing",
                    constelation: 1,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.ELECTRO,
                    rarity: 5,
                    cost: 2,
                    fixedCost: 2,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        2,
                        2,
                        2,
                        2,
                        3,
                        3,
                        4
                    ]
                },
                {
                    id: 47,
                    name: "Lyney",
                    constelation: 0,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.PYRO,
                    rarity: 5,
                    cost: 18,
                    fixedCost: 18,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        18,
                        25,
                        34,
                        46,
                        54,
                        57,
                        120
                    ]
                },
                {
                    id: 50,
                    name: "Nahida",
                    constelation: 0,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.DENDRO,
                    rarity: 5,
                    cost: 8,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        8,
                        10,
                        40,
                        42,
                        48,
                        50,
                        120
                    ]
                },
                {
                    id: 59,
                    name: "Rosaria",
                    constelation: 6,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 88,
                    name: "Sethos",
                    constelation: 5,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 85,
                    name: "Yaoyao",
                    constelation: 3,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.DENDRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 86,
                    name: "Zhongli",
                    constelation: 0,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.GEO,
                    rarity: 5,
                    cost: 16,
                    fixedCost: 16,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        16,
                        17,
                        17,
                        17,
                        17,
                        17,
                        19
                    ]
                },
                {
                    id: 90,
                    name: "Clorinde",
                    constelation: 0,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.ELECTRO,
                    rarity: 5,
                    cost: 20,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        20,
                        40,
                        76,
                        84,
                        89,
                        100,
                        170
                    ]
                },
                {
                    id: 43,
                    name: "Sara",
                    constelation: 6,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 20,
                    name: "Dehya",
                    constelation: 0,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.PYRO,
                    rarity: 5,
                    cost: 2,
                    fixedCost: 2,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        2,
                        2,
                        3,
                        5,
                        6,
                        6,
                        12
                    ]
                },
                {
                    id: 22,
                    name: "Diona",
                    constelation: 6,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 73,
                    name: "Wanderer",
                    constelation: 2,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.ANEMO,
                    rarity: 5,
                    cost: 28,
                    fixedCost: 28,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        9,
                        10,
                        28,
                        28,
                        34,
                        36,
                        75
                    ]
                },
                {
                    id: 84,
                    name: "Yun Jin",
                    constelation: 6,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.GEO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 12,
                    name: "Bennett",
                    constelation: 6,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 15,
                    name: "Chevreuse",
                    constelation: 6,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 35,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        10,
                        10,
                        10,
                        10,
                        15,
                        15,
                        35
                    ]
                },
                {
                    id: 30,
                    name: "Gaming",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 33,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        10,
                        10,
                        33
                    ]
                },
                {
                    id: 3,
                    name: "Kachina",
                    constelation: 6,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.GEO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 36,
                    name: "Ayaka",
                    constelation: 0,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.CRYO,
                    rarity: 5,
                    cost: 55,
                    fixedCost: 55,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        55,
                        57,
                        73,
                        83,
                        103,
                        103,
                        110
                    ]
                },
                {
                    id: 46,
                    name: "Lynette",
                    constelation: 6,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.ANEMO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 51,
                    name: "Navia",
                    constelation: 0,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.GEO,
                    rarity: 5,
                    cost: 31,
                    fixedCost: 31,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        31,
                        36,
                        49,
                        59,
                        68,
                        70,
                        140
                    ]
                },
                {
                    id: 61,
                    name: "Sayu",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.ANEMO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 21,
                    name: "Diluc",
                    constelation: 2,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.PYRO,
                    rarity: 5,
                    cost: 1,
                    fixedCost: 1,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        1,
                        1,
                        1,
                        1,
                        2,
                        2,
                        2
                    ]
                },
                {
                    id: 72,
                    name: "Venti",
                    constelation: 0,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.ANEMO,
                    rarity: 5,
                    cost: 1,
                    fixedCost: 1,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        2
                    ]
                },
                {
                    id: 76,
                    name: "Xianyun",
                    constelation: 0,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.ANEMO,
                    rarity: 5,
                    cost: 10,
                    fixedCost: 10,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        10,
                        13,
                        42,
                        42,
                        43,
                        43,
                        50
                    ]
                },
                {
                    id: 26,
                    name: "Fischl",
                    constelation: 5,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 4,
                    name: "Aloy",
                    constelation: 0,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.CRYO,
                    rarity: 5,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 40,
                    name: "Kirara",
                    constelation: 5,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.DENDRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 42,
                    name: "Kuki",
                    constelation: 6,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 44,
                    name: "Layla",
                    constelation: 4,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.CRYO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 53,
                    name: "Ningguang",
                    constelation: 6,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.GEO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 57,
                    name: "Raiden",
                    constelation: 2,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.ELECTRO,
                    rarity: 5,
                    cost: 20,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        8,
                        9,
                        20,
                        37,
                        39,
                        41,
                        45
                    ]
                },
                {
                    id: 58,
                    name: "Razor",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 60,
                    name: "Kokomi",
                    constelation: 0,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.HYDRO,
                    rarity: 5,
                    cost: 2,
                    fixedCost: 2,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        2,
                        2,
                        3,
                        4,
                        5,
                        6,
                        15
                    ]
                },
                {
                    id: 62,
                    name: "Shenhe",
                    constelation: 1,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.CRYO,
                    rarity: 5,
                    cost: 26,
                    fixedCost: 26,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        18,
                        26,
                        35,
                        40,
                        44,
                        46,
                        90
                    ]
                },
                {
                    id: 66,
                    name: "Tighnari",
                    constelation: 1,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.DENDRO,
                    rarity: 5,
                    cost: 4,
                    fixedCost: 4,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        4,
                        4,
                        5,
                        5,
                        7,
                        7,
                        25
                    ]
                },
                {
                    id: 77,
                    name: "Xiao",
                    constelation: 0,
                    weaponType: WeaponType.SPEAR,
                    element: CharacterElement.ANEMO,
                    rarity: 5,
                    cost: 13,
                    fixedCost: 13,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        13,
                        14,
                        14,
                        14,
                        14,
                        14,
                        15
                    ]
                },
                {
                    id: 79,
                    name: "Xinyan",
                    constelation: 6,
                    weaponType: WeaponType.CLAYMORE,
                    element: CharacterElement.PYRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 81,
                    name: "Yae Miko",
                    constelation: 0,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.ELECTRO,
                    rarity: 5,
                    cost: 10,
                    fixedCost: 10,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        10,
                        13,
                        20,
                        28,
                        37,
                        40,
                        70
                    ]
                },
                {
                    id: 83,
                    name: "Yoimiya",
                    constelation: 0,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.PYRO,
                    rarity: 5,
                    cost: 2,
                    fixedCost: 2,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        2,
                        3,
                        5,
                        6,
                        8,
                        8,
                        35
                    ]
                },
                {
                    id: 49,
                    name: "Mona",
                    constelation: 4,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.HYDRO,
                    rarity: 5,
                    cost: 12,
                    fixedCost: 12,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        6,
                        7,
                        7,
                        7,
                        12,
                        12,
                        12
                    ]
                },
                {
                    id: 1,
                    name: "Mualani",
                    constelation: 3,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.HYDRO,
                    rarity: 5,
                    cost: 147,
                    fixedCost: 60,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        82,
                        122,
                        137,
                        147,
                        157,
                        160,
                        205
                    ]
                },
                {
                    id: 63,
                    name: "Heizou",
                    constelation: 6,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.ANEMO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 99,
                    name: "Chasca",
                    constelation: 1,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.ANEMO,
                    rarity: 5,
                    cost: 100,
                    fixedCost: 60,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        80,
                        100,
                        135,
                        149,
                        157,
                        162,
                        210
                    ]
                },
                {
                    id: 100,
                    name: "Ororon",
                    constelation: 6,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.ELECTRO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 102,
                    name: "Citlali",
                    constelation: 1,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.CRYO,
                    rarity: 5,
                    cost: 40,
                    fixedCost: 10,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        30,
                        40,
                        85,
                        88,
                        96,
                        100,
                        160
                    ]
                },
                {
                    id: 104,
                    name: "Lan Yan",
                    constelation: 2,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.ANEMO,
                    rarity: 4,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 6,
                    name: "Alhaitham",
                    constelation: 0,
                    weaponType: WeaponType.BOW,
                    element: CharacterElement.DENDRO,
                    rarity: 5,
                    cost: 8,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        8,
                        9,
                        13,
                        14,
                        22,
                        24,
                        70
                    ]
                },
                {
                    id: 93,
                    name: "Viajante",
                    constelation: 6,
                    weaponType: WeaponType.SWORD,
                    element: CharacterElement.OMNI,
                    rarity: 5,
                    cost: 0,
                    fixedCost: 0,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                },
                {
                    id: 110,
                    name: "Varesa",
                    constelation: 1,
                    weaponType: WeaponType.CATALYST,
                    element: CharacterElement.ELECTRO,
                    rarity: 5,
                    cost: 85,
                    fixedCost: 60,
                    teamConstelations: [],
                    spreadsheetCosts: [
                        72,
                        85,
                        126,
                        137,
                        149,
                        156,
                        195
                    ]
                }
            ]
        }
    }
}

const draftConfiguration = getDraftConfiguration(matchInformation);
console.log('Draft Configuration:', JSON.stringify(draftConfiguration, null, 4));
