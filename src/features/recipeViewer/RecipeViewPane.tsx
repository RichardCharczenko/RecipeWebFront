import React, { useState, Component } from 'react';
import { connect } from "react-redux";

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getRecipeById } from '../../app/contollers/recipeManager';
import { getSelectedRowId } from '../table/dataTableSlice';
import styles from './recipeViewPane.module.css';

export const RecipeViewPane:any = (props:any) => {
    const dispatch = useAppDispatch();

    let rowId:string|undefined = useAppSelector(getSelectedRowId);
    if(!rowId){
        return <div className={styles.noSelection}>
            Select a recipe from the table to view it here!
        </div>
    } 

    let recipe = getRecipeById(rowId);

    return(
    <div>
        <h1>{recipe.name}</h1>
    </div>
    );
}
