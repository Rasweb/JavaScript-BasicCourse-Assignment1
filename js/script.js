window.onload = function () {
  createHtmlLi();
};

//1. A class that describes a task
// Constructor with two parameters.
class JsList {
  constructor(item, done) {
    this.item = item;
    this.done = done;
  }
}

//2. Create objects based on the class.
let firstObject = new JsList("Pay bills", false);
let secondObject = new JsList("Study", false);
let thirdObject = new JsList("Train", false);
let fourthObject = new JsList("Cook diner", false);
let fifthObject = new JsList("Read book", false);
let sixthObject = new JsList("Clean", false);

//3. Merge the objects with an array.
let objectToArray = [
  firstObject,
  secondObject,
  thirdObject,
  fourthObject,
  fifthObject,
  sixthObject,
];

function createHtmlLi() {
  // empties the HTML DOM so changes will take place.
  // Cleans the array so functions will show up on screen.
  document.getElementById("objectLi-con").innerHTML = "";
  // Creates the ul again.
  let jsUl = document.createElement("ul");
  jsUl.id = "liUl";

  //4. Loop through the list to build html and click functions.
  for (let i = 0; i < objectToArray.length; i++) {
    // Creates the <li>.
    let li = document.createElement("li");
    // Creates the <p>.
    let p = document.createElement("p");
    // Inserts the items to their own <p>.
    p.innerHTML = objectToArray[i].item;
    // makes the <p> clickable.
    p.addEventListener("click", () => {
      check(i);
    });

    // If the boolean done is true change the i item id to checked.
    if (objectToArray[i].done) {
      li.className = "checked";
    }

    // Appends everything
    // Appends <ul> to <li>
    jsUl.appendChild(li);
    // Appends <li> to <p>
    li.appendChild(p);
    // Create the cross button
    let btnCross = document.createElement("button");
    // Writes x inside the button
    btnCross.innerHTML = "x";
    btnCross.id = "rem";
    btnCross.addEventListener("click", () => {
      removeItem(i);
    });
    li.appendChild(btnCross);
  }
  document.getElementById("objectLi-con").appendChild(jsUl);
}

// The ! inverts the boolean expression so it can be checked.
function check(i) {
  objectToArray[i].done = !objectToArray[i].done;
  createHtmlLi();
}

// Splice the one item from the array.
function removeItem(i) {
  objectToArray.splice(i, 1);
  createHtmlLi();
}
