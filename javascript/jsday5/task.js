

for (let day = 0; day <= 6; day++) {
switch(day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

}


// sum using function

function add(a,b){
    return a+b;
}
let num1=5;
let num2=50;

let sum = add(num1,num2);
console.log(sum);

// function yesari pani usegarna sakincha


let addd =(a,b)=>a+b;
let numm1=50;
let numm2=50;

let summ = add(numm1,numm2);
console.log(summ);

// odd and even

let x=7;
if(x%2==0){
    console.log("even")
}
else{
    console.log("odd")
}


const myfunction =(num) =>{
    if(num%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
};

myfunction(3);

// to find grade

const chemistry = 100;

if(chemistry<30){
    console.log("fail");
}else{
    console.log("pass")
}


const mygrade = () =>{
    if(percentage>=90){
        console.log("A");
    }else if(percetange>=80){
        console.log("B")
    }else if(percetange>=70){
        console.log("C")
    }else if(percetange>=60){
        console.log("D")
    }else{
        console.log("F")
    }      
};
mygrade(95);


// const subjects = [
//     { name: 'Math', marks: 95 },
//     { name: 'English', marks: 85 },
//     { name: 'Science', marks: 78 },
//     { name: 'History', marks: 65 },
//     { name: 'Art', marks: 50 }
// ];

// function gradesheet(marks){
//     if (marks >= 90) {
//         return 'A';
//     } else if (marks >= 80) {
//         return 'B';
//     } else if (marks >= 70) {
//         return 'C';
//     } else if (marks >= 60) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }

// const grade= gradesheet(subjects.marks);
// console.log(`${subjects.name}: ${subjects.marks}, ${grade}`);

