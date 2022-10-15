const vnu=require('readline-sync');
let a=vnu.questionInt("Entr 1st number  == ") 
let b=vnu.questionInt("Entr 2nd number  == ")
let c=vnu.questionInt("Entr 3rd number  == ")
let d=vnu.questionInt("Entr 4th number  == ")
if((a==b)&&(b==c)&&(c==d))
 {
     console.log(`${a},${b},${c},${d}`," are eqauls");
 }
 else{
if(a>b&&a>c&&a>d)
{
    console.log(`${a}`,"is largest")
}
else if(b>c&&b>d)
{
    console.log(`${b}`," is Greater");
}
else if(c>d)
{
    console.log(`${c}`,"is Greater");
}

else
{
    console.log(`${d}`," is Greater");
}
 }