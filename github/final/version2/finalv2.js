(function(){
	
	"use strict";
	/* 
	This gets the player: gameData.players[gameData.index]
	This gets the first die: gameData.dice[gameData.roll1-1]
	This gets the second die: gameData.dice[gameData.roll2-1]
	This gets the score of the current player: gameData.score[gameData.index]
	*/

	// JS FOR PLAY PAUSE MUSIC
	let play = document.getElementById("playBtn");
    let pause = document.getElementById("pauseBtn");
    let audio = new Audio("audio/cafe.mp3");
	let audio2 = new Audio("audio/diner.mp3");
	let audioClick = new Audio("audio/click.mp3");
	let audioPig = new Audio("audio/oink.mp3");
	let audiofemChef = new Audio("audio/femChef.mp3");
	let audiomaleChef = new Audio("audio/maleChef.mp3");

    play.addEventListener("click", ()=>{
        audio.play();
		audio2.play();
		audio2.volume = 0.4;
    })
    pause.addEventListener("click", ()=>{
        audio.pause();
		audio2.pause();
    })

	//JS for overlay tutorial opening
    document.querySelector('.open').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'showing';
    });

    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape'){
            document.getElementById('overlay').className = 'hidden';
        }   
    });

	//variables for screen versions
	const startingScreen = document.getElementById('startingScreen');
	console.log(startingScreen);

	//variables for chefs
	const femChef = document.getElementById('femChef');
	const maleChef = document.getElementById('maleChef');

	//variables for buttons
	const cancelBtn = document.getElementById('cancel');
	const angryPigBtn = document.getElementById('angryPigBtn');
	const pigBtn = document.getElementById('pigBtn');

	//variables for game
	const startGame = document.getElementById('startgame');
	const food1 = document.querySelectorAll('#selection1 .dish');
	const food2 = document.querySelectorAll('#selection2 .dish');
	const gameText = document.getElementById('narrator');
	const gameTutorial = document.getElementById('tutorial');
	const meHungry = document.getElementById('meHungry');
	const sirHammy = document.getElementById('sirHammy');
	const gameControl = document.getElementById('gamecontrol');
	const game = document.getElementById('game');
	const score = document.getElementById('score');
	const actionArea = document.getElementById('actions');

	const gameData = {
		bacon: ['images/bacon.png', 'images/2bacon.png', 'images/3bacon.png', 
			   'images/4bacon.png', 'images/5bacon.png', 'images/6bacon.png'],
		eggs: ['images/bacon.png', 'images/2bacon.png', 'images/3bacon.png', 
			   'images/4bacon.png', 'images/5bacon.png', 'images/6bacon.png'],
		waffles: ['images/bacon.png', 'images/2bacon.png', 'images/3bacon.png', 
			   'images/4bacon.png', 'images/5bacon.png', 'images/6bacon.png'],
		players: ['Chef 1', 'Chef 2'],
		choice: ['Chef 1 Choice', 'Chef 2 Choice'],
		score: [0, 0],
		roll1: 0,
		roll2: 0,
		rollSum: 0,
		index: 0,
		gameEnd: 29
	};

	for(let i=0; i<food1.length; i++){
		food1[i].addEventListener('click', function(event){
			var selectedDish = event.target.getAttribute("name");
			gameData.choice[0] = selectedDish;
		})
	}

	for(let i=0; i<food2.length; i++){
		food2[i].addEventListener('click', function(event){
			var selectedDish = event.target.getAttribute("name");
			gameData.choice[1] = selectedDish;
		})
	}

	gameTutorial.addEventListener('click', function(){
		 audioClick.play();
		 audioClick.volume = 0.7;
	})

	cancelBtn.addEventListener('click', function(){
		audioClick.play();
		audioClick.volume = 0.7;
    })

   pigBtn.addEventListener('mouseover', function(){
		//play oink sound effect
		audioPig.play();
		audioPig.volume = 1;

		//switch the normal pig to the angry pig
		pigBtn.className = 'hidden';
		angryPigBtn.className ='showing';
		meHungry.className = 'showing';
	});

	angryPigBtn.addEventListener('mouseout', function(){
		pigBtn.className = 'showing';
		angryPigBtn.className ='hidden';
		meHungry.className = 'hidden';
	});

	femChef.addEventListener('mouseover', function(){
		audiofemChef.play();
	})

	maleChef.addEventListener('mouseover', function(){
		audiomaleChef.play();
	})

	//event listner for start button
	startGame.addEventListener('click', function () { 
        //play button sound effect
		audioClick.play();
		audioClick.volume = 0.7;

		gameData.index = Math.round(Math.random());

		startingScreen.innerHTML = inputScreen; 

		//JS for THE INPUT SCREEN
		const nextBtn = document.getElementById('nextBtn');
		const backBtn = document.getElementById('backBtn');

		nextBtn.addEventListener("click", function(){
			audioClick.play();
			audioClick.volume = 0.7;

		})

		backBtn.addEventListener("click", function(){
			audioClick.play();
			audioClick.volume = 0.7; 
			window.location.reload();
		})

		startGame.innerHTML = '<button id="quit" class="showing"><span class="shadow"></span><span class="edge"></span><span class="front text">Quit Game</span></button>';

		// document.getElementById('quit').addEventListener('click', function () {
		// 	location.reload();
		// 	//play button sound effect
		// 	audioClick.play();
		// 	audioClick.volume = 0.7;
		// 	});

		// document.getElementById('quit').className = "hidden";
		setUpTurn();
	});

	function setUpTurn() {
		gameText.innerHTML = `<p>Roll the dice for <b>${gameData.players[gameData.index]}!</b></p>`;
		gameText.style.fontSize = "2em";
		actionArea.innerHTML = '<button id="roll"><span class="shadow"></span><span class="edge"></span><span class="front text">Start Cooking</span></button>';
		// document.getElementById('roll').addEventListener('click', function(){

		// 	throwDice();

		// });
	}

	function throwDice(){
		// actionArea.innerHTML = '';
		gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero
		gameData.roll2 = Math.floor(Math.random() * 6) + 1; 
		
		const dish = gameData.choice[gameData.index]; //gets the choice of the player 
		if (dish == "eggs"){
			gameText.innerHTML = `<p>Roll the dice for <b>${gameData.players[gameData.index]}!</b></p>`;
			gameText.innerHTML += `<img src="${gameData.eggs[roll1]}"> 
							<img src="${gameData.dice[gameData.roll2-1]}">`;
			gameData.rollSum = gameData.roll1 + gameData.roll2;
		
			//play button sound effect
			audioClick.play();
			audioClick.volume = 0.7;
		}

		

		// if two 1's are rolled...
		if( gameData.rollSum === 2 ){ 
			game.innerHTML += '<p>You only cooked <b>2 dishes total???</b> Bad Chef';
			game.style.fontSize = "1rem";
			gameData.score[gameData.index] = 0;
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			showCurrentScore();
			setTimeout(setUpTurn, 2000);
		}

		// if either die is a 1...
		else if(gameData.roll1 === 1 || gameData.roll2 === 1){ 
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			gameText.innerHTML += `<p>You only cooked <b>1 dish >:(</b> switching to ${
				gameData.players[gameData.index]
			}</p>`;
			gameText.style.fontSize = "0.5rem";
			setTimeout(setUpTurn, 2000);
		}

		// if neither die is a 1...
		else { 
			gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
			actionArea.innerHTML = '<button id="rollagain"><span class="shadow"></span><span class="edge"></span><span class="front text">Keep Cooking!</span></button> or <button id="pass"><span class="shadow"></span><span class="edge"></span><span class="front text">Take a Break</span></button>';

			document.getElementById('rollagain').addEventListener('click', function () {
				//setUpTurn();
				throwDice();
				//play button sound effect
				audioClick.play();
				audioClick.volume = 0.7;
			});

			document.getElementById('pass').addEventListener('click', function () {
				gameData.index ? (gameData.index = 0) : (gameData.index = 1);
				setUpTurn();
				//play button sound effect
				audioClick.play();
				audioClick.volume = 0.7;
			});

			checkWinningCondition();
		}

	}

	function checkWinningCondition() {
		if (gameData.score[gameData.index] > gameData.gameEnd) {
			score.innerHTML = `<h2>${gameData.players[gameData.index]} 
			wins with ${gameData.score[gameData.index]} points!</h2>`;

			actionArea.innerHTML = '';
			document.getElementById('quit').innerHTML = 'Start a New Game?';
		} else {
			// show current score...
			showCurrentScore();
		}
	}

	function showCurrentScore() {
		score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}:
		${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: 
		${gameData.score[1]}</strong></p>`;
		score.style.fontSize = "0.8rem";
	}
}());

//HTML screen variables 
const inputScreen = '<div class="hero"><h2>game of pig</h2><button id="playBtn"><i class="fas fa-music"></i></button><button id="pauseBtn"><i class="fas fa-pause"></i></button></div><img src="images/title.png" alt="Breakfast Edition title" id="header1" width="800" height="167"><h2 id="nameText">Enter Your Chef Names!</h2><div class="backNext"><div id="backBtn"><button id="tutorial" class="open" ><span class="shadow"></span><span class="edge"></span><span class="front text">BACK</span></button></div><div id="nextBtn"><button id="tutorial" class="open"><span class="shadow"></span><span class="edge"></span><span class="front text">NEXT</span></button></div></div><div class="characters"><div class="charInput" id="chef1-1"><h1>Chef 1 Name</h1><input type="text" name="text" class="input" placeholder="Type here..."><img src="images/chef1.png" alt="Chef 1" id="femChef"></div><div class="charInput" id="chef2-1"><h1>Chef 2 Name</h1><input type="text" name="text" class="input" placeholder="Type here..."><img src="images/chef2.png" alt="Chef 1" id="maleChef"></div></div>';
