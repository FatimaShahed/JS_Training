const GFG = {
    article:"javascript",
    date:"30/05/2022"
    }
    
const gfg1=GFG  //shallow copy
gfg1.article="react";

console.log(gfg1);
console.log(GFG);

gfg2=Object.assign({},gfg1); //deep copy
gfg3={...gfg1} //deep copy
gfg2.article="typescript";

console.log(gfg2);
console.log(gfg1);
console.log(GFG);

var arr1=[1,2,[2,5,[6]]]
arr2= {...arr1}

arr2[1]=22
arr2[2]={...arr1[2]} //deep copy
arr2[2][1]=55   
console.log(arr1,arr2)