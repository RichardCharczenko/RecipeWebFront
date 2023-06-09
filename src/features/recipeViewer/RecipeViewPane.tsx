import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getSelectedRowId,  } from '../table/dataTableSlice';
import styles from './recipeViewPane.module.css';
import { recipeList } from '../recipeTable/recipeTableSlice';
import { Recipe } from '../../app/domain';
import { RecipeSummary } from './summaryView/RecipeSummary';

export const RecipeViewPane:any = (props:any) => {
    const dispatch = useAppDispatch();

    let rowId:string|undefined = useAppSelector(getSelectedRowId);
    let recipes = useAppSelector(recipeList);
    let selectedRecipe:Recipe = recipes.find((item) => item.id === rowId)

    console.log(`The current id: ${rowId}`);
    if(!rowId || rowId === ""){
        return <div className={styles.noSelection}>
            Select a recipe from the table to view it here!
        </div>
    } 
    console.log(selectedRecipe);
    return(
        <div className={styles.recipeViewPane}>
            <RecipeSummary
            recipeName={selectedRecipe.recipeName}
            />
            <div className={styles.buttonRow}>
                <button className={styles.button}>Instructions</button>
                <button className={styles.button}>Nutrition</button>
                <button className={styles.button}>Sources</button>
                <button className={styles.button}>Can I make this?</button>
            </div>
        </div>
    );
}

