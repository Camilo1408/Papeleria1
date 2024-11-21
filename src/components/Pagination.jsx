/* eslint-disable react/prop-types */
// Pagination.jsx
export const Pagination = ({ totalProducts, productsPerPage, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
  
    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };
  
    return (
      <div className="flex justify-center items-center mt-10 space-x-4">
        {/* Botón Anterior */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-6 py-3 rounded-full font-semibold shadow-lg ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-800 text-white hover:bg-blue-700"
          }`}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
  
        {/* Números de Página */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-5 py-3 rounded-lg font-semibold transition-colors ${
              currentPage === index + 1
                ? "bg-blue-800 text-white shadow-lg"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            {index + 1}
          </button>
        ))}
  
        {/* Botón Siguiente */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-6 py-3 rounded-full font-semibold shadow-lg ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-800 text-white hover:bg-blue-700"
          }`}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    );
  };
  