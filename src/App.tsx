import * as React from 'react'
import './App.css'
import { ImagePreview } from './components/ImagePreview';
import { Button, TextField } from '@mui/material';
import { uploadImage } from './services/ImageService';
import { ImageContainer } from './components/ImageContainer';

const App = (): React.ReactElement => {
  const [searchText, setSearchText] = React.useState<string>();

  return (
    <>
      <div className='image-crud-header'>
        <TextField
          label='Search images'
          onChange={(event) => setSearchText(event.target.value)}
          sx={{ width: '50%' }}
          value={searchText}
        />
        <Button component='label' variant='contained'>
          Upload
          <input hidden type='file' accept='image/*' onChange={(e) => uploadImage(e.target.files!)}/>
        </Button>
      </div>
      <ImageContainer />
    </>
  )
};

export default App;
