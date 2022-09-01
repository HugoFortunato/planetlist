import React, { createContext, useCallback, useEffect, useState } from "react";

import { api } from "../pages/api/baseURL";
import { ChildrenType, ContextType } from "./types";
import { PlanetCardProps } from "../components/PlanetCard/types";

export const PlanetListContext = createContext({} as ContextType);

export const PlanetListProvider = ({ children }: ChildrenType) => {
  const [planetsData, setPlanetsData] = useState([]);
  const [planetDetails, setPlanetDetails] = useState<PlanetCardProps>({
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
        planetsData: planetsData,
        getData,
        planetDetails,
        setPlanetDetails,
      }}
    >
      {children}
    </PlanetListContext.Provider>
  );
};
