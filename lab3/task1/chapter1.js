alert("abcd");

prompt("abcd");

let abcd=prompt("abcd");
console.log(abcd);


let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}


let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );


let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}