function welcome(){
    let person = prompt("Please enter your first and last name", "Jane Doe");
    if (person != null) {
        document.getElementById("greeting").innerHTML = "Welcome " + person;
    }
}

function add(){
    let a = document.getElementById("a").value ;
    let b = document.getElementById("b").value;
    document.getElementById("result").innerHTML = Number(a) + Number(b) ;
}

function subtract(){
    let a = document.getElementById("a").value ;
    let b = document.getElementById("b").value;
    document.getElementById("result").innerHTML = Number(a) - Number(b) ;
}

function multiply(){
    let a = document.getElementById("a").value ;
    let b = document.getElementById("b").value;
    document.getElementById("result").innerHTML = Number(a) * Number(b) ;
}

function divide(){
    let a = document.getElementById("a").value ;
    let b = document.getElementById("b").value;
    document.getElementById("result").innerHTML = Number(a) / Number(b) ;
}

function printArray(){

}

// Question 6 
let first_array = ["John", "Jason", "Kevin"]
console.log(first_array)

// Question 7 
first_array.unshift("Jad")
console.log(first_array)

// Question 8 
let second_array = ["Manel", "Nahla", "Sabine", "Mirna"]
console.log(second_array)

// Question 9 
let third_array = first_array.concat(second_array)
console.log(third_array)

// Question 10 
console.log("Index of John: " + third_array.indexOf("John"))

// Question 11 
console.log("Length of third array: " + third_array.length)

// Question 12
third_array.pop()
console.log(third_array)

// Question 13
third_array.shift()
console.log(third_array)

// Question 14 
third_array.push("Melissa")
console.log(third_array)

// Question 15
console.log(third_array.reverse())

// Question 16
fourth_array = third_array.slice(0,3)
console.log(fourth_array)

// Question 17
console.log(fourth_array.includes("Sabine"))

// Question 18 
function listItems(item, index){
    console.log(index + ": " + item)
}
third_array.forEach(listItems);