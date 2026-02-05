const codes = document.querySelectorAll('.code');

// Focus first input on load
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= '0' && e.key <= '9') {
            // Force value to be empty before typing a new one
            codes[idx].value = ''; 
            setTimeout(() => {
                if (idx < codes.length - 1) {
                    codes[idx + 1].focus();
                }
            }, 10);
        } else if (e.key === 'Backspace') {
            // If backspace is pressed, clear current and move focus back
            setTimeout(() => {
                if (idx > 0) {
                    codes[idx - 1].focus();
                }
            }, 10);
        }
    });
});