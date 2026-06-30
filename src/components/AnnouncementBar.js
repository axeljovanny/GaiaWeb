import React from "react"
import styled from "styled-components"
import { colors, font, size } from "../utils/const"
import { above } from "../styles/js"

const StyledBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 32px;
  z-index: 15;
  background: ${colors.darkGreen};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.2em 0.4em;
  padding: 4px 8px;
  box-sizing: border-box;

  ${above.large`
    min-height: 36px;
    flex-wrap: nowrap;
    gap: 0.6em;
    padding: 0;
  `}
`

const BarText = styled.span`
  font-family: ${font.Rlight};
  font-size: ${size.Mmini};
  color: ${colors.white};
  letter-spacing: 0.3px;
  text-align: center;
  line-height: 1.3;

  ${above.large`
    font-size: ${size.Wmini};
    letter-spacing: 0.5px;
    text-align: left;
  `}
`

const BarLink = styled.a`
  font-family: ${font.Rlight};
  font-size: ${size.Mmini};
  color: ${colors.white};
  text-decoration: underline;
  text-underline-offset: 2px;
  letter-spacing: 0.2px;
  white-space: nowrap;

  ${above.large`
    font-size: ${size.Wmini};
    letter-spacing: 0.3px;
  `}

  &:hover {
    color: ${colors.accentBlue};
  }
`

const AnnouncementBar = () => (
  <StyledBar>
    <BarText>BBB Accredited · A+ Rating</BarText>
    <BarLink
      href="https://www.bbb.org/us/il/chicago/profile/skin-care/gaia-evolution-spa-salon-0654-1000089528"
      target="_blank"
      rel="noreferrer"
    >
      View BBB profile
    </BarLink>
  </StyledBar>
)

export default AnnouncementBar
