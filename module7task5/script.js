class ParentDevice {
  constructor(name, power) {
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
}

class Kettle extends ParentDevice {
  constructor(name, power, volume) {
    super(name, power);
    this.volume = volume;
    this.boil = function () {
      console.log("boiling");
    };
  }
}

class Ironn extends ParentDevice {
  constructor(name, power, steamBoost) {
    super(name, power);
    this.steamBoost = steamBoost;
    this.heat = function () {
      console.log("heating");
    };
  }
}

function electricMeter(arrayOfDevices) {
  let sumPower = 0;

  arrayOfDevices.forEach((devise) => {
    if (devise.isEnable) {
      sumPower = sumPower + devise.power;
    }
  });

  console.log("sumPower", sumPower);
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
ironPhilips.heat();

electricMeter([smartXiaomiKettle, lgBigSizeKettle, ironPhilips]);
