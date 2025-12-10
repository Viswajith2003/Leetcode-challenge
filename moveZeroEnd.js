arr = [1, 0, 7, 0, 8];
let count=0;
let res=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        [arr[i],arr[count]]=[arr[count],arr[i]]      // 0,1,7,0,8
        count++;
        // res[count++]=arr[i];  //   [1,7,8,]
    }
}
console.log(arr)
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==0){
//         res[count++]=0;  //   [1,7,8,0,0]
//     }
// }
// console.log(res)

// for(let i=0;i<arr.length;i++){
//     if(arr[i]==0){
//         res[arr]
//     }
// }
// while(count<arr.length){   3<5
//     arr[count++]=0
// }


// console.log(arr);

