import { useContext } from "react";
import { PlanetListContext } from "./PlanetList";

export const usePlanetList = () => {
  const context = useContext(PlanetListContext)

  return context;
}