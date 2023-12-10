document.addEventListener('DOMContentLoaded', function() {
    var error = document.getElementById('error-line');
    error.innerHTML = "";

    function formValidation(e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm-password').value;
        var male = document.getElementById('male');
        var female = document.getElementById('female');
        var agreeTerms = document.getElementById('agree-terms');

        // Validation for Name
        if (name.trim() === "") {
            error.innerHTML = "Full name must not be empty!";
            return;
        }

        // Validation for Email
        if (email.trim() === "") {
            error.innerHTML = "Email must not be empty!";
            return;
        }

        // Validation for Password
        if (password.trim() === "") {
            error.innerHTML = "Password must not be empty!";
            return;
        }

        // Validation for Confirm Password
        if (confirmPassword.trim() === "") {
            error.innerHTML = "Confirm Password must not be empty!";
            return;
        } else if (confirmPassword !== password) {
            error.innerHTML = "Passwords do not match!";
            return;
        }

        // Validation for Gender
        if (!male || !female || (male.checked === false && female.checked === false)) {
            error.innerHTML = "Gender must not be empty!";
            return;
        }

        // Validation for Terms and Conditions
        if (!agreeTerms.checked) {
            error.innerHTML = "You must agree to the Terms and Conditions!";
            return;
        }

        // If all validations pass, proceed with registration
        alert("Successful Registration!");
    }

    // Attach the event listener to the form
    document.getElementById('register').addEventListener('submit', formValidation);
});
