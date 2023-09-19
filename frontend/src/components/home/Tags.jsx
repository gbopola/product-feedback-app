import React, { useState } from "react";
import { TagsWrapper, Tag } from "../../styles/home/Tags.styled";
import { sortByCategory } from "../../features/feedback/feedbackSlice";
import { useDispatch } from "react-redux";
const Tags = () => {
  const dispatch = useDispatch();
  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  const [currTag, setcurrTag] = useState("All");

  // sort by category
  const handleClick = (value) => {
    // set current tag to change to active styling
    setcurrTag(value);

    dispatch(sortByCategory(value.toLowerCase()));
  };

  return (
    <TagsWrapper>
      {tags.map((tag) =>
        currTag !== tag ? (
          <Tag key={tag} onClick={() => handleClick(tag)}>
            {tag}
          </Tag>
        ) : (
          <Tag
            className="tag-active"
            key={tag}
            onClick={(e) => handleClick(tag)}
          >
            {tag}
          </Tag>
        )
      )}
    </TagsWrapper>
  );
};

export default Tags;
