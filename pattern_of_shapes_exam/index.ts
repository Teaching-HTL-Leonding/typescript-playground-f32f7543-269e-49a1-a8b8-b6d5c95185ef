function setup() {
}

function mouseMoved() {
  createCanvas(600, 400);
  background(255, 255, 255);

  // create the yellow rectangles
  const rectWidth: number = width * 0.2;
  const rectHeight: number = height * 0.2;

  fill("gold")
  rect(width * 0.1, height * 0.1, rectWidth, rectHeight);
  rect(width * 0.7, height * 0.1, rectWidth, rectHeight);
  rect(width * 0.1, height * 0.7, rectWidth, rectHeight);
  rect(width * 0.7, height * 0.7, rectWidth, rectHeight);

  // create the blue rectangle
  const blueRectWidth: number = width * 0.4;
  const blueRectHeight: number = height * 0.4

  fill("steelblue")
  rect(width * 0.3, height * 0.3, blueRectWidth, blueRectHeight)

  // create the red circles
  const circleDiameter: number = min(width, height) * 0.2

  fill("tomato")
  circle(width * 0.2, height * 0.5, circleDiameter)
  circle(width * 0.8, height * 0.5, circleDiameter)
  circle(width * 0.5, height * 0.2, circleDiameter)
  circle(width * 0.5, height * 0.8, circleDiameter)

  // create white circle
  const whitecircleDiameter: number = min(width, height) * 0.4

  fill("white")
  circle(width * 0.5, height * 0.5, whitecircleDiameter)

  const smallcircleDiameter: number = min(width, height) * 0.1

  fill("tomato")
  circle(mouseX, mouseY, smallcircleDiameter)


}
