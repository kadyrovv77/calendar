//array [], object{}
let users = [
    {
        id:1,
        name: "Baizak",
        age:11,
    },
    {
        id:2,
        name: "Elanai",
        age:15,
    },
    {
        id:3,
        name:"Madina",
        age:14,
    },
    {
        id:4,
        name:"Abu Bakir",
        age:15,
    },
    {
        id:5,
        name:"Nazima",
        age:15,
    },
    {
        id:6,
        name:"Asel",
        age:15,
    },
];

console.log(users);
console.log(users.map((name) => name.name));
console.log(users.map((age) => age.age));

let pizzas = [
    {
        id:1,
        title:"Мясная",
        Image: "https://media.dodostatic.net/image/r:292x292/11EF02382F16D01987A5126129EE47AC.avif" ,
        price: 495 ,
        desc: "Цыпленок, ветчина из цыпленка, пепперони из цыпленка, колбаски чоризо из цыпленка, моцарелла, томатный соус",
    },
    {
        id:2,
        title:"Двойная Пепперони",
        Image:"https://media.dodostatic.net/image/r:292x292/11EF02374C703B36BEFB978E377346A2.avif",
        price:735,
        desc:"Цыпленок, моцарелла, сладкий перец, красный лук, острый перец халапеньо, томаты, соус сальса, томатный соус",
    },
    {
        id:3,
        title:"Пепперони Фреш",
        Image:"https://media.dodostatic.net/image/r:292x292/11EEE203876D817B90FB82EA8158BF5D.avif",
        price:465,
        desc:"Пепперони из цыпленка, увеличенная порция моцареллы, томаты, томатный соус",
    },
    {
        id:4,
        title:"Супермясная",
        Image:"https://media.dodostatic.net/image/r:292x292/11EE7D5FF8E6FD8488ECB419A1BBD94A.avif",
        price:735,
        desc:"Цыпленок, пепперони из цыпленка, ветчина из цыпленка, фарш из говядины, колбаски чоризо из цыпленка, моцарелла, томатный соус",
    },
    {
        id:5,
        title:"Азиатская",
        Image:"https://media.dodostatic.net/image/r:292x292/11EEC6DEEF2A8314A75E734E42048301.avif",
        price:495,
        desc:"Фарш из говядины, моцарелла, сушенный перец Чили, томаты, красный лук, сладкий перец, томатный соус",
    },
    {
        id:6,
        title:"Маргарита",
        image:"https://media.dodostatic.net/image/r:292x292/11EE7D5FFA55D940A5174B17EE35C316.avif",
        price:395,
        desc:"Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус",
    },
]
console.log(pizzas);
let box = document.querySelector(".box");
let pizzasMap = pizzas.map((pizza) => {
    return`
         <div class="card">
            <img 
            class="card_image"
            src="${pizza.image}"
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

box.innerHTML += pizzasMap.join("");