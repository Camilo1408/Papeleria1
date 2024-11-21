// ProductList.jsx
import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const productList = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setProducts(products);
    } catch (error) {
      console.error("Error fetching the products:", error);
    }
  };

  useEffect(() => {
    productList();
  }, []);

  // Calcular productos actuales por página
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12 tracking-wide">
        <span className="text-blue-700">FakeStore</span> API
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden group"
          >
            <figure className="bg-gray-200 p-6 group-hover:opacity-75 transition-opacity">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-contain transition-all"
              />
            </figure>
            <div className="p-6 text-center space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-700 transition-colors">
                {product.title}
              </h3>
              <p className="text-gray-900 font-bold text-xl mb-5">${product.price}</p>
              <button className="bg-blue-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalProducts={products.length}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
