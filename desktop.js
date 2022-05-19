
img = "";

status = "";

//defining an array variable
objects = [];

function preload(){
    img = loadImage("desktop.jpg");
}

function setup(){
    canvas = createCanvas( 380 , 380);
    canvas.center();
    
    //initializing cocossd model
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML  =  "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model is loaded");
     status = true;
}

function draw(){
    image(img , 0 , 0 , 380 , 380);
    fill("#FF0000");
    text("Destop", 75, 30);
    noFill();
    stroke("#FF0000");
    rect(60, 15, 250, 350); 
}
