bottle_img = "";
status = "";

function preload() {
bottle_img = loadImage("bottle.jpeg");
}

function setup() {
    canvas = createCanvas(600, 400 );
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw() {
    image(bottle_img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bottles", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}

function modelLoaded() {
    console.log("Model Loaded!!");
    status = true;
    objectDetector.detect(bottle_img, gotResult);
    
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


