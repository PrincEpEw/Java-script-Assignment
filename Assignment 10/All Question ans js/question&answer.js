// Question1:email pattern 
let my_email = "reyazulislamprince@gmail.com";
let email_Pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
console.log(email_Pattern.test(my_email));

//  Question2: username pattern
let user_Name = "prince00";
let user_Name_Pattern = /^[a-zA-Z0-9]+$/;
console.log(user_Name_Pattern.test(user_Name));

// Question3: Bangladeshi phone number pattern
let phone_Number = "+8801718474941";
let phone_Number_Pattern = /^(01|8801|\+8801)[0-9]{9}$/;
console.log(phone_Number_Pattern.test(phone_Number));

//  Question4:password pattern
let password = 'usapew4321@#@#';

let pattern =  /^[a-zA-Z0-9!@#$%\^&*]{8,16}$/;

console.log(pattern.test(password));


//  Question5:zipcode pattern
let zipCode = "1202";
let zipCode_Pattern = /^\d{4}(-\d{4})?$/;
console.log(zipCode_Pattern.test(zipCode));