//function to handle the submission of the user information form
function subForm() {

    //get input feild values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var birthYear = document.getElementById("birth-year").value;
    var age = "Child";

    birthYear = parseInt(birthYear); //take the text birthyear and make it an integer

    //if the user is the admin
    if (name == "admin" && birthYear == 1867) {

        //make the admin feilds visible
        var adminFeilds = document.getElementById("adminFunctions");
        adminFeilds.style.display = "inline-block";

        //make the librarian banner
        var node = document.createElement("p"); //make new paragraph node
        var txtNode = document.createTextNode("Librarian"); //sanatize input by adding it to a text node
        node.appendChild(txtNode);
        var element = document.getElementById("h1");
        element.appendChild(node);

        var inFeilds = document.getElementById("dataIn"); //get input feilds
        inFeilds.style.display = "none"; //hide input feilds

        return;
    }

    //validate input
    if (name == "" || email == "") {//make sure the input feilds arnt empty

        window.alert("Please enter a value for all feilds!");//if they are desplay a msg
        return;

    } else if (birthYear < 1900 || birthYear > 2019) {//make sure birth year is between 1900 and the current year

        window.alert("Birth year out of range, please enter a birth year between 1900 and 2019!")
        return;

    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {//make sure a valid email is entered

        window.alert("You have entered an invalid email address!");
        return;
    }

    //if the person is 18 or over change age to adult
    if (2019 - birthYear >= 18) {
        age = "Adult";
    }

    var inFeilds = document.getElementById("dataIn"); //get input feilds
    inFeilds.style.display = "none"; //hide input feilds

    // display the name email and age of the person
    var node = document.createElement("p"); //make new paragraph node
    var txtNode = document.createTextNode(name + " (" + email + ") " + age); //sanatize input by adding it to a text node
    node.appendChild(txtNode);
    var element = document.getElementById("h1")
    element.appendChild(node);
}
//function to add item to checkout basket
function updateBasket(item) {

    var node = document.getElementById(item);//get the node of the item that was added to the cart
    var image = node.getElementsByTagName("img")[0]; //get the img element
    image.style.display = "none";//make the image not displayed

    var due = document.createElement("p"); //create a new pargraph node
    due.innerHTML = node.getAttribute("data-due"); //get the data attribute containing the due date and add the string to the p node
    node.appendChild(due);//append the p node to the parent item node

    node.getElementsByTagName("button")[0].innerHTML = "Remove"; //change button text from add to remove
    node.getElementsByTagName("button")[0].setAttribute("onclick", "remove(\"" + item + "\")"); //change onclick attribute to remove(item) where item is the id of the list item

    document.getElementById("basket").appendChild(node); //apend the edited item node to the basket list
}

//function to translate english to french
function translateFr() {

    var availableList = document.getElementById("available-items").getElementsByTagName("li"); //get the list of available items

    //translate the names of the available items
    for (var e of availableList) {//for each li node in availablelist

        var id = e.getAttribute("id");//get the id of the node
        var caption = e.getElementsByTagName("figcaption")[0];

        //call translate function
        trans(id);
    }

    var basketList = document.getElementById("basket").getElementsByTagName("li"); //get the list of basket items
    
    //translate the names of the items in the checkout basket
    for (var e of basketList) {//for each li node in basketlist

        var id = e.getAttribute("id");//get the id of the node
        var caption = e.getElementsByTagName("figcaption")[0];

        //call translate function
        trans(id);
    }

    //embeded function to store the switch statement so it doesnt have to be written twice
    function trans(item){

           //using the id to tell what book you are translating change the caption
           switch (id) {
            
            case "clif":
                caption.innerHTML = "Clifford le Grand Chien Rouge"
                break;
            
            case "anarchist":
                caption.innerHTML = "Le livre de cuisine anarchiste"
                break;

            case "java":
                caption.innerHTML = "Développement mobile HTML, CSS et Javascript pour DUMMIES"
                break;
            
            case "poo":
                caption.innerHTML = "Qu'est-ce que votre caca vous dit?"
                break;
            
            case "green":
                caption.innerHTML = "American Idiot par Green Day"
                break;

            case "dillon":
                caption.innerHTML = "This Mixtape Is Fire de Dillon Francis"
                break;
            
            case "dogman":
                caption.innerHTML = "Chien homme"
                break;

            case "captain":
                caption.innerHTML = "Sous-vêtement capitaine"
                break;

            case "beaver":
                caption.innerHTML = "Les frères Beaver et le mauvais pingouin"
                break;

            case "owl":
                caption.innerHTML = "Eva's Treetop Festival, le journal de la chouette"
                break;

            case "Atonement":
                caption.innerHTML = "Expiation"
                break;
        }
    }
    document.getElementById("transBtn").innerHTML = "Translate to English"; //change button text to Tanslate to english
    document.getElementById("transBtn").setAttribute("onclick", "translateEn()"); //change onclick attribute to translateEn()
}

//function to translate french back to english
function translateEn() {

    var availableList = document.getElementById("available-items").getElementsByTagName("li"); //get the list of available items

    //translate the names of the available items
    for (var e of availableList) {//for each li node in availablelist

        var id = e.getAttribute("id");//get the id of the node
        var caption = e.getElementsByTagName("figcaption")[0];

        //call translate function
        trans(id);
    }

    var basketList = document.getElementById("basket").getElementsByTagName("li"); //get the list of basket items
    
    //translate the names of the items in the checkout basket
    for (var e of basketList) {//for each li node in basketlist

        var id = e.getAttribute("id");//get the id of the node
        var caption = e.getElementsByTagName("figcaption")[0];

        //call translate function
        trans(id);
    }

    function trans(item){

        //using the id to tell what book you are translating change the caption
        switch (id) {
            
            case "clif":
                caption.innerHTML = "Clifford The Big Red Dog"
                break;
            
            case "anarchist":
                caption.innerHTML = "The Anarchist Cookbook"
                break;

            case "java":
                caption.innerHTML = "HTML, CSS & Javascript Mobile Devlopment for DUMMIES"
                break;
            
            case "poo":
                caption.innerHTML = "What's Your Poo Telling You?"
                break;
            
            case "green":
                caption.innerHTML = "American Idiot by Green Day"
                break;

            case "dillon":
                caption.innerHTML = "This Mixtape Is Fire by Dillon Francis"
                break;
            
            case "dogman":
                caption.innerHTML = "Dog Man"
                break;

            case "captain":
                caption.innerHTML = "Captain Underpants"
                break;

            case "beaver":
                caption.innerHTML = "The Beaver Brothers and The Evil Penguin"
                break;

            case "owl":
                caption.innerHTML = "The Owl Diaries Eva's Treetop Festival"
                break;

            case "Atonement":
                caption.innerHTML = "Atonement"
                break;
        }
    }
    document.getElementById("transBtn").innerHTML = "Translate to English"; //change button text to Tanslate to french
    document.getElementById("transBtn").setAttribute("onclick", "translateFr()"); //change onclick attribute to translateFr()
}

//function to remove item from the basket and place it back in the avaliable list
function remove(item) {

    var node = document.getElementById(item); //get the Li node corresponding to the item
    var image = node.getElementsByTagName("img")[0]; //get the img element of that node
    image.style.display = "inline-block"; //make the image visible again

    var due = node.getElementsByTagName("p")[0];//get the p node corresponding to the due date text
    node.removeChild(due);//remove the due date text

    node.getElementsByTagName("button")[0].innerHTML = "Add"; //change button text back to add
    node.getElementsByTagName("button")[0].setAttribute("onclick", "updateBasket(\"" + item + "\")"); //change onclick attribute back to updateBasket(item)

    document.getElementById("available-items").appendChild(node); //put the removed item node back on the available-items list
}

//function to handle the checkout button
function checkout() {

    var basketItems = document.getElementById("basket").getElementsByTagName("li"); //get all the list items in the basket and store them as an html collection
    var x = confirm("Would you like to checkout? You have " + basketItems.length + " items in your cart"); //display comformation box with how many items in cart

    if (x == true) { //if you click on ok then remove all items from the checkout basket

        document.getElementById("basket").innerHTML = "";
        return;

    } else { //if you click cancel return items to available list

        var availableList = document.getElementById("available-items"); //get the list of available items

        while (basketItems.length != 0) {//while there are still items in the basket

            basketItems[0].getElementsByTagName("img")[0].style.display = "inline-block"; //get the first list item and make the picture visible again

            var id = basketItems[0].getAttribute("id"); //get the id of the list item
            basketItems[0].getElementsByTagName("button")[0].setAttribute("onclick", "updateBasket(\"" + id + "\")"); //change onclick attribute back to updateBasket() with the param being the id
            basketItems[0].getElementsByTagName("button")[0].innerHTML = "Add";//change button name back to add

            var due = basketItems[0].getElementsByTagName("p")[0]; //remove the due date
            basketItems[0].removeChild(due);

            availableList.appendChild(basketItems[0]);//add the list item back to the available list
        }
        return;
    }
}

//function to add an item if you are in admin mode
function addItem() {

    //get input feild values
    var itemName = document.getElementById("itemName").value;
    var imgSrc = document.getElementById("imgPath").value;
    var due = document.getElementById("due").value;

    //get a list item from the available items list and clone it
    var item = document.getElementById("available-items").getElementsByTagName("li")[0];
    var clone = item.cloneNode(true);

    clone.setAttribute("id", itemName); //change the clones id to the new item name
    clone.setAttribute("data-due", due); //change the due date to the inputed due date

    var imgNode = clone.getElementsByTagName("img")[0];//get the image node
    imgNode.setAttribute("src", imgSrc);//change image source to the new image
    imgNode.setAttribute("alt", itemName);//change the alt attribute to the new item name

    //change the figures caption to the new book name
    var caption = clone.getElementsByTagName("figcaption")[0];
    caption.innerHTML = itemName;

    //change the button onclick attribute to pass the name of the new item as a parameter
    var but = clone.getElementsByTagName("button")[0];
    but.setAttribute("onclick", "updateBasket(\"" + itemName + "\")");

    document.getElementById("available-items").appendChild(clone);//attach the new book to the available items list
}

//function to remove an item from the available list
function removeItem() {

    var itemNum = document.getElementById("remove").value; //get the number of the book to be deleted from the input feild
    var availableList = document.getElementById("available-items").getElementsByTagName("li"); // get a list of all li nodes in available-items list
    var itemToDelete = availableList[itemNum - 1]; //get the item to be deleted

    itemToDelete.parentNode.removeChild(itemToDelete); //delete the item
}

//function to change the due date for an item
function changeDate() {

    //get the item number and new due date from the input feilds
    var itemNum = document.getElementById("itemNum").value;
    var newDate = document.getElementById("days").value;

    var availableList = document.getElementById("available-items").getElementsByTagName("li");// get a list of all li nodes in available-items list
    var itemToChange = availableList[itemNum - 1];//get the item that needs to be changed from the above list

    itemToChange.setAttribute("data-due", "Due in " + newDate + " Days");//change the data attribute to the new due date
}

//function to logout of admin session and return page to normal
function logOut() {

    var inFeilds = document.getElementById("dataIn"); //get input feilds
    inFeilds.style.display = "inline-block"; //show regular input feilds again

    var adminFeilds = document.getElementById("adminFunctions"); //get admin feilds
    adminFeilds.style.display = "none"; //hide admin feilds

    var childToRemove = document.getElementById("h1").getElementsByTagName("p")[0];//get the child of h1 the "Librarian" title
    var h = document.getElementById("h1"); //get the h1 node
    h.removeChild(childToRemove); //remove the librarian title
}

