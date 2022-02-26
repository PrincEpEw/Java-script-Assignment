
const club = [

    {
    id      : 1,
    name    : 'Prince',
    age     : 24,
    },
    {
    id      : 2,
    name    : 'Pew',
    age     : 22,
    },
    {
    id      : 3,
    name    : 'Hasan',
    age     : 40,
    },
    {
    id      : 4,
    name    : 'Akash',
    age     : 16,
    },
    {
    id      : 5,
    name    : 'Rony',
    age     : 29,
    },
    {
    id      : 6,
    name   : 'Rose',
    age     : 19,
    },
                           

];


for (let i = 0; i < club.length; i++) {
    console.log(club.[i]);
    
}

if(club.age > 18){
    console.log("Welcome to our club");
 }
 else if (club.age < 18 ){
    console.log("You are not enough age for club");
 }
    
    
