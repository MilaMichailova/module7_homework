function ParentDevice(name, power) {
  this.name = name;
  this.power = power;
  this.isEnable = false;

  this.enable = function () {
    console.log(`${this.name} turn On`);
    this.isEnable = true;
  };

  this.disable = function () {
    console.log(`${this.name} turn Off`);
    this.isEnable = false;
  };
}

function Kettle(name, power, volume) {
  this.volume = volume;
  this.boil = function () {
    console.log("boiling");
  };

  ParentDevice.call(this, name, power);
}

function Ironn(name, power, steamBoost) {
  this.steamBoost = steamBoost;
  this.heat = function () {
    console.log("heating");
  };

  ParentDevice.call(this, name, power);
}

let smartXiaomiKettle = new ParentDevice("xiaomKettle", 3);
let lgBigSizeKettle = new Kettle("LG Big Size", 5, 4);
let ironPhilips = new Ironn("Iron Philips fast heating", 6, 200);

console.log("ironPhilips", ironPhilips);
console.log("lgBigSizeKettle", lgBigSizeKettle);
console.log("smartXiaomiKettle", smartXiaomiKettle);

lgBigSizeKettle.enable();
smartXiaomiKettle.enable();
ironPhilips.enable();

electricMeter([smartXiaomiKettle, lgBigSizeKettle, ironPhilips]);

function electricMeter(arrayOfDevices) {
  let sumPower = 0;

  arrayOfDevices.forEach((devise) => {
    if (devise.isEnable) {
      sumPower = sumPower + devise.power;
    }
  });

  console.log("sumPower", sumPower);
}
