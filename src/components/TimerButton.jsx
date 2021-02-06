import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: center;
  margin: 2em 0;
`;

export const Button = styled.button`
  border-radius: 50%;
  width: 5em;
  height: 5em;
  background-color: ${({ color }) => color};
  font-size: 200%;
  outline: none;
  border: none;
  cursor: pointer;
  filter: drop-shadow(0 0 1rem ${({ color }) => color});
`;

export const TimeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TimeButtonText = styled.div`
  color: ${({ theme }) => theme.blackCoffee};
  font-size: ${({ primary }) => (primary ? "2rem" : "1rem")};
`;
