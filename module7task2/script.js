function isObjHasKey(str, obj) {
  if (str in obj) {
    console.log(true);

    return true;
  } else {
    console.log(false);

    return false;
  }
}

user = {
  name: "Vasya",
  age: 25,
  city: "k-town",
};

isObjHasKey("age", user);
