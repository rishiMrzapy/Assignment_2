const vnu=require('readline-sync')
let a=vnu.questionInt("Enter year here ===  ");
if(a%400==0)
{
    console.log(`${a}`," is Leap year");
}
 else if(a%100==0)
{
    console.log(`${a}`," is Leap year");
} 
else if(a%4==0)
{
    console.log(`${a}`," is Leap year");
}
else
{
    console.log(`${a}`," is not a leap year");
}