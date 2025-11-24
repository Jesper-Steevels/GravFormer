class Zone extends World {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
}

class AntiGravityZone extends Zone {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }

  display() {
    push();
    fill(150, 100, 255, 80); // Semi-transparent purple
    stroke(150, 100, 255);
    strokeWeight(2);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}