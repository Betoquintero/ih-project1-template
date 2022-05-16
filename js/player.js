class Player {
    constructor (x , y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = walkStepsDown[0]
        this.stepCounter = 1

    }
        
        moveRight() {
            if (this.x + this.width < 950)
            {this.x = this.x + 3};
            this.image = walkStepsRight[this.stepCounter];
            this.stepCounter++;
            if (this.stepCounter == walkStepsRight.length){
                this.image = walkStepsRight[0];
                this.stepCounter = 1;
            }
       }
    
       moveLeft(){
           if (this.x > 170) 
            {this.x = this.x -3}
            this.image = walkStepsLeft[this.stepCounter];
            this.stepCounter++;
            if (this.stepCounter == walkStepsLeft.length){
                this.image = walkStepsLeft[0];
                this.stepCounter = 1;
            }
       }
    
       moveUp(){
           if (this.y > 110) 
            {this.y = this.y - 3}
            this.image = walkStepsUp[this.stepCounter];
            this.stepCounter++;
            if (this.stepCounter == walkStepsUp.length){
                this.image = walkStepsUp[0];
                this.stepCounter = 1;
            }
       }
    
       moveDown(){
           if (this.y + this.height < 450) 
           {this.y = this.y + 3}
           this.image = walkStepsDown[this.stepCounter];
            this.stepCounter++;
            if (this.stepCounter == walkStepsDown.length){
                this.image = walkStepsDown[0];
                this.stepCounter = 1;
            }
       }
    

}