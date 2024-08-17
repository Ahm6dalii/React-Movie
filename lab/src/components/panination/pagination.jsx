import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default function PaginationComponent({ totalPage, count, setCount, fetchPageData }) {
  const handlePageChange = (pageNumber) => {
    setCount(pageNumber);
    fetchPageData(pageNumber);
  };

  const renderPaginationItems = () => {
    const items = [];
    
    for (let page = 1; page <= totalPage; page++) {
      items.push(
        <Pagination.Item
          key={page}
          active={page === count}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Pagination.Item>
      );
    }
    
    return items;
  };

  return (
    <Pagination>
      <Pagination.First 
        onClick={() => handlePageChange(1)}
        disabled={count === 1}
      />
      <Pagination.Prev 
        onClick={() => handlePageChange(count - 1)}
        disabled={count === 1}
      />
      {renderPaginationItems()}
      <Pagination.Next 
        onClick={() => handlePageChange(count + 1)}
        disabled={count === totalPage}
      />
      <Pagination.Last 
        onClick={() => handlePageChange(totalPage)}
        disabled={count === totalPage}
      />
    </Pagination>
  );
}
