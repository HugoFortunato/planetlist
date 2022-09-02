import React, { createContext, useCallback, useEffect, useState } from "react";

import { api } from "../pages/api/baseURL";
import { ChildrenType, ContextType, Planet } from "./types";

export const PlanetListContext = createContext({} as ContextType);

export const PlanetListProvider = ({ children }: ChildrenType) => {
  const [planetsData, setPlanetsData] = useState<Planet[]>([]);
  const [planetDetails, setPlanetDetails] = useState<Planet>({
    name: "",
    climate: "",
    surface_water: "",
    gravity: "",
  });

  const getData = useCallback(async () => {
    const response = await api.get("planets");

    setPlanetsData(response.data.results);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <PlanetListContext.Provider
      value={{
        planetsData,
        getData,
        planetDetails,
        setPlanetDetails,
      }}
    >
      {children}
    </PlanetListContext.Provider>
  );
};
