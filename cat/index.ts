function setup() {
    createCanvas(500,500);
    // create cat head
    fill("lightpink")
    circle(350,250,300);
    // create eyes
    fill("black")
    circle(300,210,25);
    circle(400,210,25);
    // create ears
    fill("pink")
    triangle(315, 100, 230, 135, 270 , 70);
    triangle(400, 100, 480, 150, 465 , 80);
    
    stroke()

    // nose   
    fill("pink");
    circle(350, 250, 55);
    fill("black");
    circle(340, 240, 10);
    circle(360, 240, 10);

}
