import React, { useState } from 'react'
import { tableRows } from './data'
import Header from './Header'
import Body from './Body'

const style = {
    table: {
        width:"90vw",
        margin:"auto",
        marginTop:"2rem",
        
    },
    head: {
        tr:{
            margin: '0',
            padding: '2rem'
        }
    },
    body:{
        margin:"auto",
        textAlign:"center"
    }
}

const Table = () => {

    const [rows, setRows] = useState(tableRows)
    const [header] = useState(Object.keys(rows[0]))

    const editCell = (row,key, e) => {
        console.log(`row${row}-cell${key}`)
        setRows(prevData => {console.log(prevData)
            prevData[row][key].value = e
        return prevData
    })
    }

    // console.log(rows)
    return (
        <table className='table table-bordered ' style={style.table}>
            <Header header={header}/>
            <Body rows={rows} keys={header} editCell={editCell} style={style.body}/>
        </table>
    )
}

export default Table
