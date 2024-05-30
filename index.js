// 1st 

var obj = {
    name: 'sarfaraz',
    email: 'sarfaraz321@gmail.com',
    password: '2244',
    age: 18,
    gender: 'male',
    city: 'turbat',
    country: 'pakistan'
    
}


var age = 'age' in obj;
var country = 'country' in obj;

var frist = 'frist' in obj
var lastname = 'flastname' in obj


var ageExistsHasOwn = obj.hasOwnProperty('age');
var countryexist = obj.hasOwnProperty('country');
var fristNameexist = obj.hasOwnProperty('fist');
var lastNameexist = obj.hasOwnProperty('lastname');

console.log(`age is exist ${ageExistsHasOwn}`)
console.log(`country is exist ${ageExistsHasOwn}`)
console.log(`fristName is exist ${fristNameexist}`)
console.log(`LastName is exist ${lastNameexist}`)


//2nd

function Car(name , color, model){
    this.name = name
    this.color = color
    this.model = model
}

var car1 = new Car('BMW' , 'Red' , 2005)

console.log(car1)



// 3rd

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const profession = document.getElementById('profession').value;
    
    // Create record
    const record = {
        name,
        gender,
        address,
        education,
        profession
    };
    
    // Display record
    const recordList = document.getElementById('recordList');
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${record.name}, Gender: ${record.gender}, Address: ${record.address}, Education: ${record.education}, Profession: ${record.profession}`;
    recordList.appendChild(listItem);
    
    // Clear form
    document.getElementById('clear').reset();

});

