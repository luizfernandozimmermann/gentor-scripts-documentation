/** Contains all relevant information of a match. */
export interface MatchInformation {
    /** Information about the tournament. Optional since the match may not be from a tournament. */
    tournament?: Tournament;
    /** Spreadsheet containing character data for the match. */
    spreadsheet: Spreadsheet;
    /** The team mode for the match (SOLO, DUO, etc.). */
    teamMode: TeamMode;
    /** Information about the first side in the match. */
    side1: MatchTeam;
    /** Information about the second side in the match. */
    side2: MatchTeam;
    /** Type of game chalenge. */
    chalengeType: ChalengeType;
    /** Number of bosses that will be played against (only for stygian onslaught). */
    numberOfBosses?: 2 | 3;
}

/** Represents a team in the match. */
export interface MatchTeam {
    /** The name of the team. If SOLO team mode, it is the name of the player.  */
    name: string;
    /** List of players in the team. */
    players: MatchTeamPlayer[];
    /** Box of characters for the team. */
    box: MatchTeamBox;
}

/** Information about an individual player. */
export interface MatchTeamPlayer {
    /** The name of the player. */
    name: string;
}

/** Represents a player's or team's box of characters. */
export interface MatchTeamBox {
    /** The total cost for the box. */
    cost: number;
    /** Total cost for the box after cost cap. */
    fixedCost: number;
    /** List of characters in the box. */
    characters: MatchTeamBoxCharacter[];
}

export interface Character {
    /** The identifier of the character. */
    id: number;
    /** The name of the character. */
    name: string;
    /** The element of the character (e.g., Hydro, Pyro). */
    element: CharacterElement;
    /** The rarity of the character (e.g., 4-star, 5-star). */
    rarity: 4 | 5;
    /** The weapon type of the character. */
    weaponType: WeaponType;
}

/** Represents a specific character in the box. */
export interface MatchTeamBoxCharacter extends Character {
    /** The constellation of the character. */
    constelation: number;
    /** The cost of the character in the spreadsheet. */
    cost: number;
    /** The fixed cost of the character after points cap. */
    fixedCost: number;
    /** The constellations of the character in the team. */
    teamConstelations: MatchTeamBoxCharacterTeamConstelation[];
    /** List of costs for the character as defined in the spreadsheet (index = constelation). */
    spreadsheetCosts: number[];
}

/** Constellations assigned to the character by team members. */
export interface MatchTeamBoxCharacterTeamConstelation {
    /** The username of the player. */
    username: string;
    /** The constellation of the character. */
    constelation: number;
    /** The cost of the character in the spreadsheet. */
    cost: number;
    /** The fixed cost of the character after points cap. */
    fixedCost: number;
}

/** Defines the team mode in the match. */
export enum TeamMode {
    SOLO = 'SOLO', // One player per team
    DUO = 'DUO', // Two players per team
    TRIO = 'TRIO', // Three players per team
    SQUAD = 'SQUAD' // Four players per team
}

/** Basic tournament information. */
export interface Tournament {
    /** The name of the tournament. */
    name: string;
}

/** Spreadsheet containing character data. */
export interface Spreadsheet {
    /** The name of the spreadsheet. */
    name: string;
    /** List of characters available in the spreadsheet. Zero-cost characters will also be here. */
    characters: SpreadsheetCharacter[];
    /** Configurations of the spreadsheet. */
    configurations: SpreadsheetConfigurations;
}

/** Configurations of the spreadsheet. */
export interface SpreadsheetConfigurations {
    /** Comparison rule of a box. */
    comparisonRule: SpreadsheetComparisonRule;
    /** Interval of points to get extra ban. */
    pointsInterval: number;
    /** Interval of extra bans to get joker ban (e.g., after X extra bans, the next will count as joker). */
    jokerInterval?: number;
    /** Maximum of joker bans allowed. This option is only used when joker interval is informed and if the amount of joker bans excedes this limit, it will be a extra ban. */
    jokersLimit?: number;
    /** Maximum of points that can be counted for a character. This option is only used for CHARACTER_POINTS comparison rule. */
    characterPointsLimit: number;
    /** Default number of bans for the draft. */
    initialBanDefault: number;
    /** Cuttof line for initial bans (e.g., If both players have more points than X, they will have the default number of bans, otherwise, it will be the default minus one). */
    initialBansCutoff?: number;
    /** If enabled, when one player has more points than the other, their extra bans will be zero. It will only happen in extreme scenarios. */
    removeExtraBansForHighestCostBox: boolean;
    /** Defines when weapon bans occur in the draft process. */
    weaponBanLocation: WeaponBanLocation;
    /** Default number of weapon bans for the draft. */
    weaponBansDefault: number;
    /** Type of system that the spreadsheet uses. */
    system: SpreadsheetSystem;
    /** Type of chalenge that the spreadsheet uses. */
    chalengeType: ChalengeType;
}

/** Type of game chalenge. */
export enum ChalengeType {
    ABYSS = 'ABYSS',
    STYGIAN_ONSLAUGHT = 'STYGIAN_ONSLAUGHT'
}

/** Type of system that the spreadsheet uses. */
export enum SpreadsheetSystem {
    FRENCH = 'FRENCH',
    SOUTH_KOREAN = 'SOUTH_KOREAN',
    FIGHT_CLUB = 'FIGHT_CLUB'
}

/** Comparison rule of a box within a spreadsheet. */
export enum SpreadsheetComparisonRule {
    OVERALL_POINTS = 'OVERALL_POINTS',
    CHARACTER_POINTS = 'CHARACTER_POINTS'
}

/** Represents an character in the spreadsheet. */
export interface SpreadsheetCharacter extends Character {
    /** List of costs associated with the character (index = constelation). */
    costs: number[];
}

/** List of possible character elements. */
export enum CharacterElement {
    HYDRO = 'HYDRO', // Hydro element
    PYRO = 'PYRO', // Pyro element
    ELECTRO = 'ELECTRO', // Electro element
    ANEMO = 'ANEMO', // Anemo element
    GEO = 'GEO', // Geo element
    DENDRO = 'DENDRO', // Dendro element
    CRYO = 'CRYO', // Cryo element
    OMNI = 'OMNI' // Omni element
}

/** List of available weapon types. */
export enum WeaponType {
    SWORD = 'SWORD', // Sword weapon type
    SPEAR = 'SPEAR', // Spear weapon type
    CATALYST = 'CATALYST', // Catalyst weapon type
    BOW = 'BOW', // Bow weapon type
    CLAYMORE = 'CLAYMORE' // Claymore weapon type
}

/** Draft configuration to generate the sequence of actions of the draft. */
export interface DraftConfiguration {
    /** The number of picks allowed for each team. */
    picks: 8 | 12;
    /** Defines when weapon bans occur in the draft process. */
    weaponBanLocation: WeaponBanLocation;
    /** Configuration for side 1 in the draft. */
    side1: DraftTeamConfiguration;
    /** Configuration for side 2 in the draft. */
    side2: DraftTeamConfiguration;
    /** List of characters that are permanently banned at the game. */
    permaBans: Character[];
}

/** Defines when weapon bans occur in the draft process. */
export enum WeaponBanLocation {
    NO_BAN = 'NO_BAN', // No bans
    START = 'START', // Bans at the start
    MIDDLE = 'MIDDLE', // Bans in the middle
    END = 'END' // Bans at the end
}

/** Draft configuration for a player. */
export interface DraftTeamConfiguration {
    /** Number of initial bans allowed for the team. */
    initialBans: number;
    /** Number of bans allowed in the middle of the draft. */
    middleBans: number;
    /** Number of weapon bans allowed for the team. */
    weaponBans: number;
    /** Number of extra bans allowed for the team. */
    extraBans: number;
    /** Number of joker bans allowed for the team. */
    jokerBans: number;
    /** Allowed extra bans that the player can do.
     * It will only allow the player to ban (when extra) the characters informed here, also counting the default draft rules (e.g. same player can't ban the same character twice).
     * When it is not informed, it will only count the default draft rules.
     * Be careful to allow equal or more characters than the player can ban to prevent the draft from getting stuck. */
    allowedExtraBans?: Character[];
    /**
     * Allowed joker bans that the player can do. 
     * It will only allow the player to ban (when joker) the characters informed here, also counting the default draft rules (e.g. same player can't ban the same character twice).
     * When it is not informed, it will only count the default draft rules.
     * Be careful to allow equal or more characters than the player can ban to prevent the draft from getting stuck. */
    allowedJokerBans?: Character[];
}
