import { above, aboveLand } from "."
import styled from "styled-components"
import { colors, font, size } from "../../utils/const"
import { motion } from "framer-motion"

/// HERO SECTION 

export const StyledAbout = styled.div`
  display: grid; 
  grid-template-columns: repeat(3); 
  grid-template-rows: repeat(3); 
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100vw;
  height: 100vh;
  padding-top: 0%;
  background: rgba(130, 140, 122, 0.5);
  overflow-x: hidden;
  ${above.large`  
  grid-template-rows: repeat(2); 
  `}
`
export const Gift = styled(motion.div)`
  position: fixed;
  top: 60%;
  right: 0%;
  width: 10%;
  height: 30%;
  background: ${colors.none};

  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  gap 5%;

  ${above.medium`
  top: 50%;
  width: 7%;
  height: 35%;
  `}

  ${above.large`
  gap 10%;
  justify-content: flex-start;
  align-items: flex-end;
  top: 20%;
  width: 3%;
  height: 40%;
  `}

  ${above.xlarge`
  width: 2%;
  `}
`
/// ABOUT SECTION 

export const StyledFirst = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  background: ${colors.softWhite};
  padding: 10% 0 20% 0;


  ${above.medium` 
  padding: 10% 0;
  `}
  ${above.large` 
  padding: 2% 0;
  `}
  ${above.xlarge` 
  padding: 0;
  `}
`

export const StyledText = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 80%;
  height: 80%;
  background: ${colors.none};

  h1{
    text-align: center;
    word-spacing: 0px;  
    width: 100%;
    padding: 10% 0;
    font-family: ${font.Rsemi};
    font-size: ${size.Mtittle};
    color: ${colors.black};
    background: ${colors.none};

  }
  p{
    text-align: justify;
    word-spacing:-2px;  
    padding: 5% 0;
    line-height: 150%;
    font-family: ${font.Lregular};
    font-size:  15px;
    color: ${colors.black};
  }
  p:nth-child(4) {
    padding: 0 0 10% 0;
  }

  ${above.medium` 
  h1{
    padding: 5% 0;
    font-family: ${font.Rregular};
    font-size: 40px;
  }
  p{
    padding: 0;
    font-family: ${font.Llight};
    font-size: 20px;
  }
  `}
  ${above.large` 
  align-items: center;

  h1{
    text-align: center;
    width: 80%;
    padding: 3% 0;
    font-family: ${font.Rlight};
    font-size: 40px;
  }
  p{
    text-align: justify;
    word-spacing: 5px;
    width: 70%;
    padding: 2% 0;
    margin: 0;
    font-family: ${font.Llight};
    font-size: 17px;
  }
  `}
  ${above.xlarge` 
  align-items: center;

  h1{    
    width: 70%;
    padding: 2% 0%;
  }
  p{
    font-size: 20px;
  }
  `}
`

export const StyledTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: ${colors.green};
  position: relative;
  padding: 0 0 20%  0;

  ${above.medium` 
  `}
  ${above.large`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  padding: 0 0 5%  0;
  
  `}
  ${above.xlarge`
  grid-template-columns: 30% 30% 30%;
  
  `}

`
export const ImgOne = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${colors.none};
  top: -12%;

  ${above.medium` 
  align-items: flex-start;

  `}
  ${above.large`
  position: relative;
  grid-area: 2 / 1 / 4 / 2; 
  `}
  ${above.xlarge`
  width: 90%;
  `}
`
export const TextOne = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  background: ${colors.none};
  padding: 50% 0 5% 0;
  h1{
    width: 90%;
    text-align: center;
    font-family: ${font.Rmedium};
    font-size: ${size.Mtittle};
    color: ${colors.white};
  }
  
  ${above.medium` 
  
  `}
  ${above.large`
  grid-area: 1 / 1 / 2 / 4;
  padding: 5% 0;

  h1{
    width: 50%;
    font-family: ${font.Rmedium};
    font-size: ${size.Wtittle};
  }
  `}
  ${above.xlarge`
  `}

  `
export const ServicesText = styled.div`
    font-family: ${font.Rlight};
    font-size: ${size.Mmini};
    color: ${colors.white};
    text-align: center;
    display: flex;
    align-items: flex-start;  
    flex-direction: column;
    width: 80%;
    h2{    
      margin: 2% 0;
    }
    p{
      display: none;
    }
    ${above.large`
    align-items: ${props => (props.skin ? 'flex-start' : 'center')};
    font-family: ${font.Rmedium};
    font-size: ${size.Mtext};
    color: ${colors.white};
    width: 100%;
    h2, p{
      width: ${props => (props.reiki ? "80%" : "60%")};
      text-align: center;
    }
    p{
      display: flex;
      text-align: justify;
      font-family: ${font.Rlight};
    }
  `}
    ${above.xlarge`
    font-size: ${size.Xtext};
  `}
  `
export const HairText = styled.div`
display: flex;
justify-content: center;
margin: 0;

${above.large`
grid-area: 2 / 2 / 3 / 3;
  `}


`
export const SkinText = styled.div`
display: flex;
justify-content: center;
margin: 0;

${above.large`
grid-area: 2 / 3 / 3 / 4;
`}
`
export const ReikiText = styled.div`
display: flex;
justify-content: center;
background: ${colors.none};
margin: 0;

${above.large`
width: 90%;
grid-area: 3 / 2 / 4 / 4;
`}
`

export const StyledThree = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, auto);
  grid-column-gap: 0px;
  grid-row-gap: 0px; 
  padding: 10% 0;
  
  width: 100vw;
  height: auto;

  background: ${colors.none};
  ${above.large` 
  padding: 5% 0;

  `}

  `
export const OurServicesText = styled(motion.div)`
  grid-area: 1 / 1 / 2 / 3;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
 

  width: 70vw;
  padding: 0 35%;
  height: auto;

  h1{
  justify-content: center;  
  font-family: ${font.Lregular};
  font-size: ${size.Mtittle};
  color: ${colors.black};}
  

  background: ${colors.none};

  ${above.medium`
  h1{
    justify-content: left;  
    margin-left: -23.5%;
    font-family: ${font.Rregular};
    font-size: 40px;}
  `}

  ${above.large`
  padding: 0;
  justify-content: center;  
  margin-left: -11.5%;
  align-items: center;
  width: 100%;
  font-family: ${font.Rlight};
  font-size: 40px;}
  `}
  ${above.xlarge`
  margin-left: -4.5%;
  `}
`
export const TexTwo = styled.div`
  grid-area: 2 / 1 / 3 / 3; 
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 5% 0;
  text-align: justify;
  word-spacing: -1px; 


  width: 100%;
  height: auto;
  background: ${colors.none};

  p{ 
    margin: 0.5em 10%;
    font-family: ${font.Lregular};
    font-size: 15px;
    line-height:150%;
    color: ${colors.black};
  }
  ${above.medium` 
  grid-area: 2 / 1 / 3 / 2;
  width: 100%;
  p{ 
    margin: 2% 5% 0 20%;
    font-family: ${font.Llight};
    font-size: 20px;
    color: ${colors.black};
  }
  `}
  ${above.large` 
  margin: -10% 5% 0 10%;
  width: 90%;
  
  p{
    font-family: ${font.Rlight};
    font-size: 16px;
  }
  `}
  ${above.xlarge` 
  margin: 2% 0% 0 10%;
  width: 70%;
  
  p{
    font-family: ${font.Llight};
    font-size: 20px;
  }
  `}
`

export const TexThree = styled.div`
  grid-area: 3 / 2 / 4 / 3; 
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  word-spacing: -1px; 

  width: 100%;
  height: auto;
  background: ${colors.none};

  h2{ width: 90%; }
  p{ 
    margin: 0 15% 10% 10%;
    font-family: ${font.Lregular};
    line-height: 150%;
    font-size: 15px;
    color: ${colors.black};
  }
  ${above.medium` 
  grid-area: 3 / 1 / 4 / 2;

  width: 100%;
  p{ 
    margin: 2% 5% 0 20%;
    word-spacing: -1px; 
    font-family: ${font.Llight};
    font-size: 20px;
    color: ${colors.black};
  }
  `}
  ${above.large` 
  width: 90%;
  height: 20%;
  margin: -5% 5% 0 10%;
  background:${colors.none};
  
  p{
    font-family: ${font.Rlight};
    font-size: 16px;
  }
  `}

  ${above.xlarge` 
  background:${colors.none};
  margin: 2%  0% 0% 10%;
  width: 70%;
  
  p{
    font-family: ${font.Llight};
    font-size: 20px;
  }
  `}
`
export const TexFour = styled.div`
  grid-area: 4 / 1 / 5 / 3;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  word-spacing: -1px; 
  margin: 5% 0;


  width: 100%;
  height: auto%;
  background: ${colors.none};

  h2{ width: 90%; }
  p{ 
    margin: 2.5% 10%;
    line-height: 140%;
    font-family: ${font.Lregular};
    font-size: 15px;
    color: ${colors.black};
  }
  ${above.medium` 
  width: 100%;
  grid-area: 4 / 1 / 5 / 3;
  margin: 3% 0;

  p{ 
    margin: 1% 12%;
    word-spacing: -1px; 
    font-family: ${font.Llight};
    font-size: 20px;
    color: ${colors.black};
  }
  `}
  ${above.large` 
  margin: -17% 5% 0% 9.5%;
  background:${colors.none};
  width: 49%;
  p{
    font-family: ${font.Rlight};
    font-size: 16px;
  }  
  `}
  ${above.xlarge` 
  margin: -5.5% 4.5% 0% 10.8%;
  background:${colors.none};
  width:46%;
  p{
    font-family: ${font.Llight};
    font-size: 20px;
  }  
  `}
`

export const ImgArc = styled(motion.div)`
  grid-area: 3 / 1 / 4 / 2;
  margin: 0;
  padding: 0;

  width: 100%;
  height: auto;
  background: ${colors.none};
  ${above.medium` 
  grid-area: 2 / 2 / 4 / 3;
  width: 90%;
  `}
  ${above.large` 
  width: 70%;
  margin: 0% 0 0 2%;
  `}

  ${above.xlarge` 
  width: 70%;
  margin: 0% 0 0 -20%;
  `}
`
export const ImgVM = styled(motion.div)`
  margin: 0;
  padding: 0;

  width: 100%;
  height: auto;
  background: ${colors.none};
  ${above.medium` 
  width: 40%;
  `}
  ${above.large` 
  width: 30%;
  `}

  ${above.xlarge` 
  margin:  ${props => (props.img === 'uno' ? "3% 0 0 10%" : "-3% 0 0 -10%")};
  width: 25%;
  `}
`

export const TexFive = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5% 0;

  width: 100%;
  height: auto;
  background: ${colors.green};

  h2{
    margin: 0.5em 35%;
    justify-content: center;
  font-family: ${font.Lregular};
  font-size: ${size.Mtittle};
  color: ${colors.white};
}
  p{ 
    margin: 0.5em 10%;
    line-height: 150%;
    font-family: ${font.Lregular};
    font-size: 15px;
    color: ${colors.white};
  }

  ${above.medium` 
  width: 50%;
  h2{
  margin: 0.5em 46.2%;
  justify-content: center;
  font-family: ${font.Rregular};
  font-size: 40px;
  color: ${colors.white};
}
  p{ 
    text-align: right;
    margin: 0.5em 10%;
    font-family: ${font.Llight};
    font-size: 20px;
    color: ${colors.white};
  }
  `}
  ${above.large`
  
  h2{
    margin: -1.2em 50%;
    justify-content: center;
    font-family: ${font.Rlight};
    font-size: 40px;
    color: ${colors.white};
  } 
  p{ 
    text-align: center;
    width: 80%;
    margin: 4.5em 0% 0% 20%;
    word-spacing: 5px;
    font-family: ${font.Rlight};
    font-size: 16px;
  }
  `}

  ${above.xlarge`
  
  h2{
    margin: 7% 0 0 35%;
    font-family: ${font.Rsemi};
    font-size: 40px;
    color: ${colors.white};
  } 
  p{ 
    width: 70%;
    margin: 3% 0% 0% 10%;
    word-spacing: 5px;
    font-family: ${font.Llight};
    font-size: 20px;
  }
  `}
`
export const TexFive2 = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5% 0;

  width: 100%;
  height: auto;
  background: ${colors.green};

  h2{
    margin: 0.5em 38%;
    justify-content: center;
  font-family: ${font.Lregular};
  font-size: ${size.Mtittle};
  color: ${colors.white};
}
  p{ 
    margin: 0.5em 10%;
    line-height: 150%;
    font-family: ${font.Lregular};
    font-size: 15px;
    color: ${colors.white};
  }

  ${above.medium` 
  width: 50%;
  h2{
  margin: 0.5em 10%;
  justify-content: center;
  font-family: ${font.Rregular};
  font-size: 40px;
  color: ${colors.white};
}
  p{ 
    text-align: left;
    margin: 0.5em 10%;
    font-family: ${font.Llight};
    font-size: 20px;
    color: ${colors.white};
  }
  `}
  ${above.large` 
  h2{
    margin: -0.5em 27%;
    justify-content: center;
    font-family: ${font.Rlight};
    font-size: 40px;
    color: ${colors.white};
  }
    p{ 
      width: 88%;
      text-align: center;
      margin: 2.5em -7%;
      word-spacing: 5px;
      font-family: ${font.Rlight};
      font-size: 16px;
      color: ${colors.white};
    }
  `}

  ${above.xlarge` 
  padding: 2% 0;
  h2{
    margin: -0.5em 27%;
    justify-content: center;
    font-family: ${font.Rsemi};
    font-size: 40px;
    color: ${colors.white};
  }
    p{ 
      width: 70%;
      text-align: center;
      margin: 2.5em 0% 0 0%;
      word-spacing: 5px;
      font-family: ${font.Llight};
      font-size: 20px;
      color: ${colors.white};
    }
  `}
`

export const StyledFour = styled.div`
  display: flex; 
  flex-flow: row wrap ;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  height: auto;
  background: ${colors.green};

  padding: 1% 0; 
  ${above.large` 
  width: 100vw;
  height: 100vh;
  `}

  ${above.xlarge`
  padding: 1% 0; 
  width: 100vw;
  height: 100vh;
  `}

  `

export const StyledPeopleSay = styled.div`
  display: flex; 
  justify-content: center;
  flex-flow: column nowrap ;
  align-items: center;
  padding: 0 0;
  
  width: 100vw;
  height: 80vh;
  background: ${colors.none};
  h1{
    margin: 0.5em 10%;
  font-family: ${font.Lregular};
  font-size: ${size.Title};
  color: ${colors.black};
}

${above.medium` 
h1{
  margin: 1% 0 -8% 1%;
font-family: ${font.Rregular};
font-size: 40px;
color: ${colors.black};
}
`}

  ${above.large` 
  width: 100vw;
  height: 100vh;
  h1{
  font-family: ${font.Rlight};
  font-size: 40px; 
}`}

${above.xlarge` 
padding: 0 0 0 5%;
margin: 1% 0 -10% -5%;

h1{
font-family: ${font.Rlight};
font-size: 40px; 
}`}

  `

export const CardPeopleSay = styled.div`
  display: flex; 
  flex-flow: column nowrap ;
  justify-content: center;
  align-items: flex-start;

  width: 80%;
  height: 70%;
  background: ${colors.none};
  border: 1px solid rgba(130, 140, 122, 0.3);

  h3{
    margin: 10% 0 0 10%;
    width: 80%;
    height: auto;
    font-family: ${font.Lregular};
    font-size: ${size.Wtext};
    color: ${colors.black};
  }
  p{
    margin: 0 0 10% 10%;
    overflow-x: scroll;
    width: 80%;
    line-height: 150%;
    font-family: ${font.Lregular};
    font-size: 15px;
    color: ${colors.black};
  }
.rating {
			width: 80%;
      height: auto;
      margin: 0 0 10% 10%;
			font-size: 20px;
		}

		.rating a,
    .rating label {
			color: #828C7A;
			text-decoration: none;
			-webkit-transition: color .4s;
			-moz-transition: color .4s;
			-o-transition: color .4s;
			transition: color .4s;
		}

  ${above.medium` 

  width: 80%;
  height: 55%;

  h3{
    margin: 10% 0 0 10%;
    width: 80%;
    height: auto;
    font-family: ${font.Rregular};
    font-size: 20px;
    color: ${colors.black};
  }
  p{
    margin: 0 0 10% 10%;
    overflow-x: scroll;
    width: 80%;
    line-height: 150%;
    font-family: ${font.Lregular};
    font-size: 15px;
    color: ${colors.black};
  }
.rating {
			width: 80%;
      height: auto;
      margin: 0 0 10% 10%;
			font-size: 20px;
		}

		.rating a,
    .rating label {
			color: #828C7A;
			text-decoration: none;
			-webkit-transition: color .4s;
			-moz-transition: color .4s;
			-o-transition: color .4s;
			transition: color .4s;
		}
    `}

  ${above.large` 
  width: 82%;
  height: 50%;

  h3{
    margin: 10% 0 0 10%;
    width: 80%;
    height: auto;
    font-family: ${font.Rregular};
    font-size: 20px;
    color: ${colors.black};
  }
  p{
    margin: 0 0 10% 10%;
    overflow-x: scroll;
    width: 80%;
    line-height: 150%;
    font-family: ${font.Lregular};
    font-size: 15px;
    color: ${colors.black};
  }
  `}
  ${above.xlarge` 
  width: 80%;
  height: 40%;

  h3{
    margin: 10% 0 0 10%;
    width: 80%;
    height: auto;
    font-family: ${font.Rregular};
    font-size: 20px;
    color: ${colors.black};
  }
  p{
    margin: 0 0 10% 10%;
    overflow-x: scroll;
    width: 80%;
    line-height: 150%;
    font-family: ${font.Lregular};
    font-size: 15px;
    color: ${colors.black};
  }
  `}

  `