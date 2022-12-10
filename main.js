preload(){
    song = loadSound("Roar---Katy-Perry-320-(PagalWorld).mp3");
    song1 = loadSound("My-Hair---Ariana-Grande(PagalWorld).mp3");
}

setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
}

function draw() {
    image(video, 0, 0, 600, 500);
}



