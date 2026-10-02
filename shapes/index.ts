let angle = 0;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(10, 25, 50);
    
    // Kopf
    noStroke();
    fill("purple");
    ellipse(300, 220, 180, 200);
    
    // Schatten
    fill("purple");
    ellipse(300, 250, 160, 150);

    // Tentakeln
    fill("purple")
    strokeWeight(18);
    stroke("purple");
    noFill();
    
    for (let i = 0; i < 8; i++) {
        let xOffset = (i - 3.5) * 22;
        let wave = Math.sin(angle + i * 0.5) * 30;
        
        beginShape();
        vertex(300 + xOffset, 280);
        vertex(300 + xOffset * 1.8 + wave, 380);
        vertex(300 + xOffset * 2.2 - wave, 480);
        vertex(300 + xOffset * 2.5 + wave, 540);
        endShape();

        // Saugnäpfe
        noStroke();
        fill("purple");
        circle(300 + xOffset * 1.5 + wave * 0.8, 380, 10);
        circle(300 + xOffset * 1.9 - wave * 0.8, 480, 8);
        
        strokeWeight(18);
        stroke("purple");
        noFill();
    }

    // Augen
    noStroke();
    fill(255);
    ellipse(250, 230, 40, 48);
    ellipse(350, 230, 40, 48);

    // Pupillen
    fill(10, 10, 20);
    rectMode(CENTER);
    rect(250, 230, 26, 10, 4);
    rect(350, 230, 26, 10, 4);

    // Lichtreflexe
    fill(255);
    circle(243, 223, 8);
    circle(343, 223, 8);

    angle += 0.04;
}