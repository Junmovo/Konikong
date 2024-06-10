import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface LostarkState {
  favorites: string[];
  searchValue: string[];
  addFavorites: (item: string) => void;
  addSearchValue: (value: string) => void;
}

const useLostArkSearchStore = create<LostarkState>()(
  persist(
    (set) => ({
      favorites: [],
      searchValue: [],

      addFavorites: (item) =>
        set((state) => ({
          favorites: [...state.favorites, item],
        })),

      addSearchValue: (item) =>
        set((state) => {
          if (state.searchValue.length === 5) {
            state.searchValue.pop();
            return { searchValue: [item, ...state.searchValue] };
          } else {
            return { searchValue: [item, ...state.searchValue] };
          }
        }),
    }),
    {
      name: 'lostark-search-store',
    }
  )
);

export default useLostArkSearchStore;
