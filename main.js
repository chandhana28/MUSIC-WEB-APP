harry_potter = "";
peter_pan = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    harry_potter = loadSound("music.mp3");
    peter_pan = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(550, 430);
    canvas.position(435,200);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 550, 430);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " +leftWristX +"leftWristY = " +leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " +rightWristX +"rightWristY = " +rightWristY);
    }
}