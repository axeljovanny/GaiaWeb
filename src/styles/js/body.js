import styled from "styled-components"
import { above } from "."
import { colors, font, size } from "../../utils/const"

export const DescBodyTittle = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.red};
      flex-flow: column nowrap;
      width: 100%;
      height: auto; 
      padding : 0;

      p{
        margin:0;
        font-family: ${font.Rregular};
        font-size: ${size.Mtittle};
        color: ${colors.black};
      }
      ${above.large`
      background: ${colors.none};
      align-items: center;
      justify-content: space-between;
      flex-flow: row wrap;
      width: 85%;
      padding : 0;
      height: auto;
      p{
        text-align: left;
        font-family: ${font.Rregular};
        font-size: ${size.Wtittle};
        color: ${colors.black};
      }

      ${above.xlarge`
      p{
        font-family: ${font.Rmedium};
        font-size: ${size.XList};
        color: ${colors.black};
      }
  
    `}
    `}
      `

export const DescDetailsBody = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-flow: row wrap;
      background: ${colors.none};
      width: 90vw;
      padding: 5% 0;

      a{
        padding: 1em 0;
        font-family: ${font.Rmedium};
        font-size: ${size.Mtittle};
        color: ${colors.white};
      }
      ${above.large`
      background: ${colors.none};
      width: 50vw;
      `}
      `

export const DescPriceBody = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: auto;
        font-family: ${font.Lblack};
        font-size: ${size.Mtext};
        color: ${colors.white};
        padding-right: 3%;

        ${above.large`
        padding-right: 0;
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
export const DescTitleBody = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      background: ${colors.none};
      width: 65%;
        font-family: ${font.Lregular};
        font-size: ${size.Mtittle};
        color: ${colors.white};

        ${above.large`
        font-family: ${font.Lblack};
        font-size: ${size.Wtext};
        color: ${colors.softBlack};
      `}

      ${above.xlarge`
      font-family: ${font.Lbold};
      font-size: ${size.WList};
      color: ${colors.softBlack};

      `}

      `
export const DescNoteBody = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 100%;
        font-family: ${font.medium};
        font-size: ${size.Wmini};
        color: ${colors.softWhite};
        ${above.large`
        width: 70%;
        font-family: ${font.medium};
        font-size: ${size.Wtext};
        color: ${colors.green};
      `}
      `

export const Desc = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: ${colors.none};
      width: 100%;
      text-align: justify;
      padding: 2% 0;
      font-family: ${font.Lregular};
      font-size: ${size.Wmini};
      color: ${colors.white};
      
      ${above.large`
      width: 85%;
      height: auto; 
      padding: 0.5em 0;

        font-family: ${font.Lregular};
        font-size: ${size.Wtext};
        color: ${colors.black};
      `}

      ${above.xlarge`
      font-family: ${font.Llight};
      font-size: ${size.Wtext};
      color: ${colors.black};
    `}
      `