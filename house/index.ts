function setup() {
    //create canva
    createCanvas(500,500);
    background("skyblue")
    stroke("black");
    strokeWeight(1);

    // create walls
    fill("red")
    rect(100,300,175,200)

    // create door
    fill("yellow")
    rect(163,425,50,80)

    // create roof
    fill("darkred")
    triangle(90,300,285,300,187.5,150)

    //create tree log
    fill("brown")
    rect(325,330,45,175)

    // create tree leaves
    fill("darkgreen")
    circle(325,290,100)
    circle(370,290, 100)
    circle(348,250,100)
}
