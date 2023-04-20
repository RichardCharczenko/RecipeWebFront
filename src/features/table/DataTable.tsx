import React, { useState, Component } from 'react';
import { connect } from "react-redux";

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { rowData } from '../../app/domain';
import {
    setRowData,
    addRow,
    deleteRow,
    editRow,
    getTableOptions,
    getSelectedRowId,
    setSelectedRow
} from './dataTableSlice';
import styles from './dataTable.module.css';

export function DataTable(props: any){
    const columnHeaders = buildColumnHeads(props.columns);
    const tableRows: any[] = [];

    const dispatch = useAppDispatch();
    dispatch(setRowData(props.rowData));

    let selectedRowId = useAppSelector(getSelectedRowId);
    let options = useAppSelector(getTableOptions);
    
    props.rowData.forEach((row: rowData) => {
        tableRows.push(buildRow(row, dispatch, selectedRowId === row.id))
    });

    return (
        <table className={styles.table}>
            <thead>{columnHeaders}</thead>
            <tbody className={styles.tableBody}>{tableRows}</tbody>
        </table>
    );
}

function buildColumnHeads(columnTitles:string[]) {
    let headers: any = [];
    columnTitles.forEach((col:string) => {
        headers.push(<th key={col}> {col} </th>)
    })
    return (
        <tr>
            {headers}
        </tr>
    );
}

const buildRow:any = (rowData:rowData, dispatch:any, isSelected:boolean) =>{
    let columns: any[] = [];
    rowData.data.forEach((columnData:any) => {
        columns.push(<td> {columnData} </td>)
    });

    let row = !isSelected ? 
    <tr onClick={ ()=> { 
        dispatch(setSelectedRow({rowId: rowData.id}))
    } }> {columns} </tr> : 
    <tr style={{ border: '2px solid #73AD21' }}>{columns}</tr>

    return row;
}