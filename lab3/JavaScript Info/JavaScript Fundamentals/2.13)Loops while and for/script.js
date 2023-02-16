// 1)
let i = 3;

while (i) {
  alert( i-- );
} // answer is 1
// 2)
// let i = 0;
// while (++i < 5) alert( i );
// let i = 0;
// while (i++ < 5) alert( i ); 
//No they don't
// 3)
for (let i = 0; i < 5; ++i) alert( i ); // from 0 to 4
// 4)
// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
//}
//5)
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
