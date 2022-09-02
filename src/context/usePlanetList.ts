import { useContext } from "react";
import { PlanetListContext } from "./PlanetList";

export const usePlanetList = () => useContext(PlanetListContext);