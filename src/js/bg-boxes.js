const absContainer = document.querySelector('.absContainer');

// Create 100 blocks
for (var i = 1; i <= 90; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    absContainer.appendChild(blocks);
}

// Generate animation
function generate() {
    anime({
        targets: '.block',
        translateX: function () {
            return anime.random(-730, 740);
        },
        translateY: function () {
            return anime.random(-700, 430);
        },
        scale: function () {
            return anime.random(1,1.7);
        }
    });
}

// Start generating on button click and auto-repeat every 15 seconds
function startGenerate() {
    // console.log('Button clicked: Starting generation');
    generate(); // Initial call on button click
    // document.getElementById('generateBtn').disabled = true; // Disable button
    setInterval(function() {
        // console.log('Generating animation');
        generate(); // Auto call every 15 seconds

    }, 7000);
}
startGenerate()