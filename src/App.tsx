import * as React from 'react'
import './App.css'
import { Button, LinearProgress, TextField } from '@mui/material';
import { ImageContainer } from './components/ImageContainer';
import { useImageStore } from './state/ImageStore';

const App = (): React.ReactElement => {
  const isLoading = useImageStore((state) => state.isLoading);
  const uploadImage = useImageStore((state) => state.uploadImage);
  const [searchText, setSearchText] = React.useState<string>('');

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
      <div className='image-crud-loading-bar'>
        { isLoading && <LinearProgress /> }
      </div>
      <ImageContainer searchText={searchText}/>
    </>
  )
};

export default App;
