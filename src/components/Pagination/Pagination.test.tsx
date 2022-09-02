import { render, fireEvent } from "@testing-library/react";

import Pagination from "./index";

describe("<Pagination />", () => {
  const Test = () => {
    return (
      <Pagination
        totalPosts={8}
        postsPerPage={5}
        setCurrentPage={() => 2}
        currentPage={1}
      />
    );
  };

  it("should test the data-testid", () => {
    const { getByTestId } = render(<Test />);

    const textElement = getByTestId("pagination-id");

    expect(textElement).toMatchSnapshot();
  });

  it("should test the button of pagination", () => {
    const { getByText } = render(<Test />);

    const buttonElement = getByText(1);

    fireEvent.click(buttonElement);

    expect(buttonElement).toMatchSnapshot();
  });
});
