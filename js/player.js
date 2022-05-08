class Player {
    constructor (x , y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    moveRight() {
        this.x = this.x + 3;
    }

    moveLeft(){
        this.x = this.x -3
    }

    moveUp(){
        this.y = this.y - 3
    }

    moveDown(){
        this.y = this.y + 3
    }

}