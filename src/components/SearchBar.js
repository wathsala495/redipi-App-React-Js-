import React from 'react'

const SearchBar = (
  {
    value,isLoadingata,handleSubmit,onChange
  }
) => {
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
      value={value}
      disabled={isLoadingata}
      onChange={onChange}
      placeholder='Search Recipe'
      className='form-control'/>

      <input
      disabled={isLoadingata || !value} 
        type='submit'
        className='btn'
        value="Search"
      />
    
      </form>
    </div>
  )
}

export default SearchBar
