const messages = [
    "Hey you, I know you're busy...",
    "But just wanted to drop a little something to boost your morning.",
    "Distance sucks, but thinking about you doesn't. 🤏",
    "Since it's 14/03, let's plan a little date for when you're back.",
    "Ready to pick our dinner? 😉"
];

let step = 0;

function handleNextStep() {
    const textElement = document.getElementById('typewriter');
    const gifElement = document.getElementById('cat-gif');
    const nextBtn = document.getElementById('yes-btn'); // Dùng luôn nút Yes làm nút Next

    if (step < messages.length) {
        textElement.style.opacity = '0';
        setTimeout(() => {
            textElement.innerHTML = messages[step];
            textElement.style.opacity = '1';
            
            // Đổi GIF ở câu "Distance sucks" cho thêm phần cảm xúc
            if(step === 2) gifElement.src = "https://media.tenor.com/tHqG65_W2hAAAAAj/bubu-dudu-bubu.gif";
            
            step++;
            if(step === messages.length) {
                nextBtn.innerText = "Let's pick! ✨";
            }
        }, 300);
    } else {
        // Chuyển sang trang chọn món hoặc hiện game chọn món
        window.location.href = 'yes.html'; 
    }
}
