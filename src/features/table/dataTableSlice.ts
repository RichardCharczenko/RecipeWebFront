import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store/store';
import { rowData, tableFilter, paginationData } from '../../app/domain';

export interface TableState {
    columnHeaders: string[];
    rows: { [key: string]: rowData };
    filter?: tableFilter; // TODO
    pagination?: paginationData; // TODO
    tableOptions?: any;
    selectedRow?: string;
}

const initialState: TableState = {
    columnHeaders: [],
    rows: {},
    tableOptions: { showActionColumn: true}
}

export const tableSlice = createSlice({
    name:'dataTable',
    initialState,
    reducers: {
        setRowData: (state, action: PayloadAction<rowData[]>, ) => {
            action.payload.forEach( (row: rowData) => {
                state.rows[row.id] = {...row};
            })
        },
        addRow: (state, action: PayloadAction<rowData>) => {
            state.rows[action.payload.id] = {...action.payload};
        },
        deleteRow: (state, action: PayloadAction<rowData>) => {
            delete state.rows[action.payload.id];
        },
        editRow: (state, action: PayloadAction<{currentRow: rowData, updatedRow: rowData }> ) => {
            state.rows[action.payload.currentRow.id] = {...action.payload.updatedRow}
        },
        setSelectedRow: (state, action: PayloadAction<{rowId: string}> ) => {
            state.selectedRow = action.payload.rowId;
        }
    }
});


export const getTableOptions = (state:RootState) => state.dataTable.tableOptions;
export const getSelectedRowId = (state:RootState) => state.dataTable.selectedRow;
export const { setRowData, addRow, deleteRow, editRow, setSelectedRow } = tableSlice.actions;
export default tableSlice.reducer