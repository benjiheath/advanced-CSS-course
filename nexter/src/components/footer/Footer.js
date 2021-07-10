import styled from "styled-components";

const GridContainer = styled.footer`
  background-color: var(--color-secondary);
  grid-column: full-start / full-end;

  padding: 8rem;

  @media (max-width: 600px) {
    padding: 5rem 8rem;
  }
`;

const Nav = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  align-items: center;

  & li {
  }

  & a:link,
  a:visited {
    font-size: 1.4rem;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-family: var(--font-display);
    text-align: center;
    display: block;
    padding: 1.5rem 1.5rem 1.15rem 1.5rem;
    transition: 0.2s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-0.3rem);
    }
  }
`;

const FooterText = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-light-2);
  text-align: center;
  margin-top: 6rem;
`;

const Footer = () => {
  return (
    <GridContainer>
      <Nav>
        <li>
          <a href="#">Find your dream home</a>
        </li>
        <li>
          <a href="#">Request proposal</a>
        </li>
        <li>
          <a href="#">Download home planner</a>
        </li>
        <li>
          <a href="#">contact us</a>
        </li>
        <li>
          <a href="#">submit your property</a>
        </li>
        <li>
          <a href="#">come work with us!</a>
        </li>
      </Nav>
      <FooterText>&copy; Copyright 2021 by Nexter. Designed by Jonas Schmedtmann.</FooterText>
    </GridContainer>
  );
};

export default Footer;
