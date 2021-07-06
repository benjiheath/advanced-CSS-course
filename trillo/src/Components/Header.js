import styled from "styled-components";
import Icon from "./Icon";
import logo from "../img/logo.png";
import userImg from "../img/user.jpg";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="trillo logo"></Logo>
      <SearchBar action="#">
        <Input placeholder="Search hotels" />
        <SearchBtn>
          <SearchIcon icon="magnifying-glass" hw="2" color="var(--grey-dark-3)" />
        </SearchBtn>
      </SearchBar>
      <Nav>
        <NavIconWrapper>
          <NavIcon icon="bookmark" hw="2.25" color="var(--grey-dark-2)" />
          <NavNotification>7</NavNotification>
        </NavIconWrapper>
        <NavIconWrapper>
          <NavIcon icon="chat" hw="2.25" color="var(--grey-dark-2)" />
          <NavNotification>13</NavNotification>
        </NavIconWrapper>
        <NavUserWrapper>
          <UserImg src={userImg} />
          <UserImgName>Jonas</UserImgName>
        </NavUserWrapper>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  height: 7rem;
  background-color: #fff;
  border-bottom: var(--line);
  font-size: 1.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    align-content: space-around;
    height: 11rem;
    padding-left: 0;
  }
`;

const Logo = styled.img`
  height: 3.25rem;

  @media (max-width: 600px) {
    padding-left: 2rem;
  }
`;

///////////////////////////////////
// SEARCH
const SearchBar = styled.form`
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    order: 1;
    flex: 0 0 100%;
    background-color: var(--grey-light-2);
    padding-right: 1.35rem;
  }
`;

const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  background-color: var(--grey-light-2);
  border: none;
  color: inherit;
  padding: 0.7rem 2rem;
  border-radius: 100px;
  width: 90%;
  transition: all 0.2s;
  margin-right: -3.25rem;

  &:focus {
    outline: none;
    width: 100%;
    background-color: var(--grey-light-3);
  }

  &:focus + button {
    background-color: var(--grey-light-3);
  }

  &::-webkit-input-placeholder {
    font-weight: 100;
    color: var(--grey-light-4);
  }
`;

const SearchBtn = styled.button`
  border: none;
  background-color: var(--grey-light-2);
  transition: all 0.2s;

  &:focus {
    outline: none;
  }

  &:focus + input {
    width: 100%;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const SearchIcon = styled(Icon)``;

///////////////////////////////////
// NAVIGATION
const Nav = styled.nav`
  display: flex;
  align-items: center;
  align-self: stretch;

  /* all direct children */
  & > * {
    padding: 0 2rem;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;

    &:hover {
      background-color: var(--grey-light-2);
    }
  }
`;

const NavIconWrapper = styled.div`
  position: relative;
`;

const NavIcon = styled(Icon)``;

const NavNotification = styled.span`
  font-size: 0.8rem;
  height: 1.75rem;
  width: 1.75rem;
  border-radius: 50%;
  background-color: var(--primary-light);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1.5rem;
  right: 1.1rem;
`;

const NavUserWrapper = styled.div``;

const UserImg = styled.img`
  height: 3.75rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

const UserImgName = styled.span``;
