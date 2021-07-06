import styled from "styled-components";
import chevron from "../../img/SVG/chevron-thin-right.svg";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;

  list-style: none;
  padding: 3rem 0;
  margin: 3rem 0;
  border-top: var(--line);
  border-bottom: var(--line);
`;

const Item = styled.li`
  flex: 0 0 50%;
  margin-bottom: 0.7rem;

  &::before {
    content: "";
    display: inline-block;
    height: 1rem;
    width: 1rem;
    margin-right: 0.7rem;

    // Older browser method of formatting the svg here (changing color)
    /* background-image: url(${chevron});
    background-size: cover; */

    // Newer browsers - masks (kind of like clipping)
    background-color: var(--primary-light);

    mask-image: url(${chevron});
    mask-size: cover;
  }
`;

const List = ({ items }) => {
  return (
    <Ul>
      {items.map((item) => (
        <Item>{item}</Item>
      ))}
    </Ul>
  );
};

export default List;
