document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').classList.remove('hidden');
    document.querySelector('.buttons').style.display = 'none';
});

document.getElementById('noBtn').addEventListener('click', function() {
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    
    // Move the "No" button to a random position within the container
    const randomX = Math.random() * (containerRect.width - noBtn.offsetWidth);
    const randomY = Math.random() * (containerRect.height - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});
