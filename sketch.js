var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
//var submit;

function setup(){
  canvas = createCanvas(500,500);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  submit=createButton("see the correct answer")
  submit.position(175, 480)


  submit.mousePressed(function(){
   
    textSize(20);
      fill("red");
      
      text("THE CORRECT ANSWER IS RUSSIA",70,350)
      text.display()
  })
}

submit.mouseReleased(function(){
  textSize(20);
      fill("red");
      
      text("THE CORRECT ANSWER IS RUSSIA",70,350)
      text.display()
})


function draw(){
 // background("powderblue")
 
  if(playerCount===4){
    game.update(1)
  }
  if(gameState===1){
    clear()
    game.play()
  }
  drawSprites();
  textSize(25)
  strokeWeight(4)
  stroke("hotpink")
  fill("pink")
  text("What is the biggest country in the world?",25,100)
  textSize(21)
  text("1) India",70,150)
  text("2) Russia",70,200)
  text("3) Argentina",70,250)
  text("4) Italy",70,300)
}
