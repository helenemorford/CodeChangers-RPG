//This is where the script will go!
function startGame() {
    var parent1 = document.getElementById("name");
    var child1 = document.getElementById("title");
    var parent2 = document.getElementById("inputs");
    var child2a = document.getElementById("player");
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
    var para = document.createElement("p");
    var node = document.createTextNode(name+" "+gender+" "+difficulty);
    para.appendChild(node);
    element = document.getElementById("name");
    element.appendChild(para);
}
