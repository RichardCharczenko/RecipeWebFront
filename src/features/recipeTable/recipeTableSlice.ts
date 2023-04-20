import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store/store';
import { getRecipeSummaries } from '../../app/contollers/recipeManager';

export interface RecipeTableState {
    recipeList: any[];
    status: 'idle' | 'loading' | 'failed' | 'notLoaded';
  }

const initialState: RecipeTableState = {
    recipeList: [],
    status: 'notLoaded',
  };

export const loadRecipeData = createAsyncThunk(
    '',
    async () => {
      const response = await getRecipeSummaries();
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );

export const recipeTableSlice = createSlice({
    name: 'recipeTable',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(loadRecipeData.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(loadRecipeData.fulfilled, (state, action) => {
            state.status = 'idle';
            state.recipeList = action.payload;
        })
        .addCase(loadRecipeData.rejected, (state) => {
            state.status = 'failed';
        });
    },
});

export const recipeList = (state:RootState) => state.recipeTable.recipeList;
export const status = (state:RootState) => state.recipeTable.status;
export default recipeTableSlice.reducer;
