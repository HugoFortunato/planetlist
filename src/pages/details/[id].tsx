import React from "react";
import { usePlanetList } from "../../context/usePlanetList";
import Link from "next/link";

import * as S from "../../styles/details.styles";

const PlanetDetails = () => {
  const { planetDetails } = usePlanetList();
  const { name, climate, surface_water, gravity } = planetDetails;

  return (
    <S.CardWrapper>
      <S.Card>
        <S.Title>Planet Info</S.Title>
        <S.Info>
          Name: <strong> {name} </strong>
        </S.Info>
        <br />
        <S.Info>
          Climate: <strong> {climate} </strong>
        </S.Info>
        <br />
        <S.Info>
          Surface: <strong> {surface_water} </strong>
        </S.Info>
        <S.Info>
          <br />
          Gravity: <strong> {gravity} </strong>
        </S.Info>
        <Link href="/">
          <S.ButtonWrapper>
            <S.Button> Back to list </S.Button>
          </S.ButtonWrapper>
        </Link>
      </S.Card>
    </S.CardWrapper>
  );
};

export default PlanetDetails;
