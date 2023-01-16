import React, { useState } from "react";
import styled from "styled-components";

const Aside = () => {
  const [fold, setFold] = useState(false);
  console.log(fold)

  if(fold === true) {
    return (
      <Fold>Aside</Fold>
      );
  } else {
    return (
    <Unfold>Aside</Unfold>
  )}
};

const Fold = styled.div`
  width: 72px;
  height: 100vh;
  position: absolute;
  background-color: green;
`

const Unfold = styled.div`
  width: 240px;
  height: 100vh;
  position: absolute;
  background-color: green;
`

export default Aside;
