import styled from "styled-components";

export const DeleteDataContainer = styled.div`
  display: flex;
  padding: 1em;
  align-items: center;
`;

export const DeleteDataText = styled.div`
  color: ${({ theme }) => theme.steelTeal};
  padding: 1em;
`;

export const DeleteDataButton = styled.button`
  background: ${({ theme }) => theme.bittersweet};
  width: 120px;
  height: 40px;
  border-radius: 4px;
  padding: 1em;
  color: white;
  text-align: center;
  line-height: 1rem;
  border: none;
  cursor: pointer;
  filter: drop-shadow(0 0 0.5rem ${({ theme }) => theme.bittersweet});
`;
