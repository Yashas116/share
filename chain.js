class Chain{
    constructor(bodyA, PointB){
        var options = {
            bodyA: bodyA,
            pointB: PointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=PointB
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }
    tnt() {
        this.chain.bodyA=null;
    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
}