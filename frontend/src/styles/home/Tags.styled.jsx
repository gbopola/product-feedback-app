import { styled } from "styled-components";
const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.1rem;
  background: #fff;
  margin-top: 1.5rem;
  padding: 1.5rem;
  border-radius: 10px;

  @media (max-width: 880px) {
    margin: 0;
    height: 100%;
  }

  @media (max-width: 740px) {
    margin-top: 1.5rem;
    height: auto;
  }
`;

const Tag = styled.button`
  border: none;
  cursor: pointer;
  transition: 0.2s;
  background: #f2f4ff;
  border-radius: 10px;
  padding: 0.25rem 1rem;
  font-size: 13px;
  margin: 0 0.5rem 0 0;
  font-weight: 600;
  color: #4661e6;
  &:hover {
    background: #cfd7ff;
  }
  &.tag-active {
    background: #4661e6;
    color: #fff;
  }
`;

export { TagsWrapper, Tag };
