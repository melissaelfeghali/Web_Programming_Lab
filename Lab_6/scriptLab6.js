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