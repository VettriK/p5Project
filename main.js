function preload(){

}
function setup(){
canvas = createCanvas(1000,800)
canvas.position(110,250)
video = createCapture(VIDEO)
video.hide()
}
function draw(){
image(video,0,0,800,600)
fill("green")
rect(50,50,900,40)
rect(50,750,900,40)
rect(50,50,40,710)
rect(950,50,40,740)
fill("red")
circle(70,70,100,100)
circle(970,70,100,100)
circle(70,780,100,100)
circle(970,780,100,100)
}
function take_snapshot(){
    save("myImage.png")
}