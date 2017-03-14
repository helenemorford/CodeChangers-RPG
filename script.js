//This is where the script will go!
var bgMusic = new Audio("videogame1.wav");
//var bgMusic = new Audio("videogame2.wav");
var bgLoop = new Audio("videogame2.wav");

//bgMusic.addEventListener('timeupdate', function(){
//                var buffer = .44
//                if(this.currentTime > this.duration - buffer){
//                    this.currentTime = 0
//                    this.play()
//                }}, false);

bgLoop.addEventListener('timeupdate', function(){
    var buffer = .3
    //console.log(this.currentTime, this.duration - buffer);

    if(this.currentTime > this.duration - buffer){
        this.currentTime = .65
        this.play()
        //console.log('play loop again');
    }}, false);

bgMusic.addEventListener('timeupdate', function() {
    var openingBuffer = .5
    //console.log(this.currentTime, this.duration,  this.duration - openingBuffer);
    if(this.currentTime > this.duration - openingBuffer){
        bgLoop.currentTime=.65;
        bgLoop.play();
        //console.log('play first loop');
    }}, false);
bgMusic.play();

function startGame() {
    stopMusic();
    clearScreen();
    var storyBox = document.getElementById("storyBox");
    var storyTxt = document.getElementById("story");
    var background = document.getElementById("bg");
    var inp = document.createElement("input");
    inp.placeholder = "> ";
    inp.style = "width:370px;";
    var inpBox = document.getElementById("inpBox");
    inpBox.appendChild(inp);
    var input;
    
    storyBox.style = "background-color:black; width:375px; height:400px; position: fixed; top: 50%; left: 50%; margin-top:-212px; margin-left:-188px;";
    background.style = "background-color:black;";
    background.background = "https://media.giphy.com/media/EFhS1y3NnZP4k/giphy.gif";
    storyTxt.style = "color:lightgrey; padding-left:25px;";
    storyTxt.innerHTML = "There was once a time, long, long ago...<br>Before Humans had taken the planet.<br> <br>The world had, rather, <i>two</i> dominating species, working in turn to keep everything in balance.";
}

function stopMusic() {
    bgLoop.pause();
    bgLoop.currentTime = 0;
    bgMusic.pause();
    bgMusic.currentTime = 0;
}

function clearScreen() {
    var parent1 = document.getElementById("text");
    var child1 = document.getElementById("title");
    var parent2 = document.getElementById("setup");
    var child2a = document.getElementById("name");
    var child2b = document.getElementById("gender");
    var child2c = document.getElementById("difficulty");
    var parent3 = document.getElementById("button");
    var child3 = document.getElementById("start");
    var name = child2a.value;
    var gender = child2b.value;
    var difficulty = child2c.value;
    parent1.removeChild(child1);    
    parent2.removeChild(child2a);
    parent2.removeChild(child2b);
    parent2.removeChild(child2c);
    parent3.removeChild(child3);
}
