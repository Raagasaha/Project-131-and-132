img = "";
status = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}



function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("DOG", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}


    function deskpage() {
        window.location = "ODdesk.html";
    }

    function bottlepage() {
        window.location = "ODbottle.html";
    }
    function printerpage() {
        window.location = "ODprinter.html";
    }
    function basketpage() {
        window.location = "ODbasket.html";
    }
    function penstandpage() {
        window.location = "ODpenstand.html";
    }

  
    