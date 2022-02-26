let height = parseInt(prompt('please Enter your Height with inch'))
let weight = parseInt(prompt('please Enter your Weight'))

let BMI =()=>{

    return `Your BMI is: ${weight/(height*height)}`
}
console.log(BMI());