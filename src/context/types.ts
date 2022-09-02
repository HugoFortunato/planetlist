export type ChildrenType = {
  children: React.ReactNode
}

export interface ContextType {
  getData: () => void;
  planetsData: Planet[]
  planetDetails: Planet
  setPlanetDetails: (planetDetails: Planet) => void
}

export type Planet = {
  name?: string
  climate?: string
  surface_water?: string
  gravity?: string
}