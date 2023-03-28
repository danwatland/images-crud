import fs from 'fs';

export function getImages() {
  const files = fs.readdirSync('./api/images');

  return files;
}

export function initialize() {
  if (!fs.existsSync('./api/images')) {
    fs.mkdirSync('./api/images');
  }
}

export function deleteImage(filename) {
  if (fs.existsSync(`./api/images/${filename}`)) {
    fs.rmSync(`./api/images/${filename}`);
  }
}