song="";
function preload()
{
song = loadSound("epic background.mp3");
}
function setup(){
        Canvas = createCanvas(350,350);
        Canvas.center;
        video = createCapture(VIDEO);
        video.hide();
}
function draw()
{
    image(video,0,0,350,350);
}
function play()
{
    song.play();
}