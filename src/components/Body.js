import React from 'react'
import { EditableString } from './EditableString'
import { Dropdown } from './Dropdown'
import { Radiobutton } from './Radiobutton'

const Body = ({rows, keys, editCell}) => {
    return (
        <tbody className="" >
            {rows.map((row,i) => {
                return (
                    <tr key={i} >
                    { keys.map((key) =>{
                        const cell = row[key]
                        switch(cell.type) {
                            case 'dropdown': 
                                return <Dropdown key={cell.value} cell={cell}/>
                            case 'radiobutton':
                                return <Radiobutton key={cell.value} row={row} cellKey={key} cell={cell} />
                            case 'number' :
                                return <td key={cell.value} >{cell.value}</td>
                            case 'string' :
                                return <td key={cell.value}>{cell.value}</td>
                            case 'editable-string' :
                                return <EditableString key={cell.value} cell={cell} editCell={editCell} index={i} cellKey={key} />
                            default:
                                return <td> </td>
                        }
                    
                    })}
                    </tr>
                )
            }
            )}
        </tbody>
    )
}

export default Body
