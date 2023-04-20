import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import navBarReducer from '../features/navBar/navBarSlice';
import dataTableReducer from '../features/table/dataTableSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navBar: navBarReducer,
    dataTable: dataTableReducer,
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
