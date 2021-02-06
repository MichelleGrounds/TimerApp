import React from "react";
import {
  DeleteDataContainer,
  DeleteDataText,
  DeleteDataButton,
} from "./DeleteData";

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
