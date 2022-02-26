
// Create a MERN stack, Laravel, Django, GoLang,  WordPress, java dives students data structure and make their total income sheet with per developer data, Find specific students.


const devs =[
    ['Sobuj',23,'Mern Stack',1500],
    ['Pew',23,'Java',1300],
    ['Opu',25,'Laravel',1000],
    ['Ratri',24,'Word press',800],
    ['Prince',22,'Golang',1600],
    ['Eva',16,'Golanng',900],
    ['Ria',21,'Word press',800],
    ['Siam',26,'Java',1100],
    ['Ave',22,'Django',950],
    ['Rahat',27,'Mern Stack',700],
]

let total = 0;
for( let i = 0;i < devs.length;i++){

    console.log(

       `Name  : ${devs[i][0]}
        Age   : ${devs[i][1]} Year
        Devs  : ${devs[i][2]}
        Salary: ${devs[i][3]} ` 
    );

    total = total  + devs[i][3];

}
console.log(`Devs Total salary : ${total}$`);