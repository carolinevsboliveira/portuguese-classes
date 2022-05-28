import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root{
    --primary: #00115b;
    --secondary: #17326b; 
    --light: #5d88be;
    --highlight: #d4f1ff
  }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
    width: 100%;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

`
export default GlobalStyles
