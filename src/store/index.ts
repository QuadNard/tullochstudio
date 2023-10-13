import { Category, Post } from '@prisma/client';
import { create } from 'zustand';

type CategoriesValue = Category & { posts:Pick<Post, 'id'>[]}

export interface InitialState {
    value: CategoriesValue[];
   isLoading: boolean;
}

const initialState: InitialState = {
    value: [],
    isLoading: false,
}



export const useCategoryStore = create((set) => ({
    name: 'categories',
    state: initialState,
    setCategories: (categories: CategoriesValue[], ) => set({ value: categories,  isLoading: false }),
}));