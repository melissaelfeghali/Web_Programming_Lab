// Classes

// Questions 1 to 7
class Employee{
    static num_employee = 0 ;
    static addEmployee() { Employee.num_employee ++ ;}

    constructor(name, email, age, address, yof_experience){
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
        this.yof_experience = yof_experience;
        this.salary = 1000;
        Employee.addEmployee();
    }

    print(){
        console.log(this.name);
        console.log(this.email);
        console.log(this.age);
        console.log(this.address);
        console.log(this.yof_experience);
        console.log(this.salary);
    }

    raiseSalary(){
        this.salary = this.salary * 1.5;
    }
}

// Questions 8 to 14
class Manager extends Employee{
    static num_manager = 0;
    static addManager(){
        Manager.num_manager ++ ;
    }

    constructor(name, email, age, address, yof_experience, salary, department){
        super(name, email, age, address, yof_experience);
        this.salary = 1500;
        this.department = department;
        Manager.addManager();
    }

    print(){
        super.print();
        console.log(this.department);
    }

    raiseSalary(){
        this.salary = this.salary * 2;
    }
}

// Question 15
const Manager_A = new Manager('Alex Turner', 'alex.tuner@example.com', 45, 'London, United Kingdom', 8);
const Manager_B = new Manager('Adam Sandler', 'adam_sandler@example.com', 40, 'California, United States', 9);

const Employee_A = new Employee('Michel Saab', 'michel.saab9@example.com', 21, 'Beirut, Lebanon', 1);
const Employee_B = new Employee('Enzo Marisio', 'enzo.marisio@example.com', 23, 'Milano, Italy', 2);
const Employee_C = new Employee('Diego Zavala', 'diego.zavala@example.com', 24, 'Cajun, Mexico', 3);

const company_X = [Manager_A, Manager_B, Employee_A, Employee_B, Employee_C];

// Question 16
function isManager(value, index, array){
    if(value instanceof Manager){
        value.raiseSalary();
    }
}
company_X.forEach(isManager);

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