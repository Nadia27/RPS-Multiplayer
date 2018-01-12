//Initialize Firebase
  var config = {
    apiKey: "AIzaSyCCNyiJ25Eg5CEmcoJPrMkHr5Q44QoPiAg",
    authDomain: "rps-multiplayer-51ac7.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-51ac7.firebaseio.com",
    projectId: "rps-multiplayer-51ac7",
    storageBucket: "",
    messagingSenderId: "201790105683"
  };
  

  firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
	var database = firebase.database();


//Initial values 
var players = []; 

	//Player 1
var player1 = ""; 
var wins1 = 0; 
var loses1 = 0;
var chat1 = "";
var choice1 = ["rock", "paper", "scissors"]; 

	//Player 2 
var player2 = ""; 
var wins2 = 0; 
var loses2 = 0; 
var chat2 = ""; 
var choice2 = ["rock", "paper", "scissors"]; 


//At start of game players input names and 
//upon submitting both names start game



$("#game-start1").on("click", function player1Start(event) {
	
	event.preventDefault();

	console.log("i was pressed!");
	
	//Grab input from textbox 
		player1 = $("#player1").val().trim(); 

			console.log(player1);

			$("#name1").html(player1);

		if(player1 !== "") {
			console.log("spaceships on bankhead");

			$("#form1").hide();
		}


})


$("#game-start2").on("click", function player2Start(event) {
	
	event.preventDefault();

	console.log("i was pressed 2!");
	
	//Grab input from textbox 
		player2 = $("#player2").val().trim(); 

			console.log(player2);

			$("#name2").html(player2);

			if(player2 !== "") {
			console.log("yeah muthafucka");

			$("#form2").hide();

		}


})

		/*player2 = $("#player2").val().trim();

			console.log(player2);  
		*/


		/*if(player1 !== "") {
			console.log("yeah butt");

			player2 = $("#players").val().trim();

			console.log(player2);  

		}
 */
		
		
	





	/*//Grab input from textbox
	var names = $("#input").val().trim();
		console.log(players); 
*/
	 




