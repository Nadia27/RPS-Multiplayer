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
var players = []; 

	//Player 1
var player1 = ""; 
var wins1 = 0; 
var loses1 = 0;
var chat1 = "";
var player1Choice = ["rock", "paper", "scissors"]; 

	//Player 2 
var player2 = ""; 
var wins2 = 0; 
var loses2 = 0; 
var chat2 = ""; 
var choice2 = ["rock", "paper", "scissors"]; 


//At start of game player1 input name
$("#game-start1").on("click", function player1Start(event) {
	
	event.preventDefault();

	//console.log("i was pressed!");
	
	//Grab input from textbox 
		player1 = $("#player1").val().trim(); 

			//console.log(player1);

			$("#name1").html(player1);

	//when player inputs name... hide form
		if(player1 !== "") {
			//console.log("spaceships on bankhead");


			$("#form1").hide();

			//Notifiy user to choose his/her weapon
			$("#alert").html("<b>Choose your weapon!</b>");



		}
		//Once player chooses weapon other options should disappear

	
		$(".img-thumbnail").click(function() {
   			 console.log(this.id); // get id of clicked li
    
    		var userGuess1 = this.id;  

    
    //alert("I am the user's guess " + userGuess1);
    
    if(userGuess1 = rock1) {
    	//console.log("dum dum ditty");
      $("#paper1").hide();
      $("#scissors1").hide(); 
    
  
   	} 

   	if(userGuess1 = paper1) {
   		console.log("yup!");
   		$()

   	}
    
});


});

	


	/*	  $("#rock1").on('click', function() {
  			$("#paper1").hide();
  			$("#scissors1").hide();
  			$("#alert").hide();



})
		$("#paper1").on('click', function() {
  			$("#rock1").hide();
  			$("#scissors1").hide();
  			$("#alert").hide();

})
		$("#scissors1").on('click', function() {
  			$("#rock1").hide();
  			$("#paper1").hide();
  			$("#alert").hide();

	})*/

			
	/*	game_ref.push ({
				
				player1: player1,
				//weapon1: 
				dateAdded: firebase.database.ServerValue.TIMESTAMP
			}) */

		
	






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
			$("#alert2").html("<b>Choose your weapon!</b>");

		}
		$("#rock2").on('click', function() {
  			$("#paper2").hide();
  			$("#scissors2").hide();
  			$("#alert2").hide();

})
		$("#paper2").on('click', function() {
  			$("#rock2").hide();
  			$("#scissors2").hide();
  			$("#alert2").hide();

})
		$("#scissors2").on('click', function() {
  			$("#rock2").hide();
  			$("#paper2").hide();
  			$("#alert2").hide();
	})

		/*game_ref.push ({
				
				player2: player2,
				dateAdded: firebase.database.ServerValue.TIMESTAMP
			}) 
*/

	})

			
        
   

	game_ref.on("child_added", function(snapshot) {
      
      console.log(snapshot.val());
     
     player1 = snapshot.val().player1;
     player2 = snapshot.val().player2;  

     	console.log(player1);
/*
     $("#name1").text(player1); 
     $("#name2").text(player2); */



 });

	/*game_ref.orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

      // Change the HTML to reflect
      $("#name1").text(snapshot.val().player1);
      $("#name2").text(snapshot.val().player2);
      
    });*/



		

