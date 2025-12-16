
function countWord(str){
    let count={}         //{ "property":value  }
    for(let char of str){
        if(!count[char]){     
            count[char]=1
        }else{
            count[char]++
        }
    }
    return count
}

let str="aaabbcccdd";
console.log(countWord(str))


// let count = { h: 1, e: 1, l: 2, o: 1 }
// console.log(count['h'])