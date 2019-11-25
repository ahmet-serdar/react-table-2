import React from "react";

export const Dropdown = ({cell}) => {
  return (
    <td>
      <select>
        {cell.value.map(o => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </td>
  );
};
