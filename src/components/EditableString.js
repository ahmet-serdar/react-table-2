import React from 'react'

const style = {
    width:"12rem", 
    height:"7rem", 
    background: "transparent",
    border:"none"
}

export const EditableString = ({cell, editCell, index, cellKey}) => {
    return (
        <td><textarea type="text" rows="5" defaultValue={cell.value} onClick={(e) => editCell(index, cellKey, e.target.value)} size="auto" style={style}/></td>
    )
}
