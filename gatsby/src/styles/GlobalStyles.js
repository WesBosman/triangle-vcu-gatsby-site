import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --off-white: #E8E8F5;
    --rose: #990033;
    --red: #B80009;
    --black: #1C1C1C;
    --yellow: #FFBA10;
    --white: #FBFBFF;
    --gray: #999999;
    --blue: #2563EB;
    --cool-gray-300: #D1D5DB;
    --cool-gray-600: #4B5563;
    --platinum: #E6E6E6;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 1.8rem;
    background-color: var(--off-white);
    width: 100%;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--rose);
    color: white;
    border: 0;
    padding: 0.8rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--gray);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .button {
    background: var(--rose);
    color: white;
    border: 0;
    padding: 0.8rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--gray);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  blockquote {
    background: var(--cool-gray-300);
    margin: 1.5em 0px;
    padding: 1.0em 10px;
    border-left: 10px solid var(--rose);
    border-radius: 0px 10px 10px 0px;
  }

  blockquote:before {
    color: var(--rose);
    font-size: 3em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }

  blockquote p {
    display: inline;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  .red {
    color: var(--red);
  }

  .rose {
    color: var(--rose);
  }

  .grid-responsive {
    display: grid;
    align-items: start;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export default GlobalStyles;