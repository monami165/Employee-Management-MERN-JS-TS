import React from "react";

const Pagination = ({ employeesPerPage, totalEmployees, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <br />
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
        <br />
        <br />
      </nav>
    </div>
  );
};

export default Pagination;
