const apiUrl = "https://dummyjson.com/products";

fetch(apiUrl)
.then((res) => res.json())
.then((products) => productsMap(products.products));

function productsMap() {
    let box = document.querySelector(".box");
       productsMap.map((item) => {
        let productElement = document.createElement("div");
        productElement.classList.add("card");

        

        productElement.innerHTML = `
        <img class="card-image" src"${item.thumbnail}" alt="${item,title}" />
        <span>${item,price}$</span>
        <h1>${item,title}</h1>
         `;
         box.appendChild(productElement);

    });
}

