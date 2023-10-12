import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"


export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
  background: ${colors.green};

  ${above.medium`

  height: 50vh;

  `}
  ${above.large`

  height: 70vh;

  `}
  ${above.xlarge`

  height: 50vh;

  `}
`

export const StyledContainer = styled.div`
  display:flex;  
  justify-content: flex-start;
  align-items: center;
  flex-flow: column wrap;
  
  background: ${colors.none};

  width: 90%;
  height: 90%;
  ${above.medium`
  
  `}
  ${above.large`
  justify-content: space-between;
  flex-flow: row wrap;
  height: 80%;


`}

`
export const Datos = styled.div`
  display:flex;  
  justify-content: center;
  align-items: flex-start;
  flex-flow: column nowrap;
  
  background: ${colors.none};

  width: 80%;
  height: 45%;

  p, a{
    margin: 2%;
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
  padding-left: 5%;
  width: 45%;
  height: 40%;
  align-items: flex-start;

  p, a{
    margin: 1% 0%;
    font-family: ${font.Lregular};
    font-size: ${size.Xtext};
    color:${colors.softWhite};

  }

`}

`
export const RS = styled.div`
  display:none;
  ${above.medium`
  
  `}
  ${above.large`
  display:flex;  
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  
  background: ${colors.none};
  width: 50%;
  height: 40%;

`}

${above.xlarge`
display:flex;  
justify-content: center;
align-items: center;
flex-flow: column nowrap;

background: ${colors.none};
width: 20%;
height: 40%;

`}

`
export const Credits = styled.div`
  display:flex;  
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  
  background: ${colors.none};

  width: 100%;
  height: 10%;
  ${above.medium`
  `}
  ${above.large`
  width: 100%;
  height: 20%;

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
    padding-top: 12vh;
    font-size: ${size.Wmini};
    color: ${colors.white};
  }
  a{
    color: ${colors.white};
  }

 `}
    `

export const FooterIcons = styled.div`
    display: none;
    
    ${above.large`
    display:flex;
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