import React, { useState } from "react";
import {
  DropdownItem,
  DropdownWrapper,
} from "../../styles/shared/Shared.styled";
import { DropdownIcon } from "../../styles/shared/Shared.styled";
import iconCheck from "../../assets/shared/icon-check.svg";
const FormSelectDropdownCategory = ({ setCategory, category }) => {
  const values = ["Feature", "UI", "UX", "Enhancement", "Bug"];

  const [currStatus, setStatus] = useState(category);

  const changeCategory = (value) => {
    setStatus(value);

    setCategory(value);
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
          {value.toLowerCase() === currStatus.toLowerCase() && (
            <DropdownIcon src={iconCheck} />
          )}
        </DropdownItem>
      ))}
    </DropdownWrapper>
  );
};

export default FormSelectDropdownCategory;
