import React from "react";

import * as S from "./PlanetCard.styles";
import { PlanetCardProps } from "./PlanetCard.types";
import { usePlanetList } from "../../context/usePlanetList";
import Link from "next/link";

const PlanetCard = ({ planet }: PlanetCardProps) => {
  const { setPlanetDetails } = usePlanetList();

  function handleGoDetails() {
    setPlanetDetails(planet);
  }

  return (
    <S.Container data-testid="click-planet-details">
      <Link href={`/details/${planet.name}`}>
        <S.Card onClick={handleGoDetails}>
          <S.CardInfo>
            <S.Title>{planet.name}</S.Title>
          </S.CardInfo>
        </S.Card>
      </Link>
    </S.Container>
  );
};

export default PlanetCard;
