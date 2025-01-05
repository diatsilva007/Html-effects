/* Matrix Effect JS */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Matrix characters
const matrixCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()";
const charactersArray = matrixCharacters.split("");

// Font size and columns
const fontSize = 18;
const columns = canvas.width / fontSize;

// Array to hold the drop positions
const drops = Array(Math.floor(columns)).fill(0);

// Draw function
function draw() {
  // Black background with slight transparency to create the trail effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set text color and font
  ctx.fillStyle = "#00ff00";
  ctx.font = `${fontSize}px 'Courier New'`;

  // Loop over the drops
  drops.forEach((y, index) => {
    const text =
      charactersArray[Math.floor(Math.random() * charactersArray.length)];
    const x = index * fontSize;

    // Draw the text
    ctx.fillText(text, x, y * fontSize);

    // Reset drop to the top randomly
    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[index] = 0;
    }

    // Increment the y position
    drops[index]++;
  });
}

// Run the animation
setInterval(draw, 30);

// Resize canvas when window size changes
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
