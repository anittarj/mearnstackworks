// datastructures
// Array
// objects


// defined using []
// size not fixed
// can store same and different types of object/data
// insertion order preserved
// fetching array elements index
// array indexing starts from 0th location

// array declaration format
var expenses = [100, 200, 300, 5000]
console.log(expenses);

// print jan expense
// console.log(expenses[0]);

// iterating through array
// for (let i = 0; i < expenses.length; i++) {
//     console.log(expenses[i]);
// }

//  how to retrive using "of"
// var total=0;
// for(let amount of expenses){
//     total+=amount;
// }
// console.log(total);

// print those expenses greater than 150
// for(let amount of expenses){
//     if(amount<150){
//         console.log(amount);
//     }
// }

// add 3000 rs more with feb exp
// expenses[1]+=3000;
// console.log(expenses);

// *use strict*

// insertion happens at the end
// insert july expenses 
// expenses.push(2000)
// console.log(expenses);

// update jan as expense of jan + feb

// expenses[0]=expenses[0]+200;
// console.log(expenses);

// expenses.push(496895869);

// console.log(expenses);

// remove an item from the end 
expenses.pop();
console.log(expenses);

