import { useState, useEffect } from "react";

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchResults(query) {
  await sleep(Math.random() * 2000);

  return [query, query + query, query + query + query];
}

// do mot change anything above this line

function App() {
  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue === "") return;
    (async () => {
      const result = await fetchResults(searchValue);
      setResults([result[0]]);
    })();
  }, [searchValue]);

  return (
    <div>
      <h1>React Search App</h1>
      <input
        value={searchValue}
        onChange={handleSearch}
        type="text"
        placeholder="Search..."
      />

      {/* fetch results using fetchResults and display below */}

      <ul>
        {results.map((result) => (
          <li>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
