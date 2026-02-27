const wrongMessages = [
    "My stomach says no.",
    "Not this one!",
    "Try again!",
    "Ugh, no!"
];

function chooseFood(food) {

    if (food === "4P") {   // món đúng
        window.location.href = "after.html";   // hoặc yes.html nếu bạn muốn
    } else {

        const msg =
            wrongMessages[Math.floor(Math.random() * wrongMessages.length)];

        document.getElementById("food-message").textContent = msg;
    }
}
