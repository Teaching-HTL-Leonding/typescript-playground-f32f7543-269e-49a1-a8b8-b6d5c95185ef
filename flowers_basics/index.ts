// <<< ADD CONSTANTS HERE (if you need them)

function setup() {
  // create canvas
  createCanvas(1000, 1000);

  // create flower
  fill("lime");
  circle(176, 281.9, 70);
  circle(236.5, 297.5, 70);
  circle(176, 218.1, 70);
  circle(235.5, 202.5, 70);
  circle(270, 250, 70);

  fill("yellow");
  circle(220, 250, 65);

  strokeWeight(15);
  noFill();
  stroke("darkgreen")
  arc(230, 350, 100, 150, 30, 45);
  noStroke();


  // create flower
  fill("lightgreen");
  circle(176, 281.9, 70);
  circle(236.5, 297.5, 70);
  circle(176, 218.1, 70);
  circle(235.5, 202.5, 70);
  circle(270, 250, 70);

  fill("yellow");
  circle(220, 250, 65);

  noFill();
  stroke("darkgreen");
  arc(500, 350, 100, 150, 30, 45);
  noStroke();

  //Draw second Flower

  fill("lime");
  circle(550, 250, 80);
  circle(500, 300, 80);
  circle(450, 250, 80);
  circle(500, 200, 80);

  fill("yellow");
  circle(500, 250, 65);
  // <<< ADD YOUR CODE HERE
}
