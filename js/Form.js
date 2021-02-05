class Form {
  constructor() {
    this.input=createInput("Name")
    this.input2=createInput("Correct answer no.")
    this.button=createButton('submit')
   
  }

  hide(){
   
    this.button.hide()
    this.input.hide()
  }

  display(){
    var title = createElement('h2')
    title.html("QUIZ GAME");
    title.position(170, 0);
    
     
    
    this.input.position(160, 350);
    this.input2.position(160,400);
    this.button.position(220, 450);

    this.button.mousePressed(()=>{
     
      this.input.hide();
      this.input2.hide();
      this.button.hide();
      

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount
      player.update()
      player.updateCount(playerCount);

     // text("THE CORRECT ANSWER IS RUSSIA",70,400)
       //this.greeting = createElement('h3');
      //this.greeting.html("Hello " + player.name )
      //this.greeting.position(130, 160)
    });

  }

}
