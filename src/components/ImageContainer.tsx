import * as React from 'react';
import { getImages } from '../services/ImageService';
import { ImagePreview } from './ImagePreview';

const ImageContainer = () => {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    const fetchImages = async () => {
      const im = await getImages();

      setImages(im);
    };

    fetchImages();
  }, []);

  return (
    <div className='image-container'>
      { images.map((img, i) => (
        <ImagePreview src={`http://localhost:5174/${img}`} key={i} />
      )) }
    </div>
  );
};

export { ImageContainer }