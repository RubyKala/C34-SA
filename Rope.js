class Rope { //TASK 7 HERE
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 250,
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  attach(body) {
    this.rope.bodyA = body;
  }

  fly() {
    this.rope.bodyA = null;
  }

  display() {
    if (this.rope.bodyA) {
      //CODE HERE
    }
  }
}
