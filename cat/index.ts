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
    
    fill("pink");
    triangle(210, 130, 250, 40, 290, 110); 
    triangle(410, 110, 450, 40, 490, 130); 
   
    // nose   
    fill("pink");
    circle(350, 250, 55);
    fill("black");
    circle(340, 240, 10);
    circle(360, 240, 10);
    // mouth
    fill("black");
    
    rect(323, 322, 4, 10);
    rect(325, 330, 16, 4);
    rect(342, 330, 16, 4);
    rect(359, 330, 16, 4);
    rect(373, 322, 4, 10);
}