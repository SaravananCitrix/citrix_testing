let nums = [11, 22, 33, 46, 75, 86, 97, 98];
function reduced(x){
return x%2==0;}
const num=nums.filter(reduced);
const squaredEvenNos=num.map((y)=>y*y);

document.write(squaredEvenNos);
const sum=nums.reduce((x,y)=>x+y);

document.write(sum);