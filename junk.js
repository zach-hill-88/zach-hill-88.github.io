
// Our array of objects, userPersonas
    var userPersonas = [" Aziz Ansari", " Benjamin Button", " Camilla Cabello", " Desmond Dekkar", ];
// This function simply shows the arrray of userPersonas
    function showUsers () {
        document.getElementById("users").innerHTML = "Here are the names of people currently using clsss: " + userPersonas;
    }

// This is a constructor function which will create new Persona objects
    class Persona {
    constructor(first, last, age, L1, L2) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.L1 = L1;
        this.L2 = L2;
        // This is a method which will write the properties of each Persona
        this.writePersona = function () {
            var UserString = "Your name is" + this.firstName + this.lastName + ". You are " + this.age + " years old. Your native language is " + this.L1 + " and you would like to learn "+ this.L2;
            writeText(UserString, "user info");
        }
            
            str = str + this.firstName;
            str = str + this.lastName;
            str = str + this.age;
            str = str + this.L1;
            str = str + this.L2;
            return str;
        };
    
}

var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var age = document.getElementById("age");
var L1 = document.getElementById("myL1");
var L2 = document.getElementById("myL2");
var form = document.getElementById("clsssForm");
/*
var matchFunction = function() {
    alert("We clicked it!")

}

form.addEventListener("submit", function(event) {


event.preventDefault();

}
})

/*function match(Persona1,Persona2){

        if persona1.L2 == persona2.L2 == //this is where we left off
    }

    function writePersonas() {
    var str = "";
            
            
    for (i = 0; i < userPersonas.length; i++) {
        str = str + userPersonas[i].writePersona();
        }

    document.getElementById("objects").innerHTML = str;

}*/
//var userPersonas = []
/*function createPersonas() {
    userPersonas [userPersonas.length] = new Persona("Aziz", "Ansari", 37, "English", "Italian");
    userPersonas [userPersonas.length] = new Persona("Benjamin", "Button", 100, "English", "German");
    userPersonas [userPersonas.length] = new Persona("Camilla", "Cabello", 27, "English", "German");
    userPersonas [userPersonas.length] = new Persona("Desmond", "Dekkar", 67, "English", "Italian");
    userPersonas [userPersonas.length] = new Persona("Emilio", "Estévez", 37, "English", "Italian");    
    }
  
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

  /*  var Persona1 = new Persona("Aziz", "Ansari", 37, "English", "Italian");
    var Persona2 = new Persona("Benjamin", "Button", 100, "English", "German");

    function twoPersonas() {
        document.getElementById("match").innerHTML = "Your best match is " + Persona2.firstName + " " +Persona2.lastName;
    }

    function addName() {
        userPersonas[userPersonas.length] = prompt("Add your name to the list")
    }*/