// The first part of the game

//Assigns the player's robot a name
var robotName = window.prompt("Welcome Neophyte. It's time to name your robot!");

//Give the player health, attack, money
var robotHealth = 100;
var robotAttack = 10;
var robotMoney = 10;

console.log(robotName, robotHealth, robotAttack);

// Enemy Attributes
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

function fight () {
	//Welcome Message
	window.alert("Let's get ready to rumble!");

	var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");

	//if player chooses to fight, then fight
	if (promptFight === 'fight' ||promptFight === "FIGHT") {

		//Subtract the value of playerAttack from enemyHealth
		enemyHealth = enemyHealth - robotAttack;

		//Log a message with the result
		console.log(robotName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
		//Subtract the vale of enemyAttack from robotHealth
		playerHealth = robotHealth - enemyAttack;

		//Log a message with the result
		console.log(enemyName + " attacked " + robotName + ". " + robotName + " now has " + robotHealth + " health remaining.");

		//Chek Players Health
		if (robotHealth <=0) {
			window.alert(robotName + " has died!");
		}
		else {
			window.alert(robotName + " still has " + robotHealth + " health left.");
		};

		//Check Enemy's Health
		if (enemyHealth <= 0 ) {
			window.alert(enemyName + " has died!");
		}
		else {
			window.alert(enemyName + " still has " + enemyHealth + " health left.");
		};
	} else if (promptFight === "skip" || promptFight === "SKIP") {
			//Player confirms they want to skip
			var confirmSkip = window.confirm("Are you sure you'd like to quit?");

			//leave the fighght if yest
			if (confirmSkip) {
				window.alert(robotName + " has chosen to skip the fight!");
				//subtract money from playerMoney for skipping
				playerMoney = playerMoney - 2;
			} else {
				fight();
			};

	} else {
		window.alert("You need to choose a valid option. Try again!");
	}
};

fight();