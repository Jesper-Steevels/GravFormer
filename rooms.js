let playerRespawned = false;

function PlayerRespawn() {
    // Mark respawn
  playerRespawned = true;

  loadRoom(); // Reload current room to reset crates
}



function room1() {
  spawnPointX = 100
  spawnPointY = 550
  player.x = spawnPointX;
  player.y = spawnPointY;

  blocks.push(new WallPiece(0, 600, 200, 200)) // Floor
  blocks.push(new FloorCeiling(0, width)); // Roof
  blocks.push(new Wall (0)) // Wall on left
  blocks.push(new SmallPlatform(40, 500)); // Stair 1
  blocks.push(new SmallPlatform(120, 400)); // Stair 2
  blocks.push(new SmallPlatform(40, 300)); // Stair 3
  blocks.push(new SmallPlatform(120, 220)); // Stair 4
  blocks.push(new WallPiece(160, 90, 40, height)) // Wall infront of player
  blocks.push(new LongPlatform(200, 200)); // First platform to reach
  blocks.push(new WallPiece(540, 0, 40, 300)) // Second wall by platform
  blocks.push(new LongPlatform(400, 300)); // Platform that player lands on
  blocks.push(new SmallPlatform(350, 550)); // Stair 4
  blocks.push(new LongPlatform(600, 450)); // Last platform to reach
  // Right wall with a gap in the middle
  blocks.push(new WallPiece(760, 0, 40, 350));   // top part
  blocks.push(new WallPiece(760, 450, 40, 350)); // bottom part
}

function room2() {
  spawnPointX = 100
  spawnPointY = 550
  player.x = spawnPointX;
  player.y = spawnPointY;

  blocks.push(new WallPiece(0, 0, width, 200)); // roof
  blocks.push(new WallPiece(0, 600, width, 200)); // floor

  //Left Wall with a gap in the middle
  blocks.push(new WallPiece(0, 0, 40, 500)) // Top Part
  blocks.push(new WallPiece(0, 600, 40, 200)) // Bottom Part

  // Right wall with a gap in the middle
  blocks.push(new WallPiece(760, 0, 40, 350));   // Top part
  blocks.push(new WallPiece(760, 450, 40, 350)); // Bottom part

  blocks.push(new WallPiece(150, 350, 105, 250)) // First wall
  spikes.push(new SpikeUp(150, 335, 105)) // Spikes on top of first wall

  blocks.push(new WallPiece(400, 200, 360, 100)) // Second wall
  spikes.push(new SpikeLeft(385, 205, 90)) // Spikes on top of second wall
  spikes.push(new SpikeDown(400, 300, 360)) // Spikes on top of second wall

  blocks.push(new WallPiece(500, 450, 260, 150)) // Third wall

  
}

function room3() {
  spawnPointX = 100
  spawnPointY = 550
  player.x = spawnPointX;
  player.y = spawnPointY;

  blocks.push(new WallPiece(0, 0, width, 150)); // roof
  blocks.push(new WallPiece(0, 600, 400, 200)); // floor
  blocks.push(new WallPiece(600, 600, 200, 200)); // floor right side
  blocks.push(new WallPiece(400, 620, 200, 180)); // bottom floor piece

  //Left Wall with a gap in the middle
  blocks.push(new WallPiece(0, 0, 40, 500)) // Top Part
  blocks.push(new WallPiece(0, 600, 40, 200)) // Bottom Part

  // Right wall with a gap in the middle
  blocks.push(new WallPiece(760, 0, 40, 500));   // Top part
  blocks.push(new WallPiece(760, 600, 40, 200)); // Bottom part

  blocks.push(new WallPiece (400, 150, 40, 300)) // Middle wall
  blocks.push(new WallPiece(150, 450, 290, 40)) // First block
  blocks.push(new WallPiece (150, 430, 40, 20)) // Left wall piece to prevent crate getting stuck
  buttons.push(new ButtonDown(360, 440, 30)); // Button on first block
  crates.push(new GravCrate(200, 410, 30, 30, 1)) // Grav crate on first block
  doors.push(new Door(300, 490, 40, 110, [buttons[0]])); // Door on middle wall

  blocks.push(new WallPiece(520, 450, 240, 40)) // Second block
  blocks.push(new WallPiece (630, 150, 40, 200)) // Wall Piece on top
  blocks.push(new WallPiece(600, 490, 160, 10)) // Wall Piece above door
  crates.push(new PlayerCrate(550, 410, 30, 30)) // Player crate on second block
  buttons.push(new ButtonUp(700, 150, 30)); // Button on second block
  doors.push(new Door(640, 500, 40, 100, [buttons[1]])); // Door on middle wall
}


function room4() {
  spawnPointX = 100
  spawnPointY = 550
  player.x = spawnPointX;
  player.y = spawnPointY;

  blocks.push(new WallPiece(40, 600, 150, 100)) // Starting Block
  blocks.push(new WallPiece(0, 0, width, 100)); // Roof
  blocks.push(new WallPiece(0, 700, width, 100)); // Floor

  //Left Wall with a gap in the middle
  blocks.push(new WallPiece(0, 0, 40, 500)) // Top Part
  blocks.push(new WallPiece(0, 600, 40, 200)) // Bottom Part

  // Right wall with a gap in the middle
  blocks.push(new WallPiece(760, 0, 40, 150));   // Top part
  blocks.push(new WallPiece(760, 250, 40, 550)); // Bottom part
  blocks.push(new WallPiece(720, 250, 40, 20)) // Little lip to land on

  spikes.push(new SpikeDown(180, 100, 450)) // Spikes on roof
  zones.push(new AntiGravityZone(190, 320, 570, 380)) // Anti-gravity zone

  crates.push(new PlayerCrate(450, 600, 30, 30)) // Crate on first block
  crates.push(new PlayerCrate(550, 600, 30, 30)) // Crate on second block
  
}


function room5() {
  spawnPointX = 100
  spawnPointY = 550
  player.x = spawnPointX;
  player.y = spawnPointY;

  blocks.push(new WallPiece(40, 600, 160, 150)) // Starting Block
  blocks.push(new WallPiece(0, 0, width, 50)); // Roof
  blocks.push(new WallPiece(0, 750, width, 50)); // Floor
  
  //Left Wall with a gap in the middle
  blocks.push(new WallPiece(0, 0, 40, 500)) // Top Part
  blocks.push(new WallPiece(0, 600, 40, 200)) // Bottom Part

  // Right wall with a gap in the middle
  blocks.push(new WallPiece(760, 0, 40, 200));   // Top part
  blocks.push(new WallPiece(650, 300, 150, 500)); // Bottom part

  blocks.push(new WallPiece(200, 250, 45, 500)) // First wall
  blocks.push(new WallPiece(430, 50, 45, 450)) // Second wall

  spikes.push(new SpikeUp(200, 235, 45)) // Spikes on top of first wall
  spikes.push(new SpikeDown(430, 500, 45)) // Spikes on top of second wall
  spikes.push(new SpikeDown(40, 50, 390)) // Spikes on left roof
  spikes.push(new SpikeDown(475, 50, 285)) // Spikes on right roof
  spikes.push(new SpikeUp(245, 735, 405)) // Spikes on bottom floor
}


function room6() {
  spawnPointX = 100
  spawnPointY = 400
  player.x = spawnPointX;
  player.y = spawnPointY;


  // Left wall with a gap in the middle
  blocks.push(new WallPiece(0, 0, 40, 350));   // top part
  blocks.push(new WallPiece(0, 450, 40, 350)); // bottom part

  blocks.push(new LongPlatform(20, 450)); // Platform player spawns on
  spikes.push(new SpikeDown(40,0,120)) // Spikes on roof 1
  blocks.push(new WallPiece(160, 150, 40, height)); // First wall
  blocks.push(new LongPlatform(160, 150)); // Second platform to reach
  blocks.push(new WallPiece(160, 0, 600, 40)); // Roof
  crates.push(new PlayerCrate(240, 120, 30, 30)) // Crate
  blocks.push(new SmallPlatform(400, 150)); // Small ledge so block can't get stuck in corner
  blocks.push(new WallPiece(440, 40, 40, 405)); // Second wall
  blocks.push(new Block(300, 250, 140, 195)); // Big rectangle in the middle
  buttons.push(new ButtonUp(300, 165, 30)); // Button on top of middle block
  spikes.push(new SpikeRight(200, 250, 195)) // Spikes pointing to the right of tunnel
  spikes.push(new SpikeLeft(285, 250, 195)) // Spikes pointing to the left of tunnel
  spikes.push(new SpikeDown(300, 445, 180)) // Spikes on bottom of rectangle
  blocks.push(new WidePlatform(200, 650)); // 1st platform in bottom middle
  blocks.push(new WidePlatform(450, 650)); // 2nd platform in bottom middle
  doors.push(new Door(480, 400, 279, 40, [buttons[0]])); // Door on right side
  blocks.push(new WallPiece(760, 400, 40, 400)); // Bottom right wall
  blocks.push(new WallPiece(760, 0, 40, 300)); // Top right wall
  spikes.push(new SpikeUp(200,785,560)) // Spikes at bottom  
}


function room7() {
  spawnPointX = 100
  spawnPointY = 600
  player.x = spawnPointX;
  player.y = spawnPointY;
  blocks.push(new WallPiece(40, 0, 760, 40)); // roof
  blocks.push(new WallPiece(0, 0, 40, 550));   // top part wall
  blocks.push(new WallPiece(0, 650, 40, 150)); // bottom part wall
  blocks.push(new WallPiece(760, 0, 40, 550));   // top part right side wall
  blocks.push(new WallPiece(600, 140, 40, 370));   // wall middle right side
  blocks.push(new WallPiece(40, 650, 760, 150)); // Floor 1
  crates.push(new PlayerCrate(300, 610, 30, 30)) // Crate
  blocks.push(new WallPiece(140, 510, 620, 40)); // Floor 2
  blocks.push(new WallPiece(40, 510, 40, 40)); // Floor 2
  spikes.push(new SpikeUp(140,495,105)) // Spikes in second hallway 1
  spikes.push(new SpikeDown(315, 410, 105)) // Spikes in second hallway 2
  blocks.push(new WallPiece(40, 370, 480, 40)); // Floor 3
  blocks.push(new WallPiece(560, 370, 40, 40)); // Floor 3
  blocks.push(new WallPiece(140, 230, 460, 40)); // Floor 4
  blocks.push(new WallPiece(40, 230, 40, 40)); // Floor 4
  blocks.push(new WallPiece(720, 40, 40, 370)); // Wall to block crate from getting stuck
  spikes.push(new MovingSpikeRow(140, 40, 15, 135, 140, 600, 3)); // Moving spikes on Floor 4 x, y, width, height, pathStartX, pathEndX, speed
  spikes.push(new MovingSpikeRow(370, 90, 15, 135, 140, 600, 3)); // Moving spikes on Floor 4 x, y, width, height, pathStartX, pathEndX, speed



  const buttonForRightDoor = new ButtonDown(650, 500, 30);
  buttons.push(buttonForRightDoor); // keep global list if you need it elsewhere
  doors.push(new Door(600, 550, 30, 100, [buttonForRightDoor])); // Door
}


//Temporary room for demo purposes
function room0() {
  spawnPointX = 100
  spawnPointY = 550
  player.x = spawnPointX;
  player.y = spawnPointY;
  blocks.push(new WallPiece(0, 600, width, 200)) // Floor
  blocks.push(new FloorCeiling(0, width)); // Roof
  blocks.push(new Wall (0)) // Wall on left
  blocks.push(new WallPiece(760, 0, 40, 500)) // Wall on right
}


/*
SmallPlatform = Width 40, Height 15
WidePlatform = Width 100, height 15
Longplatform = Width 180, height 15
*/