const express = require('express');
const { getImages, deleteImage } = require('./image-service.js');

const app = express();
const PORT = process.env.PORT || 5174;

app.use(express.json());

app.get('/images', (req, res) => {
  const images = getImages();

  res.status(200).send(images);
});

app.post('/images', (req, res) => {
  res.status(200).send();
});

app.delete('/images/:filename', (req, res) => {
  deleteImage(req.params.filename);

  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});