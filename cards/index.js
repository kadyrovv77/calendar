let pizzas = [
    {
        id:1,
        title:"Азиатская",
        Image:"https://media.dodostatic.net/image/r:292x292/11EEC6DEEF2A8314A75E734E42048301.avif",
        price:"495som",
        desc:"Фарш из говядины, моцарелла, сушенный перец Чили, томаты, красный лук, сладкий перец, томатный соус",
    },
    {
        id:2,
        title:"Додо Микс",
        Image:"https://media.dodostatic.net/image/r:292x292/11EF78121A97B787A7CC3B342F3FF53A.avif",
        price:"от 495 сом",
        desc:"Цыпленок, ветчина из цыпленка, моцарелла, смесь сыров чеддер и пармезан, кубики брынзы, красный лук, томаты, чеснок сухой, итальянские травы, соус песто, соус альфредо",
    },
    {
        id:3,
        title:"Пепперони Фреш",
        Image:"https://media.dodostatic.net/image/r:292x292/11EEE203285B287A973909983F409D68.avif",
        price:"от 630 сом",
        desc:"Соберите свою пиццу 35 см с двумя разными вкусами",
    },
    {
        id:4,
        title:"Супермясная",
        Image:"https://media.dodostatic.net/image/r:292x292/11EE7D5FF8E6FD8488ECB419A1BBD94A.avif",
        price:"от 495 сом",
        desc:"Цыпленок , пепперони из цыпленка , ветчина из цыпленка , фарш из говядины , колбаски чоризо из цыпленка , моцарелла, томатный соус",
    },

]
console.log(pizzas);
let box = document.querySelector(".box");
let pizzasMap = pizzas.map((pizza)=> {
    return`
         <div class="card">
            <img 
            class="card_image"
            src="${pizza.Image}"
            alt="pizza"/>
            <div class="card_content">
                <h2 class="card_title">${pizza.title}</h2>
                <p class="card_desc">
                ${pizza.desc}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate mollitia deleniti consequatur vel.
                </p>
                <div class="card_actions">
                    <span class="card_price">ot ${pizza.price} som</span>
                    <button class="card_btn">vybrat</button>
                </div>

            </div>
        </div>
    <div>
    `

});

box.innerHTML +=pizzasMap.join("");