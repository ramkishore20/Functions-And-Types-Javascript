// //1) Even or Odd
// const check = (num) => {
//     if(num % 2 === 0){
//         return "Even";
        
//     }
//     else{
//         return "Odd";
        
//     }
// }

// console.log(check(4));
// console.log(check(7));
// console.log(check(0));

// // 2) Result Evaluator — Pass or Fail

// function evaluateResult(num){
//     if(num > 50 && num <=100){
//         return "pass";
        
//     }
//     else if(num<50 && num>=0){
//         return "Fail";
        
//     }
//     else{
//         console.log("Invalid Marks");
//         return null;
//     }
// }
// console.log(evaluateResult(75));
// console.log(evaluateResult(40));
// console.log(evaluateResult(120));

// // 3) Maximum Finder — Largest of Three Numbers

// const findMax = (num1,num2,num3) => {
//     if(num1 >= num2 && num1 >= num3){
//         return num1; 
//     }
//     else if(num2 >= num1 && num2 >= num3){
//         return num2;
//     }
//     else{
//         return num3;
//     }
// }

// console.log(findMax(10,25,15));
// console.log(findMax(5,3,8));
// console.log(findMax(9,9,2));


// // 4) Accumulator — Sum from 1 to N

// function sumToN(num){
//     let ans = 0;
//     for(let i=0;i<=num;i++){
//         ans += i;
//     }
//     return ans;
// }

// console.log(sumToN(5));
// console.log(sumToN(10));

// // 5) Multiplication Table Generator

// function printTable(num){
//     for(let i =1;i<=10;i++){
//         console.log(num+"x"+i+"="+num*i);
//    }
// }
// printTable(3);

// // 6) Digit Counter — Number Length Finder

// function countDigit(num){
//     let cnt = 0;
//     while(num>0){
//         num = Math.floor(num/10);
//         cnt++;
//     }
//     return cnt;
// }
// console.log(countDigit(1234));
// console.log(countDigit(9));
// console.log(countDigit(10000));

// // 7) Number Reverser

// function reverseNumber(num){
//     let reverse = 0;
//     while(num > 0){
//        let  digit = num%10;
//         reverse = reverse*10 +digit;
//         num = Math.floor(num/10); 
//     }
//     return reverse;
// }
// console.log(reverseNumber(1234));
// console.log(reverseNumber(500));
// console.log(reverseNumber(91));

// // 8) Factorial Engine

// function factorial(num){
//     let ans = 1;
//     for(i=num;i>0;i--){
//         ans = ans*i;
//     }
//     return ans;
// }

// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(1));

// // 9) Prime Validator

// function isPrime(num){
//     let cnt =0;
//     for(let i=1;i<=num;i++){
//         if(num % i === 0){
//             cnt++;
//         }
//     }
//     if(cnt>2){
//         return "False";
//     }
//     else{
//         return "True";
//     }
// }
// console.log(isPrime(7));
// console.log(isPrime(10));
// console.log(isPrime(2));


// // 10) Pattern Builder — Star Triangle

// function printPattern(num){
//     for(let i=0;i<num;i++){
//         let row = "";
//         for(let j = 0;j<=i;j++){
//             row += "*"
            
//         }
//         console.log(row);
        
//     }
// }
// printPattern(4);