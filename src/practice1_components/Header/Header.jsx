import React from 'react';

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <ul>
      {filters.map((value, index) => (
        <li key={index}>
          <button onClick={() => onFilterChange(value)}>{value}</button>
        </li>
      ))}
    </ul>
  );
}
