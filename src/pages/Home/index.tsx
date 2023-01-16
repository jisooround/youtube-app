import React, { useState } from "react"
import styled from "styled-components";
import Card from "../../components/Card";

const Home = () => {
  const [fold, setFold] = useState(false);

  if(fold === true) {
    return (
      <Fold>
        <Card />
      </Fold>
      );
  } else {
    return (
      <Unfold>
        <Card />
      </Unfold>
      );
  }
};

const Fold = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: beige;
  margin-left: 72px;
`

const Unfold = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: beige;
  margin-left: 240px
`

export default Home;
