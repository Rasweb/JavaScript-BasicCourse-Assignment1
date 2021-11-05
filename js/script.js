window.onload = function () {
  closefunc();
  checkfunc();
  document.getElementById("add").addEventListener("click", liAdd);
};

// Click on the element with class="close".
// Changes the list items display to none.
function closefunc() {
  let closeId = document.getElementsByClassName("close");
  for (i = 0; i < closeId.length; i++) {
    closeId[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
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
  let tagSpan = document.createElement("SPAN"); // Creates <span>
  tagSpan.appendChild(document.createTextNode("x")); // Appends <span>x<span>
  let theUl = document.getElementById("liUl"); // Finds the <ul>.
  let theInpt = document.getElementById("liInput"); // Finds the <input>.
  let theLi = document.createElement("li"); // Creates the <li>.
  theLi.appendChild(document.createTextNode(theInpt.value)); // Appends the input value using a textnode.
  theLi.appendChild(tagSpan); // Appends the <span> to <li>
  tagSpan.setAttribute("class", "close"); // Adds class="close" to span.
  theUl.appendChild(theLi); // Appends to the ul to make a list
}
