
import { create } from 'zustand'

type Category = {
  category_id: string;
  category_name: string;
  color: string;
}

type CategoryState = {
  categories: Category[];
  addCategory: (
    category_name: string,
    color: string
    ) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [
  {category_id: '66dd5daa-1bb4-47f0-b0ff-9f42c460af69', category_name: 'Web design', color: '#DCF018'},
  {category_id: '535f92a3-cf38-4a76-a81f-45ed8aa09e00', category_name: 'System Design' , color: '#18F0E8'},
  {category_id: '5af6af7f-6da7-4161-93a9-9500ee185f3a', category_name: 'Web Development', color: '#8C0CF0'},
  {category_id: '2ee58d3a-75a9-48c2-8c12-1e6429ccdafb', category_name: 'Website', color: '#F01830'},
  ], 
  addCategory: (category_name, color) => {
    set((state) => ({
      categories: [
        ...state.categories, 
        {category_id: state.categories.length.toString(), 
         category_name,
          color,
         },
        ]
    }))
  }
}));