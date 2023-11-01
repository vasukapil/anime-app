import React from 'react';

function Pagination({ page, totalResults, setPage }) {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };
  console.log(totalResults,'teeer')
  const handleNext = () => {
    const nextPage = page + 1;
    if (nextPage <= totalResults?.last_visible_page) {
      setPage(nextPage);
    }
  };

  return (
    <div className="mx-auto my-4 text-center">
      <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={handlePrev}>
        Previous
      </button>
      <span className="mx-4 text-gray-600">
        Page {page} of {totalResults?.last_visible_page}
      </span>
      <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
