const lines = [
    "Hey you, I know you're busy...",
    "But just wanted to drop a little something to boost your morning.",
    "Distance sucks, but thinking about you doesn't. 🤏",
    "Since it's 14/03, let's plan a little date for when you're back.",
    "Ready? 😉"
]

let currentLine = 0
const title = document.querySelector("h1")
const yesBtn = document.getElementById("yes-btn")
const noBtn = document.getElementById("no-btn")

yesBtn.style.display = "none"
noBtn.style.display = "none"

function typeLine() {
    if (currentLine < lines.length) {
        title.textContent = lines[currentLine]
        currentLine++
        setTimeout(typeLine, 1800)
    } else {
        yesBtn.style.display = "inline-block"
        noBtn.style.display = "inline-block"
        yesBtn.textContent = "Yes"
        noBtn.textContent = "OK"
    }
}

window.onload = typeLine

function handleYesClick() {
    window.location.href = "date.html"
}

function handleNoClick() {
    window.location.href = "date.html"
}
