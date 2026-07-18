import { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  async function fetchSearchResults(query) {
    console.log("API Call");
    try {
      setError("");
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${query}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();

      if (data?.recipes?.length === 0) {
        setError("No recipes found!");
        setSearchResults([]);
        return;
      }

      setSearchResults(data.recipes);
    } catch (error) {
      setError(error.message || "Failed to fetch");
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() !== "") {
        fetchSearchResults(query);
      } else {
        setSearchResults([]);
        setError("");
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="App">
      <h1>Autocomplete Search Bar</h1>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />

      {query !== "" && showResults && (
        <div className="results">
          {loading && <span className="loading">Loading results...</span>}

          {error && (
            <div className="error">
              <h3>Error</h3>
              <span>{error}</span>
            </div>
          )}

          {!loading && !error && searchResults.length > 0 && (
            <>
              {searchResults.map((recipe) => (
                <span key={recipe.id} className="result">
                  {recipe.name}
                </span>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
