$( document ).ready(function() {
$('.nameInput').hide();


// Returns 'human' or 'computer' 50/50 randomly
function randomlyChoosePlayer () {
	var random = Math.floor(Math.random() * 2);
	if(random === 0){
		currentPlayerSymbol = 'O'
		return 'computer'
	} else {
		currentPlayerSymbol = 'X'
		return 'human'
	}
}
// javascript random
var currentPlayerSymbol;
var currentPlayer = randomlyChoosePlayer();
var runGame = true;
var emptyBoxes = ["#box0", "#box1", "#box2", "#box3", "#box4", "#box5", "#box6", "#box7","#box8"];



var turn = function(){
	if(currentPlayer === 'computer'){
		
		// computer code
		
		var chosenBoxPosition = Math.floor(Math.random() * emptyBoxes.length);
		
		var chosenBox = emptyBoxes[chosenBoxPosition]
		$(chosenBox).text('O');
		emptyBoxes.splice(chosenBoxPosition,1);
		console.log('emptyboxes are: ', emptyBoxes);
		calculate();
		// run human code
	} else {
		$('.box').off('click');
		$( ".box" ).click(function() {
		  		var id = '#' + $(this).attr('id');
		  		var chosenBoxPosition = emptyBoxes.indexOf(id);
		  		if ( chosenBoxPosition !== -1 ) {
		  			$(id).text('X');
		  			emptyBoxes.splice(chosenBoxPosition, 1);
		  			console.log('emptyboxes are: ', emptyBoxes);
		  		}
		  		calculate();
		  		// run computer code
			});	
		// human code
		
	}
// HW 
// CHECK FOR TIE game
	// AFTER CHECKING VICTORY CONDITIONS, IF EMPTYBOXES IS EMPTY
		// DISPLAY TIE
	 function calculate(){
		//check for x3 verticals, x3 horizontals, and x2 diagonals
		if (
			($('#box0').text() === currentPlayerSymbol && $('#box1').text() === currentPlayerSymbol && $('#box2').text() === currentPlayerSymbol) ||
			($('#box3').text() === currentPlayerSymbol && $('#box4').text() === currentPlayerSymbol && $('#box5').text() === currentPlayerSymbol) ||
			($('#box6').text() === currentPlayerSymbol && $('#box7').text() === currentPlayerSymbol && $('#box8').text() === currentPlayerSymbol) ||

			($('#box0').text() === currentPlayerSymbol && $('#box3').text() === currentPlayerSymbol && $('#box6').text() === currentPlayerSymbol) ||
			($('#box1').text() === currentPlayerSymbol && $('#box4').text() === currentPlayerSymbol && $('#box7').text() === currentPlayerSymbol) ||
			($('#box2').text() === currentPlayerSymbol && $('#box5').text() === currentPlayerSymbol && $('#box8').text() === currentPlayerSymbol) ||

			($('#box0').text() === currentPlayerSymbol && $('#box4').text() === currentPlayerSymbol && $('#box8').text() === currentPlayerSymbol) ||
			($('#box6').text() === currentPlayerSymbol && $('#box4').text() === currentPlayerSymbol && $('#box2').text() === currentPlayerSymbol) 
		) {
			if(currentPlayer === 'human') {
				console.log($('.nameInput'))
				$('.nameInput').show()
			}
			console.log(currentPlayer + " won!");
			// Want to create an html dynamic table and crate a loop that 
			//Empty the #scores table
			//displayScores(orderScores())
			// 
			runGame = false;
		}

		if (currentPlayer === 'computer') {
			currentPlayer = 'human'
			currentPlayerSymbol = 'X'
		}
		else {
			currentPlayer = 'computer'
			currentPlayerSymbol = 'O'
			
		}

		if (runGame){
			console.log('next person is: ', currentPlayer);
			turn();
		}
	};
};
// Step 3
// If computer started should randomly select an x


// hw:
// After the computer goes, we want to set the current player to human and run the human code
// After the human goes, we want to set the currentPlayer to computer and run the computer code

// scores is an array of objects where each object contains the name of a winner and his/her score
// [{yama:5}, {sam:3}]


var scores = [];

var saveScore = function(name){
    var exists = false;
	for(var i=0; i<scores.length; i++){
	    if(scores[i]['name'] === name){
	        scores[i]['score']++;
	        exists = true;
	        return;
	    }
	}
	if(!exists){
	    var newPerson = {};
	    newPerson['name'] = name;
	    newPerson['score'] = 1;
	    scores.push(newPerson);
	}
}

// sort: puts the values in the array in relation to each other two at a time, 
// based on whether a function returns a negative, 0, or a positive
 

//make the array ordered from highest to lowest score;
var orderScores = function(data){
		// arrange the objects highest to lowest by the value stored within the name
	scores = [{name:"yama", score: 2}, {name: "juke", score: 1}, {name: "benoy", score: 4}]
	scores.sort(function (a, b) {
	  return b.score - a.score;
	})
	return scores;
};

var createScoreString = function (){
	var scoreString = "";
	for(var i = 0; i < scores.length; i++){
		scoreString += scores[i]["name"] + ': ' + scores[i]["score"] + '<br>'
	}
	return scoreString
}

var resetBoard = function(){

	//restore array with id values
	emptyBoxes = ["#box0", "#box1", "#box2", "#box3", "#box4", "#box5", "#box6", "#box7","#box8"];

	//clear the board
	$( ".box" ).text('');
	
	//start the game
	
	runGame = true;

	turn();

}

$( "#submitName" ).click(function() {
	saveScore($('#playersName').val())
	$('#playersName').val("")
  	$('.nameInput').css("display", "none")
  	$('#scores').html(createScoreString());
  	
  	//reset the board
  	//start a new game
  	resetBoard();
});

turn();

});







