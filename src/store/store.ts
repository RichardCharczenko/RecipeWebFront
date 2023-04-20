import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import navBarReducer from '../features/navBar/navBarSlice';
import dataTableReducer from '../features/table/dataTableSlice';
import recipeTableReducer from '../features/recipeTable/recipeTableSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navBar: navBarReducer,
    dataTable: dataTableReducer,
    recipeTable: recipeTableReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
