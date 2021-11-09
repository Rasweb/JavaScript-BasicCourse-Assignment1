window.onload = function () {
  check();
  document.getElementById("add").addEventListener("click", liAdd);
  document.getElementById("remove").addEventListener("click", removeItem);
  document.getElementById("sort").addEventListener("click", sort);
};

lists();
add();

function lists() {
  //The list.
  let jsLists = [
    "Pay bills",
    "Study",
    "Train",
    "Cook diner",
    "Read book",
    "Clean",
  ];
  let jsUl = document.createElement("ul");
  // Id test.
  jsUl.id = "Test";

  for (let i = 0; i < jsLists.length; i++) {
    // Loops through the list and appends to ul.
    let jsLi = document.createElement("li");
    jsLi.innerHTML = jsLists[i];
    jsUl.appendChild(jsLi);
    document.body.appendChild(jsUl);
  }
}

function add() {
  let addB = document.getElementById("TestButton");
  let addInput = document.getElementById("TestInput");
}

function remove() {
  let remB = document.getElementsById("rembutton");
}

// -------------------------------------------------------------//

function removeItem() {
  // Finds the ul and the list item to change.
  let listItems = document.getElementById("liUl").getElementsByTagName("li");
  // Finds the remove button.
  let removeButton = document.getElementById("remove");

  //loops through the list backwards, removes last item.
  if (listItems.length === 0) return;

  let last = listItems[listItems.length - 1];
  last.parentNode.removeChild(last);
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

//Adds the list items dynamically and the span tag with class.
function liAdd() {
  let theUl = document.getElementById("liUl"); // Finds the <ul>.
  let theInpt = document.getElementById("liInput"); // Finds the <input>.
  let theLi = document.createElement("li"); // Creates the <li>.
  theLi.appendChild(document.createTextNode(theInpt.value)); // Appends the input value using a textnode.
  theUl.appendChild(theLi); // Appends to the ul to make a list
}

function sort() {
  // Empty variables
  let run, stop;

  // Loop will continue until sort has been done.
  let sort_list = document.getElementById("liUl");
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
