// The first part of the game

//Ask the player for his robot name
var robotName = window.prompt("Welcome Neophyte. It's time to name your robot!");

//Give the player health and attack
var playerHealth = 100;
var playerAttack = 10;

console.log(robotName, playerHealth, playerAttack);

// Enemy Attributes
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

function fight () {
	//Welcome Message
	window.alert("Let's get ready to rumble!");

	//Subtract the value of playerAttack from enemyHealth
	enemyHealth = enemyHealth - playerAttack;

	//Log a message with the result
	console.log(robotName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
	//Subtract the vale of enemyAttack from playerHealth
	playerHealth = playerHealth - enemyAttack;

	//Log a message with the result
	console.log(enemyName + " attacked " + robotName + ". " + robotName + " now has " + playerHealth + " health remaining.");

	//Chek Players Health
	if (playerHealth <=0) {
		window.alert(robotName + " has died!");
	}
	else {
		window.alert(robotName + " still has " + playerHealth + "health left.");
	};

	//Check Enemy's Health
	if (enemyHealth <= 0 ) {
		window.alert(enemyName + " has died!");
	}
	else {
		window.alert(enemyName + " still has " + enemyHealth + "health left.");
	};

};

fight();