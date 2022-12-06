// не совсем поняла как создать обьект вообще без простотипаБ если он по умолчанию есть у всех обьектов... не использовать прототип при созданиии?

// Cвойство __proto__ содержит внутреннюю ссылку на прототип объекта. Это свойство есть абсолютно у всех объектов в JavaScript.

//вариант 1  Тут есть свойство __proto__ содержит внутреннюю ссылку на прототип объекта.

function createObject() {
  object = {};
  console.log(object);
}

createObject();

//вариант 2 самый подходящий по условиям

function createObject2() {
  let object2 = Object.create(null);
  console.log(object2);
}

createObject2();

//вариант 3 Тут есть свойство __proto__ содержит внутреннюю ссылку на прототип объекта.

function createObject3() {
  let object3 = new Object();
  console.log(object3);
}

createObject3();
