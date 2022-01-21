window.onload = function () {
  createHtmlLi();
  document.getElementById("btnAddItem").addEventListener("click", addToDos);
  createSort();
  toLocalStorage();
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

// LocalStorge
function toLocalStorage() {
  // Convert the array of objects to JSON.
  let toJson = JSON.stringify(objectToArray);

  // Put the JSON array in localStorage.
  localStorage.setItem("array", toJson);

  // Gets the array from localStorage.
  let fromLocal = localStorage.getItem("array");

  // Parse the array from JSON so it can be read.
  let parseArray = JSON.parse(fromLocal);

  // log the array.
  console.log(parseArray);
}

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

// Splice the one item from the array.
function removeItem(i) {
  objectToArray.splice(i, 1);
  // Sets the localStorage again to update the array.
  toLocalStorage();
  createHtmlLi();
}

// The ! inverts the boolean expression so it can be checked.
function check(i) {
  objectToArray[i].done = !objectToArray[i].done;
  createHtmlLi();
}

// The function for the sort action.
function createSort() {
  let btnSortDone = document.createElement("button");
  btnSortDone.innerHTML = "Sort Done";
  btnSortDone.id = "sortDone";
  btnSortDone.addEventListener("click", sortDone);
  let divDone = document.createElement("div");
  divDone.id = "sortDone";
  divDone.appendChild(btnSortDone);
  document.body.appendChild(divDone);
}

// Sort by done.
function sortDone() {
  objectToArray.sort(function (a, b) {
    return a.done - b.done;
  });
  createHtmlLi();
  // Updates the localStorge to move the checked item at the bottom.
  toLocalStorage();
}

// Add item to array.
function addToDos() {
  // Prevents the form from refreshing the site on click.
  event.preventDefault();
  let input = document.getElementById("addItem");
  // The value the user writes.
  let newItem = new JsList(input.value, false);
  // Adds the new item to the array.
  objectToArray.push(newItem);
  // Clears the input field.
  document.getElementById("addItem").value = "";
  // Calls the creathtml because there is a new item in the array.
  createHtmlLi();
  // Sets the localStorage again to add the new item.
  toLocalStorage();
}
