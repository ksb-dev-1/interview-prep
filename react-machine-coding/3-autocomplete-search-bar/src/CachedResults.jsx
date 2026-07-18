import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function CachedResults() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const resultsCache = useRef(new Map()); // Store previous results

  async function fetchSearchResults(query) {
    console.log("API Call for:", query);

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
        resultsCache.current.set(query, []); // cache empty result
        return;
      }

      setSearchResults(data.recipes);
      resultsCache.current.set(query, data.recipes); // cache valid result
    } catch (error) {
      setError(error.message || "Failed to fetch");
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const trimmedQuery = query.trim();

      if (trimmedQuery !== "") {
        const cached = resultsCache.current.get(trimmedQuery);

        if (cached !== undefined) {
          console.log("Using cached results for:", trimmedQuery);
          setSearchResults(cached);
          setError(cached.length === 0 ? "No recipes found!" : "");
        } else {
          fetchSearchResults(trimmedQuery);
        }
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
        onBlur={() => setTimeout(() => setShowResults(false), 150)}
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
