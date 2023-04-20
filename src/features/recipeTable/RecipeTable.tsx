import React from 'react';

import { DataTable } from '../table/DataTable';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loadRecipeData, recipeList, status } from './recipeTableSlice'
import { convertRecipeListToTableData } from '../../app/helpers';

export const RecipeTable = () => {
    const dispatch = useAppDispatch();
    let recList = useAppSelector(recipeList);
    const testTableColumns: string[] = ['Recipe Name', 'Calories', 'Rating'];
    const state = useAppSelector(status);


    if(state === 'notLoaded'){
        dispatch(loadRecipeData());
    }
    let rows = convertRecipeListToTableData(recList);
    console.log(rows);

    return state === 'idle' ? <DataTable
                columns={testTableColumns}
                rowData={rows === undefined ? []: rows}
            /> : <div> loading!</div>
}
