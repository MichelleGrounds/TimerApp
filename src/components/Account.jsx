import React from "react";
import styled from "styled-components";

const DeleteDataContainer = styled.div`
  display: flex;
  padding: 1em;
  align-items: center;
`;

const DeleteDataText = styled.div`
  color: ${({ theme }) => theme.steelTeal};
  padding: 1em;
`;

const DeleteDataButton = styled.button`
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
  filter: drop-shadow(0 0 1rem ${({ theme }) => theme.bittersweet});
`;

const Account = ({ setOccurrences }) => {
  const deleteData = () => {
    localStorage.clear();
    setOccurrences(0);
  };

  return (
    <DeleteDataContainer>
      <DeleteDataText>Delete data:</DeleteDataText>
      <DeleteDataButton onClick={deleteData}>Delete Data</DeleteDataButton>
    </DeleteDataContainer>
  );
};

export default Account;
