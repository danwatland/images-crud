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
      <TextField
        label='Search images'
        onChange={(event) => setSearchText(event.target.value)}
        value={searchText}
      />
      <Button component='label'>
        Upload
        <input hidden type='file' accept='image/*' onChange={(e) => uploadImage(e.target.files!)}/>
      </Button>
      <ImageContainer />
    </>
  )
};

export default App;
