/*  (1) variables, variable assignment
    (2) conditional execution (if, else, or switch)
    (3) functions
    (4) arrays, plus one or more of the following: loops, randomness, time/date
    (5) objects, properties, methods and constructor  */

newUser
["fname","lname",age, L1, L2]

var select = doc.getElementById("L1")
var select = doc.getElementById("L2")
var value = select.options[select.selectedIndex].value;

var numSimilar = [userPersonas];
function processNewUser() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    var L1 = document.getElementById("L1").value;
    var L2 = document.getElementById("L2").value;
    var form = document.getElementById("clsssForm").value;
    alert(fname);
    alert(lname);
    alert(L1);
    alert(L2);
    alert(age);

[0,0,0,0,0]

var numSimilar = new Array(personArray.length).fill(0);
for(var i = 0; i < personArray.length; i++){
    if(personArray[i].inputL1 == L1){
        numSimilar[i]++;
    }
    if(personArray[i].inputL2 == L2){
        numSimilar[i]++;
    }
    if(Math.abs(personArray[i] - age) < 10){
        numSimilar[i]++;
    }
}

}