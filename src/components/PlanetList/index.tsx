import React, { useState } from "react";

import PlanetCard from "../PlanetCard";
import { PlanetCardProps } from "../PlanetCard/types";

import * as S from "./styles";

const PlanetList = ({ planetsData }: PlanetCardProps) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <S.Search>Search your planet</S.Search>
      <input
        type="search"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <S.List>
        {planetsData
          ?.filter((item: PlanetCardProps) => {
            if (search === "") {
              return item;
            } else if (
              item?.name?.toLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return item;
            }
          })
          .map((planet: PlanetCardProps, index: number) => {
            return (
              <PlanetCard
                key={index}
                name={planet.name}
                climate={planet.climate}
                surface_water={planet.surface_water}
                gravity={planet.gravity}
              />
            );
          })}
      </S.List>
    </>
  );
};

export default PlanetList;
