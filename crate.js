class Crate extends Entity {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }

  update() {
    // horizontal movement
    if (this.isOnGround == true) {
      // Friction
      if (this.vX !== 0) {
        if (this.vX > 0) {
          this.vX -= 0.4; //friction when going right
          } else {
          this.vX += 0.4; //friction when going left
        }
        if (abs(this.vX) < 0.3) {
          this.vX = 0; //stop completely when near 0
        }
      }
    } else if (this.isOnGround == false) {
      // Air friction
      if (this.vX !== 0) {
        if (this.vX > 0) {
          this.vX -= 0.1; //air friction when going right
          } else {
          this.vX += 0.1; //air friction when going left
        }
        if (abs(this.vX) < 0.1) {
          this.vX = 0; //stop completely when near 0
        }
      }
    }

    // horizontal movement
    this.x += this.vX;
    this.handleHorizontalCollision(blocks);
    this.handleCrateHorizontalCollision(crates.filter(c => c !== this));
    this.handleSpikeHorizontalCollision(spikes);
    this.handleHorizontalCollision(closedDoors);
    this.handleCrateHorizontalCollision([player]);

    // vertical movement
    this.y += this.vY;
    this.isOnGround = false; // Reset isOnGround before checking collisions
    this.handleVerticalCollision(blocks);
    this.handleVerticalCollision(crates.filter(c => c !== this));
    this.handleVerticalCollision(closedDoors);
    this.handleVerticalCollision([player]);
    this.handleSpikeVerticalCollision(spikes);
    this.vY += this.gravity;
    this.vY = constrain(this.vY, -15, 15);
  }

  display(r, g, b) {
    push();
    translate(this.x + this.width/2, this.y + this.height/2);
    rectMode(CENTER);
    fill(r, g, b);
    strokeWeight(1)
    stroke(0)
    rect(0, 0, this.width, this.height);
    pop();
  }

  // spike collision
  handleSpikeHorizontalCollision(allSpikes) {
    for (let spike of allSpikes) {
      if (this.x < spike.x + spike.width &&
        this.x + this.width > spike.x &&
        this.y < spike.y + 15 &&
        this.y + this.height > spike.y
      ) {
        // Make crate bounce off spike
        if (this.vX > 0) { // moving right
          this.x = spike.x - this.width - 0.01;
        } else if (this.vX < 0) { // moving left
          this.x = spike.x + spike.width + 0.01;
        }
        this.vX *= 1 / 2;
      }
    }
  }

  handleSpikeVerticalCollision(allSpikes) {
    for (let spike of allSpikes) {
      if (this.x < spike.x + spike.width &&
        this.x + this.width > spike.x &&
        this.y < spike.y + 15 &&
        this.y + this.height > spike.y
      ) {
        // Make crate bounce off spike
        if (this.vY > 0) { // falling
          this.y = spike.y - this.height - 0.01;
          this.isOnGround = true;
        } else if (this.vY < 0) { // going up
          this.y = spike.y + 15 + 0.01;
          if (gravity < 0){
            this.isOnGround = true;
          }
        }
        this.vY *= 1 / 2;
      }
    }
  }

}

class PlayerCrate extends Crate {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.gravity = gravity;
  }
  updateGravity() {
    this.gravity = gravity;
  }
}

class GravCrate extends Crate {
  constructor(x, y, width, height, gravityDirection) {
    super(x, y, width, height);
    this.gravity = gravity * gravityDirection;
  }
}