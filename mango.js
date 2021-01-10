class mango{
    constructor(x,y,radus){
        var options={
            isStatic:true,
            restition:0,
            friction:1
        }
        this.body = Bodies.circle(x, y,radus, options);
        this.x = x;
        this.y = y;
        this.radus = radus;
        this.image = loadImage('Plucking mangoes/mango.png');
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, this.radus, this.radus);
        pop();
    }
}