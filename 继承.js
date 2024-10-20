// 方案一：原型链继承
// 优点：子类可以访问父类的原型
// 缺点：子类的原型被覆盖；如果父类的原型中有引用类型的属性，则这个对象会被所有实例共享，修改一个实例的引用属性会影响其他实例；
// 无法向父类构造函数传参
function Parent() {}
Parent.prototype.sayHi = function () {
  console.log("hi");
};
function Child() {}
Child.prototype = new Parent();
const child = new Child();
console.log("-----------------原型继承----------------------");

child.sayHi();

// 方法二：构造函数继承
// 优点：解决了引用类型共享的问题，每个实例创建独立属性，可以向父类构造函数传参
// 缺点：父类的方法不能被共享到子类的实例中，每次创建实例时，方法都会重新定义，影响性能。
function Parent1(name) {
  this.name = name;
}
Parent1.prototype.run = function () {
  console.log("run");
};
function Child1(name) {
  Parent1.call(this, name);
}
const child2 = new Child1("c1");
const child3 = new Child1("c2");
console.log("----------------构造函数继承--------------------");
console.log(child2.name);
console.log(child3.name);
console.log(child2);
console.log(child3);

//   方法三：组合继承
//   - 解决了原型链继承的引用类型共享问题。
//   - 可以向父类构造函数传递参数。
//   - 方法可以复用，不会在每次实例化时重新创建。
//   - 调用了两次父类构造函数：一次在 Parent.call，一次在 new Parent()，导致效率问题。
function Parent2(name) {
  this.name = name;
  this.color = ["red", "green"];
}
Parent2.prototype.fly = function () {
  console.log("fly");
};
function Child2(name) {
  Parent2.call(this, name);
}
Child2.prototype = new Parent2();
const c1 = new Child2("c1");
const c2 = new Child2("c2");
console.log("-----------组合继承----------------");
console.log(c1.name);
console.log(c2.name);
c1.color.push("blue");
console.log(c1.color);
console.log(c2.color);
c2.fly();
c1.fly();
console.log(c1);

//   寄生组合继承
// - 解决了组合继承中调用两次父类构造函数的问题。
// - 保持了构造函数继承和原型链继承的优点：可以传递参数，方法可以复用，不共享引用类型。
//   没明显缺点
function Parent3(name) {
  this.name = name;
  this.color = ["red", "green"];
}
Parent3.prototype.walk = function () {
  console.log("walk");
};
function Child3(name) {
  Parent3.call(this, name);
}
Child3.prototype = Object.create(Parent3.prototype);
Child3.prototype.test = "test";
Child3.prototype.constructor = Child3;
const ch1 = new Child3("ch1");
const ch2 = new Child3("ch2");
console.log("----------------------寄生组合继承----------------------");
console.log(ch1.name);
console.log(ch2.name);
ch1.color.push("blue");
console.log(ch1.color);
console.log(ch2.color);
ch2.walk();
ch1.walk();
console.log(ch1);
