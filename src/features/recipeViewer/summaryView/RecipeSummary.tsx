import React from 'react';

import styles from './recipeSummary.module.css';

export const RecipeSummary = (props:any) => {

    let imageSection = props.image ? (<img src={props.image} alt=""></img>) : undefined;

    return (
        <div className={styles.recipeSummaryView}>
            <h1 className={styles.recipeViewTitle}>
                {props.recipeName}
            </h1>
            {imageSection}
            <span className={styles.summaryBox}>
            the recipe summary goes herethe recipe summary goes herethe recipe summary goes herethe 
            recipe summary goes herethe recipe summary goes herethe recipe summary goes herethe recipe 
            summary goes herethe recipe summary goes herethe recipe summary goes herethe recipe 
            summary goes herethe recipe summary goes herethe recipe summary goes here
            </span>
        </div>
    )
}