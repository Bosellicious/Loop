/*Construct a loop that sorts the array [2,3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays: */

//a. Define an empty evens array to hold the even numbers and an odds array for the odd numbers.//


let nums = [2,3, 13, 18, -5, 38, -10, 11, 0, 104];
let evens = [];
let odds = [];





// b. In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate. //

for(let i = 0; i < nums.length; i++){
    if (nums[i] % 2 == 0){
        evens.push(nums[i]);
    }
    else{
        odds.push(nums[i]);
    }
}




//c. Print the arrays to confirm the results. Print evens first. Example:console.log(evens);
console.log('--------------------------------------------------------------------------------');

console.log(evens);

console.log('--------------------------------------------------------------------------------');

console.log(odds);
