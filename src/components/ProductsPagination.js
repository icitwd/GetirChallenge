import React, { useEffect, useState } from "react";
import useItems from "../hooks/use-items";
import ReactPaginate from "react-paginate";

export default function ProductsPagination({ setProducts }) {
  const itemsPerPage = 16;
  const { filteredItems } = useItems();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setProducts(filteredItems.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredItems.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageChange = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredItems.length;
    setItemOffset(newOffset);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next >"
      onPageChange={handlePageChange}
      pageRangeDisplayed={4}
      pageCount={pageCount}
      previousLabel="< Prev"
    />
  );
}
