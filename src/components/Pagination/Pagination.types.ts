export type PaginationProps = {
  totalPosts: number
  postsPerPage: number
  setCurrentPage: (page: number) => void
  currentPage: number
}