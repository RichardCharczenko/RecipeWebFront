import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectPage,
    alertSelection,
    selectableOptions
} from './navBarSlice';
import styles from './navBar.module.css';

export function NavBar() {
    const options = useAppSelector(selectableOptions);
    const dispatch = useAppDispatch();

    const navBarButtons = createNavBarButtons(options);

    return (
        <div className={styles.navBar}>
            {navBarButtons}
        </div>
    );
}

function createNavBarButtons(pages: string[]){
    let pageButtons: any[] = [];
    pages.forEach(page => pageButtons.push( (<button className={styles.button}> {page}</button>) ));
    return pageButtons;
}