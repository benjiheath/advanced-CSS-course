import styled from "styled-components";
import Icon from "../Icon";

const Sidebar = () => {
  return (
    <Container>
      <List>
        <li>
          <a href="#">
            <Icon icon="home" hw="1.75" color="currentColor" />
            <span>Hotel</span>
          </a>
        </li>
        <li>
          <a href="#">
            <Icon icon="aircraft-take-off" hw="1.75" color="currentColor" />
            <span>Flight</span>
          </a>
        </li>
        <li>
          <a href="#">
            <Icon icon="key" hw="1.75" color="currentColor" />
            <span>Car Rental</span>
          </a>
        </li>
        <li>
          <a href="#">
            <Icon icon="map" hw="1.75" color="currentColor" />
            <span>Tours</span>
          </a>
        </li>
      </List>
      <Legal>&copy; 2021 by trillo. All rights reserved.</Legal>
    </Container>
  );
};

export default Sidebar;

const Container = styled.nav`
  background-color: var(--grey-dark-1);
  flex: 0 0 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const List = styled.ul`
  font-size: 1.4rem;
  list-style: none;
  margin-top: 3.5rem;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
    margin: 0;
  }

  li {
    padding: 1.5rem 3rem;
    display: block;
    position: relative;
    cursor: pointer;

    @media (max-width: 900px) {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    @media (max-width: 600px) {
      padding: 1.5rem;
    }

    &:first-child {
      background-color: var(--primary-light);
    }

    &:not(:last-child) {
      margin-bottom: 0.5rem;

      @media (max-width: 900px) {
        margin: 0;
      }
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 3px;
      background-color: var(--primary-light);
      transform: scaleY(0);
      transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s, filter 0.1s;
    }

    &:hover::before {
      transform: scaleY(1);
      width: 100%;
    }

    &:active::before {
      filter: brightness(1.1);
    }

    a:link,
    a:visited {
      text-decoration: none;
      color: var(--grey-light-1);
      text-transform: uppercase;
      display: flex;
      align-items: center;
      position: relative;
      z-index: 10;

      @media (max-width: 600px) {
        flex-direction: column;
      }

      svg {
        margin-right: 2rem;
        margin-bottom: 0.5rem;

        @media (max-width: 600px) {
          margin-right: 0;
        }
      }
    }
  }
`;

const Legal = styled.div`
  font-size: 1.2rem;
  text-align: center;
  padding: 2.5rem;
  color: var(--grey-light-4);

  @media (max-width: 900px) {
    display: none;
  }
`;
