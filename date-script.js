const wrongMessages = [
    "My stomach says no.",
    "My stomach says no.",
    "Try again!💔",
    "Error 404: Appetite not found.🚫",
    "Ugh, no!🤧"
];

function chooseFood(food) {
    const messageElement = document.getElementById("food-message");

    if (food === "4P") {
        window.location.href = "after.html";
    } else {
        // Lấy tin nhắn ngẫu nhiên
        const msg = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
        
        messageElement.textContent = msg;
        messageElement.style.color = "#ff4d4d"; // Đổi sang màu đỏ cảnh báo
        
        // Thêm hiệu ứng rung nhẹ cho dòng chữ
        messageElement.style.animation = "none";
        setTimeout(() => {
            messageElement.style.animation = "shake 0.3s ease-in-out";
        }, 10);
    }
}
