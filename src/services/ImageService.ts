import axios from 'axios';

export async function getImages(): Promise<any> {

}

export async function uploadImage(images: FileList): Promise<void> {
  const formData = new FormData();
  formData.append('image', images[0], images[0].name);

  await axios.post('http://localhost:5174/images', formData);
}