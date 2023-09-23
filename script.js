//Question 1
//Task 1
console.log("Numbers upto 10:")
for(let i=1;i<=10;i++)
{
    console.log(i);
}

//Task 2
console.log("Even numbers upto 20:")
for (i=1;i<=20;i++)
{
  if(i%2==0){
    console.log(i)
  }
}

//Task 3
let firstNum=0;
let secondNum=1;

console.log("Fibonacci Series:");
console.log(firstNum); 
console.log(secondNum); 

nextTerm = firstNum + secondNum;

while (nextTerm <= 20) 
{
    console.log(nextTerm);

    firstNum = secondNum;
    secondNum = nextTerm;
    nextTerm = firstNum+secondNum;
}

//Task 4
userInput=prompt("Enter a number");
for(i=1;i<=10;i++)
{
    let result=userInput*i
    console.log(`${userInput}*${i}=${result}`)
}

//Question 2
//Task 1
const dolphinsScore1 = 96 + 108 + 89;
const koalasScore1 = 88 + 91 + 110;

const dolphinsScore2 = 97 + 112 + 101;
const koalasScore2 = 109 + 95 + 123;

const dolphinsScore3 = 97 + 112 + 101;
const koalasScore3 = 109 + 95 + 106;

const dolphinsAvg1 = dolphinsScore1 / 3;
const koalasAvg1 = koalasScore1 / 3;

const dolphinsAvg2 = dolphinsScore2 / 3;
const koalasAvg2 = koalasScore2 / 3;

const dolphinsAvg3 = dolphinsScore3 / 3;
const koalasAvg3 = koalasScore3 / 3;

console.log("Data 1:");
if (dolphinsAvg1 > koalasAvg1) {
  console.log("Dolphins win!");
} else if (koalasAvg1 > dolphinsAvg1) {
  console.log("Koalas win!");
} else {
  console.log("It's a draw!");
}

console.log("\nData 2:");
if (dolphinsAvg2 > koalasAvg2) {
  console.log("Dolphins win!");
} else if (koalasAvg2 > dolphinsAvg2) {
  console.log("Koalas win!");
} else {
  console.log("It's a draw!");
}

console.log("\nData 3:");
if (dolphinsAvg3 > koalasAvg3) {
  console.log("Dolphins win!");
} else if (koalasAvg3 > dolphinsAvg3) {
  console.log("Koalas win!");
} else {
  console.log("It's a draw!");
}
