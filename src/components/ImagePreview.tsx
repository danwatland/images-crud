import * as React from 'react';

interface ImagePreviewProps {
  alt: string,
  src: string
}

const ImagePreview = ({ alt, src }: ImagePreviewProps): React.ReactElement => {
  return (
    <img alt={alt} src={src} />
  );
};

export { ImagePreview };