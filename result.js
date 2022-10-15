const vnu=require('readline-sync')
let a=vnu.questionInt("Enter marks for Subject_1st===");
let b=vnu.questionInt("Enter marks for Subject_2nd===");
let c=vnu.questionInt("Enter marks for Subject_3rd===");
let d=vnu.questionInt("Enter marks for Subject_4th===");
let e=vnu.questionInt("Enter marks for Subject_5th===");
if((a>0&&a<100)&&(b>0&&b<100)&&(c>0&&c<100)&&(d>0&&d<100)&&(e>0&&e<100)){
let total=a+b+c+d+e;
let percent=(total/500)*100;
//if(percent>0&&percent<100){
if(0<percent&&percent<33)
{
     console.log("=================Re-apear nd you get==",`${percent}`,"% marks")
}
else if(33<percent&&percent<60)
{
   console.log("====================Qualify nd you get==",`${percent}`,"% marks")
}
else if(60<percent&&percent<100)
{
    console.log("=====================merit nd you get==",`${percent}`,"% marks")
}
else
{
    console.log("=====================fail nd you get==",`${percent}`,"% marks")
}
//}
//else
//{
    //console.log("You Can not enter marks greater than 100")
//}
}
else{
    console.log("\n you can not enter marks of any subject greater than 100 nd less then 0")
}