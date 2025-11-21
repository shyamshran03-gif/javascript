// 20-11-2025
// 1. Range After Transformation
// Task: Add index * 2 to each element, then find min–max difference.
// Input:  [3, 7, 1, 9]
// Step:   [3+0, 7+2, 1+4, 9+6] → [3, 9, 5, 15]
// Min = 3, Max = 15 → Difference = 12
// Output: 12

//let arr = [3, 7, 1, 9];
// let arr2 = arr.map((item, index)=>{
//     return item+index*2; 
// })
// console.log(arr2);
//min & max method
//    let min = Math.min(...arr2);
// console.log("arr2 min= ",min);
//     let max = Math.max(...arr2);
// console.log("arr2 max= ",max);

// let diff = max-min;
// console.log("output= ",diff);
// sort method
// let min = arr2.sort((a,b)=>a-b);
// console.log("arr2 min= ",min);
// let small = min[0]
// console.log (small)
// let large =min[min.length-1]
// console.log(large)
// let diff = large - small
// console.log(diff);


// Task 2: Character frequencies & most frequent key.
// Input:  "banana"
// Frequencies: { b:1, a:3, n:2 }
// Most frequent: "a"
// Output: { b:1, a:3, n:2 }, most = "a"

// let str = "bananas"
// let arr = str.split("");
// let js ={}
// let maxCount = 0, maxChar = null;

// arr = arr.map((item, index)=>{
//         if(js[item]){
//             js[item]=js[item]+1;
//                 if(maxCount<js[item]){
//             maxCount=js[item];
//             maxChar=item;
//         }
//             }
//         else{
//             js[item]=1;
//             if(maxCount==0){
//             maxCount=1;
//             maxChar=item;
//             }
//         }
// })
// console.log(js, maxChar, maxCount)

// let minCount = 0, minChar = null;
// arr= arr.map((item, index)=>{
//         if(js[item]){
//              js[item]=js[item]+1;
//                 if(minCount>js[item]){
//             minCount=js[item];
//             minChar=item;
//         }
//             }
//         else{
//             js[item]=1;
//             if(minCount==0){
//             minCount=1;
//             minChar=item;
//             }
//         }

// })
// console.log(js, minChar, minCount)


// 21-11-2025

// Task 1 - Find the Non-Repeating Character
// Input: "swiss"
// Output: "w

// let input = "swiss"
// let arr = input.split("")
// console.log();

// let js = {};
// let nonRepChar = null, nonRepCont = 0;

// arr = arr.map((item, index)=>{
//     if(js[item]){
//         js[item] = js[item]+1
//         nonRepCont>js[item]
//         nonRepCont = js[item]
//         nonRepChar = item;
//     }
//     else{
//         js[item]=1;
//         nonRepChar=js[item]
//         nonRepCont=1
//     }
// });

// console.log("Not Repeating Character = ", nonRepChar);

// Task 2 - Frequency of All Characters
// Input: "hello world"
// Output: { h:1, e:1, l:3, o:2, w:1, r:1, d:1 }

// let input = "hello world";
// let arr = input.split("");
// console.log(arr);

// let js = {};

// arr = arr.map((item, index)=>{
//     if(js[item]){
//         js[item] = js[item]+1
//     }
//     else{
//         js[item]=1;
//     }
// });
// console.log(js);

// Task 3 - Find the Longest Common Prefix 
// Input: ["flower", "flow", "flight"]
// Output: "fl"

// Task 4 - Group Words by Their Length
// Input: ["cat","apple","dog","mango"]
// Output:
// {
//   3: ["cat","dog"],
//   5: ["apple","mango"]
// }

// let arr = ["cat","apple","dog","mango"];
// let three = arr.filter((item)=>{
//     return item.length<=3;
// })
// console.log("3: ",three);
// let five = arr.filter((item)=>{
//     return item.length>=5
// })
// console.log("5: ",five);

// Task 5 - Print Elements at Even Index Positions
// Input: [10,20,30,40]
// Output: [10,30]

// let arr = [10, 20, 30, 40];
// let even = arr.filter((item, index) => {
//     return index % 2 == 0;
// });

// console.log(even);


// Task 6 - Count How Many Elements Are Greater Than the Average
// Input: [1,2,3,4,5]
// Output: 2 (4 and 5)

// let arr = [1,2,3,4,5]

// let tot = arr.reduce((acc, cur)=>{
//     return acc+cur
// },0);
// console.log("Total element: ",tot);

// let avg = tot / arr.length
// console.log("AVerage element: ",avg);

// let Greater = arr.filter((item, index)=>{
//     return item>avg
// });
// console.log("Greater than Average element: ",Greater);

// let count = Greater.length;
// console.log("Count of greater element: ",count);


// Task 7 - Repeat Each Element N Times
// Input: [1,2], n=3
// Output: [1,1,1,2,2,2]

// let arr = [1, 2], n = 3;
// let result = [];

// for (let i = 0; i < arr.length * n; i++) {
//     let index = Math.floor(i / n);
//     result.push(arr[index]);
// }

// console.log(result);


// Task 8 - Group Array Elements by Odd & Even
// Input: [1,2,3,4,5,6]
// Output:{
//   odd:[1,3,5],
//   even:[2,4,6]
// }

// let input = [1, 2, 3, 4, 5, 6];
// let even = input.filter((item, index) => {
//     return item % 2 == 0
// });
// // console.log("even= ",even);
// let odd = input.filter((item, index) => {
//     return item % 2 != 0
// });
// // console.log("odd= ",odd);
// let result = {
//     odd: odd,
//     even: even
// };
// console.log(result);