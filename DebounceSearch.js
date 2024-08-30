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


// Interview Usecase

function App() {
  const [data, setData] = React.useState([]);

  // Debounce function
  const debounce = (mainFunction, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        mainFunction(...args);
      }, delay);
    };
  };

  // API call to search for data
  const searchFromAPI = async (searchKey) => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${searchKey}`
      );
      console.log(response.data);
      let resp = response.data.docs;
      const titles = resp.map((item) => item.title).filter(Boolean);
      setData(titles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Create a debounced version of the search function
  const debouncedSearch = React.useCallback(debounce(searchFromAPI, 1000), []);

  // Handle input change
  const onChange = (e) => {
    console.log(e.target.value);
    debouncedSearch(e.target.value);
  };

  React.useEffect(() => {
    return () => {
      console.log("Component unmounted, cleanup here if needed");
    };
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" onChange={onChange} />
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}