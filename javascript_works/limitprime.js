// lower=4 upper=25 
// print all the orime numbers between lower and upper limits

var lowerlimit=4,upperlimit=25,count=0;
for(let i=2;i<upperlimit;i++)
{
    console.log(`prime numbers between`,lowerlimit,`and`,upperlimit,`are:`);
    if(lowerlimit%i==0)
    {
        count++;
    }
}
console.log(count==0?`prime`:`not prime`);