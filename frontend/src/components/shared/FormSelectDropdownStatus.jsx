import React, { useState } from "react";
import {
  DropdownItem,
  DropdownWrapper,
} from "../../styles/shared/Shared.styled";
import { DropdownIcon } from "../../styles/shared/Shared.styled";
import iconCheck from "../../assets/shared/icon-check.svg";
const FormSelectDropdownStatus = ({ updateStatus }) => {
  const values = ["Suggestion", "Planned", "In-Progress", "Live"];

  const [currStatus, setStatus] = useState("Suggestion");

  const changeCategory = (value) => {
    setStatus(value);

    updateStatus(value);
  };
  return (
    <DropdownWrapper className="form-select">
      {values.map((value, index) => (
        <DropdownItem
          key={value}
          $index={index}
          values={values}
          onClick={() => changeCategory(value)}
        >
          <p>{value}</p>
          {value === currStatus && <DropdownIcon src={iconCheck} />}
        </DropdownItem>
      ))}
    </DropdownWrapper>
  );
};

export default FormSelectDropdownStatus;
