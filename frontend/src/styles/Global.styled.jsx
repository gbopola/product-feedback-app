import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Jost', sans-serif;
}

body {
    background: #F7F8FD;
}

p {
    color: #647196;
}

span {
    font-weight: bold;
    color: #F2F4FE;
}

.block {
    display: block;
}

.btn-space {
    margin-bottom: 2.75rem;
}

.text {
    margin: 0.25rem 0 0.75rem 0;
  }

  a {
    text-decoration: none;
  }

  .relative {
    position: relative;
  }

   
 
`;

export default GlobalStyles;
