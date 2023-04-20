import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store/store';

export interface NavBarState {
    selected: string;
    options: string[];
}

const initialState: NavBarState = {
    selected: '/home',
    options: ['Home', 'Pantry', 'Recipe Book']
}

export const navBarSlice = createSlice({
    name:'navBar',
    initialState,
    reducers: {
        selectPage: (state, action: PayloadAction<string>) => {
            state.selected = action.payload;
        },
        alertSelection: (state) => {
            alert(`${state.selected} === ${state.options}`);
        }
    }
});

export const selectableOptions = (state:RootState) => state.navBar.options;
export const { selectPage, alertSelection } = navBarSlice.actions;
export default navBarSlice.reducer