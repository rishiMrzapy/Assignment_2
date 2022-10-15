const vnu=require('readline-sync');
let a=vnu.question("Enter a character===== ")
//console.log("abh",a)
if((a=="a")||(a=="i")||(a=="e")||(a=="o")||(a=="u"))
{
    console.log(`${a}`," is vowel")
} 
else if(((a=="A")||(a=="B")||(a=="E")||(a=="O")||(a=="U")))
{
    console.log(`${a}`," is vowel")
}
else
{
    console.log(`${a}`," is consonent")
}