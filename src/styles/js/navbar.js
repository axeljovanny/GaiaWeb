import styled from "styled-components"
import { motion } from "framer-motion"
import { above } from "."
import { colors, font, size } from "../../utils/const"


export const StyledNavbar = styled.div`
  background: ${colors.none};
  display: flex;
  position: fixed;
  top: 0;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 12;
  width: auto;
  margin: 3em 0 0 2em;
  ${above.medium`
      
  `}
  ${above.large`
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0;

  a{
    margin-left: auto;
    margin-right: auto;
  }

  
  `}
`
export const Mask = styled.div`
display: none;

${above.large`
display: flex;
  position: fixed;
  z-index: 11;
  top: 0;
  width: 100vw;
  height: 13vh;
  backdrop-filter: blur(10px);
  mask: linear-gradient(to top, transparent, black 60%);
  `}
  `

export const StyledLogoContainer = styled.div`
  display: none;
  ${above.medium`
  `}
  ${above.large`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.none};
  margin: 1% 0;
  width: 10%;
  a{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  `}
`

export const StyledItems = styled.div`
  display: none;
  ${above.medium`
      
  `}
  ${above.large`
  display: flex;
  justify-content: space-between; ;
  align-items: center;
  width: 20vw;
  height: auto;
  background: ${colors.none};  
  `}
  ${above.xlarge`
  `}

`

export const ItemNav = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
list-style: none;
font-family: 'Montserrat', sans-serif;
background: ${colors.none}; 
width: 100%; 
padding: 0 0.5em ;

a svg{
  width: 70%;
  padding: 0;
  margin: 0;
}

a{
  width: 100%;
  margin: 0;
  font-family:  ${font.Rlight};
  color: ${props => (props.home ? colors.black : colors.white)};
  font-size: ${size.Wtext};

}
a:hover{
  color: ${colors.accentBlue} ;

}
`
/*
 Movil menu
*/
export const NavIcon = styled.button`
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
    margin: 2em 2em;
    position: fixed;

    ${above.large` {
      display: none;
      }
    `}
`;

export const LineHome = styled.span`
    display: block;
    border-radius: 50px;
    width: 25px;
    height: 3px;
    margin: 5px;
    color: ${colors.none};
    background-color: ${props => (props.open ? colors.softWhite : colors.green)};
    transition: width 0.4s ease-in-out;

    :nth-child(2) {
      width: ${props => (props.open ? "40%" : "70%")};
    }
`;

export const Overlay = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 10%;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 12;
  background: ${colors.none};

  ${above.large`
    display:none;
  `}
`;


export const OverlayMenu = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100vw;
  height: 40%;
  list-style: none; 
  margin: 50% 0;

  div a{
    opacity: ${props => (props.open ? 1 : 0)};
    font-family:  ${font.light};
    color: ${colors.white} ;
    font-size: ${size.Wtittle};
    transition: opacity 0.4s ease-in-out;
  }

`;

export const StyledIcons = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    height: 25%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 60%;
    opacity: ${props => (props.open ? 1 : 0)};
    transition: opacity 0.6s ease-in-out;


    svg{
      opacity: ${props => (props.open ? 1 : 0)};
    transition: opacity 0.6s ease-in-out;
        width: 100%;
    }
    
    ${above.large`
    padding-top: 5vh;
    display: ${props => props.footer ? 'none' : 'flex'};
    height: 50%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    svg{
        width: 60%;
        
    }
  `}
`
export const StyledButton = styled.div`
  width: 100%;
  height: 6vh;
  
  display: flex;
  padding: 5px;
  cursor: pointer;
  align-items: center;
  border-radius: 5px;
  justify-content: center ;
  font-family: ${font.medium};
  color: ${colors.white};
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);  

  :hover{
    transition: 0.2s ;
    background-color: rgba(255, 255, 255, 0.5); 
    color: ${colors.black};
  }

  ${above.large`
  padding: 10px;
  width: 95%;
  height: 2vh;
  `}
    
`