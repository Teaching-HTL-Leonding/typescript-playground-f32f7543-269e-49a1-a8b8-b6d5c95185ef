function setup() {
  createCanvas(500, 500);
  background("lightblue");
  noStroke();
  fill("aqua");
  circle(0,0,20)
  fill("black")
  text(clickPosition, 5, 5, width -10, height -10)
}
let clickPosition: string = "0/0";

function mouseClicked() {
  background("lightblue")
  noStroke();
  fill("aqua");
  circle(mouseX, mouseY, 25);
  clickPosition = `${clickPosition}, ${round(mouseX)}/${round(mouseY)}`;
  fill("black");
  text(clickPosition, 5, 5, width - 10, height - 10);




}