// arr1=[10,20,21,22] & arr2=[11,12,20,21]
// print the common elements from both the arrays 

var arr1 = [10, 20, 21, 22]
var arr2 = [11, 12, 20, 21]
console.log(`common elemets from`, arr1, `and`, arr2, `are:`);
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      console.log(arr1[i]);
    }
  }
}