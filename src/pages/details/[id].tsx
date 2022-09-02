import React from "react";
import { usePlanetList } from "../../context/usePlanetList";
import Link from "next/link";

import * as S from "../../../styles/details.styles";

const PlanetDetails = () => {
  const { planetDetails } = usePlanetList();

  return (
    <S.CardWrapper>
      <S.Card>
        <S.Title>Planet Info</S.Title>
        <S.Info>
          Name: <strong> {planetDetails.name} </strong>
        </S.Info>
        <br />
        <S.Info>
          Climate: <strong> {planetDetails.climate} </strong>
        </S.Info>
        <br />
        <S.Info>
          Surface: <strong> {planetDetails.surface_water} </strong>
        </S.Info>
        <S.Info>
          <br />
          Gravity: <strong> {planetDetails.gravity} </strong>
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
