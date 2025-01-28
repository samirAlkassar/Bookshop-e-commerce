import React from 'react'

const Filter = ({label,icon,filter_list,handelSelection}) => {
  return (
    <div className="filter-section">
    <label htmlFor="filter">{label}</label>
    <span>
      <i className={icon}></i>
    </span>

    <select name="filter" id="filter" onChange={handelSelection}>
      {filter_list.map((filter) => (
        <option key={filter.value} value={filter.value}>
          {filter.label}
        </option>
      ))}
    </select>
  </div>
  )
}

export default Filter
