import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--color-primary);
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;

  padding-top: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 0;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 1000px) {
    width: 4.5rem;
    height: 45%;
    margin-right: 3rem;
    justify-content: space-between;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Line = styled.div`
  background-color: #fff;
  margin-bottom: 1.3rem;
  border-radius: 0.5rem;
  height: 2px;
  width: 56%;

  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 0;
  }
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <BtnWrapper>
        <Line />
        <Line />
        <Line />
      </BtnWrapper>
    </Wrapper>
  );
};

export default Sidebar;
