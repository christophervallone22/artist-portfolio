//   https://script.google.com/macros/s/AKfycbx4sCrsq4DhYwdqjzd4OtHUT2iRvZEPn7TFFlcSplxDgR__QCoSo6dChJQjQEE6mVIYqg/exec
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message"):

    // fetch("https://script.google.com/macros/s/AKfycbx4sCrsq4DhYwdqjzd4OtHUT2iRvZEPn7TFFlcSplxDgR__QCoSo6dChJQjQEE6mVIYqg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${encodedURIComponent(email)}`
    }) 
    .then(() => {
        message.textContent = "Thank you for subscribing!";
        message.style.color = "green";
        document.getElementById("signup-form").reset();
    })
    .catch(() => {
        message.textContent = "Oops! Something went wrong.";
        message.style.color = "red";
    });
});
