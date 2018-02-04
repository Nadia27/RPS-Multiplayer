
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
	var game_ref = database.ref('game');

//Initial values 

	//Player 1
var player1 = ""; 
var wins1 = 0; 
var loses1 = 0;
var chat1 = "";
var userWeapon1 = ""; 

	//Player 2 
var player2 = ""; 
var wins2 = 0; 
var loses2 = 0; 
var chat2 = ""; 
var userWeapon2 = "";  


//At start of game player1 input name
$("#game-start1").on("click", function player1Start(event) {
	
	event.preventDefault();

	//console.log("i was pressed!");
	
	//Grab input from textbox 
		player1 = $("#player1").val().trim(); 

			//console.log(player1);

			$("#name1").html(player1);

	//when player inputs name... hide form
		if(player1 != "") {
			
			//console.log("spaceships on bankhead");

			$("#form1").hide();

			//Notifiy user to choose his/her weapon
			$("#alert").html("<b>Choose your weapon!</b>");

		}
			
		//Once player chooses weapon other options should disappear
	
		$(".img-thumbnail.1").click(function() {
   			 
   			 userWeapon1 = this.id
    
    		//alert("I am the user's guess " + userGuess1);
    		
    		if(userWeapon1 == "rock1") {
    			//console.log("dum dum ditty");
      			$("#paper1").hide();
      			$("#scissors1").hide(); 
      			$("#alert").hide(); 
    			
  			} 

			if(userWeapon1 == "paper1") {
   				//console.log("yup!");
   				$("#rock1").hide();
      			$("#scissors1").hide();
      			$("#alert").hide();   

			}

			if(userWeapon1 == "scissors1") {
				//console.log("grit"); 
				$("#rock1").hide();
      			$("#paper1").hide();
      			$("#alert").hide(); 
			}

			//Run battleGrounds() if both players have chosen a weapon
			if ((userWeapon1 != "") && (userWeapon2 != "")) {

				
				battleGrounds();
			} 
		})

	
	/*game_ref.push ({
				
				player1: player1,
				userWeapon1: userWeapon1, 
				
				dateAdded: firebase.database.ServerValue.TIMESTAMP
		
	}) */

			
})
		

   
    
//Player 2
$("#game-start2").on("click", function player2Start(event) {
	
	event.preventDefault();

	//console.log("i was pressed 2!");
	
	//Grab input from textbox 
		player2 = $("#player2").val().trim(); 

			//console.log(player2);

			$("#name2").html(player2);

		if(player2 != "") {
			//console.log("yeah muthafucka");

			$("#form2").hide();
			$("#alert2").html("<b>Choose your weapon!</b>");

		}
		
		//Player2 choose weapon
		$(".img-thumbnail.2").click(function() {
   			 

   			 	userWeapon2 = this.id;

   			 
    		//alert("I am the user's guess " + userWeapon2);
    		
    		if(userWeapon2 == "rock2") {
    			//console.log("I will not lose");
      			$("#paper2").hide();
      			$("#scissors2").hide();
      			$("#alert2").hide(); 
    		} 

			if(userWeapon2 == "paper2") {
   				//console.log("Another one");
   				$("#rock2").hide();
      			$("#scissors2").hide();
      			$("#alert2").hide();  

			}

			if(userWeapon2 == "scissors2") {
				//console.log("hip-hop"); 
				$("#rock2").hide();
      			$("#paper2").hide();
      			$("#alert2").hide(); 
			}

			//Run battleGrounds() if both players have chosen a weapon
			if ((userWeapon2 != "") && (userWeapon1 != "")) {  

				battleGrounds();

			} 
			
	})


		/*game_ref.push ({
				
				player2: player2,
				userWeapon2: userWeapon2,
				dateAdded: firebase.database.ServerValue.TIMESTAMP
			})*/ 
})


//I am having trouble with this function... 
// compare player 1 selection with player2 selection
function battleGrounds() {

	console.log("im running");

	//debugger; 

	if ((userWeapon1 === "rock1") || (userWeapon1 === "paper1") || (userWeapon1 === "scissors1") && (userWeapon2 ==="rock2")  || (userWeapon2 === "paper2") || (userWeapon2 === "scissors2")) {

		console.log("this shit gettting gritty");

		if((userWeapon1 ==="rock1") && (userWeapon2 ==="rock2")) {
			
			//console.log("tie");


			$("#alert3").html("<b>Tie Game!</b>");
			$("#alert4").html("<b>Tie Game!</b>");
 
		
		} else if((userWeapon1 ==="rock1") && (userWeapon2 ==="paper2")) {
			
			console.log(player2 + " wins");

			wins2++; 
			loses1++; 

			$("#wins2").html(wins2); 
			$("#loses1").html(loses1); 

			$("#alert3").html("<b>"player2 +" wins!!</b>");
			$("#alert4").html("<b>Tie Game!</b>");
		
		}else if ((userWeapon1 === "rock1") && (userWeapon2 === "scissors2")) {

			console.log(player1 + " wins!"); 

			wins1++;
			loses2++;

			$("#wins1").html(wins1);
			$("#loses2").html(loses2);   
		
		}else if ((userWeapon1 === "paper1") && (userWeapon2 === "rock2")) {

			console.log(player1 + " wins!"); 

			wins1++; 
			loses2++; 

			$("#wins1").html(wins1); 
			$("#loses2").html(loses2); 

		}else if ((userWeapon1 === "paper1") && (userWeapon2 === "paper2")) {

			console.log("tie"); 

		}else if ((userWeapon1 === "paper1") && (userWeapon2 === "scissors2")) {

			console.log(player2 + " wins!"); 

			wins2++; 
			loses1++; 

			$("#wins2").html(wins2); 
			$("#loses1").html(loses1); 
		
		}else if ((userWeapon1 === "scissors1") && (userWeapon2 === "rock2")) {

			console.log(player2 + " wins"); 

			wins2++; 
			loses1++;

			$("#wins2").html(wins2); 
			$("#loses1").html(loses1);  
		
		}else if ((userWeapon1 === "scissors1") && (userWeapon2 === "paper2")) {

			console.log(player1 + " wins"); 

			wins1++; 
			loses2++; 

			$("#wins1").html(wins1); 
			$("#loses2").html(loses2); 
		
		}else if ((userWeapon1 === "scissors1") && (userWeapon2 === "scissors2")) {

			console.log("tie"); 
		}

	}

}

//Reset game pieces 
function resetGame() {
	
}
	
	
			


	/*if (userWeapon1 == 'rock1' && userWeapon2 == 'rock2') {
		
			console.log("grit"); */

		

		//} 
			

	
		/*if ((userWeapon1 ==="rock1") && (userWeapon2 === "rock2" )) {  
				console.log("i work!"); 
			} */
	

	/* if (userWeapon1 == "rock1" && userWeapon2 == "rock2") {
		
			console.log("tie"); 
		}
*/


	

/*	game_ref.on("child_added", function(snapshot) {
      
      console.log(snapshot.val());
     
     player1 = snapshot.val().player1;
     player2 = snapshot.val().player2;
     userWeapon1 = snapshot.val().userWeapon1; 
     userWeapon2 = snapshot.val().userWeapon2;
     	console.log(player1);
     $("#name1").text(player1); 
     $("#name2").text(player2);
    
});*/



		
