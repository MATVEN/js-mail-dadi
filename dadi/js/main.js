// variabili
var player1 = Math.floor(Math.random() * (6 - 1) + 1);
var player2 = Math.floor(Math.random() * (6 - 1) + 1);

// condition
if(player1>player2){
  console.log('Player 1 WIN!');
}
else if (player2>player1) {
  console.log('Player 2 WIN!');
}

else {
  console.log('TIE');
}
