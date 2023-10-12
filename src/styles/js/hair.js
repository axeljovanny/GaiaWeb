import styled from "styled-components"
import { colors, font, size } from "../../utils/const"
import { above } from "."

export const DescHairTittle = styled.div`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background: ${colors.none};
      flex-flow: column nowrap;
      width: 100%;
      height: auto; 
      padding : 1.5em 0;

      p{
        margin:0;
        font-family: ${font.Rregular};
        font-size: ${size.Mtittle};
        color: ${colors.black};
      }
      ${above.large`
      align-items: baseline;
      justify-content: flex-start;
      flex-flow: row wrap;
      height: auto; 
      padding: 0;
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

export const DescDetailsHair = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      background: ${colors.none};
      width: 100%;
      padding: 4% 0;
      height: 70%; 

      a{
        width: 90%;
        padding: 1em;
        font-family: ${font.Rmedium};
        font-size: ${size.Mtittle};
        color: ${colors.white};
      }

      ${above.large`
      align-items: flex-start;

      
      `}
      `

export const DescPriceHair = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 90%;
        font-family: ${font.Lblack};
        font-size: ${size.Mtext};
        color: ${colors.white};
        padding: 1em 0;

        ${above.large`
        width: 30%;
        padding:0;
        align-items: center;
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
export const DescTitleHair = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 90vw;
      font-family: ${font.Lregular};
      font-size: ${size.Mtittle};
      color: ${colors.white};
      padding: 1em 0;

      ${above.large`
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 70%;
      font-family: ${font.Lblack};
      font-size: ${size.Wtext};
      color: ${colors.softBlack};
      padding: 0;

      `}
      ${above.xlarge`
      font-family: ${font.Lbold};
      font-size: ${size.WList};
      color: ${colors.softBlack};

      `}
      `

export const DescHairText = styled.div`
      display: flex;
      align-items: center;
      background: ${colors.none};
      height: 30%; 
      width: 90%;
      text-align:justify;
        font-family: ${font.Lregular};
        font-size: ${props => (props.note ? size.Mmini : size.Wmini)};
        color: ${colors.white};

      ${above.large`
      padding: 0.5em 0;
      width: 95%;
      text-align: justify;
      line-height : 23px;
        font-family: ${font.Lregular};
        font-size: ${props => (props.note ? size.Mmini : size.Wtext)};
        color: ${colors.black};
      `}

      ${above.xlarge`
      font-family: ${font.Llight};
      color: ${colors.black};
      `}
      `
