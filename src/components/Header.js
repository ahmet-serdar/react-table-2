import React from 'react'

const style = {

}

const Header = ({header, style}) => {
    return (
        <thead>
            <tr>
                {header.map((e, i) => <th key={i}>{e}</th>)}
            </tr>
        </thead>
    )
}

export default Header
