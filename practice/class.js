class Animal {
  constructor(legs = 4) {
    this.legs = legs;
  }
  makeNoise() {
    console.log('animal noise');
  }
}
class Dog extends Animal {
  constructor(breed) {
    super();
  }
  makeNoise() {
    console.log('bark');
  }
}

const testDog = new Dog('corgi');
console.log(testDog);
testDog.makeNoise(testDog.makeNoise());
const enemy = testDog;
console.log('enemy talking', enemy);
