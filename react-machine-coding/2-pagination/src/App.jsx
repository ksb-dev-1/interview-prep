// import { useState, useEffect } from "react";
// import "./index.css";

// const PAGE_SIZE = 10;

// const ProductCard = ({ image, title }) => {
//   return (
//     <div className="product-card">
//       <img src={image} alt={title} />
//       <p>{title}</p>
//     </div>
//   );
// };

// export default function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch("https://dummyjson.com/products?limit=0");

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();

//       if (data?.products?.length === 0) {
//         setError("No products found!");
//         return;
//       }

//       setProducts(data.products);
//     } catch (error) {
//       setError(error.message || "Failed to fetch products");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const totalPages = Math.ceil(products.length / PAGE_SIZE);

//   const handlePrev = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePageClick = (page) => {
//     setCurrentPage(page);
//   };

//   const startIndex = (currentPage - 1) * PAGE_SIZE;
//   const currentProducts = products.slice(startIndex, startIndex + PAGE_SIZE);

//   if (loading) return <p className="App">Loading products...</p>;

//   if (error) {
//     return (
//       <div className="App">
//         <h1>Error</h1>
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="App">
//       <h1>Products</h1>

//       <div className="products">
//         {currentProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             image={product.thumbnail}
//             title={product.title}
//           />
//         ))}
//       </div>

//       <div className="pagination">
//         <button
//           onClick={handlePrev}
//           disabled={currentPage === 1}
//           className="btn"
//         >
//           Prev
//         </button>

//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i + 1}
//             onClick={() => handlePageClick(i + 1)}
//             className={currentPage === i + 1 ? "btn active" : "btn"}
//           >
//             {i + 1}
//           </button>
//         ))}

//         <button
//           onClick={handleNext}
//           disabled={currentPage === totalPages}
//           className="btn"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// ----------------------------------------------------------------------------------

import { useState, useEffect } from "react";
import "./styles.css";

const PAGE_SIZE = 10;

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //const [currentPage, setCurrentPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=0");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data?.products?.length === 0) {
        setError("No products found!");
        return;
      }

      setProducts(data.products);
    } catch (error) {
      setError(error.message || "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <p className="App">Loading products...</p>;

  if (error) {
    return (
      <div className="App">
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  // const startIndex = (currentPage - 1) * PAGE_SIZE;
  // const currentProducts = products.slice(startIndex, startIndex + PAGE_SIZE);

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return (
    <div className="App">
      <h1>Products</h1>

      <div className="products">
        {products.slice(start, end).map((product) => (
          <ProductCard
            key={product.id}
            image={product.thumbnail}
            title={product.title}
          />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="btn"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={currentPage === i ? "btn active" : "btn"}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}
