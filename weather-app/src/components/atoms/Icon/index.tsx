import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, IconComponent } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'
import theme from "../../../theme";

export type IconInterface = {
    icon?: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconTypeStyleProps;
    size?: number;
    color?: string;
}

export function Icon({color=theme.COLORS.WHITE,size=20, icon, type='PRIMARY', ...rest}: IconInterface) {

    return(
        <Container {...rest}>
            <IconComponent
                name={icon}
                type={type}
                size={size}
                color={color}
            />
        </Container>
    )
}