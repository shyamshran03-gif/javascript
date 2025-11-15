// Task 1 – Count Words in a Sentence
// Write a program to count how many words are in this sentence:
// "JavaScript is a powerful programming language"

// Expected Output: 6

// let word = "JavaScript is a powerful programming language";
// let wordsplit = word.split(" ");
// console.log(wordsplit);
// let wordarray = wordsplit.length;
// console.log(wordarray);

// Task 2 – Find All Words Containing 'a'
// Given an array:
// ["apple", "banana", "kiwi", "grapes", "mango"]
// Display only the words that contain the letter 'a'.

// Expected Output: ["apple", "banana", "grapes", "mango"]

// let array = ["apple", "banana", "kiwi", "grapes", "mango"];
// array = array.filter(item =>{
//     return item.includes("a") // return item.indexOf("a") !== -1;
// })
// console.log(array);

// Task 3 – Title Case Conversion
// Convert "welcome to javascript class" into "Welcome To Javascript Class".

//Expected Output: Welcome To Javascript Class

// let sentence = "welcome to javascript class";
// sentence =  sentence.toUpperCase();
// console.log(sentence); 
// ans = WELCOME TO JAVASCRIPT CLASS

//Task 4 – Count a Specific Letter
//Count how many times the letter "a" appears in the word "banana".

//Expected Output: 3

// let word = "banana";
// let count = 0;
// for (i = 0;i<word.length;i++){
//     if(word[i] == "a"){
//         count++
//     }
// }
// console.log (count);

// Task 5 – Reverse Each Word
// Reverse each word in this sentence:
// "I love JavaScript"

// Expected Output: I evol tpircSavaJ

// let sentence = "I love JavaScript";
// let words = sentence.split(" ");
// let reversedWords = words.map((item, value) =>{ 
//     return item.split("").reverse().join("")
// });
// console.log(reversedWords.join(" "));

// Task 6 – Filter Words by Length
// Display all words having more than 4 letters from this array:
// ["code", "developer", "web", "frontend", "ui"]
// Expected Output: ["developer", "frontend"]

// let words = ["code", "developer", "web", "frontend", "ui"];
// words = words.filter(item=>{
//         return item.length >4
// });
// console.log(words);

// Task 7 – Replace a Word Manually
// Without using replace(), change "I like Java" to "I like JavaScript".

// Expected Output: "I like JavaScript"

// let sentence = "I like Java";
// full = sentence + "Script"
// console.log(full);

// let sent = "I like Java";
// sent = sent.replace("Java", "JavaScript"); //sent = sent.replaceAll("Java", "JavaScript");
// console.log(sent);

// Task 8 – Check if a Sentence Contains a Word (Case-insensitive)
// Input: "I Am Learning React"
// Check if it contains the word "react"

// Expected Output: true

// let sent = "I Am Learning React";
// let lower = sent.toLowerCase();
// console.log(lower);
// let check = lower.includes("react");
// console.log(check);

// Task 9 – Shorten a Sentence
// Take "JavaScript is the best language" and display only the first 3 words.

// Expected Output: JavaScript is the

// let sent = "JavaScript is the best language";
// let str = sent.split(" ");
// final = str.slice(0, 3).join(" ");
// console.log(final);


// Task 10 – Reverse Word Order
// Reverse the order of words in "Coding is really fun".
// Expected Output: fun really is Coding

// let str = "Coding is really fun";
// let split = str.split(" ");
// console.log(split);
// let reverse = split.reverse();
// console.log(reverse);

// Task 11 – Find Longest Word
// From "React is a frontend library", find the longest word.

// Expected Output: frontend

// let str = "React is a frontend library";

// let words = str.split(" ");     


// Task 12 – Filter & Uppercase Combined
// From ["html", "css", "javascript", "react", "node"],
// show only words longer than 4 letters and convert them to uppercase.

// Expected Output: ["JAVASCRIPT", "REACT"]

// let str = ["html", "css", "javascript", "react", "node"];
// str = str.filter((item, value)=>{
//     return item.length>4;
// });
// console.log(str);

// let upper = str.map((item, value)=>{
//     return item.toUpperCase();
// });
// console.log(upper);

// Task 13 – Find Index of Word
// Find the position of "react" in the array:
// ["html", "css", "javascript", "react", "node"]
// Expected Output: 3

// let str = ["html", "css", "javascript", "react", "node"];
// let position = str.indexOf("react");
// console.log(position);

// Task 14 – Format Sentence Properly
// Input: " javascript IS fun "
// Trim spaces and make it "Javascript is fun" 

// let str = " javascript IS fun ";
// let format = str.trim();
// console.log(format);
// format = format.toLowerCase();
// console.log(format);

// Task 15 – Create Secret Message
// Convert "HELLO WORLD" → "DLROW OLLEH" (reverse and keep uppercase).

// Expected Output: DLROW OLLEH

// let str = "HELLO WORLD";
// let ans = str.split("");
// console.log(ans);

// let rev = ans.reverse();
// console.log(rev);

// let final = rev.join("");
// console.log(final);


doubt on 3 and 11