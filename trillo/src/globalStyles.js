import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{

  /* colors */
--primary-light: #eb2f64;
--primary-dark: #FF3366;

--grey-light-1:#faf9f9;
--grey-light-2:#f4f2f2;
--grey-light-3:#f0eeee;
--grey-light-4:#ccc;

--grey-dark-1:#333;
--grey-dark-2:#777;
--grey-dark-3:#999;

--shadow-dark: 0 2rem 6rem rgba(0, 0, 0, 0.4);
--shadow-light: 0 2rem 5rem rgba(0, 0, 0, 0.1);

--line: 1px solid var(--grey-light-2);
}

 *,
 *::after,
 *::before{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

html{
  font-size: 62.5%;

  @media (max-width: 1100px){
    font-size:50%;
  }
  
  
}

body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  background-image: linear-gradient(45deg, var(--primary-light), var(--primary-dark));
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--grey-dark-2);

  min-height: 100vh;
}

@keyframes pulsate{

  0%{
    text-shadow: none;
  border-bottom: 1px solid currentColor;

  }

  50%{
    text-shadow: 0px 0px 5px var(--primary-light);
    border-bottom: 1px solid white;
    color: white;


  }

  100%{
    text-shadow: none;
  border-bottom: 1px solid currentColor;

  }

};

`;

const Container = styled.div`
  max-width: 120rem;
  margin: 8rem auto;
  background-color: var(--grey-light-2);
  box-shadow: var(--shadow-dark);
  min-height: 50rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    margin: 0 auto;
    max-width: 100%;
    width: 100%;
  } ;
`;

export default GlobalStyle;
export { Container };
