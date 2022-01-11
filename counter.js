today=new Date();

var abc=new Date(today.getFullYear(), 12,21);
if(today.getMonth()==01 && today.getDate()>09)
{
    abc.setFullYear(abc.getFullYear()+1);
}
var one_day=1000*60*60*24;
console.log(Math.ceil((abc.getTime()-today.getTime())/(one_day)));