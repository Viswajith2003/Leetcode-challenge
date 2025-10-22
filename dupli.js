let arr=[1,4,2,1,3,2,6]

let current=new Set()
let dupli=new Set()

for(let num of arr){
    if(current.has(num)){
        dupli.add(num);
    }else{
        current.add(num);
    }
}

console.log("Uniq elements :"+[...current]);
console.log("Duplicate elements :"+[...dupli]);
