import React from 'react';

const Pagination = ({ ItemPerPage, totalItem, paginate }) => {
  const pageNumber =[];
  for (let i=1; i<=Math.ceil(totalItem/ItemPerPage);i++){
    pageNumber.push(i);
  }

  return (
    <nav className='h-[80px]'>
      <ul className='pagination flex justify-center'>
        {pageNumber.map(number => (
          <li key={number} className='page-item mx-3 px-4 py-2 border-2 mt-5 border-gray-600'>
            <a onClick={() => paginate(number)} href='#' className='page-link text-black'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination