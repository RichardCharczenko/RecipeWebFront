import React from 'react';

import './App.css';
import { NavBar } from './features/navBar/NavBar';
import { RecipeTable } from './features/recipeTable/RecipeTable';
import { SideMenu } from './features/sideMenu/SideMenu';
import { RecipeViewPane } from './features/recipeViewer/RecipeViewPane'


function App() {
    return (
        <div className="App">
            <NavBar />
            <SideMenu />

            <div className="Container">
                <span className="grid-filters-item">
                    
                </span>
                <div className='grid-table-item'>
                    <RecipeTable/>
                </div>
                <div className='grid-page-item'>
                    <RecipeViewPane />
                </div>
            </div>
        </div>
    );
}

export default App;
