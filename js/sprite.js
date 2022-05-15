class Sprite {
    constructor ({x, y, image, frames = {max: 1}, sprites }){
        this.x = x
        this.y = y
        this.image = image
        this.frames = {...frames, val : 0 , elapsed:0}

        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
        this.moving = false
        this.sprites = sprites
    }


     
}