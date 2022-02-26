
let currencey1 = prompt('currencey');


let ammount1 =parseInt(prompt('amount')) ;
let currencey2 = parseInt(prompt('currencey'));
let ammount2 =parseInt(prompt('amount')) ;
let currencey3 = parseInt(prompt('currencey'));
let ammount3 =parseInt(prompt('amount')) ;
let currencey4 = parseInt(prompt('currencey'));
let ammount4 =parseInt(prompt('amount')) ;




   var cur=()=>{

    return  (` BDT to USD ${ammount1} ${currencey1} = ${ammount1 * 84.85}

             BDT to CAD   ${ammount2} ${currencey2}  = ${ammount2 * 68.72}

             BDT to USD ${ammount3} ${currencey1} = ${ammount3 * 84.44}

             BDT to CAD   ${ammount4} ${currencey2}  = ${ammount4 * 68.65}
          

             
`);
}

console.log(cur());
