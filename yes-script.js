function runAway(element) {
    // Chỉ nhảy khi người dùng chưa chọn xong
    element.style.position = 'fixed';
    element.style.top = Math.random() * 80 + 10 + "%";
    element.style.left = Math.random() * 80 + 10 + "%";
    
    // Đổi chữ ngẫu nhiên cho vui
    const labels = ["My stomach says no.", "Not this one!", "Try again!", "Ugh, no!"];
    element.querySelector('span').innerText = labels[Math.floor(Math.random() * labels.length)];
}

function select4Ps() {
    // Bắn pháo hoa ăn mừng
    launchConfetti();
    
    // Ẩn menu và hiện tin nhắn cuối
    document.getElementById('food-grid').classList.add('hidden');
    document.getElementById('main-title').classList.add('hidden');
    document.getElementById('final-message').classList.remove('hidden');
}

// Hàm bắn pháo hoa (đảm bảo bồ đã nhúng thư viện confetti ở file HTML)
function launchConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}
