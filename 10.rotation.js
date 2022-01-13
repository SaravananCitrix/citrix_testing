var rotate = function(arr,k){
let tmp=0;
const length=arr.length;
k=k%length;
for(let i=0;i<k;i++)
{
tmp=arr.pop();
arr.unshift(tmp);
}
return arr;
}
rotate([2,3,4,5,7], 3);