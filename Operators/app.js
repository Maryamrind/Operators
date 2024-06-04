// Operators
// 1. Arithematics Operations
// -Addition
var x = 5;
var y = 6;
var add = x + y;
console.log(add);
// -Subtract
var a = 45;
var b = 15;
var sub = a - b;
console.log(sub);
// - Multiplication
var c = 11;
var d = 11;
var multiply = 11 * 11;
console.log(multiply);
// - Division
var e = 100;
var f = 10;
var divided = 100 / 10;
console.log(divided);
// - Modulus
var g = 79;
var h = 10;
var modulus = 79 % 10;
console.log(modulus);
//  - Exponential
var i = 10;
var j = 10;
var exponential = Math.pow(10, 10);
console.log(exponential);
// 2. Comparison Operators
// - Greater than
var num1 = 35;
var num2 = 54;
console.log(num1 > num2);
// - Less than
var num3 = 55;
var num4 = 45;
console.log(num4 < num3);
// - Equal to
var num5 = 27;
var num6 = 26.99;
console.log(num5 === num6);
// - Unequal to 
var num7 = 45;
var num8 = 44.99;
console.log(num7 !== num8);
// - Greater than or Equals to
var num9 = 27.99;
var num10 = 26.99;
console.log(num9 >= num10);
// - Less than or Equals to
var num11 = 30;
var num12 = 31.99;
console.log(num11 <= num12);
// 3. Logical Operators
// - AND Operator
var IsBoolean = true;
var IsBoolean1 = false;
console.log(IsBoolean && IsBoolean1);
// - OR Operator
var IsBoolean2 = true;
var IsBoolean3 = false;
console.log(IsBoolean2 || IsBoolean3);
// - NOT Operator
var IsAlive = false;
var IsnotAlive = "Is Alive";
console.log(!IsnotAlive);
// 4. Assignment Operators
// - Assinment operator
var Vi = 15;
var Vf = Vi;
console.log(Vi);
console.log(Vf);
// - Addition operator
var mark1 = 10;
var mark2 = (mark1 += 5);
console.log(mark1);
console.log(mark2);
// - Subtraction operator
var mark3 = 13;
var mark4 = (mark3 -= 5);
console.log(mark3);
console.log(mark4);
// - Multiplication operator
var mark5 = 27;
var mark6 = (mark5 *= 2);
console.log(mark5);
console.log(mark6);
// - Division operator
var mark7 = 35;
var mark8 = (mark7 /= 7);
console.log(mark7);
console.log(mark8);
// - Modulus operator
var mark9 = 99;
var mark10 = (mark9 %= 5);
console.log(mark9);
console.log(mark10);
// - Exponentiation operator
var mark11 = 12;
var mark12 = (mark11 = Math.pow(mark11, 2));
console.log(mark11);
console.log(mark12);
// 5. Unary Operators: 
// - Unary Plus (+)
var code1 = 35;
console.log(+code1);
// - Unary Minus (-)
var code2 = 54;
console.log(-code2);
// - Logical NOT (!)
var code3 = true;
console.log(!code3);
// -Prefix increment operator(++x)
var no = 3;
console.log(++no);
// - Prefix decrement operator(--x)
var no1 = 6;
console.log(--no1);
// - Postfix increment operator(x++)
var no2 = 7;
console.log(no2++);
console.log(no2++);
// - Postfix decrement operator(x--)
var no3 = 15;
console.log(no3--);
console.log(no3--);
// 6. Ternary Operator
var age = 18;
var isAdult = (age >= 18) ? true : false;
console.log(isAdult);
