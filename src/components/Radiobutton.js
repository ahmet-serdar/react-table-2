import React from "react";

export const Radiobutton = ({cell, cellKey, row}) => {
  return (
    <td>
      {cell.value.map((o, i) => (
        <div key={i}>
          <input
            type="radio"
            value={o}
            name={`${cellKey}-${row.id.value}`}
            defaultChecked={o ? o === cell.defaultValue : false}
          />
          <label>{o}</label>
        </div>
      ))}
    </td>
  );
};
