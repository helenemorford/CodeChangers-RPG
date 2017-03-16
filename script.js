//This is where the script goes!
var pronouns = ["kid", "they"];
/*  storyList key:

[0[text, char], 1musicId, 2[option1, option2], 3[result1, result2], 4battleId, 5continue, 6backgroundId]

*/
var storyList = [
    [["There was once a time, long, long ago... Before Humans had taken the planet. The world had, rather, two dominating species, working in turn to keep everything in balance.", 'desc'], 1, '', 13, 0, false, 1],
    [["As things had been long before, the Humans and Mimiga had worked together in a constant struggle for the upper hand, in a strange but stable relationship.", 'desc'], 1, '', 2, 0, false, 1],
    [["The Humans were consumers, with a destructive will but with the ability to wield what they consume. The Mimiga were producers, with the ability to wield what they created. Together, like the two sides of a coin, they lived in incongruity, but side by side they kept the world both alive and progressing forward, even if it was in a dissonant way.", 'desc'], 1, '', 3, 0, true, 1],
    [["One day, something unthinkable had happened. A Mimiga scientist had discovered a way to change creatures in such a way as to make them conscious, to make them what we call today 'more human.' These creatures were labeled 'Monsters,' and were seen as enemies by Mimiga and Humans alike.", 'desc'], 1, '', 4, 0, false, 1],
    [["Banished from his kingdom, the Mimiga scientist disappeared, taking his Monster making method with him.", 'desc'], 1, '', 5, 0, true, 1],
    [["The Monster population continued to grow steadily, worrying the Humans and the Mimiga alike. The Monsters weren't consumers or producers, they were seen as eliminators. With the ability to wield, in a way, themselves, they could produce power from nothing, and this was a major concern to Human and Mimiga kind.", 'desc'], 1, '', 6, 0, true, 1],
    [["Meanwhile, the rogue Mimiga scientist was dying in his lab, his old age finally taking a toll on him. As he lived through his last minutes, he releases his final creation on the world: The Red Flower. This creation was his final goodbye to the world; a curse upon his native people, those who threw him out, the Mimiga.", 'desc'], 1, '', 7, 0, false, 1],
    [["As years passed, winters and summers came and went, the Red Flower spread, slowly at first, but gaining speed as it went. At the same time, the Monsters were beginning to outnumber the Mimiga, as the Monster population was nearly doubling every couple years.", 'desc'], 1, '', 8, 0, true, 1],
    [["The Mimiga fled to the Humans, begging for shelter from the Monsters that were taking their homeland, and the Human King took pity on them allowing them to stay within Human protection as long as the Mimiga provided work and creations for the Humans. This quickly got out of hand, as soon the Mimiga were treated like second-class citizens, even like slaves.", 'desc'], 1, '', 9, 0, false, 1],
    [["And this is where our story begins, where you, " + name + ", take this story into your own hands.", 'desc'], 1, '', 10, 0, true, 1],
    [["Go, wake up, and take on this world before ours!", 'desc'], 1, '', 11, 0, true, 1],
    [["You wake up, and get out of bed. You change into everyday clothes, and prepare to head off to school.", 'desc'], 2, '', 12, 0, false, 2],
    [["Father, from downstairs: " + name + "! Get up, you don't want to be late to school on your birthday!", 'talk'], 2, '', 13, 0, true, 2],
    [["You leave your room and head downstairs to your living room where your father hands you some breakfast.", 'desc'], 2, ["EAT", "NOT"], [14, 15], 0, true, 2],
    [["Father: I bet you're really hungry! Today's a big day!", 'talk'], 2, '', 16, 0, true, 2],
    [["Father: No wonder you aren't hungry! Today's an exciting day for you!", 'talk'], 2, '', 16, 0, true, 2],
    [["Father: Let's get you out of here, the birthday " + pronouns[0] + " has to make their grand appearance at school today!", 'talk'], 2, '', 17, 0, true, 2]
];
var musicList = [
    [new Audio("videogame1.wav"), new Audio("videogame2.wav")],
    [new Audio("concordia1.wav"), new Audio("concordia2.mp3")],
    [new Audio("letsdothis1.wav"), new Audio("letsdothis2.mp3")],
    [new Audio("hitmeup1.wav"), new Audio ("hitmeup2.wav")],
    [new Audio("herewego1.wav"), new Audio ("herewego2.wav")],
    [new Audio("Aquatic Ambience.wav")]
];
var bgList = [
    "http://www.drodd.com/images14/blue17.jpg",
    "backstory.gif",
    "room.gif"
];
var Music;
var Loop;
var currentMusic;
playMusic(0);
var currentScene;
var currentBg = 0;

var atk = 1;
var def = 1;
var maxHp = 10;
var hp = 10;
var exp = 0;

function startGame() {
    //stopAudio();
    setup();
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
    //background.background = "backstory.gif";
    storyTxt.style = "padding-left:25px; padding-right:25px;"
    
    currentScene = 0;
    playScene(currentScene);
    //playMusic(1);
    //printText(["There was once a time, long, long ago... Before Humans had taken the planet. The world had, rather, two dominating species, working in turn to keep everything in balance. <<PRESS ENTER CONTINUE>>", 'desc'], false);
    //printText("Select the input box, then press Enter to continue.", 'desc');
}

function setup() {
    var nameList = [["Zac", "Kaden", "Alex"], ["Helene", "Cyndi", "Alex"]]

    var parent1 = document.getElementById("text");
    var child1 = document.getElementById("title");
    var parent2 = document.getElementById("setup");
    var child2a = document.getElementById("name");
    var child2b = document.getElementById("gender");
    var child2c = document.getElementById("difficulty");
    var parent3 = document.getElementById("button");
    var child3 = document.getElementById("start");
    name = child2a.value;
    gender = child2b.value;
    difficulty = child2c.value;

    if (name == '') {
        if (gender == "male" || gender == "boy" || gender == "Male" || gender == "Boy") {
            name = nameList[0][Math.floor((Math.random() * nameList.length))];
        } else if (gender == "female" || gender == "girl" || gender == "Female" || gender == "Girl") {
            name = nameList[1][Math.floor((Math.random() * nameList.length))];
        } else {
            name = nameList[(Math.floor((Math.random() * 2)+1)-1)][Math.floor((Math.random() * nameList[0].length))];
        }
        //console.log("Name chosen is " + name);
    }
    
    if (gender == "male" || gender == "boy" || gender == "Male" || gender == "Boy") {
        pronouns = ["boy", "he"];
    } else if (gender == "female" || gender == "girl" || gender == "Female" || gender == "Girl") {
        pronouns = ["girl", "she"];
    } else {
        pronouns = ["kid", "they"];
    }
    
    parent1.removeChild(child1);    
    parent2.removeChild(child2a);
    parent2.removeChild(child2b);
    parent2.removeChild(child2c);
    parent3.removeChild(child3);
}

function printText(text, addToPara) {
    typing = 1;
    var storyTxt = document.getElementById("story");
    //storyTxt.className = char;
    //console.log(text);
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
        
        var check = new RegExp(">").test(currentText[0]);
        var textArray = currentText[0].split("");
        var current = 0
        setInterval(function() {
            if(current < textArray.length) {
                span.innerHTML = span.innerHTML + textArray[current++]
                typing++;
                if (current == textArray.length) {
                    if (check == true) {
                        typing = 0;
                    } else {
                        typing++;
                    }
                }
                //console.log(typing);
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
        if (typing > 0) {
            
        } else {
            //console.log(currentScene);
            interpretInput(currentScene);
        }
    }
});

/*function submit() {
    
}*/

function playScene(sceneNum) {
    currentScene = sceneNum;
    var scene = storyList[sceneNum];
    var sceneTxt = scene[0];
    console.log(sceneNum);
    console.log(storyList[sceneNum]);
    console.log(scene);
    var options = scene[2];
    var sceneMusic = scene[1];
    var optionsTxt;
    var sceneBreak = scene[5];
    var sceneBg = scene[6];

    if (options == '') {
        optionsTxt = " <<PRESS ENTER>>";
    } else {
        optionsTxt = " <<";
        console.log(options);
        for (var i = 0; i < options.length; i++) {
            optionsTxt = optionsTxt + "|INPUT " + i + " TO " + options[i];
        }
        optionsTxt = optionsTxt + "|>>";
    }
    //sceneTxt[0] = sceneTxt[0] + optionsTxt;
    if (currentMusic != sceneMusic) {
        stopMusic();
        playMusic(sceneMusic);
    }
    if (currentBg != sceneBg) {
        document.getElementById("bg").background = bgList[sceneBg];
        //console.log("background is now " + bgList[sceneBg]);
    }
    if (sceneBreak) {
        var storyTxt = document.getElementById("story").innerHTML;
        //console.log(storyTxt);
        storyTxt = storyTxt.slice(0, -54);
        //console.log(storyTxt);
        document.getElementById("story").innerHTML = storyTxt;
    }
    //console.log(sceneTxt);
    printText(sceneTxt, sceneBreak);
    setTimeout(function () {
        //console.log("called");
        //newLine();
        printText([optionsTxt, 'desc'], true);
    }, ((sceneTxt[0].length*15)+15));
    //newLine();
    //printText([optionsTxt, 'desc'], true);
}


function interpretInput(sceneNum) {
    var input = document.getElementById("input").value;
    console.log(input);
    //console.log("scene number: "+sceneNum)
    var results = storyList[sceneNum][3];
    //var gainedItems = storyList[sceneNum][4];
    var battleId = storyList[sceneNum][4];
    var options = storyList[sceneNum][2];
    var newSceneNum = -1;
    
    if ((input != '' && parseInt(input) != NaN) || input == '') {
        if (options == '') {
            if (battleId != 0) {
                //startBattle(battleId);
            } else {
                newSceneNum = results;
            }
        } else {
            foundSceneNum = -1;
            for (var i = 0; i < options.length; i++) {
                if (parseInt(input) == i) {
                    newSceneNum = results[i];
                }
            }
            
        }
        
        document.getElementById("input").value = '';
        if(newSceneNum > -1) {
            playScene(newSceneNum);
        }
    } else {
        document.getElementById("input").value = '';
    }
}
