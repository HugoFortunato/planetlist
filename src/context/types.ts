import { PlanetCardProps } from "../components/PlanetCard/types";

export type ChildrenType = {
  children: React.ReactNode
}

export interface ContextType {
  getData: () => void;
  planetsData: object[]
  planetDetails: PlanetCardProps
  setPlanetDetails: (planetDetails: PlanetCardProps) => void
}

