const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (inputBox.value == "") {
    alert("you must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00dd7";
    li.appendChild(span);
  }
  inputBox.value = "";
});
