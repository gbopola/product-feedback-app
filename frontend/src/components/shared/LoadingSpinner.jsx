import React from "react";
import { Spinner } from "../../styles/shared/Shared.styled";
const LoadingSpinner = () => {
  return (
    <Spinner>
      <span className="loader"></span>
    </Spinner>
  );
};

export default LoadingSpinner;
