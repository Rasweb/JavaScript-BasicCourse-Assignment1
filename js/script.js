window.onload = function () {
  document.getElementById("add").addEventListener("click", addButton);
  document.getElementById("remove").addEventListener("click", removeButton);
  jsLists();
  check();
  // jsAdd();
  // jsRemove();
};

// Create the Ul.
let jsUl = document.createElement("ul");
jsUl.id = "liUl";

function jsLists() {
  //The list.
  let jsList = [
    "Pay bills",
    "Study",
    "Train",
    "Cook diner",
    "Read book",
    "Clean",
  ];

  for (let i = 0; i < jsList.length; i++) {
    // Find the main tag.
    let main = document.getElementById("main");
    // Create the div, ul and li tag.
    let jsLi = document.createElement("li");
    jsLi.innerHTML = jsList[i];
    jsUl.appendChild(jsLi);
    main.appendChild(jsUl);
  }
}

// Add a "checked" symbol when clicking on a list item
// querySelector returns the first element that matches.
function check() {
  let list = document.querySelector("ul");
  list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      // Returns the list, its allways in uppercase
      e.target.classList.toggle("checked");
    }
  });
}

// Add Button
let divControl = document.createElement("div");
divControl.id = "control";

function addButton() {
  let addB = document.getElementById("add"); // Finds the add button.
  let addUl = document.getElementById("liUl"); // Finds the ul.
  let inpB = document.getElementById("input"); // Finds the input button.
  let nLi = document.createElement("li"); // Creates the li.
  nLi.appendChild(document.createTextNode(inpB.value)); // Appends the input value.
  addUl.appendChild(nLi); // Appends the li to ul.

  // for (let i = 0; i < liUl.length; i++) {

  // }
}

// Remove button
function removeButton() {
  // Finds the remove button.
  let remB = document.getElementById("remove");
  // Finds the ul and the list item to change.
  let listItems = document.getElementById("liUl").getElementsByTagName("li");
  //loops through the list backwards, removes last item.
  if (listItems.length === 0) return;
  {
    let last = listItems[listItems.length - 1];
    last.parentNode.removeChild(last);
  }
}
