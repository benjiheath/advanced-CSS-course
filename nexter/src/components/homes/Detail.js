import styled from "styled-components";
import Icon from "../Icon";

const FlexWrapper = styled.div`
  display: flex;
  margin-top: ${({ m }) => m && "2.5rem"};
  margin-left: 2rem;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const Detail = ({ text, m2, m, icon }) => {
  return (
    <FlexWrapper m={m}>
      <Icon name={icon} hw="2rem" m="0 1rem 0 0" />
      <Text>
        {text} {m2 && "m"}
        {m2 && <sup>2</sup>}
      </Text>
    </FlexWrapper>
  );
};

export default Detail;
