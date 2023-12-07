var error = document.getElementById('error-line');
error.innerHTML = "";

function formValidation(e) { // e itu event
    e.preventDefault(); // biar HTML gak ke refresh
    var name = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;
    var email = document.getElementById('email').value;

    var hasLowercase = false;
    var hasUppercase = false;
    var hasNumber = false;
    var emailpart = email.split("@");
    var domain = emailpart[1];

    for (var i = 0; i < pass.length; i++) {
        if (pass[i] >= 'a' && pass[i] <= 'z') {
            hasLowercase = true;
        } else if (pass[i] >= 'A' && pass[i] <= 'Z') {
            hasUppercase = true;
        } else if (pass[i] >= '0' && pass[i] <= '9') {
            hasNumber = true;
    }
}
    if (name == "") {
        error.innerHTML = "Full name must not empty!"; 
        } else if (pass == "") {
            error.innerHTML = "Password must not empty!";
        } else if (hasUppercase == false) {
            error.innerHTML = "Password must contain at least one uppercase!";
        } else if (hasLowercase == false) {
            error.innerHTML = "Password must contain at least one lowercase!";
        } else if (hasNumber == false) {
            error.innerHTML = "Password must contain at least one number!";
        } else if (email == "") {
            error.innerHTML = "Email must not empty!";
        } else if (domain != "gmail.com") {
            error.innerHTML = "Email must contain @gmail.com!";
        } else if (male.checked == false && female.checked == false) {
            error.innerHTML = "Gender must not empty!";
            console.log();
        } else {
        alert("Successfull Register!");
        }
}
console.log(error);