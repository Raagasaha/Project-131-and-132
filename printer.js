printer_img = "";
status = "";

function preload() {
printer_img = loadImage("printer.jpeg");
}

function setup() {
    canvas = createCanvas(600, 400 );
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw() {
    image(printer_img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Printer", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}

function modelLoaded() {
    console.log("Model Loaded!!");
    status = true;
    objectDetector.detect(printer_img, gotResult);
    
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


