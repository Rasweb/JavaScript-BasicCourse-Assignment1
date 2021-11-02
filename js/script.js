// Click on the element with class="close".
// Changes the list items display to none.
let close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

// window.onload = function () {
//   let remBtn = document.getElementById("rem");
//   remBtn.addEventListener("click", remItem);

//   let testing = document.getElementById("test");
//   testing.addEventListener("click", remvEt);
// };

// function remvEt() {
//   if (e.target.classList.contains("check")) {
//     list.removeChild(e.target.parentElement);
//     list.removeChild(list);
//   }
// }

// function remItem() {
//   //for (let i = 0; i < li.length; i++){}
//   // alert("Hello");
// }
