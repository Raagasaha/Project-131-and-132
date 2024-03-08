desk_img = "";
status = "";

function preload() {
desk_img = loadImage("desk.webp");
}

function setup() {
    canvas = createCanvas(600, 400 );
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw() {
    image(desk_img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Desk", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 550, 350);

    fill("#FF0000");
    text("Plant", 120, 60);
    noFill();
    stroke("#FF0001");
    rect(100, 40, 140, 120);

    fill("#FF0000");
    text("Book", 420, 95);
    noFill();
    stroke("#FF0001");
    rect(400, 80, 140, 70);

    fill("#FF0000");
    text("Laptop", 255, 95);
    noFill();
    stroke("#FF0001");
    rect(250, 80, 140, 70);

    fill("#FF0000");
    text("Chair", 255, 190);
    noFill();
    stroke("#FF0001");
    rect(250, 170, 150, 180);
}

function modelLoaded() {
    console.log("Model Loaded!!");
    status = true;
    objectDetector.detect(desk_img, gotResult);
    
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function back() {
    window.location = "firstpage.html";
}


