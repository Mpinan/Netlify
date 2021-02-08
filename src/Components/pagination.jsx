import React from "react";

const Paginate = ({ reviewsPerPage, allReviews, passPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div id="pag">
      {pageNumbers.map(number => (
        <ul key={number}>
          <li onClick={() => passPage(number)}>
            <button>
              {number}
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Paginate;
