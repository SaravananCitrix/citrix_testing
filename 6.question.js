var arr1=[1,2,3,4,5,6,7,8,9,10];
const resArr=arr1.filter(checkOdd);
function checkOdd(odd)
{
return (odd%2!=0);
}
consol.log(resArr);




var arr1=[1,2,3,4,5,6,7,8,9,10];
const arr2=arr1.filter(function(x)
{
return((x % 2 == 0) || (x % 5 == 0));

});
document.write(arr2);




var arr1=[1,2,3,4,5,6,7,8,9,10];
const arr2=arr1.map((x)=>{
return x % 3 == 0 ? x*x : null;
});
document.write(arr2);





var arr1=[1,2,3,4,5,6,7,8,9,10];

function reduced(x){
return x%5==0;}
const num=arr1.filter(reduced);
const square=num.map((y)=>y*y);

document.write(square);
const sum=square.reduce((x,y)=>x+y);

document.write(sum);