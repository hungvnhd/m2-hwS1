//Ex3
// var age = 20;
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";

// // Function declaration
// function calAge(year) {
//   return 2022 - year;
// }//trả về giá trị 27

// // Function expression
// var getFullName = function (firstName, lastName) {
//   return `${firstName} ${lastName}`;
// };

//Ex4
// console.log(`1. ${age}`); // undefined
// var age = 20;
// console.log(`2. ${age}`); // 20

// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";

// console.log(`3. ${calAge(yearOfBirth)}`); //27
// //Function declaration
// function calAge(year) {
//   return 2022 - year;
// }

// console.log(`4. ${calAge(yearOfBirth)}`); //27
// // console.log(`5. ${getFullName(firstName, lastName)}`);
// //Function ẽpression
// var getFullName = function (firstName, lastName) {
//   return `$(firstName) $(lastName)`;
// };
// console.log(`6. ${getFullName(firstName, lastName)}`);

//Ex5
// console.log(age); //not defined

let age = 27;
console.log(age); //27

{
  console.log(firstName); // not defined
  console.log(lastName); // not defined
  console.log(age); //27

  let firstName = "Peter";
  let lastName = "Parker";
  const job = "Spider man";

  console.log(firstName); //peter
  console.log(lastName); //parker
  console.log(job); //spider man
}

//Ex6
// a = 2;
// var a;
// console.log(a);
//Giá trị in ra màn hình là 2
//Giải thích khi khai báo a mà không định nghĩa kiểu dữ liệu, máy sẽ mặc định biến này là global variable
//máy sẽ nhảy qua câu lệnh var a để thực hiện in ra a

//Ex7
// console.log(a);
// var a = 2;
//Trả về là undefined do var nó sẽ hiểu là biến global nhưng chưa đến câu lệnh gán giá trị
// nên sau khi thực hiện câu lệnh in ra nó ms bắt đầu gán giá trị 2

//Ex8
// var a = 10;
// function foo() {
//   var a;
//   console.log(a);
//   a = 2;
// }
// foo();
//Trả về giá trị undefined vì khi vào function nó cũng có một biến var a mới
//Điều này khiến cho a chưa có giá trị và đc gán undefined sau khi in thì mới được gán a =2

//Ex9
// foo();
// var foo();
// function foo(){
//     console.log(1);
// }

// foo = function() {
//     console.log(2);
// }
//lỗi

//Ex10
// var foo();
// function foo(){
//     console.log(1);
// }
// foo = function() {
//     console.log(2);
// }
// foo();
//lỗi

//Ex11
// function removeEnd(arr,n) {
//     arr.splice(arr.length-1,n);
// }

//Ex12
// function first (arr, n) {
//     for (let i = 0;i<=n;i=i+1){
//         console.log(arr[i]);
//     }
// }

//Ex13
const users = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

users;
