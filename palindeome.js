
 function check_palindrome( str )
 {
   let j = str.length -1;
   for( let i = 0 ; i < j/2 ;i++)
   {
     let x = str[i] ;
     let y = str[j-i];
     if( x != y)
     {
       
       return false;
     }
   }
   
   return true;
    
 }

 
 function is_palindrome( str )
 {
   
   let ans = check_palindrome(str);
   
   if( ans == true )
   {
     console.log("passed string is palindrome ");
   }
   else
   {
     console.log("passed string not a palindrome");
   }
 }
 
 let test = "karthik";
 is_palindrome(test);
