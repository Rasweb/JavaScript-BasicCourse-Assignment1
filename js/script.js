window.onload = function () {
  let remBtn = document.getElementById("rem");
  remBtn.addEventListener("click", remItem);

  let testing = document.getElementById("test");
  testing.addEventListener("click", remvEt);
};

function remvEt() {
  if (e.target.classList.contains("check")) {
    list.removeChild(e.target.parentElement);
    list.removeChild(list);
  }
}

// function remItem() {
//   //for (let i = 0; i < li.length; i++){}
//   // alert("Hello");
// }
