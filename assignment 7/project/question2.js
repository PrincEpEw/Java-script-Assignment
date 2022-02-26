// Create an array and object data structure with some data of fifth grade students where their results will be published based on GPA and grade based on. Publish CGPA and final grade in the final result



const student = [

    {
    id      :1,
    name    :'Prince',
    bn      :90,
    en      :87,
    mat     :100,
    phy     :87,
    bio     :92,
    },
    {
    id      : 2,
    name    :'sobuj',
    bn      :80,
    en      :77,
    mat     :90,
    phy     :87,
    bio     :82,
    },
    {
    id      : 3,
    name    :'Pronoy',
    bn      :91,
    en      :89,
    mat     :80,
    phy     :88,
    bio     :72,
    },
    {
    id      : 4,
    name    :'Eva',
    bn      :96,
    en      :60,
    mat     :98,
    phy     :97,
    bio     :82,
    },
    {
    id      : 5,
    name    :'Hasan',
    bn      :76,
    en      :79,
    mat     :83,
    phy     :87,
    bio     :91,
    },
    {
    id      : 6,
    name    :'Rahat',
    bn      :70,
    en      :77,
    mat     :80,
    phy     :87,
    bio     :62,
    },

];


for (let i = 0; i < student.length; i++) {
    console.log(student[i]);
    
    
}

let totalnumber = bn + en + mat+ phy + bio;

function StudentResult(){
   

    this.gpa = function (subject){

            if(subject >= 0 && subject <=32){
            return 'F'
            } else if(subject >= 33 && subject <=39){
            return 'E'
            } else if(subject >= 40 && subject <=49){
            return 'D'
            }else if(subject >= 50 && subject <=59){
            return 'C'
            }else if(subject >= 60 && subject <=69){
            return 'A-'
            }else if(subject >= 70 && subject <=79){
            return 'A'
            }else if(subject >= 80 && subject <=100){
            return 'A+'
            }


            
    
        }


            this.grade = function(subject){

                if(subject >= 0 && subject <=32){
                    return 0;
                    } else if(subject >= 33 && subject <=39){
                    return 1;
                    } else if(subject >= 40 && subject <=49){
                    return 2;
                    }else if(subject >= 50 && subject <=59){
                    return 3;
                    }else if(subject >= 60 && subject <=69){
                    return 3.5;
                    }else if(subject >= 70 && subject <=79){
                    return 4;
                    }else if(subject >= 80 && subject <=100){
                    return 5;
                    }



              }




                    this.cgpa = function ( bn,en,mat,phy,bio){

                        let totalgrade = bn + en + mat + phy + bio;
                        let totalgradecgpa = totalgrade/5;
                        return totalgradecgpa;


                    };



                    this.passfail =function(){

                        if(bangla <=32 || english <=32 || math <=32 || physics <=32 || biology <=32 ){
                            return'You Are Failed'
                        } else{
                            return totalgradecgpa;
                        }


                    }


}

let mainresult = new StudentResult();
let totalcgpa = StudentResult.cgpa(
    StudentResult.grade(bangla),
    StudentResult.grade(english),
    StudentResult.grade(math),
    StudentResult.grade(physics),
    StudentResult.grade(biology),

);



console.log(`



    Your ID  : ${student.id}
    Your Name: ${student.name}

    Bangla  :${bangla} & GPA is (${studentresult.gpa(bangla)}) $ Your Grade Is (${studentresult.grade(bangla)})
    English :${english} & GPA is (${studentresult.gpa(english)}) $ Your Grade Is (${studentresult.grade(english)})
    Math    :${math} & GPA is (${studentresult.gpa(math)}) $ Your Grade Is (${studentresult.grade(math)})
    Physics :${physics} & GPA is (${studentresult.gpa(physics)}) $ Your Grade Is (${studentresult.grade(physics)})
    Biology :${biology} & GPA is (${studentresult.gpa(biology)}) $ Your Grade Is (${studentresult.grade(biology)})
    ____________________________________________________________________________________________
    Your Total Number : ${totalnum}
    Your CGPA is      : ${studentresult.passfail()}

`);



   
    
