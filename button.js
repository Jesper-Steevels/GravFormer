class Button extends World {
  constructor(x, y, width) {
    super(x, y, width);
    this.isPressed = false;
    this.height = 10;
  }

  checkIfPressed (player, crates) {
    this.height = 10; // Reset height
    this.isPressed = false;
    // Check collision with player
    if (player.x < this.x + this.width &&
        player.x + player.width > this.x &&
        player.y < this.y + this.height &&
        player.y + player.height > this.y) {
      this.isPressed = true;
    } else {
      // Check collision with crates
      for (let crate of crates) {
        if (crate.x < this.x + this.width &&
            crate.x + crate.width > this.x &&
            crate.y < this.y + this.height &&
            crate.y + crate.height > this.y) {
          this.isPressed = true;
          break;
        }
      }
    }
    if (this.isPressed) {
      // Slightly depress the button when pressed
      this.height /= 2;
    }
  }

  display() {
    if (this.isPressed) {
      push();
      strokeWeight(1);
      stroke(0);
      translate(this.x + this.width/2, this.y + this.height/2);
      rectMode(CENTER);
      fill(150, 0, 0);
      rect(0, 0, this.width, this.height);
      pop();
    } else {
      push();
      stroke(0);
      strokeWeight(1);
      translate(this.x + this.width/2, this.y + this.height/2);
      rectMode(CENTER);
      fill(255,0,0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
}

class ButtonDown extends Button {
  constructor(x, y, width) {
    super(x, y, width);
  }

  update(player, crates) {
    if (this.isPressed) {
      this.y -= 5; // Move back up temporarily
    }
    this.checkIfPressed(player, crates);
    if (this.isPressed) {
      this.y += 5; // Move down when pressed
    }
  }
}

class ButtonUp extends Button {
  constructor(x, y, width) {
    super(x, y, width);
  }

  update(player, crates) {
    this.checkIfPressed(player, crates);
  }
}