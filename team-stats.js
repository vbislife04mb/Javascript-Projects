const team = {
  _players: [
    { firstName: 'Erin', lastName: 'Carlson', age: 16 },
    { firstName: 'Amanda', lastName: 'Wolf', age: 17 },
    { firstName: 'Serenity', lastName: 'Bell', age: 18 }
  ],
  _games: [
    { opponent: 'Central', teamPoints: 25, opponentsPoints: 20 },
    { opponent: 'Westside', teamPoints: 25, opponentsPoints: 19 },
    { opponent: 'Papio', teamPoints: 23, opponentsPoints: 25 }
    ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opponentName, teamPoints, opponentsPoints) {
    const game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentsPoints: opponentsPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Northwest', 25, 13);
team.addGame('Elkhorn', 23, 25);
team.addGame('Elkhorn South', 25, 23);

console.log(team.players);
console.log(team.games);
