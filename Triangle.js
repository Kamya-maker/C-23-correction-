class Triangle{
    constructor(x,y,width,height){
        this.body=Matter.Bodies.polygon(x, y, 3,width,height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    

display(){
    this.body.position=pos;
    polygon(pos.x, pos.y, this.width, this.height);
}

}