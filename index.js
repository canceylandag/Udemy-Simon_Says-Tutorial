var buttonColours=["red","blue", "green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var keyPressed=0;
var level=0;

function flashh(a){

  var access="#"+a;

  $(access).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });

}

function audiofile(a){

  switch(a){
    case "red":
    var redMusic = new Audio('./sounds/red.mp3');
    redMusic.play();
    break;
    case "blue":
    var blueMusic = new Audio('./sounds/blue.mp3');
    blueMusic.play();
    break;
    case "green":
    var greenMusic = new Audio('./sounds/green.mp3');
    greenMusic.play();
    break;
    case "yellow":
    var yellowMusic = new Audio('./sounds/yellow.mp3');
    yellowMusic.play();
    break;
    default:
    var defaultMusic = new Audio('./sounds/wrong.mp3');
    defaultMusic.play();
  }
}

function checkAnswer(a){

    if(userClickedPattern[a]===gamePattern[a]){

      console.log("success");
      if(userClickedPattern.length===gamePattern.length){

        setTimeout(function(){nextSequence()},1000);

      }

    }else{
      console.log("failure");
      startOver();
      }



  }
function startOver(){

  $("body").addClass("game-over");
  setTimeout(function(){$("body").removeClass("game-over");},200);
  $("#level-title").text("Game Over, Press Any Key to Restart");
  keyPressed=0;
  gamePattern=[];
  level=0;

}

function nextSequence(){
  userClickedPattern=[];
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    flashh(randomChosenColor);
    audiofile(randomChosenColor);
    $("#level-title").text("Level "+level.toString(10));
    level+=1;
}


$(".btn").click(function(){

var userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour );
audiofile(userChosenColour);
flashh(userChosenColour);
checkAnswer(userClickedPattern.length-1);



})

$(document).keypress(function(event){
if (keyPressed===0){

  nextSequence();
  keyPressed=1;

}

})
