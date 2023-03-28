import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useImageStore } from '../state/ImageStore';

interface ImagePreviewProps {
  src: string
}

const ImagePreview = ({ src }: ImagePreviewProps): React.ReactElement => {
  const deleteImage = useImageStore((state) => state.deleteImage);

  const removeExtraFilenameData = (filename: string): string => filename.replace(`${API_URL}/`, '').substring(14);

  return (
    <div className='image-preview'>
      <img alt={src} src={src} />
      <div className='image-info'>
        <Typography variant='caption' color='#242424'>{removeExtraFilenameData(src)}</Typography>
        <IconButton onClick={() => deleteImage(src)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export { ImagePreview };