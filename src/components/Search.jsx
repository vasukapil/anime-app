import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce'; 

function Search({ onSearchResults, setPage, page }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [totalMatches, setTotalMatches] = useState(0); 

  const API_URL = `https://api.jikan.moe/v4/characters?page=${page}&limit=15&q=${query}&order_by=favorites&sort=desc`;

  const debouncedSearch = debounce((searchQuery) => {
    handleSearch(searchQuery);
  }, 500);

  const handleSearch = async (searchQuery) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.jikan.moe/v4/characters?page=${page}&limit=15&q=${searchQuery}&order_by=favorites&sort=desc`);
      const data = await response.json();
      console.log(data,'dsfsfsdfsf');
      if (data?.data?.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
        setTotalMatches(data?.pagination?.items?.total);
      }
      onSearchResults(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  console.log(totalMatches,'tmmma')
  useEffect(() => {
    debouncedSearch(query);
  }, [query, page]);

  return (
    <div className="p-4 text-center mt-24">
      <input
        type="text"
        placeholder="Search characters"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-1/2 h-10 p-4 border-2 border-black rounded-md"
      />
      {totalMatches > 0 && <p className=' text-black text-2xl m-2'>Total {totalMatches} matching anime characters found</p>}
      {noResults && <p>No results found for the given search query.</p>}
    </div>
  );
}

export default Search;
