class Player extends Entity {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.rotation = 0;          // current rotation 
    this.targetRotation = 0;    // where the rotation should go
  }

  update() {
    
    // Handle input
    let moveSpeed = 4.5;
    this.vX = 0;
    if (keyIsDown("65") || keyIsDown("37")) this.vX = -moveSpeed; // A or Left Arrow
    if (keyIsDown("68") || keyIsDown("39")) this.vX = moveSpeed;  // D or Right Arrow

    // Apply gravity
    this.vY += gravity;
    this.vY = constrain(this.vY, -11, 11);
    InAntiGravityZone = false
    // Smooth rotation (lerp)
    this.rotation = lerp(this.rotation, this.targetRotation, 0.15);


    // horizontal movement
    this.x += this.vX;
    this.handleHorizontalCollision(blocks);
    this.handleCrateHorizontalCollision(crates);
    this.handleHorizontalCollision(closedDoors);

    // vertical movement
    this.isOnGround = false; // Reset isOnGround before checking collisions
    this.y += this.vY;
    this.handleVerticalCollision(blocks);
    this.handleVerticalCollision(closedDoors);
    this.handleVerticalCollision(crates);
    

    // collision
    this.handleSpikeCollision(spikes);
    this.handleAntiGravityCollision(zones);
  }

  RespawnPlayer (){ // Respawns the player and resets crates
      this.x = spawnPointX
      this.y = spawnPointY
      gravity = 0.4
      this.vX = 0
      this.vY = 0
      this.targetRotation = 0;
      hintShown = false
      showHint = false
      hintTimer = 0;
      PlayerRespawn(); // Triggers to let know player respawned, used to reset crates
  }

    // Keep player inside canvas
  KeepInsideCanvas(){
    if (this.y + this.height > height || this.y < 0) {
      this.RespawnPlayer();
      }
    }

    
  jump() {
    if (this.isOnGround) {
      if (gravity > 0) {
        this.vY = jumpForce;
      } else {
        this.vY = -jumpForce;
      }
      this.isOnGround = false;
    }
  }

  handleSpikeCollision(allSpikes) {
    for (let spike of allSpikes) {
      if (this.x < spike.x + spike.width &&
        this.x + this.width > spike.x &&
        this.y < spike.y + spike.height &&
        this.y + this.height > spike.y
      ) {
        this.RespawnPlayer();
      }
    }
  }

  display() {
  push();
  translate(this.x + this.width/2, this.y + this.height/2);
  rotate(this.rotation);
  rectMode(CENTER);
  fill(255, 220, 50);
  strokeWeight(1)
  stroke(0)
  rect(0, 0, this.width, this.height);
  pop();
  }

  
}

function keyPressed() {
  if (key === ' ' || key === 'ArrowUp' || key === "w") player.jump();
  if(!InAntiGravityZone){
  if (key === 'e' || key === 'E') {
    gravity *= -1;
     // Set target rotation
    if (gravity > 0) player.targetRotation = 0;     // normal upright
    else player.targetRotation = -PI;                // upside down
    }
  }
}