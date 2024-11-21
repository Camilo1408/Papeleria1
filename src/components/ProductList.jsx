import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [books, setBooks] = useState([]);
  const [productsPerPage] = useState(6);
  const [currentProductPage, setCurrentProductPage] = useState(1);
  const [currentBookPage, setCurrentBookPage] = useState(1);

  // Función para obtener los productos desde FakeStoreAPI
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Función para obtener los libros desde Google Books API
  const fetchBooks = async () => {
    try {
      const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=react");  // Cambia el término de búsqueda si lo deseas
      const data = await response.json();
      setBooks(data.items || []);  // Asignar los libros a tu estado
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchBooks();
  }, []);

  // Paginación para productos
  const indexOfLastProduct = currentProductPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Paginación para libros
  const booksPerPage = 6;
  const indexOfLastBook = currentBookPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12 tracking-wide">
        <span className="text-blue-700">Product & Book</span> Collection
      </h1>

      {/* Sección de productos */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Productos</h2>
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
          currentPage={currentProductPage}
          setCurrentPage={setCurrentProductPage}
        />
      </section>

      {/* Sección de libros */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Libros</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16">
          {currentBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden group"
            >
              <figure className="bg-gray-200 p-6 group-hover:opacity-75 transition-opacity">
                {book.volumeInfo.imageLinks?.thumbnail && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className="w-full h-56 object-contain transition-all"
                  />
                )}
              </figure>
              <div className="p-6 text-center space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-700 transition-colors">
                  {book.volumeInfo.title}
                </h3>
                <p className="text-gray-500">{book.volumeInfo.authors?.join(", ")}</p>
                <p className="text-gray-900 font-bold text-xl mb-5">
                  ${book.saleInfo?.listPrice?.amount || "N/A"}
                </p>
                <button className="bg-blue-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          totalProducts={books.length}
          productsPerPage={booksPerPage}
          currentPage={currentBookPage}
          setCurrentPage={setCurrentBookPage}
        />
      </section>
    </div>
  );
};
