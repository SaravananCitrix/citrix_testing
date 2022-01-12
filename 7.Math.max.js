const arr1=[20,30,50];
document.write(Math.max(...arr1));
// Spread operator used to pass array to a function and it will iterate over the array//
/*  OR  */


const arr2=[20,30,50];
var max=arr2.reduce(function(a,b){
return Math.max(a,b);
});
document.write(max);