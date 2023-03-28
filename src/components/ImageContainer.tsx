import * as React from 'react';
import { ImagePreview } from './ImagePreview';
import { useImageStore } from '../state/ImageStore';

const ImageContainer = () => {
  const { images, getImages } = useImageStore((state) => ({ images: state.images, getImages: state.getImages }));

  React.useEffect(() => {
    getImages();
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