harry_potter = "";
peter_pan = "";

function preload(){
    harry_potter = loadSound("music.mp3");
    peter_pan = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(550, 430);
    canvas.position(435,200);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 550, 450);
}