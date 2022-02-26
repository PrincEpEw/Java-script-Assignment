const club = [

    ['pew','dhanmondi',40],
    ['opu','mirpur',20],
    ['prince','mohammadpur',50],
    ['sobuj','dhanmondi', 10],
    ['hasan','mirpur', 17],
    ['santo', 'mohammadpur', 50],
    ['nirob','dhanmondi', 30]
    
    ]
    
    
    for(let i = 0; i < club.length; i++){
    
            if(club[i][2] > 18){
    
                return `welcome to our club`;
    
    
    
        
                 
        
            }else if (club[i][2] < 18 ){
                return ` you have not enugh age`;
            }
            club[i].map (data  => console.log(data));
        
         
        }