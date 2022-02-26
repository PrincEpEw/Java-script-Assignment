const picnic = [

    {
    id      : 101,
    name    : 'Prince',
    fee     : 500,
    },
    {
    id      : 102,
    name    : 'Pew',
    fee     : 500,
    },
    {
    id      : 103,
    name    : 'Hasan',
    fee     : 500,
    },
    {
    id      : 104,
    name    : 'Akash',
    fee     : 500,
    },
    {
    id      : 105,
    name    : 'Rony',
    fee     : 500,
    },
    {
    id      : 106,
    name    : 'Riad',
    fee     : 500,
    },
    {
    id      : 107,
    name    : 'Rupota',
    fee     : 500,
    },
                               

];

let total = 0;
picnic.map(data => {console.log(` 
    
        ID    :${data.id}
        Name  :${data.name}
        Fee   :${data.fee}
       

`);
    total = total + data.fee;
});
console.log(`Total Picnic Fee :${total}`);


