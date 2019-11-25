import React from 'react'

const Header = ({header}) => {
    return (
        <thead className="thead-dark">
            <tr>
                {header.map((e, i) => <th key={i}>{e}</th>)}
            </tr>
        </thead>
    )
}

export default Header
