import { MatchInformation, DraftConfiguration, ChalengeType, MatchTeam, DraftTeamConfiguration } from './../types/match-information';

// All code below will be saved. DO NOT REMOVE THIS LINE
export function getDraftConfiguration(matchInformation: MatchInformation): DraftConfiguration {
    return {
        picks: getPicks(matchInformation),
        weaponBanLocation: matchInformation.spreadsheet.configurations.weaponBanLocation,
        side1: getDraftTeamConfiguration(matchInformation, matchInformation.side1, matchInformation.side2),
        side2: getDraftTeamConfiguration(matchInformation, matchInformation.side2, matchInformation.side1),
        permaBans: []
    };
}

// Amount of picks for each player
function getPicks(matchInformation: MatchInformation): 8 | 12 {
    const chalengeType = matchInformation.chalengeType;
    if (chalengeType === ChalengeType.ABYSS || !matchInformation.numberOfBosses) {
        return 8;
    }
    const amountOfBosses = matchInformation.numberOfBosses;
    return amountOfBosses === 2? 8: 12;
}

// Configuration of the draft for a player
function getDraftTeamConfiguration(matchInformation: MatchInformation, teamInformation: MatchTeam, opponentInformation: MatchTeam): DraftTeamConfiguration {
    const initialBans = getInitialBans(matchInformation, teamInformation, opponentInformation);
    let extraBans = getExtraBans(matchInformation, teamInformation, opponentInformation);
    const middleBans = 1;
    const jokerBans = getJokers(matchInformation, extraBans);
    extraBans -= jokerBans;
    const weaponBans = getWeaponBans(matchInformation);

    return {
        initialBans: initialBans,
        middleBans: middleBans,
        extraBans: extraBans,
        jokerBans: jokerBans,
        weaponBans: weaponBans
    };
}

// Amount of weapon bans that a player gets
function getWeaponBans(matchInformation: MatchInformation): number {
    return matchInformation.spreadsheet.configurations.weaponBansDefault;
}

// Amount of joker bans that a player gets
function getJokers(matchInformation: MatchInformation, extraBans: number): number {
    const jokerInterval = matchInformation.spreadsheet.configurations.jokerInterval;
    const jokersLimit = matchInformation.spreadsheet.configurations.jokersLimit;
    if (!jokerInterval) {
        return 0;
    }
    let jokerBans = Math.floor((extraBans + 1) / jokerInterval);
    if (jokersLimit && jokerBans > jokersLimit) {
        return jokersLimit;
    }
    return jokerBans;
}

// Amount of extra bans that a player gets
function getExtraBans(matchInformation: MatchInformation, teamInformation: MatchTeam, opponentInformation: MatchTeam): number {
    const costDifference = teamInformation.box.fixedCost - opponentInformation.box.fixedCost;
    const extraBans = Math.floor(costDifference / matchInformation.spreadsheet.configurations.pointsInterval);
    return Math.max(extraBans, 0);
}

// Amount of initial bans that a player gets
function getInitialBans(matchInformation: MatchInformation, teamInformation: MatchTeam, opponentInformation: MatchTeam): number {
    const teamPoints = teamInformation.box.cost;
    const opponentPoints = opponentInformation.box.cost;

    const initialBansCutoff = matchInformation.spreadsheet.configurations.initialBansCutoff || 0;
    const pointsBelowCutoff =
        teamPoints < initialBansCutoff || opponentPoints < initialBansCutoff;

    const initialBans = matchInformation.spreadsheet.configurations.initialBanDefault;
    if (pointsBelowCutoff) {
        return initialBans - 1;
    }
    return initialBans;
}