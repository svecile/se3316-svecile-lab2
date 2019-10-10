

function subForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var birthYear = document.getElementById("birth-year").value;
    var age = "Child";

    birthYear = parseInt(birthYear);
  
    if( name==""|| email==""){
        window.alert("Please enter a value for all feilds!");
        return;
    } else if (birthYear < 1900 || birthYear > 2019 ){
        window.alert("Birth year out of range, please enter a birth year between 1900 and 2019!")
        return;
    } else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        window.alert("You have entered an invalid email address!");
        return;
    }

    if (2019-birthYear >= 18){
        age = "Adult";
    }
    var inFeilds = document.getElementById("dataIn") //get input feilds
    inFeilds.style.display = "none" //hide input feilds

    var h = document.createElement("p"); //make new paragraph node
    var t = document.createTextNode(name+" ("+email+") "+age); //sanatize input by adding it to a text node
    h.appendChild(t);
    var element = document.getElementById("h1")
    element.appendChild(h);
}
