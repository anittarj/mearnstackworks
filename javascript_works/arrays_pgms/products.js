var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],
]

// print number of items in shop
var c=0;
var count=products.map((item)=>(item[0])?c=c+1:c)
// console.log(count);
console.log(c);

// print number of available items
var l=0;
var avail_products=products.map((item)=>(item[3]>0)?l+=1:l)
// console.log(avail_products);
console.log(l);

// print all product names only
var item_name=products.map((item)=>item[1]);
console.log(item_name);
