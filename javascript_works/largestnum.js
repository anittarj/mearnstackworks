/*var num1=70,num2=70;
if(num1>num2){
    console.log(num1,`is the largest number`);
}
else if(num1<num2){
    console.log(num2,`is the largest number`);
}
else{
    console.log(`both are equal`);
}*/

/*var num1=70,num2=70,num3=30;
if((num1>num2)&(num1>num3)){
    console.log(num1,`is the largest number`);
}
else if((num1<num2)&(num2>num3)){
    console.log(num2,`is the largest number`);
}
else if (num1<num3)&(num2<num3)){
    console.log(num3,`is the largest number`);
}
else{
    console.log(`all are equal`);
}*/

//  second largest number from three numbers without using predefined methode or arrys


var num1=3,num2=8,num3=29;
if((num1>=num2) && (num1>=num3))
{
    if(num2>num3){
        console.log(num2,`is the secind largest number`);
    }
    else{
        console.log(num3,`is the second largest number`);
    }
}
else if((num2>=num1) && (num2>=num3))
{
    if(num1>num3){
        console.log(num1,`is the second largest number`);
    }
    else{
        console.log(num3,`is the second largest number`);
    }
}
else if((num2>=num1) && (num2>=num3))
{
    if(num3>num1){
        console.log(num3,`is the second largest number`);
    }
}
else if((num3>num1) && (num3>num2))
{
        if(num1>num2)
        {
            console.log(num1,`is the second largest number`);
        }
        else
        {
            console.log(num2,`is the second largest number`);
        }
}     
