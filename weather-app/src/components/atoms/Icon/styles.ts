import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonIconTypeStyleProps,
    size: number,
    color: string
}

export const Container = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;

    margin: 5px;
`

export const IconComponent = styled(MaterialIcons).attrs<Props>(({theme, color, size}) => ({
    size: size,
    color: theme.COLORS.WHITE
}))``