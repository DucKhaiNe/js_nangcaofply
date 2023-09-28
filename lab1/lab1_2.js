const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      'Neuer', 'Kimmich', 'Sule', 'Alaba', 'Davies', 'Goretzka', 'Muller',
      'Sané', 'Gnabry', 'Lewandowski'
    ],
    scored: ['Lewandowski', 'Gnarby', 'Hummels', 'Goretzka'],
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5
    },
  };
  
  // Step 1
  for (const [index, player] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
  }
  
  // Step 2
  let totalOdds = 0;
  for (const odd of Object.values(game.odds)) {
    totalOdds += odd;
  }
  const averageOdds = totalOdds / Object.values(game.odds).length;
  console.log(`Average Odds: ${averageOdds.toFixed(2)}`);
  
  // Step 3
  for (const [team, odd] of Object.entries(game.odds)) {
    if (team === 'x') {
      console.log(`Tỉ lệ hòa của draw: ${odd}`);
    } else {
      console.log(`Tỉ lệ thắng của ${game.team1 === team ? 'Bayern Munich' : 'Borrussia Dortmund'}: ${odd}`);
    }
  }
  
  // Step 4
  const scorers = {};
  for (const scorer of game.scored) {
    scorers[scorer] = (scorers[scorer] || 0) + 1;
  }
  console.log('Scorers:', scorers);
  