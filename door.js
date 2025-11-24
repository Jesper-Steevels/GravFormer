class Door extends World {
  constructor(x, y, width, height, buttoncontrollers) {
    super(x, y, width, height);
    this.isOpen = false;
    this.buttoncontrollers = buttoncontrollers; // Array of buttons that control this door
  }

  update() {
    this.isOpen = false;
    //Check if any of its buttons are pressed
    for (let button of this.buttoncontrollers) {
      if (button.isPressed) {
        this.isOpen = true;
        break;
      }
    }
  }

  display() {
    if (this.isOpen == false) {
      push();
      translate(this.x + this.width/2, this.y + this.height/2);
      rectMode(CENTER);
      noStroke();
      fill(0, 255, 150, 150);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
}