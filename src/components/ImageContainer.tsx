import * as React from 'react';
import { ImagePreview } from './ImagePreview';
import { useImageStore } from '../state/ImageStore';

interface ImageContainerProps {
  searchText: string,
}

const ImageContainer = ({ searchText }: ImageContainerProps) => {
  const { images, getImages } = useImageStore((state) => ({ images: state.images, getImages: state.getImages }));

  React.useEffect(() => {
    getImages();
  }, []);

  const filterImages = (image: string): boolean => {
    if (searchText === '') {
      return true;
    }

    return image.includes(searchText);
  };

  return (
    <div className='image-container'>
      { images.filter(filterImages).map((img, i) => (
        <ImagePreview src={`http://localhost:5174/${img}`} key={i} />
      )) }
    </div>
  );
};

export { ImageContainer }