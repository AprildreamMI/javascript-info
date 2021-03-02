/**
 * 根据规范，如果一个类扩展了另外一个类且没有constructor 那么将生成空的constructor
 */

 class Rabbit extends Animal {
    // 为没有自己的 constructor 的扩展类生成的
    constructor(...args) {
      super(...args);
    }
 }