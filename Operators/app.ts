// Operators


// 1. Arithematics Operations

// -Addition

let x:number = 5;
let y:number = 6;
let add:number = x + y;

console.log(add);

// -Subtract

let a:number = 45;
let b :number = 15;
let sub:number = a-b;

console.log(sub);

// - Multiplication

let c:number = 11;
let d :number = 11;
let multiply:number = 11*11;

console.log(multiply);

// - Division

let e:number = 100;
let f:number = 10;
let divided:number = 100/10;

console.log(divided);

// - Modulus

let g:number = 79;
let h:number = 10;
let modulus:number = 79 % 10;

console.log(modulus);

//  - Exponential

let i:number = 10;
let j:number = 10;
let exponential:number = 10 ** 10;

console.log(exponential);

// 2. Comparison Operators

// - Greater than
let num1:number = 35;
let num2:number = 54;

console.log(num1>num2);

// - Less than
let num3:number = 55;
let num4:number = 45;

console.log(num4<num3);

// - Equal to

let num5:number = 27;
let num6:number = 26.99;

console.log(num5 === num6);

// - Unequal to 

let num7:number =45;
let num8:number = 44.99;

console.log(num7 !== num8);

// - Greater than or Equals to

let num9:number = 27.99;
let num10:number = 26.99;

console.log(num9 >= num10);

// - Less than or Equals to

let num11:number = 30;
let num12:number = 31.99;

console.log(num11 <= num12);

// 3. Logical Operators

// - AND Operator

let IsBoolean:boolean = true ;
let IsBoolean1:boolean = false;

console.log(IsBoolean && IsBoolean1);

// - OR Operator

let IsBoolean2:boolean = true ;
let IsBoolean3:boolean = false;

console.log(IsBoolean2 || IsBoolean3);

// - NOT Operator
    let IsAlive = false;
    let IsnotAlive = "Is Alive"
    console.log(!IsnotAlive);

// 4. Assignment Operators

// - Assinment operator

let Vi:number = 15;
let Vf:number= Vi;

console.log(Vi);
console.log(Vf);

// - Addition operator

let mark1:number = 10;
let mark2:number = (mark1 += 5);

console.log(mark1);
console.log(mark2);

// - Subtraction operator

let mark3:number = 13;
let mark4:number = (mark3 -= 5);

console.log(mark3);
console.log(mark4);

// - Multiplication operator

let mark5:number = 27;
let mark6:number = (mark5 *= 2);

console.log(mark5);
console.log(mark6);

// - Division operator

let mark7:number = 35;
let mark8:number = (mark7 /= 7);

console.log(mark7);
console.log(mark8);

// - Modulus operator
let mark9:number = 99;
let mark10:number = (mark9 %= 5);

console.log(mark9);
console.log(mark10);

// - Exponentiation operator
let mark11:number = 12;
let mark12:number = (mark11 **= 2);

console.log(mark11);
console.log(mark12);


// 5. Unary Operators: 

    // - Unary Plus (+)
let code1:number = 35;
console.log(+code1);

    // - Unary Minus (-)
let code2:number = 54;
console.log(-code2);

    // - Logical NOT (!)
let code3:boolean = true;
console.log(!code3);
    
// -Prefix increment operator(++x)

let no:number = 3;
console.log(++no);

// - Prefix decrement operator(--x)

let no1:number = 6;
console.log(--no1);
// - Postfix increment operator(x++)

let no2:number = 7;
console.log(no2++);
console.log(no2++);

// - Postfix decrement operator(x--)

let no3:number = 15;
console.log(no3--);
console.log(no3--);

// 6. Ternary Operator

//  - Conditional Operator
let age:number = 18;
let isAdult:boolean = (age >= 18)? true : false;
console.log(isAdult);



