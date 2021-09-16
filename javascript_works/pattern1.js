// print the below pattern
// 111
// 222
// 333


var row=3,col=3;

for(let i=1;i<=r;i++)
{
    let str="";
    for(let j=1;j<=c;j++)
    {
        str+=i;
    }
    console.log(str);
}