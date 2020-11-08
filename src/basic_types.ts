//Boolean
let isDone: boolean = false;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

//String
let color: string = "blue";
color = "red";

//Template strings
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}
I'll be ${age + 1} years old next month.`;

let sentence2: string =
  "Hello, my name is " +
  fullName +
  ".\n\n" +
  "I'll be " +
  (age + 1) +
  " years old next month.";

//Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//Tuple
let x: [string, number];
x = ["hello", 10];
// x = [10, "hello"]; Error

console.log(x[0].substring(1));
// console.log(x[1].substring(1)); Error

// x[3] = "world"; Error

//Enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c2: Color2 = Color2.Blue;
let value1: number = c2 * 3;
console.log(value1);

//Unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = false;

//Any
declare function getValue(key: string): any;
// return value of 'getValue' is not checked
//const str:string = getValue("myString");

//Void
function warnUser(): void {
  console.log("This is my warning message");
}

let unusable: void = undefined;
// OK if 'strictNullChecks'(tsconfig.json "compilerOptions") is not given
//unusable = null;

//Null and undefined
//Never
//Object
declare function create(o: object | null): void;
// create({ prop: 0 });
// create(null);

//create(42); Error

// Type assertions
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;

for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
   
     timer(i);
  }

  function timer (i : number){
    setTimeout(function () {
        console.log(i);
      }, 100 * i);
  }