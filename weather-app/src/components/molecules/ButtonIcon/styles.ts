import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'FILTER';

export type ButtonIconLayout =  {
    layout?: 'HORIZONTAL' | 'VERTICAL'
}
type Props = {
    type?: ButtonIconTypeStyleProps
    size?: number;
}
export const Container = styled(TouchableOpacity)<ButtonIconLayout>`
    /* flex-direction: row; */
    ${({ layout }) => (layout ? flexDirectionStyle[layout] : flexDirectionStyle['HORIZONTAL'])}
    align-items: center;
    justify-content: space-between;
`

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type, size}) => ({
    size: size,
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.RED
}))``

const flexDirectionStyle = {
    HORIZONTAL: css`
      flex-direction: row;
    `,
    VERTICAL: css`
      flex-direction: column;
    `,
  };
  