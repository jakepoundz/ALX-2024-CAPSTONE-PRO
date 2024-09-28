import React, { useState } from 'react';
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Call the onSearch function from parent component
  };
  return (
    <div className="mb-4">
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Search Exercises"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};
export default SearchBar;