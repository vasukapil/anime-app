import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import Pagination from './components/Pagination';
import Search from './components/Search';


function App() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0); 

  const handleSearchResults = (searchResults) => {
    console.log(searchResults,'sdfsdf')
    setResults(searchResults);
    setTotalResults(searchResults.pagination); 
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-white p-4 bg-gradient-to-r from-green-400 to-blue-500" style={{ height: '350px' }}>
        <h1 className="text-4xl font-bold mb-4 text-center" style={{ fontSize: '32px' }}>
          Anime Character Search
        </h1>
        <Search onSearchResults={handleSearchResults} setPage={setPage} page={page} /> 
      </div>
      <div className="flex-1 p-4 overflow-y-auto bg-white shadow-md rounded-lg">
        <Grid results={results} />
        <Pagination page={page} totalResults={totalResults} setPage={setPage} /> 
      </div>
    </div>
  );
}

export default App;
