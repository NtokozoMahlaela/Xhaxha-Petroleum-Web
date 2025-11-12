const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create assets directory if it doesn't exist
const assetsDir = path.join(__dirname, 'src', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// List of required images
const images = [
  'hero-image.jpg',
  'about-hero.jpg',
  'about-image.jpg',
  'team.jpg',
  'values.jpg',
  'product-1.jpg',
  'product-2.jpg',
  'product-3.jpg',
  'product-4.jpg',
  'service-1.jpg',
  'service-2.jpg',
  'service-3.jpg',
  'service-4.jpg',
  'service-hero.jpg',
  'contact-hero.jpg',
  'testimonial-1.jpg',
  'testimonial-2.jpg',
  'testimonial-3.jpg'
];

// Function to create a placeholder image
function createPlaceholderImage(filename, width = 800, height = 600) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Background color
  ctx.fillStyle = '#e5e7eb';
  ctx.fillRect(0, 0, width, height);
  
  // Text
  ctx.fillStyle = '#9ca3af';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(filename, width / 2, height / 2);
  
  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(assetsDir, filename), buffer);
}

// Generate all placeholder images
images.forEach(image => {
  createPlaceholderImage(image);
  console.log(`Created placeholder: ${image}`);
});

console.log('All placeholder images have been generated!');
