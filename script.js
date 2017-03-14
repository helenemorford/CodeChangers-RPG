//This is where the script will go!
function startGame() {
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
    var storyBox = document.getElementById("storyBox");
    var storyTxt = document.getElementById("story");
    var background = document.getElementById("bg");
    var input;
    storyBox.style = "background-color:black; width:375px; height:400px; position: fixed; top: 50%; left: 50%; margin-top:-212px; margin-left:-188px;";
    background.background = "https://media.giphy.com/media/EFhS1y3NnZP4k/giphy.gif";
    storyTxt.style = "color:lightgrey; padding-left:25px;";
    storyTxt.innerHTML = "There was once a time, long, long ago...<br>Before Humans had taken the planet.<br> <br>The world had, rather, <i>two</i> dominating species, working in turn to keep everything in balance.";
}
