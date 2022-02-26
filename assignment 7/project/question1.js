
const devs = [

    {
    name    : 'Prince',
    age     :  24,
    skill   : 'JAVA',
    salary  : 1600,
    location:'uttara',
    },
    {
    name    : 'Najmul',
    age     : 26,
    skill   : 'MERN STACK',
    salary  : 1400,
    location:'banani',
    },

    {
    name    : 'Hasan',
    age     : 22,
    skill   : 'LARAVEL',
    salary  : 1300,
    location:'mirpur',
    },
        
    {
    name    : 'Eva',
    age     : 16,
    skill   : 'GOLANG',
    salary  : 900,
    location:'dhanmondi',
    },

    {
    name    : 'Pew',
    age     : 20,
    skill   : 'WORD PRESS',
    salary  : 1500,
    location:'uttara',
    },

    {
    name    : 'Opu',
    age     : 26,
    skill   : 'DJANGO',
    salary  : 1250,
    location:'mirpur',
    },

    {
    name    : 'Ave',
    age     : 25,
    skill   : 'JAVA',
    salary  : 1000,
    location:'gulshan',
    },

    {
    name : 'Rahat',
    age  : 28,
    skill: 'MERN STACK',
    salary: 1150,
    location : 'badda',
    },
                            
    {
    name    : 'Promy',
    age     : 19,
    skill   : 'DJANGO',
    salary  : 800,
    location: ' tongi',
    },

    {
    name    : 'Emran',
    age     : 24,
    skill   : 'WORD PRESS',
    salary  : 1470,
    location:'mirpur',
    },
                                    

];

let total = 0;
devs.map(data => {console.log(` 
    
        Name    :${data.name}
        Age     :${data.age}
        Skill   :${data.skill}
        Salary  :${data.salary}
        Location: ${data.location}

`);
    total = total + data.salary;
});
console.log(`Total salary :${total}`);


