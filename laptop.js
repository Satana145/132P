
img = "";

status = "";

//defining an array variable
objects = [];

function preload(){
    img = loadImage("laptop.jpg");
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

   objectDetector.detect(img , gotResults);
}

function gotResults(error , results){
    if (error) {
       console.log(error);

    } 
    else {
       console.log(results);
       objects = results;
    }
}

function draw(){
    image(img , 0 , 0 , 380 , 380);
    fill("#FF0000");
    text("Laptop", 15, 15);
    noFill();
    stroke("#FF0000");
    rect(0, 0, 380, 365);
}