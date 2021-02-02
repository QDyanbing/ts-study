// const str: string = "a";
// const bum: number = 1;
// const boo: boolean = true;
// const symbol: symbol = Symbol();
// const un: undefined = undefined;
// const nu: null = null;

// const tuple: [number, string] = [1, "a"];

// const add = (x: number): number => x;

// const obj: { x: string } = { x: "a" };

// const noReturn = (): void => {};
// const all: any = 123;

// const arr: Array<number | string> = [1];

// enum Status {
//   waiting,
//   success,
// }

// enum Message {
//   hello = "hello word",
// }

// enum Answer {
//   N,
//   Y = "yes",
// }

// interface List {
//   id: number;
//   name: string;
// }

const obj = { id: 1, name: "A" } as List;

interface List {
  [x: string]: any;
  id: number;
  name: string;
}

interface Add {
  (x: number): number;
}

interface Lib {
  version: number;
  (x: number): number;
}

function add1(x: number): number {
  return x;
}

let add2: (x: number) => number;

type add3 = (x: number) => number;

interface add4 {
  (x: number): number;
}

// class Dog {
//   constructor(name: string) {
//     this.name = name;
//   }
//   name: string;
// }

// class BigDog extends Dog {
//   constructor(name: string, color: string) {
//     super(name);
//     this.color = color;
//   }
//   color: string;
// }

// abstract class Animal {
//   abstract eat(): void;
// }

// class Dog extends Animal {
//   eat() {
//     console.log("肉");
//   }
// }

// class Cat extends Animal {
//   eat() {
//     console.log("鱼");
//   }
// }

// class Work {
//   step1() {
//     return this;
//   }

//   step2() {
//     return this;
//   }
// }

interface Animal {
  name: string;
}

class Animals implements Animal {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
}

class Auto {
  state: 1;
}

interface AutoInterface extends Auto {}

// function log<T>(value: T): T {
//   return value;

// type log2 =<T>(value:T)=>T

// interface Log {
//   <T>(value: T): T;
// }

// interface Log<T> {
//   (value: T): T;
// }

class Cat<T> {
  run(value: T) {
    return value;
  }
}

interface Length {
  length: number;
}

function log1<T extends Length>(value: T): T {
  console.log(value.length);
  return value;
}
