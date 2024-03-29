export interface rowData {
    data: any[];
    id: string;
}

export interface tableFilter{
    filter: string;
}

export interface paginationData{
    currentPage: number;
    totalEntries: number;
    rowsDisplayedPerPage: number;
}

export interface Recipe{
    recipeName: string;
    calories: number;
    rating: number;
    id: string;
}