const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

function update(){

}
function draw(){

}

loop();
