import { Recipe, rowData } from "../domain";

const base_url = process.env.REACT_APP_RECIPE_MANAGER_API_BASE_URL;

export async function getRecipeSummaries(){
    return new Promise<{ data: Recipe[] }>((resolve, reject) => {
        let recipeList:Recipe[] = [];
        fetch(`${base_url}`, {'method': "GET"})
        .then( response => {
            if(response.status === 200) {
                response.json().then(function(data) {
                    data.forEach((recipe:any) => {
                        //let obj = {data: [recipe.recipeName, recipe.calories, recipe.rating], id: recipe.id }
                        recipeList = [...recipeList, recipe];
                    });
                    resolve({ data:recipeList });
                });
            } else {
                reject(response);
            }
        })
        .catch( e => {
            console.log(e);
            reject()
        })
        
    })
} 

export async function getRecipeById(id:string){
    return new Promise<{ data: Recipe }>((resolve, reject) => {
        fetch(`${base_url}/${id}`, {'method': "GET"})
        .then( response => {
            if(response.status === 200) {
                response.json().then(function(data) {
                    resolve({ data:{...data} });
                });
            } else {
                reject(response);
            }
        })
        .catch( e => {
            console.log(e);
            reject()
        })
        
    })
} 