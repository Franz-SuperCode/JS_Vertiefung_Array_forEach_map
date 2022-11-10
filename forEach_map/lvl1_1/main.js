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

let getraenkeSort = getraenke.sort();
console.log(getraenkeSort);

const myDrinks = () => {
    getraenkeSort.forEach((getraenk) => {
        console.log(getraenk);
        document.write(getraenk + "<br>");
    });
}

myDrinks();