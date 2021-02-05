import React from "react";
import styled from "styled-components";
import { bittersweet, steelTeal } from "../colors";

const DeleteDataContainer = styled.div`
  display: flex;
`;

const DeleteDataText = styled.div`
  color: ${steelTeal};
`;

const DeleteDataButton = styled.button`
  background: ${bittersweet};
  border-radius: 4px;
`;

const deleteData = () => localStorage.clear();

const Account = () => {
  return (
    <DeleteDataContainer>
      <DeleteDataText>Delete data:</DeleteDataText>
      <DeleteDataButton onClick={deleteData} />
    </DeleteDataContainer>
  );
};

export default Account;
