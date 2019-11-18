import React, { useState } from 'react'
import { rows } from './data'
import Header from './Header'
import Body from './Body'

const style = {
    table: {
        margin: '2rem',
        padding: '2rem',
        border: '1px solid black'
    },
    head: {
        tr:{
            margin: '0',
            padding: '2rem'
        }
    }
}

const Table = () => {

    const [header] = useState(Object.keys(rows[0]))

    console.log(header)
    return (
        <table className='table'>
            <Header header={header} style={style}/>
            <Body rows={rows} keys={header}/>
        </table>
    )
}

export default Table
