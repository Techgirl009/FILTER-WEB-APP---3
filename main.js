nose_x = 0;
nose_y = 0;

function preload()
{
lipstick = loadImage("https://i.postimg.cc/xC3CzHhW/Red-Lips-PNG-Photo-Image.png");
}

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    image(video, 0, 0, 500, 500);
    image(lipstick, nose_x, nose_y, 55, 40);
}

function modelLoaded()
{
    console.log("Model Intialized");
}

function take_snapshot()
{
    save("lipstick.png");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x-30;
        nose_y = results[0].pose.nose.y+10;
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);
    }
}