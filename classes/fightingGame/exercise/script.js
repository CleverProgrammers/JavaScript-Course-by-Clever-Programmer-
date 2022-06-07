class Game {
  constructor(player1Name = 'pl1', player2Name = 'pl2') {
    // Flag that indicates if the game is over or not
  this.theEnd = false;
    
    this.player1 = {
      name: player1Name,
      health: 100
    };

    this.player2 = {
      name: player2Name,
      health: 100
    };
  }

  //Starts the game and logs out the status of players
  start() {

  }

  //Console log the winner of the battle
  declareWinner() {

  }

  //If player 1 or player 2 health is below 0
  //Mark theEnd true, to stop the game
  checkTheEnd() {

  }

  //Console log the name and health of both players
  //Ex: Player 1: 100 | Player 2: 50
  playerStatus() {

  }

  //Reset health of player 1 and player 2 to 100
  //Reset theEnd to false
  reset() {

  }

  //Generate a random number between 1 and 10 using Math.random()
  //Use that number to decrease health from player 2
  pl1AttackPl2() {

  }

  //Generate a random number between 1 and 10 using Math.random()
  //Use that number to decrease health from player 1
  pl2AttackPl1() {

  }

  //Generate a random number between 1 and 5 using Math.random()
  //Use that number to increase health of player 1
  pl1Heal() {

  }

  //Generate a random number between 1 and 5 using Math.random()
  //Use that number to increase health of player 2
  pl2Heal() {

  }
}

// Initialize the class here
// Call the start function of the game

