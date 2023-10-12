import { css, createGlobalStyle, keyframes } from "styled-components"
import { colors, font } from "../../utils/const"

export const size = {
  small: 400,
  medium: 480,
  mediumL: 960,
  large: 1140,
  xlarge: 1400,
}

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const aboveLand = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
  @media screen and (orientation:landscape)
  and (min-device-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const headertransition = keyframes`
  0% { transform: scale(1) translateY(0px)}
  50% { transform: scale(1.3) translateY(5%)}
  75% { transform: scale(1.2) translateY(-5%)}
  100% { transform: scale(1) translateY(0px)}

`

export const GlobalStyles = createGlobalStyle`
body {
  scroll-behavior: smooth;
  padding: 0;
  margin: 0;
  font-family: ${font.light};
  background: ${colors.softWhite};
  height:100%; 
  overflow-x: hidden;

}
a {
  text-decoration: none;
}
ul {
  margin: 0 auto;
  list-style-type: none;
}

.masthead {
  width: 100%;
  min-height: 100vh;
  position: fixed !important;
  left: 0;
  right: 0;
  bottom: 0;
  
}


@media (min-width: 1140px) {
  .masthead {
    background-size: cover;
    background-attachment: fixed;
  }
}

::-webkit-scrollbar {
  display: none;
}
// @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) { 
//   html { 
//     transform: rotate(90deg); 
//     transform-origin: left top;
//     width: 100vh; 
//     overflow-x: hidden; 
//     position: absolute; 
//     top: 100%; 
//     left: 0; 
//   }
// }

`;