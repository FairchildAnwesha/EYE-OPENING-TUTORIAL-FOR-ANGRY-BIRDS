class CHAIN {
constructor(bodyA, bodyB){
    var options = {
         bodyA: bodyA,
         bodyB: bodyB,
         length: 100,
         stiffness: 1
    }
    this.CHAIN= Constraint.create(options);
    World.add(world, this.CHAIN);
}

display(){
    strokeWeight(4);
    line (this.CHAIN.bodyA.position.x, this.CHAIN.bodyA.position.y, this.CHAIN.bodyB.position.x, this.CHAIN.bodyB.position.y );
}











}