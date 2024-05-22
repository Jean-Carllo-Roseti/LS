import { createGlobalStyle } from 'styled-components'

export const cores = {
  verde: '#018762',
  textColor: '#2D2D2D',
  textHeading: '#131313',
  textCinza: '#515151',
  bgHeader: '#F5FFFB'
}

export const GlobalCss = createGlobalStyle`


@font-face {
  font-family: 'Nunito';
  src: url('/assets/fonts/Nunito-Italic-VariableFont_wght.ttf') format('truetype');
  font-style: italic;
  font-weight:  900;
}

@font-face {
  font-family: 'Nunito';
  src: url('/assets/fonts/Nunito-VariableFont_wght.ttf') format('truetype');
  font-style: italic;
  font-weight:  900;
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-family: 'Nunito', sans-serif;

}

body {
  padding: 0 162px;

  @media (max-width: 1024px) {
    text-align: center;
    padding: 0 32px;
  }
}

`
