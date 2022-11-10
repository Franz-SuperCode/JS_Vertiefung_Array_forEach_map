let array = ["imageTeilnehmer1.jpg", "imageTeilnehmer2.jpg"];
console.log(array);

let newArray = array.splice(2, 0, "imageTeilnehmer3.jpg", "imageTeilnehmer4.jpg", "imageTeilnehmer5.jpg");
//Das ausgeschnittene ausgeben. Da nichts ausgeschnitten wurde, ist es leer
console.log(newArray);
//Das alte veränderte Array ausgeben
console.log(array);

//Ans Ende deswegen 5 und die Null weil man nichts ersetzen will
array.splice(6, 0, "imageTeilnehmer6.jpg")
console.log(array);

array.splice(2, 0, "dazwischen.jpg")
console.log(array);