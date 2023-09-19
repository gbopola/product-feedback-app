import {
  DropdownIcon,
  DropdownItem,
  DropdownWrapper,
} from "../../styles/shared/Shared.styled";
import iconCheck from "../../assets/shared/icon-check.svg";
import { useSelector, useDispatch } from "react-redux";
import { changeSortBy } from "../../features/feedback/feedbackSlice";
const SelectDropdown = () => {
  const { sortBy } = useSelector((state) => state.feedback);
  const dispatch = useDispatch();
  const values = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  // change sort by
  const handleClick = (value) => {
    dispatch(changeSortBy(value));
  };

  return (
    <DropdownWrapper>
      {values.map((value, index) => (
        <DropdownItem
          key={value}
          $index={index}
          values={values}
          onClick={() => handleClick(value)}
        >
          <p>{value}</p>
          {value === sortBy && <DropdownIcon src={iconCheck} />}
        </DropdownItem>
      ))}
    </DropdownWrapper>
  );
};

export default SelectDropdown;
