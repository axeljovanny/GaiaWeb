import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"
import { motion } from "framer-motion"


export const StyledServicePage = styled.div`
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    background: ${props => (props.siteTitle === 'hair' ? colors.softWhite : colors.softWhite)}; //TODO: Cambiar color al estar en hair
    width: 100vw;
    height: 100vh;

    ${above.large`
    justify-content: center;

    
    `}

`

export const StyledServiceContent = styled.div`
    display: none;

    ${above.large`
    position:relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background: ${colors.none};
    width: 90%;
    flex-flow: row nowrap;
    height: 60vh;
    `}
    `
export const StyledServiceTittle = styled.div`
    display: none;

    ${above.large`
    background: ${colors.none};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    width: 20%;
    height: 100%;
    gap: 5px;
    margin: 0 1% 0 0;
    
    `}
    ${above.xlarge`
    background: ${colors.none};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    width: 20%;
    height: 100%;
    gap: 10px;
    margin: 0 1% 0 0;
    
    `}
    `
export const TextTittle = styled(motion.div)`
      display: flex;
      width: auto%;
      button{
        background: none;
        color: inherit;
        border: none;
        cursor: pointer;
        outline: inherit;
        color: ${colors.black}; //usar en SVG
        font-family: ${font.Rsemi};
        font-size: ${size.Mtext};
        }
      ${above.large`
      display: flex;
      justify-content: space-between;
      flex-flow: column wrap;
      align-items: flex-start;
      background: ${colors.none};
      width: 100%;
      button{
        width: 100%;
        height: 100%;
        position:initial;
        text-align: left;
        color: ${colors.green}; //usar en SVG
        font-family: ${font.Rsemi};
        font-size: ${size.Wtext};
      }
      `}

      ${above.xlarge`
      button{
        text-align: left;
        background: ${colors.none}; 
        color: ${colors.none}; //usar en SVG
        font-family: ${font.Lregular};
        font-size: ${size.Wmini};
      }

    `}
      `
export const DescTittle = styled.div`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background: ${colors.none};
      border-bottom: 0.5px solid ${colors.green};
      flex-flow: row nowrap;
      width: 100vw;
      height: auto; 
      padding : 0.5em 0;
      p{
        margin:0;
        width: 70%;
        font-family: ${font.Rmedium};
        font-size: ${size.Mtittle};
        color: ${colors.softBlack};
      }
      ${above.large`
      align-items: center;
      width: 50vw;
      background: ${colors.none};
      justify-content: flex-start;
      flex-flow: row wrap;
      height: 10%; 
      padding: ${props => (props.add ? "0 0 2em 0" : "0")};
      border-bottom: none;

      p{
        width: 80%;
        text-align: left;
        margin:0;
        font-family: ${font.Rregular};
        font-size: ${size.Wtittle};
        color: ${colors.black};
      }

    `}
    ${above.xlarge`
    p{
      font-family: ${font.Rmedium};
      font-size: ${size.XList};
      color: ${colors.black};
    }

  `}
      `

export const DescDetails = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.none};
      width: 85vw;
      padding: ${props => (props.add ? "0" : "2em 0")};

      ${above.large`
      background: ${colors.none};
      justify-content: flex-start;
      width: ${props => (props.add ? "80%" : "30%")};
      padding: 1em 0;

    `}
      `
export const DescTime = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 50%;
      font-family: ${font.Lblack};
      font-size: ${size.Mtext};
      color: ${colors.white};
      padding: ${props => (props.add ? "1em 0" : "0")};

      ${above.large`
      font-family: ${font.Lblack};
      font-size: ${size.Wmini};
      color: ${colors.black};
      `}

      ${above.xlarge`
      font-family: ${font.Lbold};
      font-size: ${size.Mmini};
      color: ${colors.softBlack};
      `}
      `
export const DescPrice = styled.div`
      display: flex;
      justify-content: ${props => (props.add ? "flex-start" : "flex-end")};
      align-items: center;
      background: ${colors.none};
      width: 50%;
      font-family:  ${props => (props.add ? font.Lregular : font.Lblack )}; 
      font-size: ${size.Mtext};
      color: ${colors.white};

      ${above.large`
      font-family: ${font.Lblack};
      font-size: ${size.Wmini};
      color: ${colors.black};
      `}

      ${above.xlarge`
      font-family: ${font.Lbold};
      font-size: ${size.Mmini};
      color: ${colors.softBlack};
      `}
      `
export const DescBook = styled.button`
      left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${colors.green};
      border: 0;
      border-radius: .5rem;
      box-sizing: border-box;
      color: #111827;
      color: ${colors.white};
      font-family: ${font.Rmedium};
      font-size: ${size.Mmini};
      line-height: 1.25rem;
      padding: 1em 4rem;
      width: 12%;
      text-align: center;
      text-decoration: none #D1D5DB solid;
      text-decoration-thickness: auto;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;


    :hover {
      background-color: ${colors.accentBlue};
    }

    :focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    :focus-visible {
      box-shadow: none;
    }

    ${above.large`
    padding: .5rem 2rem;
    button{
      padding: .5rem;
    }
      `}

      ${above.xlarge`
      padding: .1rem .1rem;
      button{
        padding: .5rem;
      }
        `}
    `

export const DescText = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.none};
      height: 30%; 
      width: 85%;
      text-align: justify;
      padding: 0 0 1em 0;
      font-family: ${font.Lregular};
      font-size: ${size.Wmini};
      color: ${colors.white};
      
      ${above.large`
      width: 50vw;
      justify-content: flex-start;
      align-items: center;
      padding: 1em 0 0 0;
      text-align: justify;
      line-height : 23px;
      p{
        font-family: ${font.Lregular};
        font-size: ${size.Wtext};
        color: ${colors.black};
      }
      `}
      ${above.xlarge`
      p{
        font-family: ${font.Llight};
        font-size: ${size.Wtext};
        color: ${colors.black};
      }

    `}
      `
export const StyledServiceDesc = styled.div`
      display: flex;
      justify-content: space-between;
      flex-flow: column nowrap;
      align-items: flex-start;
      text-align: justify;
      background: ${colors.none};
      border-left: none;
      width: 90%;
      padding: 2em;
      height: auto;
      overflow-y: hidden;

      ${above.large`
     
      width: 60%;
      justify-content: flex-start;
      flex-flow: column nowrap;
      align-items: flex-start;
      height: 90%;
      overflow-y: scroll;


      `}
      
      `
export const StyledServicePhoto = styled.div`
    display: none;

      ${above.large`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.none};
      width: 31%; 
      margin: 6.8% -13% 0 0;
      `}
      ${above.xlarge`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.none};
      width: 30%; 
      margin: 8.8% -12% 0 0;
      `}
      
      `
export const StyledSVG = styled.div`
    display: none;

      ${above.large`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.none};
      width: 1%;
      height: 90%;

      `}
`

export const StyledServiceFooter = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.green};
      width: 100%;
      height: 50vh;

    `

export const StyledService = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      background: ${colors.none};
      width: 100%;
      gap: 0em;
      height: auto;
      padding: 3em 0;
      line-height : 50px;


      h1{
        margin:0;
        font-family: ${font.Rsemi};
        font-size: ${size.Mheader};
        color: ${colors.green};
    }
      h2{
        margin:0;
        font-family: ${font.Rsemi};
        font-size: ${size.Mtittle};
        color: ${colors.green};
    }

    ${above.large`
    display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      background: ${colors.none};
      width: 100%;
      gap: 0.5em;
      height: auto;
      padding: 4em 0;
      line-height : 50px;


      h1{
        margin:0;
        font-family: ${font.Rsemi};
        font-size: ${size.Mheader};
        color: ${colors.green};
    }
      h2{
        margin:0;
        font-family: ${font.Rsemi};
        font-size: ${size.Mtittle};
        color: ${colors.green};
    }

    `}
      

    `

export const StyledNote = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    padding: 0 0%;
    p{
      font-family: ${font.Lregular};
      font-size: ${size.Mmini};
      color: ${colors.softBlack};
    }
    a{
      color: ${colors.green};
    }
    ${above.large`
    width: 80%;
    p{
      font-size: ${size.Wmini};
      color: ${colors.black};
    }
    a{
      color: ${colors.black};
    }

  `}
  ${above.xlarge`
    width: 80%;
    p{
      font-family: ${font.Llight};
      font-size: ${size.Xmini};
      color: ${colors.black};
    }
    a{
      color: ${colors.black};
    }

  `}
    `
export const StyledServiceNote = styled.div`
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        background: ${colors.softWhite};
        width: 100%;
        margin: 1em 3em;
        height: 25%;
        text-align: justify;
        ${above.large`
        margin: 1em 0;
        justify-content: center;
        align-items: flex-start;
        width: 90%;
        height: 20vh; 
        background: ${colors.none};
  `}   
    `

// ESTILOS PARA NAV DE SERVICIOS
// 

export const StyledHome = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
background: ${colors.none};
width: 50%;
height: 100%;

  ${above.medium`
      
  `}
  ${above.large`
  justify-content: flex-end;
  align-items: flex-end;
  background: ${colors.none};
  width: 100%;
  height: 50%;
  `}
`

export const StyledServiceMobileContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background: ${colors.none};
    width: 100%;
    flex-flow: column nowrap;
    height: 100vh;
    overflow-y: scroll;

    ${above.large`
    display: none;
    
    `}
    `

export const Show = styled.div`
    display: ${props => (props.open ? "flex" : "none")};
    flex-direction: column;
    background: ${colors.green};
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3em 0;
    a{
      padding: 1em 0;
      font-family: ${font.Rmedium};
      font-size: ${size.Mtittle};
      color: ${colors.white};
    }
  
    ${above.large` {
      display: none;
      }
    `}
  `;