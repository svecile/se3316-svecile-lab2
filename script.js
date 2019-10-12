

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

function updateBasket(item){
    var node = document.getElementById(item);//get the node of the item that was added to the cart
    var image = node.getElementsByTagName("img")[0]; //get the img element
    image.parentNode.removeChild(image); //remove the image element

    var due = document.createElement("p"); //create a new pargraph node
    due.innerHTML = node.getAttribute("data-due"); //get the data attribute containing the due date and add the string to the p node
    node.appendChild(due);//append the p node to the parent item node

    node.getElementsByTagName("button")[0].innerHTML = "Remove"; //change button text to remove
    node.getElementsByTagName("button")[0].setAttribute("onclick", "remove(\""+ item + "\")"); //change onclick attribute to remove(item)
    document.getElementById("basket").appendChild(node); //apend the edited item node to the basket list
}

function remove(item){
    var node = document.getElementById(item); //get the items node
    var image = document.createElement("img"); // create an img element
    image.setAttribute("src", item +".jpg"); //add the file sorce to the image for the picture
    image.setAttribute("width", "200");//add width attribute
    image.setAttribute("height", "250");//add height attribute
   
    node.insertBefore(image, node.firstChild);
    var due = node.getElementsByTagName("p")[0];
    node.removeChild(due);

    node.getElementsByTagName("button")[0].innerHTML = "Add"; //change button text back to add
    node.getElementsByTagName("button")[0].setAttribute("onclick", "updateBasket(\""+ item + "\")"); //change onclick attribute back to updateBasket(item)
    document.getElementById("available-items").appendChild(node); //put the removed item node back on the available-items list
}