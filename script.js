var character = document.getElementById("character");
var block = document.getElementById("block");
var characterMen = document.getElementById("character-men")

function jump(){
    if(character.classList !== "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
      character.classList.remove("animate");  
    },500);
}

var checkDead = setInterval(function(){
  var characterTop =
  parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft =
  parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if (blockLeft<40 && blockLeft>0 && characterTop>=100){
    block.style.animation = "none";
    block.style.display = "none";
    characterMen.style.backgroundImage = "url('ghost.png')";
    character.style.backgroundImage = "url('character-love.png')";
    //alert("GAME OVER" + "\n" + "You fell in love with a fuckboy :(" + "\n" + "You slept at his house and two days later he ghosted.");
  }
},10);
