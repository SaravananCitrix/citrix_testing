let arr1=[10,20,30,50];
function add(arr1)
{
if(arr1.length == 1)
return arr1[0];
return arr1[0]+add(arr1.slice(1));
}
document.write(add(arr1));