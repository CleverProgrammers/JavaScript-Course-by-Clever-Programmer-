let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')



class Player {
  constructor(name, health, atkDamage) {
    this.name = name;
    this.health = health;
    this.attack = atkDamage;
  }


    attack(player, enemy) {
    let damageAmount = Math.ceil(Math.random() * 10) 
    enemy.health -= damageAmount
    
    return `${player} attacks ${enemy} for ${damageAmount} damage!` 
  }
  //Generate a random number between 1 and 5 using Math.random()
  //Use that number to increase health of player 1
  heal(player) {
    let hpAmount = Math.ceil(Math.random() * 5)
    player.health += hpAmount
    
    return `${player} heals for ${hpAmount} + HP!`
  }
}

class Game {
  // default arugments
  constructor(player1, player2) {
    // Flag that indicates if the game is over or not
    this.isOver = false;
  }

  // Starts the game and logs out the status of players
  play(player1, player2) {
    // this.reset();
    
    // while loops
    console.log(player1.attack())
    // while (!this.isOver) {
    //   player1.attack(player1,player2)
    //   player1.heal(player1)
    //   player2.attack(player2,player1);
    //   player2.heal(player2)
    //   this.checkTheEnd(player1,player2);
    // }
    // return this.declareWinner(this.isOver,this.player1,this.player2);
  }

  // Console log the winner of the battle
  declareWinner(isOver,p1, p2) {
    let message
    if (isOver == true && p1.health <= 0) {
      message = `${p2.name} WINS!`;
      console.log(message)
    } 
    else if(isOver == true && p2.health <= 0) {
      message = `${p1.name} WINS!`
    } 
    return message
  }

  // If player 1 or player 2 health is below 0
  // Mark theEnd true, to stop the game
  checkTheEnd(p1,p2) {
    if (p1.health <= 0 || p2.health <= 0) {
      this.isOver = true;
      return this.isOver
    } 
    
  }

  // Console log the name and health of both players
  // Ex: Player 1: 100 | Player 2: 50
  playerStatus() {
    // console.log(
    //   'Player 1: ' + this.player1.name + ',' + ' Health: ' + this.player1.health
    // );
    // console.log(
    //   'Player 2: ' + this.player2.name + ',' + ' Health: ' + this.player2.health
    // );
  }

  //Reset health of player 1 and player 2 to 100
  //Reset theEnd to false
  // reset() {
  //   this.player1.health = 100;
  //   this.player2.health = 100;
  //   this.isOver = false;
  // }
  // ** pl1AttackPl2 allows you to attack another player & deplete their health **
  //Generate a random number between 1 and 10 using Math.random()
  //Use that number to decrease health from player 2
  // Problem: trying to do 2 things

}

// Initialize the class here
// Call the start function of the game
let player1 = new Player('Lance', 75, 25)
let player2 = new Player('Qazi', 200, 0)
let game = new Game();

play.onclick = () => result.innerText = game.play(player1,player2)
;


