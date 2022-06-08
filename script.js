
// Elements 
var character = document.getElementById("character");
var block = document.getElementById("block");
var characterMen = document.getElementById("character-men")

// Jump with css 
function jump(){
    if(character.classList !== "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
      character.classList.remove("animate");  
    },500);
}

// Set game over and score count.
var isGameOver = false;
var score = 0;
var checkDead = setInterval(function(){
  if (!isGameOver){ score++};
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if ((blockLeft < 50 && blockLeft > 0 && characterTop >= 100)){
    isGameOver = true;
    block.style.animation = "none";
    block.style.display = "none";
    characterMen.style.backgroundImage = "url('ghost.png')";
    character.style.backgroundImage = "url('character-love.png')";
    setTimeout( function ( ) {alert("GAME OVER" + "\n" + "You fell in love with a fuckboy :(" + "\n" + "You slept at his house and two days later he ghosted." + "\n" + "SCORE =" + score);},200);
  }
document.getElementById("counter").innerHTML = score;
},10);


