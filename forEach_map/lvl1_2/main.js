let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]


let upperDrinks = getraenke.map((getraenk) => {
    return getraenk.toUpperCase();
})

console.log(upperDrinks);
