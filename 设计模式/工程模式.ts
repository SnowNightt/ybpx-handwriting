interface IApple {
  name: string;
  eat: () => void;
}
interface IBanana {
  name: string;
  eat: () => void;
}

interface IFruit {
  createFruit: (type: string) => IApple | IBanana;
}
function factory(): IFruit {
  class Apple implements IApple {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    eat() {
      console.log(`eatting ${this.name}`);
    }
  }
  class Banana implements IBanana {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    eat() {
      console.log(`eatting ${this.name}`);
    }
  }
  class Fruit implements IFruit {
    createFruit(type: string) {
      if (type === "apple") {
        return new Apple(type);
      } else if (type === "banana") {
        return new Banana(type);
      } else {
        throw new Error("传入类型错误");
      }
    }
  }
  return new Fruit();
}
const fruit = factory();
const apple = fruit.createFruit("apple") as IApple;
const banana = fruit.createFruit("banana") as IBanana;
apple.eat();
banana.eat();
