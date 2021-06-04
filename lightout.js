function level1(){
    resetall();
    document.getElementById(11).style.backgroundColor = 'yellow';
    document.getElementById(13).style.backgroundColor = 'yellow';
    document.getElementById(15).style.backgroundColor = 'yellow';
}

function resetall(){
    for (var i = 1; i <= 25; i++) {
        document.getElementById(i).style.backgroundColor = 'white';
    }
}

function win (){
    for (var i = 1; i <= 25; i++){
        if (document.getElementById(i).style.backgroundColor != 'white') {
            return false;
        }
    }
    alert("Bravo !\nNombre de coups: " + compteur);
    compteur = 0;
    document.getElementById("nb").innerHTML = "&nbsp;" + compteur;
    level1();

}

function directionalColorCondition(direction_color,direction_id){
    if (direction_color == 'white') {
        document.getElementById(direction_id).style.backgroundColor = 'yellow';
    }
    else{
        document.getElementById(direction_id).style.backgroundColor = 'white';
    }
}

function reverseColor(nBox){
    var BoxNum = nBox.id;
    var top_id = BoxNum-5;
    var right_id =  parseInt(BoxNum)+1;
    var bot_id = parseInt(BoxNum)+5;
    var left_id = BoxNum-1;

    if (top_id <= 25 && top_id > 0) {
        var top_color = document.getElementById(top_id).style.backgroundColor;
        directionalColorCondition(top_color,top_id);
    }

    if (right_id <= 25 && right_id > 0 && (right_id != 6 && right_id != 11 && right_id != 16 && right_id != 21)) {
        var right_color = document.getElementById(right_id).style.backgroundColor;
        directionalColorCondition(right_color,right_id);
    }

    if (bot_id <= 25 && bot_id > 0){
        var bot_color = document.getElementById(bot_id).style.backgroundColor;
        directionalColorCondition(bot_color,bot_id);
    }

    if (left_id <= 25 && left_id > 0 && (left_id != 5 && left_id != 10 && left_id != 15 && left_id != 20)) {
        var left_color = document.getElementById(left_id).style.backgroundColor;
        directionalColorCondition(left_color,left_id);
    }

    win ()
}

function clickLight(box){
    compteur ++;
    document.getElementById("nb").innerHTML = "&nbsp;" + compteur;

    var color = box.style.backgroundColor;

    if (color === 'white'){
        box.style.backgroundColor = 'yellow';
    }
    else{
        box.style.backgroundColor = 'white';
    }
    reverseColor(box,color);
}

var compteur = 0;
level1()