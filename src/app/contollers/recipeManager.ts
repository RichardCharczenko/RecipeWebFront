import { rowData } from "../domain";

let testRecipeData:{ [id: string]: any } = {
    '1': { 
        id: '1',
        name: 'good big pasta',
        calories: 210000,
        rating: '5'
    },
    '2': {
        id: '2',
        name: 'small pasta',
        calories: 20,
        rating: '5'
    },
    '3': {
        id: '3',
        name: 'meh pasta',
        calories: 1240,
        rating: '3'
    },
    '4': {
        id: '4',
        name: 'just pasta',
        calories: 1000,
        rating: '4'
    },
    '5': {
        id: '5',
        name: 'nasty pasta',
        calories: 996,
        rating: '0'
    },
}

export const getRecipeById = (id: string) => {
    return testRecipeData[id];
}

export const getRecipeSummaries = () => {
    let testRows: rowData[] = [
        { data: ['good big pasta', 210000, '5'], id: "1" },
        { data: ['small pasta', 20, '5'], id: "2" },
        { data: ['meh pasta', 1240, '3'], id: "3" },
        { data: ['just pasta', 1000, '4'], id: "4" },
        { data: ['nasty pasta', 996, '0'], id: "5" },
    ]
    return testRows
} 