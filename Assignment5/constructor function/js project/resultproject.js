


function Company(){

// grade calculation

    this.grade = (marks)=>{

    let grade;

    if(marks>=0 && marks <=32){
        grade = 'F';
    }
    if(marks>=33 && marks <40){
        grade = 'D';
    }
    if(marks>=40 && marks <50){
        grade = 'C';
    }
    if(marks>=50 && marks <60){
        grade = 'B';
    }
    if(marks>=60 && marks <70){
        grade = 'A-';
    }
    if(marks>=70 && marks <80){
        grade = 'A';
    }
    if(marks>=80 && marks <=100){
        grade = 'A+';
    }
    return grade;
 }


    // cgpa calculation

    this.cgpa =(bangla,english,math,physics,chemistry,biology,religion,global_studies) =>{

    let tottal_gpa = ( bangla + english + math + physics + chemistry + biology + religion + global_studies   );
    let cgpa = tottal_gpa/8;

    if ( bangla == 0 || english == 0 || math == 0 || physics == 0 || chemistry == 0 || biology == 0 ||  religion == 0 || global_studies == 0){

    return " You Are Failed"
    }

    else{
    return` Your C-GPA : ${cgpa}`;
    }





    }

    

    let name = prompt( "Enter Your Name :");
    let roll = prompt("Enter Your Roll Number:")
    
    
    let bangla = parseInt(prompt("Please Input your Bangla Mark: "));
    let english = parseInt(prompt("Please Input your English Mark: "));
    let math = parseInt(prompt("Please Input your Math Mark: "));
    let physics = parseInt(prompt("Please Input your Physics Mark: "));
    let chemistry = parseInt(prompt("Please Input your Chemistry Mark: "));
    let biology = parseInt(prompt("Please Input your Biology Mark: "));
    let religion = parseInt(prompt("Please Input your Religion Mark: "));
    let global_studies = parseInt(prompt("Please Input your Global studies Mark: "));
    
    // gpa calculation

 this.gpa=(marks)=>{

    let gpa;

    if(marks>=0 && marks <=32){
        gpa = 0;
    }
    if(marks>=33 && marks <40){
        gpa = 1;
    }
    if(marks>=40 && marks <50){
        gpa = 2;
    }
    if(marks>=50 && marks <60){
        gpa = 3;
    }
    if(marks>=60 && marks <70){
        gpa = 3.5;
    }
    if(marks>=70 && marks <80){
        gpa = 4;
    }
    if(marks>=80 && marks <=100){
        gpa = 5;
    }
    return gpa;
 }
    
}

let company = new Company();
console.log(company.gpa());
console.log(company.grade());
console.log(company.cgpa());

    