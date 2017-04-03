export class Team {
	teamName: string;
	wins: string;
	losts: string;
	winningRate: string;
	gameBehind: string;

	constructor(teamName: string, wins: string, losts: string, winningRate: string, gameBehind: string) {
		this.teamName = teamName;
		this.wins = wins;
		this.losts = losts;
		this.winningRate = winningRate;
		this.gameBehind = gameBehind;
	}
}
