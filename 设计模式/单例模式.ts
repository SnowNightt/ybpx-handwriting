interface ISingleton {
  data?: string;
  getData: () => string | undefined;
}
class Singleton implements ISingleton {
  data?: string;
  private static instance: Singleton;
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.data = "I am the only instance";
    Singleton.instance = this;
  }
  getData() {
    return this.data;
  }
}
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // 输出: true (两个实例相同)
console.log(instance1.getData()); // 输出: I am the only instance
console.log(instance2.getData()); // 输出: I am the only instance
