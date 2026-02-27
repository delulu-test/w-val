const lines = [
    "Can't send a hug, so I made this for you 💕",
    "Hey you, I know you're busy...",
    "But I just wanted to drop something to brighten your day.",
    "Distance sucks, but thinking about you doesn’t. 🤏",
    "So since it's 14/03...",
    "Let’s plan our little future date.",
    "Ready? 😉"
];

let currentLine = 0;
const title = document.querySelector("h1");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

yesBtn.style.display = "none";
noBtn.style.display = "none";

function typeLine() {
    if (currentLine < lines.length) {
        title.style.opacity = 0;

        setTimeout(() => {
            title.textContent = lines[currentLine];
            title.style.opacity = 1;
            currentLine++;
        }, 400);

        setTimeout(typeLine, 3200);
    } else {
       yesBtn.style.display = "inline-block";
        noBtn.style.display = "inline-block";
        yesBtn.textContent = "Yes 💕";
        noBtn.textContent = "No 🙈";
    }
}

window.onload = typeLine;

yesBtn.addEventListener("click", function() {
    window.location.href = "date.html";
});

noBtn.addEventListener("click", function() {
    alert("Wrong answer 😌");
});
document.addEventListener("click", function startMusicOnce() {
    const music = document.getElementById("bg-music");
    if (music) {
        music.play();
    }
    document.removeEventListener("click", startMusicOnce);
});
