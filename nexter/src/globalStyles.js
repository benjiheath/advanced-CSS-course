import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    // COLOR VARIABLES
    --color-primary: #c69963;
    --color-primary-dark: #B28451;

    --color-secondary: #101d2c;

    --color-grey-light-1: #f9f7f6;
    --color-grey-light-2: #aaa;

    --color-grey-dark-1: #54483A;
    --color-grey-dark-2: #6D5D4B;

    // FONT VARIABLES
    --font-primary: 'Nunito', sans-serif;
    --font-display: 'Josefin Sans', sans-serif;
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

  @media (max-width: 1200px) {
     font-size: 50%;
  }
}

body {
   font-family: var(--font-primary);
   color: var(--color-grey-dark-2);
   font-weight: 300;
   line-height: 1.6;
}

h1, h2, h3, h4, h5 {
   font-family: var(--font-display);
   font-weight: 400;
}

h2, h4 {
  color: var(--color-grey-dark-1);

}

button, a {
   font-family: inherit;
}

`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 80vh min-content 40vw repeat(3, min-content);
  grid-template-columns:
    [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr) [center-start col-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  @media (max-width: 1000px) {
    grid-template-rows: 6rem 80vh min-content 40vw repeat(3, min-content);
    grid-template-columns:
      [full-start] minmax(6rem, 1fr) [center-start col-start] repeat(
        8,
        [col-start] minmax(min-content, 14rem) [col-end]
      )
      [center-end] minmax(6rem, 1fr) [full-end];
  }

  @media (max-width: 800px) {
    grid-template-rows: 6rem calc(100vh - 6rem);
  }
`;

export default GlobalStyle;
export { GridContainer };
