function signup() {
    var getemailup = document.getElementById('signupemail').value;
    var getpassup = document.getElementById('signuppassword').value;
    localStorage.setItem("email", getemailup);
    localStorage.setItem("password", getpassup);
    alert("Sign up successful...");
    location.href = "signin.html";
}

function signin() {
    var getemailin = document.getElementById('signinemail').value;
    var getpassin = document.getElementById('signinpassword').value;
    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    if (getemailin === storedEmail && getpassin === storedPassword) {
        alert("Sign in successful!");
        location.href = "index.html";
    } else {
        alert("Invalid email or password");
    }
}
function ordernow(itemName, price) {
    alert(`You ordered: ${itemName}\nPrice: ${price.toFixed(0)} Rs`);
}