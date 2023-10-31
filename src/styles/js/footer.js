import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"


export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
  background: ${colors.darkGreen};

  ${above.medium`

  height: 50vh;

  `}
  ${above.large`

  height: 40vh;

  `}
  ${above.xlarge`

  height: 40vh;

  `}
`

export const StyledContainer = styled.div`
  display:flex;  
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  background: ${colors.none};
  width: 90%;
  ${above.medium`
  
  `}
  ${above.large`
  display:grid;  
  width: 80%;
  height: 80%;
  grid-template-columns:40% 15% 15% 30%;
  grid-template-rows: 35% 55% 10%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

`}
  ${above.xlarge`
  width: 70%;

`} 
`
export const Datos = styled.div`
  display:flex;  
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  background: ${colors.none};
  width: 100%;
  margin: 3% 0;

  p, a{
    margin: 1% 0;
    font-family: ${font.Lmedium};
    font-size: ${size.Mtext};
    color:${colors.softWhite};

  }
  ${above.medium`
  align-items: center;

  p, a{
    margin: 3% 0%;
    font-family: ${font.Lregular};
    font-size: ${size.XList};
    color:${colors.softWhite};

  }
  `}
  ${above.large`
  grid-area:  2 / 1 / 3 / 2;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height:100%;

  p, a{
    margin: 0.4% 0%;
    font-family: ${font.Lregular};
    font-size: ${size.Wtext};
    color:${colors.softWhite};

  }

`}

`
export const RS = styled.div`
display:flex;  
${above.medium`
  
  `}
  ${above.large`
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  
  background: ${colors.none};
`}

${above.xlarge`
display:flex;  
justify-content: center;
align-items: center;
flex-flow: column nowrap;

background: ${colors.none};
`}

`
export const Credits = styled.div`
  margin: 10% 0 0 0;
  grid-area: 3 / 1 / 4 / 5;
  display:flex;  
  justify-content: center;
  align-items: center;
  background: ${colors.none};
  width: 100%;
  ${above.medium`
  `}
  ${above.large`
  margin: 0;

`}

`
export const Logo = styled.div`
  background: ${colors.none};
  display: flex;
  justify-content: center;
  align-items: center; 

  ${above.medium`
  `}
  ${above.large`
  grid-area:  1 / 1 / 2 / 2;
  width: 100%;
  height: 100%

`}

`
export const Policies = styled.div`
  display:flex;  
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  
  background: ${colors.none};

  width: 100%;
  height: 25%;

  a{ display:flex;
    font-family: ${font.Lmedium};
    font-size: ${size.Mtext};
    color:${colors.softWhite};
  }

  ${above.medium`
  a{ display:flex;
    font-family: ${font.Lregular};
    font-size: ${size.XList};
    color:${colors.softWhite};
  }
  `}

  ${above.large`
  justify-content: flex-end;
  width: 50%;
  height: 40%;
  a{ 
    padding-right:10%;
  }

`}

`

export const CreditsNote = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 0 0%;
    p{
      font-family: ${font.Llight};
      font-size: ${size.Mmini};
      color: ${colors.white};
    }
    a{
      color: ${colors.white};
    }
    ${above.medium`
    p, a{
    font-family: ${font.Lregular};
    font-size: ${size.Wtext};
    }
  `}
    ${above.large`
    width: 90%;
    p{
      font-size: ${size.Wmini};
      color: ${colors.white};
    }
    a{
      color: ${colors.white};
    }

  `}

  ${above.xlarge`
  width: 90%;
  p{
    font-size: ${size.Wmini};
    color: ${colors.white};
  }
  a{
    color: ${colors.white};
  }

 `}
    `

export const FooterIcons = styled.div`
display:flex;
padding-top: 30%;
gap: 1vw;

    
    ${above.large`
    padding-top: 0vh;
    width: 80%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 1vw;
    svg{
        width: 100%;
    }
  `}
`

export const CompanyTittle = styled.div`
    width:50%;

    
    ${above.large`
    grid-area: 1 / 2/ 2 / 3;
    background: ${colors.none};
  `}
`

export const ServicesTittle = styled.div`    
    width:50%;

    ${above.large`
    grid-area: 1 / 3/ 2 / 4;
    background: ${colors.none};
  `}
`
export const SocialTittle = styled.div`
    display:none;
    justify-content: center;
    align-items: flex-end; 
    
    ${above.large`
    display:flex;
    grid-area: 1 / 4/ 2 / 5;
    background: ${colors.none};
  `}
`
export const Tittle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end; 
    height:100%;

    H3{
      font-family: ${font.Llight};
      font-size: ${size.Xmini};
      color: ${colors.white};
}
`

export const CompanyLiks = styled.div` 
width:50%;

    
    ${above.large`
    grid-area: 2 / 2/ 3 / 3;
    background: ${colors.none};
    height:100%;

  `}
`

export const ServiceLiks = styled.div`
width:50%;

    
    ${above.large`
    grid-area: 2 / 3/ 3 / 4;
    background: ${colors.none};
      height:100%;

    
  `}
`
export const SocialLiks = styled.div`
    
    ${above.large`
    grid-area: 2 / 4/ 3 / 5;
    background: ${colors.none};
    height:100%;
    display: flex;
    justify-content: center;
    align-items: flex-start; 

    
  `}
`
export const Liks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

  a{
    font-family: ${font.Llight};
    font-size: ${size.Wtext};
    color: ${colors.white};
  }
`