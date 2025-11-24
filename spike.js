class SpikeUp extends World {
  constructor(x, y, width) {
    super(x, y, width, 15);
    
  }
display() {
    image(SpikesUp, this.x, this.y, this.width, 15, 0, 0, this.width, 15);

  }
}

class SpikeDown extends World {
  constructor(x, y, width,) {
    super(x, y, width, 15);
    
  }
display() {
    image(SpikesDown, this.x, this.y, this.width, 15, 0, 0, this.width, 15);

  }
}

class SpikeLeft extends World {
  constructor(x, y, height,) {
    super(x, y, 15, height,);
    
  }
display() {
    image(SpikesLeft, this.x, this.y, 15, this.height, 0, 0, 15, this.height);

  }
}

class SpikeRight extends World {
  constructor(x, y, height,) {
    super(x, y, 15 ,height);
    
  }
display() {
    image(SpikesRight, this.x, this.y, 15, this.height, 0, 0, 15, this.height);
  }
}
  class MovingSpikeRow extends World {
    constructor(x, y, width, height, pathStartX, pathEndX, speed) {
      super(x, y, width, height);
      this.pathStartX = pathStartX;
      this.pathEndX = pathEndX;
      this.speed = speed;
      this.direction = 1; // 1 for right, -1 for left
    }

    update() {
      this.x += this.speed * this.direction;
      if (this.x < this.pathStartX || this.x + this.width > this.pathEndX) {
        this.direction *= -1; // Reverse direction
      }
    }
    display() {
      const spikeImg = this.direction < 0 ? SpikesLeft : SpikesRight;
      image(spikeImg, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
    }
  }

