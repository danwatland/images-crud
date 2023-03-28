import cors from 'cors';
import express from 'express';
import multer from 'multer';
import { deleteImage, getImages, initialize } from './image-service.js';

initialize();
const app = express();
const PORT = process.env.PORT || 5174;

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'api/images/');
  },
  filename: (req, file, callback) => {
    callback(null, `${(new Date()).valueOf()}-${file.originalname}`)
  }
});
const upload = multer({ storage });

app.use(cors());
app.use(express.json());

app.get('/images', (req, res) => {
  const images = getImages();

  res.status(200).send(images);
});

app.post('/images', upload.single('image'), (req, res) => {
  res.status(200).send();
});

app.delete('/images/:filename', (req, res) => {
  deleteImage(req.params.filename);

  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});