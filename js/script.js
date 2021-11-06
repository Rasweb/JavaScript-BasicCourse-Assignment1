window.onload = function () {
  checkfunc();
  document.getElementById("add").addEventListener("click", liAdd);
  removeItem();
  document.getElementById("sort").addEventListener("click", sort);
};

function removeItem() {
  var listItems = document.getElementById("liUl").getElementsByTagName("li");
  var removeButton = document.getElementById("remove");

  removeButton.addEventListener("click", removeItem);
  if (listItems.length === 0) return; // if there is no items in listItems then quit the function (don't attempt to remove what doesn't exist)

  var last = listItems[listItems.length - 1];
  last.parentNode.removeChild(last);
}

// Add a "checked" symbol when clicking on a list item
// querySelector returns the first element that matches.
function checkfunc() {
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
  // Variables
  let run = true;
  let stop = false;

  // Change list to input for easier use.
  let sort_list = document.getElementById("liUl");

  run = true;

  while (run) {
    run = false;
    let li = sort_list.getElementsByTagName("LI");

    // Loop through the list.
    for (i = 0; i < li.length - 1; i++) {
      stop = false;
      if (li[i].innerHTML.toLowerCase() > li[i + 1].innerHTML.toLowerCase()) {
        stop = true;
        break;
      }
    }

    // If item smaller than other item add after.
    if (stop) {
      li[i].parentNode.insertBefore(li[i + 1], li[i]);

      run = true;
    }
  }
}
