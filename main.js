Song1="";
Song2="";
function preload(){
Song1=loadSound("Never Have I Ever.mp3");
Song2=loadSound("Phenomena.mp3");
}
function setup(){
    canvas=createCanvas(550,550)
canvas.position(400,250)
video=createCapture(VIDEO)
video.size(550,550)
poseNet=ml5.poseNet(video, modelLoaded)
poseNet.on("pose", gotPoses)
video.hide();
}
function modelLoaded(){
    console.log("Model Loaded")
}
function draw(){
    image(video,0,0,550,350)
}
function gotPoses(results){
if (results.length <= 0) {
    if (condition) {
        
    }else if(conditon){

    }
}
}