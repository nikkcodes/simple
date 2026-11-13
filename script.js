 function register() {
        var name = document.getElementById("name").value;
        var id = document.getElementById("id").value;
        var email = document.getElementById("email").value;
        var job = document.getElementById("job").value;
        var phone = document.getElementById("phone").value;

        if (name === "" || id === "" || email === "" || job === "" || phone === "") {
            document.getElementById("message").innerHTML = "Please fill in all fields.";
            return;
        }
        if (!email.includes("@")|| !email.includes(".")) {
            document.getElementById("message").innerHTML = "Please enter a valid email address.";
            return;
        }   
        if (phone.length !== 10) {
            document.getElementById("message").innerHTML = "Please enter a valid phone number.";
            return;
        }   

        document.getElementById("message").innerHTML = "Registration successful!";
    }