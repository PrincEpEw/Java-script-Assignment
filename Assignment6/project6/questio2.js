// Create an array data structure with some data of fifth-grade students where their results will be published based on GPA and grade based on. Publish CGPA and final grade in the final result




const students = [
    [1,'Nirlota',89,78,45,77,82],
    [2,'Roshni',86,83,73,79,80],
    [3,'Sinthia',81,78,78,77,85],
    [4,'Eva',95,87,99,91,89],
    [1,'Meghla',70,80,100,85,88],
    [5,'Ridika',89,84,71,83,82],
    [6,'Tanha',81,78,60,77,87],
    [7,'Intasha',76,68,57,70,92],
    [8,'Tamanna',79,92,73,72,89],
    [9,'Priyanka',92,78,48,87,79],
    [10,'Bushra',90,98,68,79,82],
]


for(let i = 0; i < students.length; i++){

    let bangla = students[i][2];
    let english = students[i][3];
    let math = students[i][4];
    let physics = students[i][5];
    let biology = students[i][6];

    
}



let totalnumber = bangla + english + math+ physics + biology;



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



    Your ID  : ${students[i][0]}
    Your Name: ${students[i][1]}

    Bangla  :${bangla} & GPA is (${studentresult.gpa(bangla)}) $ Your Grade Is (${studentresult.grade(bangla)})
    English :${english} & GPA is (${studentresult.gpa(english)}) $ Your Grade Is (${studentresult.grade(english)})
    Math    :${math} & GPA is (${studentresult.gpa(math)}) $ Your Grade Is (${studentresult.grade(math)})
    Physics :${physics} & GPA is (${studentresult.gpa(physics)}) $ Your Grade Is (${studentresult.grade(physics)})
    Biology :${biology} & GPA is (${studentresult.gpa(biology)}) $ Your Grade Is (${studentresult.grade(biology)})
    ____________________________________________________________________________________________
    Your Total Number : ${totalnum}
    Your CGPA is      : ${studentresult.passfail()}

`);









        

    









    












    














