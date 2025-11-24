//objects
let player;
let blocks = [];
let spikes = []
let crates = [];
let buttons = [];
let doors = [];
let closedDoors = [];
let zones = [];

//variables
let gravity = 0.4;
let jumpForce = -10;
let room = 0;
let spawnPointX = null
let spawnPointY = null
let hintShown = false 
let showHint = false
let hintTimer = 0; // used to make hints dissapear after an amount of time
let InAntiGravityZone = false;


// Fade transition variables
let transitionAlpha = 0;
let transitionState = "idle"; // "idle", "fadeOut", "fadeIn"
let nextRoom = null;
let isTransitioning = false;

function preload() {
  DarkBlueBrickWall = loadImage('assets/images/BlueBrickWallBackground.png');
  LightBrownWood = loadImage('assets/images/LightBrownWood.png');
  SpikesUp = loadImage('assets/images/spikes/SpikesPointingUp.png');
  SpikesDown = loadImage('assets/images/spikes/SpikesPointingDown.png');
  SpikesRight = loadImage('assets/images/spikes/SpikesPointingRight.png');
  SpikesLeft = loadImage('assets/images/spikes/SpikesPointingLeft.png');

}

function setup() {
  createCanvas(800, 800);

  // Create player
  player = new Player(100, 100, 25, 40);

  // Load first room
  loadRoom();
}

function draw() {
  background(DarkBlueBrickWall);

  // Draw all blocks
  for (let block of blocks) {
    block.display();
  }

  for (let spike of spikes) {
    if (spike instanceof MovingSpikeRow) {
    spike.update();
  }
  spike.display();
  }

  for (let zone of zones) {
    zone.display();
  }

  // Button update
  buttons.forEach(button => {
    button.update(player, crates);
    button.display();
  });

  // Door update
  closedDoors = [];
  doors.forEach(door => {
    door.update();
    door.display();
  });
  closedDoors = doors.filter(door => !door.isOpen);

  // Crate update
  crates.forEach(crate => {
    if (crate instanceof PlayerCrate) {
      crate.updateGravity();
    }
    crate.update();
    if (crate instanceof PlayerCrate) {
      crate.display(101, 67, 33);
    } else if (crate instanceof GravCrate) {
      crate.display(50, 150, 255);
    }
  });

  // Player update
  player.update();
  player.display();
  player.KeepInsideCanvas();

   // player touches right edge Room 1
  if (player.x > width - player.width && !isTransitioning) {
    changeRoom(room + 1);
  }
  // player touches left edge Room 2
  if (player.x < 0 && !isTransitioning) {
    changeRoom(room - 1);
  }

  // fade
  if (transitionState === "fadeOut") {
    transitionAlpha += 12;
    if (transitionAlpha >= 255) {
      transitionAlpha = 255;

      // Load room
      loadRoom();

      // Begin fade in
      transitionState = "fadeIn";
    }
  } else if (transitionState === "fadeIn") {
    transitionAlpha -= 12;
    if (transitionAlpha <= 0) {
      transitionAlpha = 0;
      transitionState = "idle";
      isTransitioning = false;
    }
  }

// Hint system
if (room === 1) {
  // Show hint if it had not been already
  if (player.y < 130 && !hintShown) {
    showHint = true;         // start showing
    hintShown = true;        // mark that we've triggered this hint so it won't retrigger
    hintTimer = millis();    // record the start time ONCE
  }

  // Show the hint
  if (showHint) {
    // Draw the text
    push();
    stroke(0);
    textSize(14);
    textAlign(LEFT, TOP);
    fill(255);
    text(
      "I can't seem to make this jump, if only I could press 'E' on my keyboard to help me with that...",
      220, 100, 300
    );
    pop();

    // Turn the hint off after 5000 ms
    if (millis() - hintTimer >= 5000) {
      showHint = false;
    }
  }
} else if (room === 4) {
  // Show hint if it had not been already
  if (player.y > 650 && !hintShown) {
    showHint = true;         // start showing
    hintShown = true;        // mark that we've triggered this hint so it won't retrigger
    hintTimer = millis();    // record the start time ONCE
  }

  // Show the hint
  if (showHint) {
    // Draw the text
    push();
    stroke(0);
    textSize(14);
    textAlign(LEFT, TOP);
    fill(255);
    text(
      "Hmm... It seems I can't switch gravity here. Maybe I can use those crates to help me out?",
      200, 330, 400
    );
    pop();

    // Turn the hint off after 6000 ms
    if (millis() - hintTimer >= 6000) {
      showHint = false;
    }
  }
} else if (room === 0) {
  // Show hint if it had not been already
  if (player.x < 500 && !hintShown) {
    showHint = true;         // start showing
    hintShown = true;        // mark that we've triggered this hint so it won't retrigger
    hintTimer = millis();    // record the start time ONCE
  }

  // Show the hint
  if (showHint) {
    // Draw the text
    push();
    stroke(0);
    textSize(14);
    textAlign(LEFT, TOP);
    fill(255);
    text(
      "Use A and D or the Left and Right arrow keys to move. Press Space, W, or the Up arrow key to jump.",
      200, 200, 400
    );
    pop();

    // Turn the hint off after player moves right
    if (player.x > 600) {
      showHint = false;
      hintShown = false; // allow hint to show again if player moves back left
    }
  }
}
// Reset room when R is pressed
if (keyIsDown(82)) { // 'R' key
  loadRoom();
}

  // Draw the black overlay for fade
  push()
  noStroke();
  fill(0, transitionAlpha);
  rect(0, 0, width, height);
  pop();
}

// Function to trigger a room change
function changeRoom(toRoom) {
  isTransitioning = true;
  room = toRoom;
  transitionState = "fadeOut";
}

// Load blocks for the current room
function loadRoom() {
  blocks = [];
  spikes = [];
  crates = [];
  buttons = [];
  doors = [];
  zones = []; 
  hintShown = false 
  showHint = false
  hintTimer = 0;
  gravity = 0.4
  player.vX = 0
  player.vY = 0
  player.targetRotation = 0; 
  switch (room) {
    case 0:
      room0();
      break;
    case 1:
      room1();
      break;
    case 2:
      room2();
      break;
    case 3:
      room3();
      break;
    case 4:
      room4();
      break;
    case 5:
      room5();
      break;
    case 6:
      room6();
      break;
    case 7:
      room7();
      break;
    default:
      room1();
  }
}