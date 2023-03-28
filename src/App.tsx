import * as React from 'react'
import './App.css'
import { ImagePreview } from './components/ImagePreview';
import { Button, TextField } from '@mui/material';

const App = (): React.ReactElement => {
  const [searchText, setSearchText] = React.useState<string>();

  return (
    <>
      <TextField
        label='Search images'
        onChange={(event) => setSearchText(event.target.value)}
        value={searchText}
      />
      <Button onClick={() => {}}>Upload</Button>
      <div>
        <ImagePreview alt={'test'} src={'https://via.placeholder.com/600/92c952'} />
        <ImagePreview alt={'test'} src={'https://via.placeholder.com/600/771796'} />
        <ImagePreview alt={'test'} src={'https://via.placeholder.com/600/24f355'} />
        <ImagePreview alt={'test'} src={'https://via.placeholder.com/600/d32776'} />
      </div>
    </>
  )
};

export default App;
