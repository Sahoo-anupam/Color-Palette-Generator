const generateBtn = document.getElementById('generate-btn');
const palette = document.getElementById('palette');

function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function generatePalette() {
  palette.innerHTML = ''; // Clear previous colors
  for (let i = 0; i < 6; i++) { // Generate 6 colors
    const color = generateRandomColor();
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = color;
    colorBox.innerText = color;
    palette.appendChild(colorBox);
  }
}

generateBtn.addEventListener('click', generatePalette);
