function runAway(element) {
    element.style.position = 'absolute';
    element.style.top = Math.random() * 70 + 15 + "%";
    element.style.left = Math.random() * 70 + 15 + "%";
    element.innerHTML = "Nope! ❌";
}

function finalCelebrate() {
    // Gọi hàm bắn pháo hoa confetti bồ đã có sẵn
    launchConfetti();
    
    document.querySelector('.food-selection').style.display = 'none';
    const result = document.getElementById('final-result');
    result.classList.remove('hidden');
    result.innerHTML = `
        <h1 class="yes-title">Good choice! 🥰</h1>
        <p class="yes-message">I'll decide where to go after dinner too.<br>Just get back here soon! ❤️</p>
    `;
}
