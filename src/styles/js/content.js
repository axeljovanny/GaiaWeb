import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"

export const StyledContentM = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    ${above.large`
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    width: 95%;

  `}

`
export const StyledContent = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${colors.green} ;


    width: 100vw;

    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.4); 
    padding: 2em 0;
    border-radius: 5px;


  ${above.medium`
      
  `}
  ${above.large`
    width: 100vw;


  `}
`

export const StyledLogoMobileContainer = styled.div`
  
  display: flex;
  justify-content: center ;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  padding: 10% 0;

.container-logo{
  width: 25vw;
}

h1{
    font-family:  ${font.medium};
    color: ${colors.white} ;
    font-size: ${size.Mtittle};
    margin-top: 0.5em ;
}
h2{
    font-family:  ${font.medium};
    color: ${colors.white} ;
    font-size: ${size.Mheader};
    margin: 0;
}

${above.medium`
padding:10% 0 4%;

.container-logo{
  width: 18vw;
}

`}
${above.large`

.container-logo{
    width: 0;
  }

img{
    display: none;
}

  `}
`

export const StyledText = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: justify;
    text-justify: inter-word;

    width: 90%;

    h2{
        font-family:  ${font.bold};
        color: ${colors.white} ;
        font-size: ${size.Mtittle};
        margin: 0.5em 0;
    }
    h3{
        font-family:  ${font.medium};
        color: ${colors.green} ;
        font-size: ${size.Mmini};
        margin: 0.5em 0;
    }
    p{
        font-family:  ${font.light};
        color: ${colors.white} ;
        font-size: ${size.Mtext};
        margin: 0;

    }

  ${above.medium`
      
  `}
  ${above.large`
  align-items: flex-start;

    h2{
        font-family:  ${font.bold};
        color: ${colors.white} ;
        font-size: ${size.Wtext};
    }
    p{
        font-family:  ${font.light};
        color: ${colors.white} ;
        font-size: ${size.Wtext};
    }
    h3{
        font-family:  ${font.medium};
        color: ${colors.green} ;
        font-size: ${size.Wmini};
    }

  `}
`
export const StyledServiceHair = styled.div`
  display: flex;
  justify-content: ${props => (props.service ? "flex-start" : "flex-end")};
  flex-flow: row nowrap;
  width: ${props => (props.service ? "65%" : "30%")};
  margin: 2em 0;
  padding:0 0.2em; 
  text-align: left;
  align-items: flex-end;

  ul{
      margin: 0;
      padding: 0;
  }

  ul li{
    display:flex;
    font-family:  ${font.light};
    color: ${colors.softYellow} ;
    font-size: ${size.Mtext};
    justify-content: flex-start;
  }
  ${above.large`
  width: ${props => (props.service ? "45%" : "35%")};
  justify-content: ${props => (props.service ? "flex-end" : "flex-start")};

  `}

`

export const StyledService = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 90%;
  margin: 2em 0;
  text-align: justify;
  ${above.large`
  width: ${props => (props.m ? "45%" : "90%")};
  `}

`

export const StyledServiceTittle = styled.div`
  display: flex;
  justify-content: ${props => (props.hair ? "center" : "flex-strart")};
  align-items: flex-strart;
  width: 100%;
  font-family:  ${font.bold};
  color: ${colors.softYellow} ;
  font-size: ${size.Wtext};

  ${above.large`
  text-align: left;
  width: ${props => (props.m ? "100%" : "40%")};
  `}
`

export const StyledServicePrice = styled.div`
  display: flex;
  justify-content: flex-strart;
  align-items: flex-strart;
  width: 100%;
  font-family:  ${font.light};
  color: ${colors.softYellow} ;
  font-size: ${size.Wtext};

  ${above.large`
  width: ${props => (props.m ? "100%" : "60%")};


  `}
`

export const StyledServiceDesc = styled.div`
  display: flex;
  justify-content: flex-strart;
  align-items: flex-strart;
  width: 100%;  
  font-family:  ${font.light};
  color: ${colors.white} ;
  font-size: ${size.Wtext};
  text-align: left;


  ${above.large`
  text-align: justify;
  justify-content: ${props => (props.fix ? "flex-start" : "center")};




  `}
`

export const StyledServiceNote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family:  ${font.medium};
  color: ${colors.softYellow} ;
  font-size: ${size.Wmini};

  ${above.large`


  `}
  
`

export const StyledTittle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family:  ${font.bold};
  color: ${colors.softYellow} ;
  font-size: ${size.Wtittle};
  text-align: center;

  ${above.large`


  `}
  
`

export const StyledWaxing = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
width:100%;
justify-content: center;

ul{
  margin: 0;
  padding: 0;
}

ul li{

display:flex;
font-family:  ${font.light};
color: ${colors.softYellow} ;
font-size: ${size.Mtext};
align-items: flex-start;
justify-content: ${props => (props.service ? "flex-end" : "flex-start")};
}

  ${above.large`
  grid-template-columns: repeat(3, auto);
  grid-template-rows: 1fr;
  ul li{

    font-family:  ${font.medium};
    color: ${colors.softYellow} ;
    font-size: ${size.Wmini};
    text-align: left;
    
    }
  
  `}
  
`
export const WaxingUno = styled.div`
grid-area: 1 / 1 / 2 / 2;
width:100%;
display:flex;
justify-content: center;
  ${above.large`
  grid-area: 1 / 1 / 2 / 2; 
  width:20vw;


  `}
  
`
export const WaxingDos = styled.div`
grid-area: 2 / 1 / 3 / 2; 
width:100%;
display:flex;
justify-content: center;

  ${above.large`
  grid-area: 1 / 2 / 2 / 3; 
  width:20vw;
  border-style: none dotted;
  border-width: 1px;
  border-color: ${colors.softYellow};


  `}
  
`
export const WaxingTres = styled.div`
grid-area: 3 / 1 / 4 / 2;
width:100%;
display:flex;
justify-content: center;

  ${above.large`
  grid-area: 1 / 3 / 2 / 4;
  width:20vw;

  `}
  
`
export const Container = styled.div`
  padding: 2em;
  display:flex;
  width:90%;

  ${above.large`
  justify-content: center;

  `}
  
`
export const Item = styled.div`
  display:flex;
  width:50%;
  justify-content: ${props => (props.price ? "flex-end" : "flex-start")};
  width: ${props => (props.price ? "20%" : "100%")};
  
  ${above.large`
  align-items: flex-start;
  width: ${props => (props.price ? "20%" : "90%")};


  `}
  
`
