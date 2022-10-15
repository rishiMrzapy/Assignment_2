const vnu=require('readline-sync');
let a=vnu.questionInt("Enter a number======");
if(a>400&&a<500)
{
     if(a%2==0)
     {
        console.log(`${a}`," is evn")
     }
     else
     {
        console.log(`${a}`," is Odd")
     }
}
else
{
    console.log("Out of range")
}