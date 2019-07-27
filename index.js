const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(40, 40);
ctx.lineTo(40, 80);
ctx.lineTo(80, 80);
ctx.lineTo(80, 40);
ctx.closePath();
ctx.stroke();
