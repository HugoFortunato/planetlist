import { useMemo, useState } from "react";
import type { NextPage } from "next";

import { usePlanetList } from "../context/usePlanetList";
import Pagination from "../components/Pagination";
import PlanetList from "../components/PlanetList";

import * as S from "../../styles/index.styles";

const Home: NextPage = () => {
  const { planetsData } = usePlanetList();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const lastPostIndex = useMemo(
    () => currentPage * postsPerPage,
    [currentPage, postsPerPage]
  );

  const firstPostIndex = useMemo(
    () => lastPostIndex - postsPerPage,
    [lastPostIndex, postsPerPage]
  );

  const currentPosts = planetsData.slice(firstPostIndex, lastPostIndex);

  return (
    <S.Container>
      <h1>Planet List</h1>
      <PlanetList planetsData={currentPosts} />

      <Pagination
        totalPosts={planetsData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </S.Container>
  );
};

export default Home;
