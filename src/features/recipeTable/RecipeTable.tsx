import React from 'react';

import { DataTable } from '../table/DataTable';
import { rowData } from '../../app/domain';
import { getRecipeSummaries } from '../../app/contollers/recipeManager'; 

export const RecipeTable = () => {
    
    const testTableColumns: string[] = ['Recipe Name', 'Calories', 'Rating'];
    const rows = getRecipeSummaries();

    console.log(rows)
    console.log(testTableColumns)
    return <DataTable
                columns={testTableColumns}
                rowData={rows}
            />
}