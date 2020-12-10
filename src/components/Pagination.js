import React from "react";

const Pagination = ({ postsPerpage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <div key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
