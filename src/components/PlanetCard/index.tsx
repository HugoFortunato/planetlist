import React from "react";

import * as S from "./styles";
import { usePlanetList } from "../../context/usePlanetList";
import { PlanetCardProps } from "./types";
import Link from "next/link";

const PlanetCard = ({
  name,
  climate,
  surface_water,
  gravity,
}: PlanetCardProps) => {
  const { setPlanetDetails } = usePlanetList();

  function handleGoDetails() {
    setPlanetDetails({
      name: name,
      climate: climate,
      surface_water: surface_water,
      gravity: gravity,
    });
  }

  return (
    <S.Container data-testid="click-planet-details">
      <Link href={`/details/${name}`}>
        <S.Card onClick={handleGoDetails}>
          <S.CardInfo>
            <S.Title>{name}</S.Title>
          </S.CardInfo>
        </S.Card>
      </Link>
    </S.Container>
  );
};

export default PlanetCard;
