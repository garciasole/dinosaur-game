
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

// Check if dead and change images when user lose.
  var checkDead = setInterval(function(){
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if (blockLeft<50 && blockLeft>0 && characterTop>=100){
    block.style.animation = "none";
    block.style.display = "none";
    characterMen.style.backgroundImage = "url('ghost.png')";
    character.style.backgroundImage = "url('character-love.png')";
    alert("GAME OVER" + "\n" + "You fell in love with a fuckboy :(" + "\n" + "You slept at his house and two days later he ghosted.");
  }
},10);

// Counter
        let counts=setInterval(updated);
        let upto=0;
        function updated(){
            var count= document.getElementById("counter");
            count.innerHTML=++upto;
            if(upto===10000)
            {
                clearInterval(counts);
                alert("YOU WIN" + "\n" + "You now love yourself and you'll never fall for an asshole.")
          

            }
        }
;

