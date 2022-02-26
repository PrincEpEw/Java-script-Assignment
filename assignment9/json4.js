let data = '[{"name":"Prince","age":24,"skill":"JAVA","salary":1600,"location":"uttara"},{"name":"Najmul","age":26,"skill":"MERN STACK","salary":1400,"location":"banani"},{"name":"Hasan","age":22,"skill":"LARAVEL","salary":1300,"location":"mirpur"},{"name":"Eva","age":16,"skill":"GOLANG","salary":900,"location":"dhanmondi"},{"name":"Pew","age":20,"skill":"WORD PRESS","salary":1500,"location":"uttara"},{"name":"Opu","age":26,"skill":"DJANGO","salary":1250,"location":"mirpur"},{"name":"Ave","age":25,"skill":"JAVA","salary":1000,"location":"gulshan"},{"name":"Rahat","age":28,"skill":"MERN STACK","salary":1150,"location":"badda"},{"name":"Promy","age":19,"skill":"DJANGO","salary":800,"location":" tongi"},{"name":"Emran","age":24,"skill":"WORD PRESS","salary":1470,"location":"mirpur"}]'


let ob = JSON.parse(data);
console.log(ob);
localStorage.setItem('question1',data);


let data6 = '[{"id":1,"name":"Prince","bn":90,"en":87,"mat":100,"phy":87,"bio":92},{"id":2,"name":"sobuj","bn":80,"en":77,"mat":90,"phy":87,"bio":82},{"id":3,"name":"Pronoy","bn":91,"en":89,"mat":80,"phy":88,"bio":72},{"id":4,"name":"Eva","bn":96,"en":60,"mat":98,"phy":97,"bio":82},{"id":5,"name":"Hasan","bn":76,"en":79,"mat":83,"phy":87,"bio":91},{"id":6,"name":"Rahat","bn":70,"en":77,"mat":80,"phy":87,"bio":62}]'
let ob2 = JSON.parse(data6);
console.log(ob2);
localStorage.setItem('question2',data6);



let data7 = '[{"name":"Prince","phone":1718474941,"location":"UTTARA"},{"name":"Pew","phone":1718474942,"location":"Mirpur"},{"name":"Promy","phone":1718474943,"location":"DHANMONDI"},{"name":"priya","phone":1718474944,"location":"GULSHAN"},{"name":"Polash","phone":1718474945,"location":"MOTIGHIL"},{"name":"Polok","phone":1718474946,"location":"UTTARA"}]'
let obj = JSON.parse(data7);
console.log(obj);
localStorage.setItem('question3',data7);
