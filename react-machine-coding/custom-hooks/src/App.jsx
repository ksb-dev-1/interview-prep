// import useQuery from "./hooks/useQuery";
// import useCycle from "./hooks/useCycle";
import useArray from "./hooks/useArray";



export default function App() {
  /*

  const request = useQuery(async () => {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    return response.json();
  }, []);

  if (request.status === "loading") {
    return <p>Loading...</p>;
  }

  if (request.status === "rejected") {
    return <p>Error: {request.error.message}</p>;
  }

  return (
    <ul>
      {request.data.products.map((product) => (
        <li key={product.id}>
          {product.title} - ${product.price}
        </li>
      ))}
    </ul>
  );
  
  */

  /*

  const [mode, cycle] = useCycle('low', 'medium', 'high');

  return (
    <div>
      <p>State: {mode}</p>
      <button onClick={cycle}>Cycle</button>
    </div>
  );

  */

  const defaultValue = ['apple', 'banana'];


  const { array, push, update, remove, filter, set, clear } =
    useArray(defaultValue);

  return (
    <div>
      <p>Fruits: {array.join(', ')}</p>
      <button onClick={() => push('orange')}>Add orange</button>
      <button onClick={() => update(1, 'grape')}>
        Change second item to grape
      </button>
      <button onClick={() => remove(0)}>Remove first</button>
      <button onClick={() => filter((fruit) => fruit.includes('a'))}>
        Keep fruits containing 'a'
      </button>
      <button onClick={() => set(defaultValue)}>Reset</button>
      <button onClick={clear}>Clear list</button>
    </div>
  );


}