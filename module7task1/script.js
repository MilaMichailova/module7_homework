function showUserData(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key);
      console.log(obj[key]);
    }
  }
}

person = {
  protoSex: "man",
  protoAge: 25,
  protoCity: "N-city",
};

let user = Object.create(person);
user.ownName = "Yan";
user.ownAge = 46;
user.ownCity = "K-town";

showUserData(user);

console.log(user.ownName);
