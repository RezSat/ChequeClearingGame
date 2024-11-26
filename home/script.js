const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const shapes = [];
const shapeCount = 100;

function createShape() {
    const size = Math.random() * 20 + 5;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speedX = (Math.random() - 0.5) * 2;
    const speedY = (Math.random() - 0.5) * 2;
    const char = Math.random() < 0.5 ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) : Math.floor(Math.random() * 10);
    shapes.push({ x, y, speedX, speedY, size, char });
}

for (let i = 0; i < shapeCount; i++) {
    createShape();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    shapes.forEach(shape => {
        shape.x += shape.speedX;
        shape.y += shape.speedY;

        if (shape.x < 0 || shape.x > canvas.width) shape.speedX *= -1;
        if (shape.y < 0 || shape.y > canvas.height) shape.speedY *= -1;

        ctx.font = `${shape.size}px Arial`;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillText(shape.char, shape.x, shape.y);
    });

    requestAnimationFrame(update);
}

update();