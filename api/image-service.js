const fs = require('fs');

function getImages() {
  const files = fs.readdirSync('./images');

  return files;
}

function saveImage(filename) {
  // need to check what gets sent
}

function deleteImage(filename) {
  if (fs.existsSync(`./images/${filename}`)) {
    fs.rmSync(`./images/${filename}`);
  }
}

module.exports = {
  getImages,
  saveImage,
  deleteImage,
}