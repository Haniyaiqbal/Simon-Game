var buttonColor =["red", "blue", "green", "yellow"];

var gamePattern =[];

var userClickedPattern = [];

 var level =0;

 var started=false;


function nextSequence()
{
	userClickedPattern = [];

	level++;

	$("#level-title").text("level " +level);

	var randomNumber = Math.floor(Math.random()*4); 

	var randomChosenColour = buttonColor[randomNumber];

	gamePattern.push(randomChosenColour);
 
	 $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

	 playsound(randomChosenColour);

	
}

    $(".btn").click(function(){

     var userChosenColour = $(this).attr("id");

     userClickedPattern.push(userChosenColour);

     playsound(userChosenColour);

     animatePress(userChosenColour);

     checkAnswer(userClickedPattern.length-1);
 
     });



    function playsound(name) {

    var audio = new Audio("sounds/" +name+ ".mp3");
     audio.play();

    }

    function animatePress(currentcolour) {

    	$("#"+ currentcolour).addClass("pressed");

    	setTimeout(function() {
        $("#"+ currentcolour).removeClass("pressed");
        },100);


     }



    $(document).keypress(function() {
   
    if (!started) {

    $("#level-title").text("level " + level);

    nextSequence();

    started = true;
    }
   });


  function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel])
     {
      if (userClickedPattern.length === gamePattern.length)
      {
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    }
    
     else {
      playsound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function startOver(argument) {
	
	level=0;
	gamePattern = [];
	started=false;
}



  



 


