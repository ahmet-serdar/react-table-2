import React from 'react'
import Header from './Header'

const Body = ({rows, keys}) => {
    return (
        <tbody>
            {rows.map((row,i) => {
                return (
                    <tr key={i}>
                    { keys.map(key =>{
                        const cell = row[key]                        
                        console.log(row[key])
                        switch(cell.type) {
                            case 'dropdown': 
                                return <td>
                                    <select>
                                    {cell.value.map(o => <option>{o}</option>)}
                                    </select>
                                </td>
                            case 'radiobutton':
                                return <td>
                                {cell.value.map(o => (
                                    <div>
                                    <input type='radio' value={o} name={key}/>
                                    <label>{o}</label>
                                    </div>
                                ))}
                                </td>
                            case 'number' :
                                return <td>{cell.value}</td>
                            default:
                                return <td> </td>
                        }
                    
                    })}
                    </tr>
                )
            }
                
            //     <tr key={i}>{
            //     // row.map(c => {
            //     //     console.log(c)
            //     //     // 
            //     //     // }
            //     // })
            // }</tr>
            )}
        </tbody>
    )
}

export default Body
