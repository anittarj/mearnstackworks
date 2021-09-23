// nested array

var accounts = [
    [1000, "Ram", 150000, "savings"],
    [1001, "Ravi", 49990, "current"],
    [1002, "Aarav", 90333, "savings"],
    [1003, "Priya", 33000, "current"]
]

console.log(`ac_names`);
for (let account of accounts) {
    console.log(account[1]);
}

console.log(`print names whose balance is greater than 20000`);
for (let account of accounts){
    if(account[2]>20000){
        console.log(account[3]);
    }
}

// print the number of accounts with savings account


