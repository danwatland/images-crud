import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

interface ImagePreviewProps {
  src: string
}

const ImagePreview = ({ src }: ImagePreviewProps): React.ReactElement => {
  const removeExtraFilenameData = (filename: string): string => filename.replace('http://localhost:5174', '').substring(15);

  return (
    <div className='image-preview'>
      <img alt={src} src={src} />
      <div className='image-info'>
        <Typography variant='caption' color='#242424'>{removeExtraFilenameData(src)}</Typography>
        <IconButton onClick={() => {}}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export { ImagePreview };