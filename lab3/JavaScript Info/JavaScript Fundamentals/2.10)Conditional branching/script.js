// 1)
//Yes it will because "0" in if returns true 
// 2)
let value = prompt('What is the "official" name of JavaScript?', '');
// <!DOCTYPE html>
// <html>
// <body>
//   <script>
//     'use strict';
    (value=='ECMAScript'?alert('Right!'):alert("You don't know? ECMAScript!"))      
//   </script>
// </body>
// </html>
//3)
let value1 = prompt('Type a number', 0);
if (value1 > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
    alert( 0 );
}
// 4)
let result = (a + b < 4) ? 'Below' : 'Over';
// 5)
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
