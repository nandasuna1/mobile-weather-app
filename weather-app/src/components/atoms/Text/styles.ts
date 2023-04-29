import styled, { css } from "styled-components/native";
import { TextInterface } from "./interfaces";
import { RFValue } from "react-native-responsive-fontsize";

export const TextComponent = styled.Text<TextInterface>`
  ${({ typeScale }) => (typeScale ? typeScaleStyle[typeScale] : typeScaleStyle['normal'])}
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
  `}
`;

const typeScaleStyle = {
  small: css`
    font-size: ${RFValue(12)}px;
  `,
  normal: css`
  font-size: ${RFValue(18)}px;
`,
  big: css`
    font-size: ${RFValue(22)}px;
  `,
  huge: css`
  font-size: ${RFValue(70)}px;
`,
}