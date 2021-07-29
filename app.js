
//1

// var obj = {
//    Name: 'Ubaid',
//    Email: 'ubaidamed233@gmail.com',
//    Password: '1234',
//    age: '50',
//    Gender: 'Male',
//    city: 'karachi',
//    country: 'Pakistan'
// }
// if(obj.hasOwnProperty('age') ){
//   console.log(true);
// }
// else{
//   console.log(false);
// }


// if(obj.hasOwnProperty('city')){
//   console.log(true);
// }
// else{
//   console.log(false);
// }




//2

// function car(name, value , condition){
//    this.name = name;
//    this.value = value;
//    this.condition = condition;
// }

// var car1 =  new car('Audi ', 'High', '10/10')
// console.log(car1);
// var car2 =  new car('Carolla ', 'High', '9/10')
// console.log(car2);
// var car3 =  new car('Civic ', 'Meduim', '8/10')
// console.log(car3);



//3


// var obj = [
//  { Name: 'juice',
//    price: '50',
//    quantity: '3'},
 
//   { Name: 'cookies',
//     price: '30', 
//     quantity: '9'},

//    { Name: 'shirt',
//     price: '880',
//      quantity: '1'},
 
//    { Name: 'juice', 
//     price: '100',
//     quantity: '2' },]

//    function calculate(value){
// var name = obj[value].Name
// var price = obj[value].price
// var quantity = obj[value].quantity

// console.log('name:', name);
// console.log('Price:',price);
// console.log('quantity',quantity);
// console.log('Total', price*quantity);

//    } 
// calculate(3)


//4


function information(){
 
    var population = document.getElementById('population').value;
    var address = document.getElementById('address').value;
    var educations = document.getElementById('educations').value;
    var professions = document.getElementById('professions').value;
    var gender = document.querySelectorAll('.gender')
    
    
    if(gender[0].checked){
        gender = 'male'
    }else if(gender[1].checked){
        gender = 'Female'
    }
     
    // Checking Radio for gender
     
    function Info(name, gender ,address , educations , professions){
        this.name = name;
        this.gender = gender;
        this.address = address;
        this.educations = educations;
        this.professions = professions;}
    
    
    var record = new Info(population , gender , address , educations , professions);    
    console.log(record)
     
    }
    document.getElementById('save').addEventListener('click' , function(){
        information()})