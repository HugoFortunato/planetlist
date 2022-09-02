import { useContext } from "react";
import { PlanetListContext } from "./PlanetListContext";

export const usePlanetList = () => useContext(PlanetListContext);