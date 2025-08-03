//   https://script.google.com/macros/s/AKfycbyjoQiPqyo-UBKzzD6By5lgMrl6Cr4X8jtuWJXP9VlizvQshxS9NrijLFV7orcVOfTe/exec
//   https://script.google.com/macros/library/d/1xLxlTSXuuLUvkJFDME81XPu__2hBpxXMIf1OcAckIJQ-oGjze4Krua6y/2
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    fetch("https://script.google.com/macros/library/d/1xLxlTSXuuLUvkJFDME81XPu__2hBpxXMIf1OcAckIJQ-oGjze4Krua6y/2", {
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
