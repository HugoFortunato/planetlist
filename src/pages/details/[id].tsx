import React from "react";
import { usePlanetList } from "../../context/usePlanetList";
import Link from "next/link";

import * as S from "./styles";

const PlanetDetails = () => {
  const { planetDetails } = usePlanetList();

  return (
    <S.CardWrapper>
      <S.Card>
        <S.Title>Planet Info</S.Title>
        <span style={{ marginBottom: "10px" }}>
          Name: <strong> {planetDetails.name} </strong>
        </span>
        <br />
        <span>
          Climate: <strong> {planetDetails.climate} </strong>
        </span>
        <br />
        <span>
          Surface: <strong> {planetDetails.surface_water} </strong>
        </span>
        <span>
          <br />
          Gravity: <strong> {planetDetails.gravity} </strong>
        </span>
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
