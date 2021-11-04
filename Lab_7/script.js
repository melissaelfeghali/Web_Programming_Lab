// Classes

// Objects

// Questions 1, 2 & 3 
const user = { name:'Melissa El Feghali', email: 'melissa.elfeghali@lau.edu', password: 'you@wish8',
                get getName() {return this.name;}, set setName(new_name) {this.name = new_name;}} ;

// Question 4
Object.definePropertiy(user, 'password', {writable: false, enumerable: false, configurable: false}) ;

// Question 5
user.nationality = 'Lebanese';

// Question 6 
function printInfo(o_name) {
    console.log(o_name.name);
    console.log(o_name.email);
    console.log(o_name.password);
    console.log(o_name.nationality);
}
printInfo(user); 

// Question 7 
function returnKeys(o_name){
    return Object.keys(o_name);
}
user_keys = returnKeys(user);
console.log(user_keys);

// Question 8
delete user.nationality ;

// Question 9 
function User(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
}
const user_A = new User('Jane Doe', 'jane.doe1@example.com', 'not@john2');