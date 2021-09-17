// create a function primeNumbs(lowlimit,upperlimit) where it prints the prime numbers btw lower & upper


function primeNumbs(lowlimit,upperlimit)
{
    var count=0,i;
    for (i=lowlimit;i<=upperlimit;i++) 
    {
        for (let j=2;j<i;j++) 
        {
            if (i%j==0) 
            {
                count++;
                break;
            }
        if (count==0) 
        {
            return i;
        }
        }
    }
}

console.log(primeNumbs(4,29))