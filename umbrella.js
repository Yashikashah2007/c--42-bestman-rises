class Umbrella{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        this.image = loadImage("sprites/images/Walking Frame/walking_1.png")
        World.add(world,this.image)
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
    drawSprites()
{}
}