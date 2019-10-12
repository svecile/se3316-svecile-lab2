function subForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var birthYear = document.getElementById("birth-year").value;
    var age = "Child";

    birthYear = parseInt(birthYear);

    if (name == "admin" && birthYear == 1867) {
        var adminFeilds = document.getElementById("adminFunctions");
        adminFeilds.style.display = "inline-block";

        var node = document.createElement("p"); //make new paragraph node
        var txtNode = document.createTextNode("Librarian"); //sanatize input by adding it to a text node
        node.appendChild(txtNode);
        var element = document.getElementById("h1");
        element.appendChild(node);

        var inFeilds = document.getElementById("dataIn"); //get input feilds
        inFeilds.style.display = "none"; //hide input feilds

        return;
    }

    if (name == "" || email == "") {
        window.alert("Please enter a value for all feilds!");
        return;
    } else if (birthYear < 1900 || birthYear > 2019) {
        window.alert("Birth year out of range, please enter a birth year between 1900 and 2019!")
        return;
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        window.alert("You have entered an invalid email address!");
        return;
    }

    if (2019 - birthYear >= 18) {
        age = "Adult";
    }
    var inFeilds = document.getElementById("dataIn"); //get input feilds
    inFeilds.style.display = "none"; //hide input feilds

    var node = document.createElement("p"); //make new paragraph node
    var txtNode = document.createTextNode(name + " (" + email + ") " + age); //sanatize input by adding it to a text node
    node.appendChild(txtNode);
    var element = document.getElementById("h1")
    element.appendChild(node);
}

function updateBasket(item) {
    var node = document.getElementById(item);//get the node of the item that was added to the cart
    var image = node.getElementsByTagName("img")[0]; //get the img element
    image.style.display = "none";//make the image not displayed

    var due = document.createElement("p"); //create a new pargraph node
    due.innerHTML = node.getAttribute("data-due"); //get the data attribute containing the due date and add the string to the p node
    node.appendChild(due);//append the p node to the parent item node

    node.getElementsByTagName("button")[0].innerHTML = "Remove"; //change button text to remove
    node.getElementsByTagName("button")[0].setAttribute("onclick", "remove(\"" + item + "\")"); //change onclick attribute to remove(item) where item is the id of the list item
    document.getElementById("basket").appendChild(node); //apend the edited item node to the basket list
}

function remove(item) {
    var node = document.getElementById(item); //get the items node
    var image = node.getElementsByTagName("img")[0]; //get the img element
    image.style.display = "inline-block"; //make the image visible again

    var due = node.getElementsByTagName("p")[0];
    node.removeChild(due);//remove the due date

    node.getElementsByTagName("button")[0].innerHTML = "Add"; //change button text back to add
    node.getElementsByTagName("button")[0].setAttribute("onclick", "updateBasket(\"" + item + "\")"); //change onclick attribute back to updateBasket(item)
    document.getElementById("available-items").appendChild(node); //put the removed item node back on the available-items list
}

function checkout() {
    var basketItems = document.getElementById("basket").getElementsByTagName("li"); //get all the list items in the basket and store them as an html collection
    var x = confirm("Would you like to checkout? You have " + basketItems.length + " items in your cart"); //display comfermation box with how many items in cart

    if (x == true) { //if you click on then remove all items from the checkout basket

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
function addItem() {
    //get input feild values
    var itemName = document.getElementById("itemName").value;
    var imgSrc = document.getElementById("imgPath").value;
    var due = document.getElementById("due").value;

    //get a list item from the available items list and clone it
    var item = document.getElementById("available-items").getElementsByTagName("li")[0];
    var clone = item.cloneNode(true);

    clone.setAttribute("id", itemName);
    clone.setAttribute("data-due", due);

    var imgNode = clone.getElementsByTagName("img")[0];
    imgNode.setAttribute("src", imgSrc);
    imgNode.setAttribute("alt", itemName);

    var caption = clone.getElementsByTagName("figcaption")[0];
    caption.innerHTML = itemName;

    var but = clone.getElementsByTagName("button")[0];
    but.setAttribute("onclick", "updateBasket(\"" + itemName + "\")");

    document.getElementById("available-items").appendChild(clone);


}
function removeItem() {
    var itemNum = document.getElementById("remove").value; //get the number of the book to be deleted from the input feild
    var availableList = document.getElementById("available-items").getElementsByTagName("li"); // get a list of all li nodes in available-items list
    var itemToDelete = availableList[itemNum - 1]; //get the item to be deleted

    itemToDelete.parentNode.removeChild(itemToDelete); //delete the item
}

function changeDate() {
    var itemNum = document.getElementById("itemNum").value;
    var newDate = document.getElementById("days").value;
    var availableList = document.getElementById("available-items").getElementsByTagName("li");
    var itemToChange = availableList[itemNum - 1];

    itemToChange.setAttribute("data-due", "Due in " + newDate + " Days");
}

function logOut() {
    var inFeilds = document.getElementById("dataIn"); //get input feilds
    inFeilds.style.display = "inline-block"; //show regular input feilds again

    var adminFeilds = document.getElementById("adminFunctions"); //get admin feilds
    adminFeilds.style.display = "none"; //hide admin feilds

    var childToRemove = document.getElementById("h1").getElementsByTagName("p")[0];//get the child of h1 the "Librarian" title
    var h = document.getElementById("h1"); //get the h1 node
    h.removeChild(childToRemove); //remove the librarian title

}

