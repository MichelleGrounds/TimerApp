import React, { useState } from "react";
import styled from "styled-components";
import { blackCoffee } from "./colors";
import Timer from "./Timer";

const HeaderContainer = styled.div`
  width: 100%;
  height: 15%;
  background: ${blackCoffee};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

const HeaderText = styled.div`
  color: white;
  font-size: 200%;
`;

const App = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderText>My Contractions</HeaderText>
      </HeaderContainer>
      <Timer />
    </>
  );
};

export default App;
