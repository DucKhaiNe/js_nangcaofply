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
    events: [
      [17, '⚽ GOAL'],
      [36, '🔁 Substitution'],
      [47, '⚽ GOAL'],
      [65, '🔶 Yellow Card'],
      [69, '🔁 Substitution'],
      [70, '🔴 Red Card'],
      [72, '🔁 Substitution'],
      [76, '⚽ GOAL'],
      [80, '⚽ GOAL'],
      [85, '🔶 Yellow Card'],
    ],
  };
  
  // Step 1
  const uniqueEvents = [...new Set(game.events.map(event => event[1]))];
  
  // Step 2
  const invalidEventIndex = game.events.findIndex(event => event[0] === 64 && event[1] === '🔶 Yellow Card');
  if (invalidEventIndex !== -1) {
    game.events.splice(invalidEventIndex, 1);
  }
  
  // Step 3
  const totalEvents = game.events.length;
  const averageEventsPerMinute = totalEvents / 90;
  console.log(`${totalEvents} sự kiện xảy ra, trung bình mỗi ${Math.round(90 / averageEventsPerMinute)} phút.`);
  
  // Step 4
  for (const [minute, event] of game.events) {
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${minute}: ${event}`);
  }
  