document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.enter-button').forEach(button => {
        button.addEventListener('click', function() {
            // Only the clicked button gets the 'clicked' class
            if (!this.classList.contains('clicked')) {
                document.querySelectorAll('.enter-button').forEach(btn => {
                    btn.classList.remove('clicked'); // Remove 'clicked' from other buttons
                    btn.classList.remove('dim-effect-button'); // Remove dim effect from all buttons
                });
                this.classList.add('clicked'); // Highlight the clicked button
            }
            showWhiteBox(this);
        });
    });
    document.getElementById('overlay').addEventListener('click', hideWhiteBox);
});

function showWhiteBox(clickedButton) {
    document.getElementById('overlay').style.display = 'block';
    setTimeout(() => {
        document.getElementById('overlay').style.opacity = 1;
        document.getElementById('content').classList.add('blur-effect');
        document.querySelector('.square').classList.add('dim-effect');
        document.querySelectorAll('.enter-button').forEach(button => {
            if (button !== clickedButton) {
                button.classList.add('inactive'); // Make all buttons inactive except the clicked one
            }
        });
        document.getElementById('white-box').style.display = 'flex';
        document.getElementById('white-box').style.opacity = 1;
    }, 10);
}

function hideWhiteBox() {
    document.getElementById('overlay').style.opacity = 0;
    document.getElementById('white-box').style.opacity = 0; // Immediately start fading out the white box
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('white-box').style.display = 'none';
        document.getElementById('content').classList.remove('blur-effect');
        document.querySelector('.square').classList.remove('dim-effect');
        document.querySelectorAll('.enter-button').forEach(button => {
            button.classList.remove('clicked', 'inactive', 'dim-effect-button'); // Reactivate and undim all buttons
        });
    }, 500); // Synchronize disappearance and focus effects
}
