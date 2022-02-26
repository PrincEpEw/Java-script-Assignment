// GPA, CGPA, GRADE function for result publishing

function Master(){

    let height = parseInt(prompt('please Enter your Height with inch'))
    let weight = parseInt(prompt('please Enter your Weight'))
    
    this.BMI =()=>{
    
        return `Your BMI is: ${weight/(height*height)}`

    }

this.age =()=>{
    let year = parseInt(prompt('Please Enter Your Birthday Year:'))

return`Your Age: ${ 2021- year} years old `

}

this.cur=()=>{

let currencey1 = prompt('currencey');
let ammount1 =parseInt(prompt('amount')) ;
let currencey2 = parseInt(prompt('currencey'));
let ammount2 =parseInt(prompt('amount')) ;
let currencey3 = parseInt(prompt('currencey'));
let ammount3 =parseInt(prompt('amount')) ;
let currencey4 = parseInt(prompt('currencey'));
let ammount4 =parseInt(prompt('amount')) ;

    return (`BDT to USD ${ammount1} ${currencey1} = ${ammount1 * 84.85}

             BDT to CAD   ${ammount2} ${currencey2}  = ${ammount2 * 68.72}

             BDT to USD ${ammount3} ${currencey1} = ${ammount3 * 84.44}

             BDT to CAD   ${ammount4} ${currencey2}  = ${ammount4 * 68.65}`);
}
 this.agecall=()=>{
let age = prompt('Enter the age')

if(age <=10){
  return `you are childern`;
}else if (age <=20 ){
  return `you are tennagers`;
}else if (age <=50 ){
  return `you are younger`
}else if (age <=100){
  return `you are old`
}

}

 this.area=(type,length,width)=>{

    if(type == 'square'){
        return length * length;
    }else if (type == 'rectangle'){
        return length * width;
    }else if (type == "traingle"){
        return .5 * length * width;
    }
}
 

}

let master=new Master();
console.log(master.BMI());
console.log(master.age());
console.log(master.cur());
console.log(master.agecall());
console.log(master.area('square',100,50));
console.log(master.area('rectangle',80,40));
console.log(master.area('traingle',25,40));
