let obj = {};
obj.d = 5;
obj.f = "7";
obj.showData = function (a) {
  console.log(a);
};

console.log(obj);

obj.showData(9);

delete obj.f;

console.log(obj);
