import axios from 'axios';

export async function getImages(): Promise<any> {
  const { data } = await axios.get('http://localhost:5174/images');

  return data;
}

export async function uploadImage(images: FileList): Promise<void> {
  const formData = new FormData();
  formData.append('image', images[0], images[0].name);

  await axios.post('http://localhost:5174/images', formData);
}

export async function deleteImage(imageName: string): Promise<void> {
  await axios.delete(`http://localhost:5174/images/${imageName.replace('http://localhost:5174/', '')}`);
}