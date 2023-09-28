// Step 1
const players1 = ['Neuer', 'Kimmich', 'Sule', 'Alaba', 'Davies', 'Goretzka', 'Muller', 'Sané', 'Gnabry', 'Lewandowski'];
const players2 = ['Oblak', 'Trippier', 'Hermoso', 'Savic', 'Renan Lodi', 'Koke', 'Herrera', 'Lemar', 'Joao Felix', 'Griezmann'];

// Step 2
const gk1 = players1[0];
const fieldPlayers1 = players1.slice(1);

const gk2 = players2[0];
const fieldPlayers2 = players2.slice(1);

// Step 3
const allPlayers = [...players1, ...players2];

// Step 4
const substitutions = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = [...players1, ...substitutions];

// Step 5
const game = {
  odds: {
    team1: 2.5,
    draw: 3.2,
    team2: 2.8,
  },
};

const { team1, draw, team2 } = game.odds;

// Step 6
function printGoals(...scorers) {
  for (const [index, scorer] of scorers.entries()) {
    console.log(`Goal ${index + 1}: ${scorer}`);
  }
}

// Step 7
const winner = team1 < team2 ? 'team1' : team2 < team1 ? 'team2' : 'draw';

// Testing the code with goal scorers
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
console.log(`The winning team is: ${winner}`);
