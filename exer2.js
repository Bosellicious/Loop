/* Initialise two variables to hold string 'LaunchCode' and the array [1, 5, 'LC101', 'blue', 42],
 then construct for loops to accomplish the following tasks:
 */ 
 console.log('--------------------------------------------------------------------------------');

let x = 'LaunchCode';
let y = [1, 5, 'LC101', 'blue', 42];

//  a. Print each element of the array to a new line.
for (let i = 0; i < y.length; i++){

    console.log(y[i]);

}


console.log('--------------------------------------------------------------------------------');

// b. print each character of the string ---- in reverse order---- to a new line.//

for(let i = x.length-1; i >= 0; i--){

    console.log(x[i]);
}