document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const message = document.getElementById("message"):

    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        message.style.color = "green";
        message.textContent = "Thanks for subscribing!";
        emailInput.value = "";
        // Send data to server or API
    } else {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address.";
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
