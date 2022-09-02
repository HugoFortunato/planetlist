import { render, waitFor, fireEvent } from "@testing-library/react";
import { Planet } from "../../context/types";

import PlanetList from "./index";

describe("<PlanetList />", () => {
  const Test = () => {
    const planets: Planet[] = [
      {
        name: "Tatooine",
        climate: "arid",
        surface_water: "1",
        gravity: "1 standard",
      },
      {
        name: "Alderaan",
        climate: "umid",
        surface_water: "70",
        gravity: "2 standard",
      },
    ];

    return <PlanetList planets={planets} />;
  };

  it("should test the placeholder of input", () => {
    const { getByPlaceholderText } = render(<Test />);

    const inputElement = getByPlaceholderText("search your planet...");

    expect(inputElement).toMatchSnapshot;
  });

  it("should test", () => {
    const { getByTestId, getAllByTestId } = render(<Test />);

    const inputElement = getByTestId("input");
    const planetToSearch = "Tatooine";

    fireEvent.change(inputElement, {
      target: { value: planetToSearch },
    });

    waitFor(() => {
      const planetsFound = getAllByTestId("click-planet-details");

      planetsFound.forEach((planet) => {
        expect(planet).toHaveTextContent(planetToSearch);
      });
    });

    expect(inputElement).toMatchSnapshot;
  });
});
