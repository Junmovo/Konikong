import { create } from 'zustand';

const useUIState = create((set) => ({
  homecategory: '',
  headerImageSrc: 'https://cdn.pixabay.com/photo/2020/08/22/17/51/boat-5509027_1280.jpg',
  setHomeCategory: (value) => set({ homecategory: value }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

export default useUIState;
