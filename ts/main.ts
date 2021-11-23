window.onload = function () {
  headerfunc();
  document.getElementById("add").addEventListener("click", addButton);
  document.getElementById("remove").addEventListener("click", removeButton);
  document.getElementById("sort").addEventListener("click", sort);
  jsLists();
  check();
};

function headerfunc() {
  // Creates the html tags.
  let header = document.getElementById("header");
  //
  let titleCon = document.createElement("div");
  titleCon.id = "titleCon";
  //
  let top = document.createElement("h1");
  top.id = "top";
  top.innerHTML = "To-Do List";
  //
  let bottom = document.createElement("h2");
  bottom.id = "bottom";
  bottom.innerHTML = "Coded by Rasmus";

  titleCon.appendChild(top);
  titleCon.appendChild(bottom);
  header.appendChild(titleCon);
}

// Main
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
    document.body.appendChild(main);
  }
}

// Creates the div control tag.
let control = document.createElement("div");
control.id = "control";

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

// Sort the list in a alphabetical order.
function sort() {
  // Empty variables
  let run, stop;

  // Loop will continue until sort has been done.
  let sort_list = document.getElementById("liUl");
  let last = document.getElementsByClassName("checked");
  run = true;

  while (run) {
    run = false;
    // li is the <li>.
    let li = sort_list.getElementsByTagName("LI");
    // Loop through the list.
    for (i = 0; i < li.length - 1; i++) {
      stop = false;
      if (li[i].innerHTML.toLowerCase() > li[i + 1].innerHTML.toLowerCase()) {
        // Sorting the items in alphabeticall order.
        // If item should be sorted mark as stop and break.
        stop = true;
        break;
      }
    }
    if (stop) {
      li[i].parentNode.insertBefore(li[i + 1], li[i]);
      // If item has been marked with stop sort the item.
      run = true;
    }
  }
}

//Adds the list items dynamically and the span tag with class.
function liAdd() {
  let theUl = document.getElementById("liUl"); // Finds the <ul>.
  let theInpt = document.getElementById("liInput"); // Finds the <input>.
  let theLi = document.createElement("li"); // Creates the <li>.
  theLi.appendChild(document.createTextNode(theInpt.value)); // Appends the input value using a textnode.
  theUl.appendChild(theLi); // Appends to the ul to make a list
}
