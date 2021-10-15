function welcome(){
    let person = prompt("Please enter your first and last name", "Jane Doe");
    if (person != null) {
        document.getElementById("greeting").innerHTML = "Welcome " + person;
    }
}