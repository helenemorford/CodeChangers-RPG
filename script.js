//This is where the script goes!
/*  storyList key:

[0[text, char], 1music#, 2[option1, option2], 3[result1, result2], 4[item#], 5battleId, 6break]

*/
var storyList = [
    [["There was once a time, long, long ago... Before Humans had taken the planet. The world had, rather, two dominating species, working in turn to keep everything in balance.", 'desc'], 1, '', 1, 0, 0, false],
    [["As things had been long before, the Humans and Mimiga had worked together in a constant struggle for the upper hand, in a strange but stable relationship.", 'desc'], 1, '', 2, 0, 0, false]
];
var musicList = [
    [new Audio("videogame1.wav"), new Audio("videogame2.wav")],
    [new Audio("concordia1.wav"), new Audio("concordia2.wav")]
];
var Music;
var Loop;
var currentMusic;
playMusic(0);
var currentScene;

function startGame() {
    //stopAudio();
    storyMode();
    var storyBox = document.getElementById("storyBox");
    var storyTxt = document.getElementById("story");
    var background = document.getElementById("bg");
    var inp = document.createElement("input");
    //inp.onkeydown="document.addEventListener('keyup', function(e) {if (e.which == 13) interpretInput(currentScene)});"
    inp.placeholder = ">input";
    inp.style = "width:370px;";
    inp.id = "input";
    var inpBox = document.getElementById("inpBox");
    inpBox.appendChild(inp);
    
    storyBox.style = "background-color:black; width:375px; height:400px; position: fixed; top: 50%; left: 50%; margin-top:-212px; margin-left:-188px;";
    background.style = "background-color:black;";
    background.background = "background.gif";
    storyTxt.style = "padding-left:25px;"
    
    currentScene = 0;
    playScene(currentScene);
    //playMusic(1);
    //printText(["There was once a time, long, long ago... Before Humans had taken the planet. The world had, rather, two dominating species, working in turn to keep everything in balance. <<PRESS ENTER CONTINUE>>", 'desc'], false);
    //printText("Select the input box, then press Enter to continue.", 'desc');
}

function storyMode() {
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

function printText(text, addToPara) {
    var storyTxt = document.getElementById("story");
    //storyTxt.className = char;
    
    if(!addToPara)
        storyTxt.innerHTML = '';
    else
        storyTxt.innerHTML = storyTxt.innerHTML + "<br>";

    var arrayLength = text.length;
    //var newArray = text;
    for (var i = 0; i < arrayLength; i++) {
        var currentText = text/*newArray[i]*/;

        var span = document.createElement("span");
        span.className = currentText[1];
        storyTxt.appendChild(span);

        var textArray = currentText[0].split("");
        var current = 0
        setInterval(function() {
            if(current < textArray.length) {
                span.innerHTML = span.innerHTML + textArray[current++]
                //this.text(this.text() + textArray[current++]);
            }
        }, 25);
    }
}

/*function newLine() {
    var storyTxt = document.getElementById("story");
    storyTxt.innerHTML = storyTxt.innerHTML + "<br>";
}

function newPara() {
    var storyTxt = document.getElementById("story");
    storyTxt.innerHTML = storyTxt.innerHTML + "<br> <br>";
}*/

function playMusic(listId) {
    currentMusic = listId;
    //stopAudio();
    console.log(musicList[listId]);
    if (musicList[listId].length == 2) {
        playComplexLoop(musicList[listId][0], musicList[listId][1]);
    } else {
        playLoop(musicList[listId]);
    }
}

function playLoop(music) {
    music.addEventListener('timeupdate', function(){
        var buffer = .35
        //console.log(this.currentTime, this.duration - buffer);
        if(this.currentTime > this.duration - buffer){
            this.currentTime = .65
            this.play()
            console.log('play music again');
        }}, false);
    music.play();
}

function playComplexLoop(opening, loop) {
    Loop = loop;
    Music = opening;
    Loop.addEventListener('timeupdate', function(){
        var buffer = .35
        //console.log(this.currentTime, this.duration - buffer);
        if(this.currentTime > this.duration - buffer){
            this.currentTime = .65
            this.play()
            console.log('play loop again');
        }}, false);
    Music.addEventListener('timeupdate', function() {
        var openingBuffer = .5
        //console.log(this.currentTime, this.duration,  this.duration - openingBuffer);
        if(this.currentTime > this.duration - openingBuffer){
            Loop.currentTime=.65;
            Loop.play();
            console.log('play first loop');
        }}, false);
    Music.play();
}

function stopMusic() {
    Loop.pause();
    Loop.currentTime = 0;
    Music.pause();
    Music.currentTime = 0;
}

document.addEventListener("keyup", function(e) {
    //If 'Enter' is pressed:
    if (e.which == 13) {
        console.log(currentScene);
	  	interpretInput(currentScene);
    }
});

/*function submit() {
    
}*/

function playScene(sceneNum) {
    currentScene = sceneNum;
    var scene = storyList[sceneNum];
    var sceneTxt = scene[0];
    var options = scene[2];
    var sceneMusic = scene[1];
    var optionsTxt;
    var sceneBreak = scene[6];
    
    if (options == '') {
            optionsTxt = " <<PRESS ENTER TO CONTINUE>>";
        } else {
            optionsTxt = " <<";
            for (var i = 0; i < options.length; i++) {
                optionsTxt = optionsTxt + "|PRESS " + i + " TO " + options[i] + "|";
            }
            optionsTxt = optionsTxt + ">>";
        }
        sceneTxt[0] = sceneTxt[0] + optionsTxt
        if (currentMusic != sceneMusic) {
            stopMusic();
            playMusic(sceneMusic);
        }
        printText(sceneTxt, sceneBreak);
}


function interpretInput(sceneNum) {
    var input = document.getElementById("input").value;
    console.log("scene number: ",storyList[sceneNum])
    var results = storyList[sceneNum][3];
    var gainedItems = storyList[sceneNum][4];
    var battleId = storyList[sceneNum][5];
    var options = storyList[sceneNum][2];
    var newSceneNum;
    
    if (Number.isInteger(input) || input == '' || input == null) {
        if (options == '') {
            if (battleId != 0) {
                //startBattle(battleId);
            } else {
                newSceneNum = results;
            }
        } else {
            for (var i = 0; i < options.length; i++) {
                if (input == i) {
                    newSceneNum = results[i];
                }
            }
        }
        document.getElementById("input").value = '';
        playScene(newSceneNum);
    } else {
        document.getElementById("input").value = '';
    }
}
