
img = "";

status = "";

//defining an array variable
objects = [];

function preload(){
    img = loadImage("bottles.jpg");
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
    text("Bottle", 5, 15);
    noFill();
    stroke("#FF0000");
    rect(0, 2, 60, 370); 

    fill("#FF0000");
    text("Bottle", 70, 15);
    noFill();
    stroke("#FF0000");
    rect(65, 2, 60, 370);  

    fill("#FF0000");
    text("Bottle", 135, 15);
    noFill();
    stroke("#FF0000");
    rect(130, 2, 55, 370); 
    
    fill("#FF0000");
    text("Bottle", 200, 15);
    noFill();
    stroke("#FF0000");
    rect(193, 2, 55, 370); 
    
    fill("#FF0000");
    text("Bottle", 265, 15);
    noFill();
    stroke("#FF0000");
    rect(258, 2, 55, 370); 
    
    fill("#FF0000");
    text("Bottle", 325, 15);
    noFill();
    stroke("#FF0000");
    rect(322, 2, 55, 370); 
}
