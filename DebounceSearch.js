import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Debounced search function
  const debouncedSearch = debounce(async (searchTerm) => {
    if (searchTerm) {
      try {
        const response = await fetch(`https://api.example.com/search?q=${searchTerm}`);
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      setResults([]);
    }
  }, 500); // 500ms debounce delay

  // Update debounced search function whenever the query changes
  useEffect(() => {
    debouncedSearch(query);

    // Cleanup the debounced function when the component unmounts
    return () => {
      debouncedSearch.cancel();
    };
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;