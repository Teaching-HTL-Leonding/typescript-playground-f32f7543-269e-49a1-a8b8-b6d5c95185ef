function setup() {
  createCanvas(200, 200);
  background("lightblue");
}

function mouseMoved() {
  background("lightblue");

  // Add your code here
  noFill()
  circle(mouseX,mouseY,25)
  circle(mouseX,mouseY,50)
  line(mouseX - 25, mouseY, mouseX +25, mouseY)
  line(mouseX, mouseY - 25,mouseX, mouseY + 25)





}
