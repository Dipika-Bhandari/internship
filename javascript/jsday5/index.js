
const math = 100;

if(math<50){
    console.log("fail");
}else{
    console.log("pass")
}



let a = 20;
if(a%2==0){
    console.log("even");
}
else{
    console.log("odd")
}


let x = 20;
let y = 10;
let extra;

extra = x;
x = y;
y = extra;

console.log(x);
console.log(y);


var num =""
for (let i=0; i<5; i++){
    num += "the number is"+i;"\n"
    console.log(num);

}

let j =5;
let pattern="";
for (let i = 1; i <= j; i++) {
    for (let num = 1; num <= i; num++) {
        pattern += "*";
     }
     pattern += "\n";
  }
  console.log(pattern);




