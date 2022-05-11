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

      //this.isColiding = {
        //right : false,
        //left : false,
       // up : false,
       // down : false,
      //}


      this.task1 = new Task (30, 150, 40, 40)
      this.task2 = new Task (900, 0 , 40 , 40)
      this.task3 = new Task (0, 500, 40 , 40)
      this.obstacle1 = new Obstacle (10, 10, 150, 150)
      this.tasksCompleted = 0

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
    //this.ctx.fillStyle = "red";
    //this.ctx.fillRect (this.obstacle1.x, this.obstacle1.y, this.obstacle1.width, this.obstacle1.height);
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
      this._assignControls();
      this._update();
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
  }

  if (this.tasksCompleted === 3){    
    this._gameOver();
  }
    
}

_writeScore(){
    this.ctx.fillStyle = 'blue';
    this.ctx.font = '20px Verdana';
    this.ctx.fillText(`Tasks completed: ${this.tasksCompleted}`, 700, 500)
}

_gameOver(){
  const winPage = document.getElementById('win-page')
  winPage.style = "display: flex";
  const canvas = document.getElementById('canvas')
  canvas.style = 'display: none;'
}

}
