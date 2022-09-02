import React, { useState } from "react";

import PlanetCard from "../../components/PlanetCard";
import { PlanetListProps } from "./PlanetList.types";
import { Planet } from "../../context/types";

import * as S from "./PlanetList.styles";

const filterPlanetByName = (item: Planet, search: string) => {
  const clearItemName = item?.name?.toLowerCase() ?? "";

  return search === "" || clearItemName.includes(search);
};

const PlanetList = ({ planets = [] }: PlanetListProps) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <S.Search>Search your planet</S.Search>
      <input
        data-testid="input"
        type="search"
        placeholder="search your planet..."
        value={search}
        onChange={(ev) => setSearch(ev.target.value?.toLowerCase())}
      />
      <S.List>
        {planets
          .filter((planet) => filterPlanetByName(planet, search))
          .map((planet: Planet, index: number) => (
            <PlanetCard data-testid="planet-card" key={index} planet={planet} />
          ))}
      </S.List>
    </>
  );
};

export default PlanetList;
