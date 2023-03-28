import { create } from 'zustand';
import { deleteImage, getImages, uploadImage } from '../services/ImageService';

interface ImageStore {
  images: string[],
  isLoading: boolean,
  getImages: () => void,
  uploadImage: (image: FileList) => void,
  deleteImage: (imageName: string) => void
}

const useImageStore = create<ImageStore>((set) => {
  const refreshImages = async (): Promise<void> => {
    set({ isLoading: true });

    const images = await getImages();

    set({
      images,
      isLoading: false
    });
  };

  return {
    images: [],
    isLoading: true,
    getImages: refreshImages,
    uploadImage: async (image) => {
      await uploadImage(image);
      await refreshImages();
    },
    deleteImage: async (imageName) => {
      await deleteImage(imageName);
      await refreshImages();
    },
  }
});


export { useImageStore };