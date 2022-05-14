class Game {
  constructor(ctx) {
      this.ctx = ctx;
      this.father = new Player (500, 400, 40, 40)
      this.keys = {
          w: {
              pressed : false
          },
          a: {
              pressed : false
          },
          s: {
              pressed : false
          },
          d: {
              pressed :false
          }
      }

      this.task1 = new Task (300, 210, 50, 50)
      this.task2 = new Task (350, 390 , 50 , 50)
      this.task3 = new Task (825, 220, 50 , 50)
      this.obstacle1 = new Obstacle (160, 110, 150, 150)
      this.obstacle2 = new Obstacle (790, 71, 150, 150)
      this.obstacle3 = new Obstacle (170, 290, 170, 160)
      this.water1 = new Obstacle (670, 240, 150, 150) 
      this.water2 = new Obstacle (880, 320, 90, 70)
      this.house1 = new Obstacle (340, 95, 225, 110)
      this.house2 = new Obstacle (340, 290, 100, 80)
      this.house3 = new Obstacle (520, 280, 100, 100) 
      this.tasksCompleted = 0
      this.blockScreen = false;

  }

  _drawFather(){
      this.ctx.fillStyle = "blue";
      this.ctx.fillRect (this.father.x, this.father.y, this.father.width, this.father.height);
  }

  _drawTasks(){
    this.ctx.drawImage(task1, this.task1.x, this.task1.y, this.task1.width, this.task1.height)
    this.ctx.drawImage(task2, this.task2.x, this.task2.y, this.task2.width, this.task2.height)
    this.ctx.drawImage(task3, this.task3.x, this.task3.y, this.task3.width, this.task3.height)
      //this.ctx.fillStyle = "green";
      //this.ctx.fillRect (this.task1.x, this.task1.y, this.task1.width, this.task1.height);
      //this.ctx.fillRect (this.task2.x, this.task2.y, this.task2.width, this.task2.height);
      //this.ctx.fillRect (this.task3.x, this.task3.y, this.task3.width, this.task3.height);
  }

  _drawObstacles(){
    this.ctx.drawImage(obstacle1, this.obstacle1.x, this.obstacle1.y, this.obstacle1.width, this.obstacle1.height)
    this.ctx.drawImage(obstacle2, this.obstacle2.x, this.obstacle2.y, this.obstacle2.width, this.obstacle2.height)
    this.ctx.drawImage(obstacle3, this.obstacle3.x, this.obstacle3.y, this.obstacle3.width, this.obstacle3.height)
    this.ctx.fillStyle = "transparent";
    this.ctx.fillRect (this.water1.x, this.water1.y, this.water1.width, this.water1.height);
    this.ctx.fillRect (this.water2.x, this.water2.y, this.water2.width, this.water2.height);
    this.ctx.fillRect (this.house1.x, this.house1.y, this.house1.width, this.house1.height);
    this.ctx.fillRect (this.house2.x, this.house2.y, this.house2.width, this.house2.height);
    this.ctx.fillRect (this.house3.x, this.house3.y, this.house3.width, this.house3.height);
  }

  _clean(){
      this.ctx.clearRect(0, 0, 1000, 600)
  }

  _update(){
    let isColiding = {
      right : false,
      left : false,
      up : false,
      down : false,
    }
      if ((this.father.x + this.father.width >= this.obstacle1.x && this.father.x + this.father.width < this.obstacle1.x + this.obstacle1.width) && (this.father.y >= this.obstacle1.y && this.father.y <= this.obstacle1.y + this.obstacle1.height ||
        this.father.y + this.father.height >= this.obstacle1.y && this.father.y + this.father.height <= this.obstacle1.y + this.obstacle1.height)){
          isColiding.right = true;          
        }
        
      if ((this.father.x <= this.obstacle1.x + this.obstacle1.width && this.father.x > this.obstacle1.x) && (this.father.y >= this.obstacle1.y && this.father.y <= this.obstacle1.y + this.obstacle1.height ||
         this.father.y + this.father.height >= this.obstacle1.y && this.father.y + this.father.height <= this.obstacle1.y + this.obstacle1.height)){
           isColiding.left = true;          
        } 
        
      if ((this.father.y >= this.obstacle1.y && this.father.y <= this.obstacle1.y + this.obstacle1.height) && (this.father.x >= this.obstacle1.x && this.father.x <= this.obstacle1.x + this.obstacle1.width ||
         this.father.x + this.father.width >= this.obstacle1.x && this.father.x + this.father.width <= this.obstacle1.x + this.obstacle1.width)){
           isColiding.up = true;          
        }

      if ((this.father.y + this.father.height >= this.obstacle1.y && this.father.y + this.father.height <= this.obstacle1.y + this.obstacle1.height) && (this.father.x >= this.obstacle1.x && this.father.x <= this.obstacle1.x + this.obstacle1.width ||
         this.father.x + this.father.width >= this.obstacle1.x && this.father.x + this.father.width <= this.obstacle1.x + this.obstacle1.width)){
           isColiding.down = true;          
        }

      if ((this.father.x + this.father.width >= this.obstacle2.x && this.father.x + this.father.width < this.obstacle2.x + this.obstacle2.width) && (this.father.y >= this.obstacle2.y && this.father.y <= this.obstacle2.y + this.obstacle2.height ||
         this.father.y + this.father.height >= this.obstacle2.y && this.father.y + this.father.height <= this.obstacle2.y + this.obstacle2.height)){
            isColiding.right = true;          
          }
          
      if ((this.father.x <= this.obstacle2.x + this.obstacle2.width && this.father.x > this.obstacle2.x) && (this.father.y >= this.obstacle2.y && this.father.y <= this.obstacle2.y + this.obstacle2.height ||
          this.father.y + this.father.height >= this.obstacle2.y && this.father.y + this.father.height <= this.obstacle2.y + this.obstacle2.height)){
            isColiding.left = true;          
          } 
          
      if ((this.father.y >= this.obstacle2.y && this.father.y <= this.obstacle2.y + this.obstacle2.height) && (this.father.x >= this.obstacle2.x && this.father.x <= this.obstacle2.x + this.obstacle2.width ||
          this.father.x + this.father.width >= this.obstacle2.x && this.father.x + this.father.width <= this.obstacle2.x + this.obstacle2.width)){
            isColiding.up = true;          
          }
  
      if ((this.father.y + this.father.height >= this.obstacle2.y && this.father.y + this.father.height <= this.obstacle2.y + this.obstacle2.height) && (this.father.x >= this.obstacle2.x && this.father.x <= this.obstacle2.x + this.obstacle2.width ||
          this.father.x + this.father.width >= this.obstacle2.x && this.father.x + this.father.width <= this.obstacle2.x + this.obstacle2.width)){
            isColiding.down = true;          
          }

      if ((this.father.x + this.father.width >= this.obstacle3.x && this.father.x + this.father.width < this.obstacle3.x + this.obstacle3.width) && (this.father.y >= this.obstacle3.y && this.father.y <= this.obstacle3.y + this.obstacle3.height ||
          this.father.y + this.father.height >= this.obstacle3.y && this.father.y + this.father.height <= this.obstacle3.y + this.obstacle3.height)){
            isColiding.right = true;          
          }
            
        if ((this.father.x <= this.obstacle3.x + this.obstacle3.width && this.father.x > this.obstacle3.x) && (this.father.y >= this.obstacle3.y && this.father.y <= this.obstacle3.y + this.obstacle3.height ||
          this.father.y + this.father.height >= this.obstacle3.y && this.father.y + this.father.height <= this.obstacle3.y + this.obstacle3.height)){
             isColiding.left = true;          
          } 
            
        if ((this.father.y >= this.obstacle3.y && this.father.y <= this.obstacle3.y + this.obstacle3.height) && (this.father.x >= this.obstacle3.x && this.father.x <= this.obstacle3.x + this.obstacle3.width ||
             this.father.x + this.father.width >= this.obstacle3.x && this.father.x + this.father.width <= this.obstacle3.x + this.obstacle3.width)){
               isColiding.up = true;          
          }
    
        if ((this.father.y + this.father.height >= this.obstacle3.y && this.father.y + this.father.height <= this.obstacle3.y + this.obstacle3.height) && (this.father.x >= this.obstacle3.x && this.father.x <= this.obstacle3.x + this.obstacle3.width ||
             this.father.x + this.father.width >= this.obstacle3.x && this.father.x + this.father.width <= this.obstacle3.x + this.obstacle3.width)){
               isColiding.down = true;          
          }

          
        if ((this.father.x + this.father.width >= this.water1.x && this.father.x + this.father.width < this.water1.x + this.water1.width) && (this.father.y >= this.water1.y && this.father.y <= this.water1.y + this.water1.height ||
              this.father.y + this.father.height >= this.water1.y && this.father.y + this.father.height <= this.water1.y + this.water1.height)){
                isColiding.right = true;          
          }
              
        if ((this.father.x <= this.water1.x + this.water1.width && this.father.x > this.water1.x) && (this.father.y >= this.water1.y && this.father.y <= this.water1.y + this.water1.height ||
               this.father.y + this.father.height >= this.water1.y && this.father.y + this.father.height <= this.water1.y + this.water1.height)){
              isColiding.left = true;          
          } 
              
        if ((this.father.y >= this.water1.y && this.father.y <= this.water1.y + this.water1.height) && (this.father.x >= this.water1.x && this.father.x <= this.water1.x + this.water1.width ||
              this.father.x + this.father.width >= this.water1.x && this.father.x + this.father.width <= this.water1.x + this.water1.width)){
              isColiding.up = true;          
          }
      
        if ((this.father.y + this.father.height >= this.water1.y && this.father.y + this.father.height <= this.water1.y + this.water1.height) && (this.father.x >= this.water1.x && this.father.x <= this.water1.x + this.water1.width ||
              this.father.x + this.father.width >= this.water1.x && this.father.x + this.father.width <= this.water1.x + this.water1.width)){
              isColiding.down = true;          
          }

        if ((this.father.x + this.father.width >= this.water2.x && this.father.x + this.father.width < this.water2.x + this.water2.width) && (this.father.y >= this.water2.y && this.father.y <= this.water2.y + this.water2.height ||
            this.father.y + this.father.height >= this.water2.y && this.father.y + this.father.height <= this.water2.y + this.water2.height)){
              isColiding.right = true;          
          }
            
       if ((this.father.x <= this.water2.x + this.water2.width && this.father.x > this.water2.x) && (this.father.y >= this.water2.y && this.father.y <= this.water2.y + this.water2.height ||
             this.father.y + this.father.height >= this.water2.y && this.father.y + this.father.height <= this.water2.y + this.water2.height)){
            isColiding.left = true;          
          } 
            
       if ((this.father.y >= this.water2.y && this.father.y <= this.water2.y + this.water2.height) && (this.father.x >= this.water2.x && this.father.x <= this.water2.x + this.water2.width ||
            this.father.x + this.father.width >= this.water2.x && this.father.x + this.father.width <= this.water2.x + this.water2.width)){
            isColiding.up = true;          
          }
    
       if ((this.father.y + this.father.height >= this.water2.y && this.father.y + this.father.height <= this.water2.y + this.water2.height) && (this.father.x >= this.water2.x && this.father.x <= this.water2.x + this.water2.width ||
            this.father.x + this.father.width >= this.water2.x && this.father.x + this.father.width <= this.water2.x + this.water2.width)){
            isColiding.down = true;          
          }

          if ((this.father.x + this.father.width >= this.house1.x && this.father.x + this.father.width < this.house1.x + this.house1.width) && (this.father.y >= this.house1.y && this.father.y <= this.house1.y + this.house1.height ||
            this.father.y + this.father.height >= this.house1.y && this.father.y + this.father.height <= this.house1.y + this.house1.height)){
              isColiding.right = true;          
          }
            
       if ((this.father.x <= this.house1.x + this.house1.width && this.father.x > this.house1.x) && (this.father.y >= this.house1.y && this.father.y <= this.house1.y + this.house1.height ||
             this.father.y + this.father.height >= this.house1.y && this.father.y + this.father.height <= this.house1.y + this.house1.height)){
            isColiding.left = true;          
          } 
            
       if ((this.father.y >= this.house1.y && this.father.y <= this.house1.y + this.house1.height) && (this.father.x >= this.house1.x && this.father.x <= this.house1.x + this.house1.width ||
            this.father.x + this.father.width >= this.house1.x && this.father.x + this.father.width <= this.house1.x + this.house1.width)){
            isColiding.up = true;          
          }
    
       if ((this.father.y + this.father.height >= this.house1.y && this.father.y + this.father.height <= this.house1.y + this.house1.height) && (this.father.x >= this.house1.x && this.father.x <= this.house1.x + this.house1.width ||
            this.father.x + this.father.width >= this.house1.x && this.father.x + this.father.width <= this.house1.x + this.house1.width)){
            isColiding.down = true;          
          }

        if ((this.father.x + this.father.width >= this.house2.x && this.father.x + this.father.width < this.house2.x + this.house2.width) && (this.father.y >= this.house2.y && this.father.y <= this.house2.y + this.house2.height ||
            this.father.y + this.father.height >= this.house2.y && this.father.y + this.father.height <= this.house2.y + this.house2.height)){
              isColiding.right = true;          
          }
            
       if ((this.father.x <= this.house2.x + this.house2.width && this.father.x > this.house2.x) && (this.father.y >= this.house2.y && this.father.y <= this.house2.y + this.house2.height ||
             this.father.y + this.father.height >= this.house2.y && this.father.y + this.father.height <= this.house2.y + this.house2.height)){
            isColiding.left = true;          
          } 
            
       if ((this.father.y >= this.house2.y && this.father.y <= this.house2.y + this.house2.height) && (this.father.x >= this.house2.x && this.father.x <= this.house2.x + this.house2.width ||
            this.father.x + this.father.width >= this.house2.x && this.father.x + this.father.width <= this.house2.x + this.house2.width)){
            isColiding.up = true;          
          }
    
       if ((this.father.y + this.father.height >= this.house2.y && this.father.y + this.father.height <= this.house2.y + this.house2.height) && (this.father.x >= this.house2.x && this.father.x <= this.house2.x + this.house2.width ||
            this.father.x + this.father.width >= this.house2.x && this.father.x + this.father.width <= this.house2.x + this.house2.width)){
            isColiding.down = true;          
          }

          if ((this.father.x + this.father.width >= this.house3.x && this.father.x + this.father.width < this.house3.x + this.house3.width) && (this.father.y >= this.house3.y && this.father.y <= this.house3.y + this.house3.height ||
            this.father.y + this.father.height >= this.house3.y && this.father.y + this.father.height <= this.house3.y + this.house3.height)){
              isColiding.right = true;          
          }
            
       if ((this.father.x <= this.house3.x + this.house3.width && this.father.x > this.house3.x) && (this.father.y >= this.house3.y && this.father.y <= this.house3.y + this.house3.height ||
             this.father.y + this.father.height >= this.house3.y && this.father.y + this.father.height <= this.house3.y + this.house3.height)){
            isColiding.left = true;          
          } 
            
       if ((this.father.y >= this.house3.y && this.father.y <= this.house3.y + this.house3.height) && (this.father.x >= this.house3.x && this.father.x <= this.house3.x + this.house3.width ||
            this.father.x + this.father.width >= this.house3.x && this.father.x + this.father.width <= this.house3.x + this.house3.width)){
            isColiding.up = true;          
          }
    
       if ((this.father.y + this.father.height >= this.house3.y && this.father.y + this.father.height <= this.house3.y + this.house3.height) && (this.father.x >= this.house3.x && this.father.x <= this.house3.x + this.house3.width ||
            this.father.x + this.father.width >= this.house3.x && this.father.x + this.father.width <= this.house3.x + this.house3.width)){
            isColiding.down = true;          
          }          
 
      this._clean();
      this._drawFather();
      this._drawTasks();
      this._drawObstacles();
      this._checkCollisions();
      this._writeScore();
      window.requestAnimationFrame(() => this._update());
      if (this.keys.w.pressed && !isColiding.up){        
          this.father.moveUp();        
      } else if (this.keys.a.pressed && !isColiding.left){
          this.father.moveLeft();
      } else if (this.keys.s.pressed && !isColiding.down){
          this.father.moveDown();
      } else if (this.keys.d.pressed && !isColiding.right){
          this.father.moveRight()
      }
  }

  start() {  
      themeSound.play()
      this._assignControls();
      this._update();
      }

  _showAlert(){
    this.blockScreen = true;

    const event = document.createElement('div')
    event.innerHTML = 'OH NO! YOUR BABY IS CRYING!! WHAT SHOULD YOU DO?'
    document.body.appendChild(event);

    const option1 = document.createElement('button')
    option1.innerHTML = 'Change diaper'
    document.body.appendChild(option1);

    const option2 = document.createElement('button')
    option2.innerHTML = 'Give him a bottle of milk'
    document.body.appendChild(option2);

    const option3 = document.createElement('button')
    option3.innerHTML = 'Give him the pacifier'
    document.body.appendChild(option3);

    const option4 = document.createElement('button')
    option4.innerHTML = 'Run away'
    document.body.appendChild(option4);

    option1.onclick = function(){

    }
      

    
  }

  _assignControls(){
  window.addEventListener('keydown' , (event) => {    
      switch (event.key) {
          case 'w' :
              this.keys.w.pressed = true
              break
          case 'a' :
              this.keys.a.pressed = true
              break    
            case 's' :
              this.keys.s.pressed = true
              break
          case 'd' :
              this.keys.d.pressed = true
              break
      }      
  })
  
  window.addEventListener('keyup' , (event) => {    
      switch (event.key) {
          case 'w' :
              this.keys.w.pressed = false                
              break
          case 'a' :
              this.keys.a.pressed = false
              break    
            case 's' :
              this.keys.s.pressed = false
              break
          case 'd' :
              this.keys.d.pressed = false
              break
      }       
  }) 
  
}

_checkCollisions(){
    if ((
        this.father.x >= this.task1.x && this.father.x <= this.task1.x + this.task1.width ||
        this.father.x + this.father.width >= this.task1.x && this.father.x + this.father.width <= this.task1.x + this.task1.width 
    ) && 
    (
        this.father.y >= this.task1.y && this.father.y <= this.task1.y + this.task1.width ||
        this.father.y + this.father.height >= this.task1.y && this.father.y +this.father.height <= this.task1.y + this.task1.height
    )
  ) {
      this.tasksCompleted++;
      this.task1.x = -200;
      pickupSound.play();
      this._showAlert();
      battleSound.play();
      themeSound.pause();
  }

    if ((
        this.father.x >= this.task2.x && this.father.x <= this.task2.x + this.task2.width ||
        this.father.x + this.father.width >= this.task2.x && this.father.x + this.father.width <= this.task2.x + this.task2.width 
    ) && 
    (
        this.father.y >= this.task2.y && this.father.y <= this.task2.y + this.task2.width ||
        this.father.y + this.father.height >= this.task2.y && this.father.y +this.father.height <= this.task2.y + this.task2.height
    )
  ) {
      this.tasksCompleted++;
      this.task2.x = -200;
      pickupSound.play();
  }

    if ((
        this.father.x >= this.task3.x && this.father.x <= this.task3.x + this.task3.width ||
        this.father.x + this.father.width >= this.task3.x && this.father.x + this.father.width <= this.task3.x + this.task3.width 
    ) && 
    (
        this.father.y >= this.task3.y && this.father.y <= this.task3.y + this.task3.width ||
        this.father.y + this.father.height >= this.task3.y && this.father.y +this.father.height <= this.task3.y + this.task3.height
    )
  ) {
      this.tasksCompleted++;
      this.task3.x = -200;
      pickupSound.play();
      //battleSound.play();    

  }

  if (this.tasksCompleted === 3){   
    this._gameOver();
  }
    
}

_writeScore(){
    this.ctx.fillStyle = 'black';
    this.ctx.font = '30px Verdana';
    this.ctx.fillText(`Tasks completed: ${this.tasksCompleted}`, 700, 565)
}

_gameOver(){
  winSound.play();
  themeSound.pause();
  const winPage = document.getElementById('win-page')
  winPage.style = "display: flex";
  const canvas = document.getElementById('canvas')
  canvas.style = 'display: none;'  
}

}
