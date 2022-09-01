import PlanetCard from "./index";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PlanetListProvider } from "../../context/PlanetList";

describe("<PlanetCard />", () => {
  const Test = () => {
    return (
      <PlanetListProvider>
        <PlanetCard
          key="1"
          name="Tatooine"
          climate="arid"
          surface_water="1"
          gravity="1 standard"
          data-testid="click-planet-details"
        />
      </PlanetListProvider>
    );
  };

  it("should test the button of pagination", () => {
    const { getByText } = render(<Test />);

    const buttonElement = getByText("Tatooine");

    expect(buttonElement).toMatchSnapshot();
  });

  it("should test the button of planet details", () => {
    const { getByTestId } = render(<Test />);

    const buttonElement = getByTestId("click-planet-details");

    fireEvent.click(buttonElement);

    expect(buttonElement).toMatchSnapshot();
  });

  it("should test the hover button", () => {
    const { getByTestId } = render(<Test />);

    const buttonElement = getByTestId("click-planet-details");

    userEvent.hover(buttonElement);
  });
});
