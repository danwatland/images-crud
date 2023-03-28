import axios from 'axios';

export async function getImages(): Promise<any> {
  const { data } = await axios.get(`${API_URL}/images`);

  return data;
}

export async function uploadImage(images: FileList): Promise<void> {
  const formData = new FormData();
  formData.append('image', images[0], images[0].name);

  await axios.post(`${API_URL}/images`, formData);
}

export async function deleteImage(imageName: string): Promise<void> {
  await axios.delete(`${API_URL}/${imageName.replace(`${API_URL}/`, '')}`);
}