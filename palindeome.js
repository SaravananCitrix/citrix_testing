function pal(str)
{
    var j=str.length-1;
    for(let i=0;i<j/2;i++)
    {
        var x=str[i];
        var y=str[j-1];
        if(x!=y)
        {
            return false;
        }
    }
    return true;
}
function is_pal(str)
{
    var ans=pal(str);
    if(ans == true)
    {
        document.write("string is palindrome");
    }
    else{
        document.write("string is not palindrome");
    }
    }
var test= "racecar";
is_pal(test);
    


        
        
    
