import { Recipe, rowData } from "./domain";

export const convertRecipeListToTableData = ( recipeList:Recipe[] ) => {
    let dataTableRows:rowData[] = [];
    recipeList.forEach((r:Recipe) => {
        let rowData = Object.values(r);
        rowData.shift();
        dataTableRows.push({
            data: [...rowData],
            id: r.id
        });
    });
    return dataTableRows;
}