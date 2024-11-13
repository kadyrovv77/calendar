// DOM - document object mobel

//console.log(document);

let form = document.createElement("form");
form.classList.add("form");
console.log(form);

let input = document.createElement("input");
input.placeholder = "enter todos";

let btn = document.createElement("button");
btn.textContent = "Add";
btn.textContent = "Add";
form.append(input, btn);

let result = document.createElement("div");
result.classList.add("result");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value === "") {
    alert("no value");
  } else {
    let todoitem = document.createElement("p");
    todoitem.textContent = input.value;

    let deletetodo = document.createElement("button");
    deletetodo.textContent = "delete";
    deletetodo.classList.add("delete");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.onchange = function () {
      if (checkbox.checked) {
        todoitem.style.textDecoration = "line-through";
      } else {
        todoitem.style.textDecoration = "none";
      }
    };

    deletetodo.onclick = function () {
      result.removeChild(itemcontainer);
    };

    let itemcontainer = document.createElement("div");
    itemcontainer.classList.add("container");
    itemcontainer.append(checkbox, todoitem, deletetodo);

    result.appendChild(itemcontainer);

    input.value = "";
  }
});

console.log(form);

document.body.appendChild(form);
document.body.appendChild(result);
