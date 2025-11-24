class Entity extends World {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.isOnGround = false;
    this.vY = 0; // vertical velocity
    this.vX = 0; // horizontal velocity
  }

  handleHorizontalCollision(allBlocks) {
    for (let block of allBlocks) {
      if (
        this.x < block.x + block.width &&
        this.x + this.width > block.x &&
        this.y < block.y + block.height &&
        this.y + this.height > block.y
      ) {
        if (this.vX > 0) { // moving right
          this.x = block.x - this.width - 0.01;
        } else if (this.vX < 0) { // moving left
          this.x = block.x + block.width + 0.01;
        }
        this.vX = 0;
      }
    }
  }

  handleVerticalCollision(allBlocks) {
    for (let block of allBlocks) {
      if (
        this.x < block.x + block.width &&
        this.x + this.width > block.x &&
        this.y < block.y + block.height &&
        this.y + this.height > block.y
      ) {
        if (this.vY > 0) { // falling
          this.y = block.y - this.height - 0.01;
          this.vY = 0;
          this.isOnGround = true;
        } else if (this.vY < 0) { // jumping
          this.y = block.y + block.height + 0.01;
          this.vY = 0;
          if (gravity < 0){
            this.isOnGround = true;
          }
        }
      }
    }
  }

  handleCrateHorizontalCollision(otherCrates) {
    for (let crate of otherCrates) {
      if (
        this.x < crate.x + crate.width &&
        this.x + this.width > crate.x &&
        this.y < crate.y + crate.height &&
        this.y + this.height > crate.y
      ) {
        if (this.vX > 0) { // moving right
          this.x = crate.x - this.width - 0.01;
          this.vX -= 1;
          crate.vX += 3 / 4;
        } else if (this.vX < 0) { // moving left
          this.x = crate.x + crate.width + 0.01;
          this.vX += 1;
          crate.vX -= 3 / 4;
        }
      }
    }
  }

    handleAntiGravityCollision(antiGravityZones) {
    for (let zone of antiGravityZones) {
      if (
        this.x < zone.x + zone.width &&
        this.x + this.width > zone.x &&
        this.y < zone.y + zone.height &&
        this.y + this.height > zone.y
      ) {
        InAntiGravityZone = true;
        gravity = 0.4;
        player.targetRotation = 0;
      }
    }
  }
}
