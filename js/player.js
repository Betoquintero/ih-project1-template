class Player {
    constructor (x , y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height; 

    }
        
        moveRight() {
            if (this.x + this.width < 950)
            {this.x = this.x + 3};
       }
    
       moveLeft(){
           if (this.x > 170) 
            {this.x = this.x -3}
       }
    
       moveUp(){
           if (this.y > 110) 
            {this.y = this.y - 3}
       }
    
       moveDown(){
           if (this.y + this.height < 450) 
           {this.y = this.y + 3}
       }
    

}