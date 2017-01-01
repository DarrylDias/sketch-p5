function setup() {
  createCanvas(800, 800);
  background(85);
}

function draw() {
  if (mouseIsPressed) {
    fill(255);
    noStroke();
    rect(mouseX, mouseY, 5, 5);
  }
}
