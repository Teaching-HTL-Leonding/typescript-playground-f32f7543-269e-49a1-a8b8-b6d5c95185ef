function setup() {
  createCanvas(500, 500);
  background("lightblue");
}

let clickPosition: string = "0/0";

function mouseClicked() {
  noStroke()
  fill("#23a6de")
  circle(mouseX, mouseY, 25)
  clickPosition = `${clickPosition}, ${round(mouseX)}/${round(mouseY)}`;
  fill("black")
  text(clickPosition, 5, 5, width - 10, height - 10);




}
