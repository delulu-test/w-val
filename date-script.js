const wrongMessages = [
    "My stomach says no.",
    "Not this one!",
    "Try again!",
    "Ugh, no!"
]

function wrongChoice() {
    const msg = wrongMessages[Math.floor(Math.random() * wrongMessages.length)]
    document.getElementById("food-message").textContent = msg
}

function chooseFood(food) {
    if (food === "4P") {
        window.location.href = "yes.html"
    }
}
