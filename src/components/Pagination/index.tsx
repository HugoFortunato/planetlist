import React, { useMemo } from "react";

import * as S from "./Pagination.styles";
import { PaginationProps } from "./Pagination.types";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  const totalPages = useMemo(() => {
    return Math.ceil(totalPosts / postsPerPage);
  }, [postsPerPage, totalPosts]);

  const pages = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <S.Pagination data-testid="pagination-id">
      {pages.map((page, index) => (
        <S.Button
          key={index}
          onClick={() => setCurrentPage(page)}
          active={page === currentPage}
        >
          {page}
        </S.Button>
      ))}
    </S.Pagination>
  );
};

export default Pagination;
