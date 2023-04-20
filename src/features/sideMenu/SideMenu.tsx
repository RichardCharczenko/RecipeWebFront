import React from 'react';

import styles from './sideMenu.module.css';

export function SideMenu() {
    let menuButtons = <div> testing 101</div>;
    return (
        <div className={styles.sideMenu}>
            <button className={styles.menuButton}>Saved Filters</button>
            <button className={styles.menuButton}>Recipe Books</button>
            <div className={styles.menuList}>
                <ul  className={styles.menuItem}>
                    some recipe book or filter
                </ul>
            </div>
        </div>
    );
}
