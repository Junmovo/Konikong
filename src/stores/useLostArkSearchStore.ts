import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface LostarkState {
  favorites: string[];
  searchValue: string[];
  addFavorites: (item: string) => void;
  addSearchValue: (value: string) => void;
  removeSearchValue: (value: string) => void;
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
          if (state.searchValue.some((el) => el === item)) {
            const newList = [...state.searchValue];
            const index = newList.indexOf(item);
            newList.splice(index, 1);
            newList.unshift(item);
            return { searchValue: newList };
          }
          if (state.searchValue.length === 5) {
            state.searchValue.pop();
            return { searchValue: [item, ...state.searchValue] };
          } else {
            return { searchValue: [item, ...state.searchValue] };
          }
        }),

      removeSearchValue: (item) =>
        set((state) => {
          const newList = [...state.searchValue];
          const filtering = newList.filter((el) => el !== item);
          return { searchValue: filtering };
        }),
    }),
    {
      name: 'lostark-search-store',
    }
  )
);

export default useLostArkSearchStore;
