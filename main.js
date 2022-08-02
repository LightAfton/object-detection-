objects=[];
img="";
status="";
objectDetector="";

function preload()
{
    img=loadImage("dog_cat.jpg");
}

function setup()
{
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);

    video.size(380,380);
    video.hide();
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("Status").innerHTML="Status:Detecting objects";  
}

function modelloaded()
{
    console.log("model loaded!");
    status=true;
    objectDetector.detect(video, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
        console.log(results);
    
}

function draw()
{
    image(video,0,0,380,380);
    if(status!="")
    {
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video, gotResults);
        for(i=0; i<objects.length; i++)
        {
           document.getElementById("status").innerHTML="status:object detected";
           document.getElementById("number_of_objects").innerHTML="number of objects detected are:"+objects.length;
           fill(r,g,b);
           percent=floor(objects[i].confidence*100);
    text(objects[i].label+""+percent+"%",objects[1].x+15,objects[i].y+15);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[1].height);
        }
    }
    }

