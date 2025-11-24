class Block extends World {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  display() {
    fill(100, 80, 60);
    //rect(this.x, this.y, this.width, this.height);
    image(LightBrownWood, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);

    stroke(93,62,23);         // brown border
    strokeWeight(2);   // thickness
    noFill();
    rect(this.x, this.y, this.width, this.height);
  }
}
class SmallPlatform extends Block {
  constructor(x, y) { super(x, y, 40, 15); } // Width 40, Height 15
}

class WidePlatform extends Block {
  constructor(x, y) { super(x, y, 100, 15); } // Width 100, height 15
}

class LongPlatform extends Block {
  constructor(x, y) { super(x, y, 180, 15); } // Width 180, height 15
}

class FloorCeiling extends Block {
  constructor(y) { super(0, y, width, 40); }
}

class Wall extends Block {
  constructor(x) { super(x, 0, 40, height)}
}

class WallPiece extends Block {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
}