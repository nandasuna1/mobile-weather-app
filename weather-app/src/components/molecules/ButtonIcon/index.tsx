import { TouchableOpacityProps } from "react-native";
import { ButtonIconLayout, ButtonIconTypeStyleProps, Container } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'
import { TextInterface } from "src/components/atoms/Text/interfaces";
import { Icon, IconInterface } from "@atoms/Icon";
import Image, { ImageInterface } from "@atoms/Image";
import Text from "@atoms/Text";

export type ButtonIconInterface = {
    IconProps?: IconInterface;
    IconFilterProps?: IconInterface;
    TextProps?: TextInterface;
    ImageProps?: ImageInterface;
    type?: ButtonIconTypeStyleProps;
    layout?: 'HORIZONTAL' | 'VERTICAL';
    text?: string;
    downText?: string;
    upText?:string;
    size?: number;
}

export function ButtonIcon({IconProps, IconFilterProps, TextProps, ImageProps, type='PRIMARY', text, upText, downText, layout, ...rest}: ButtonIconInterface) {

    return(
        <Container layout={layout} {...rest}>
            {upText && (
                <Text {...TextProps}>{upText}</Text>
            )}
            {ImageProps && 
            <Image {...ImageProps}/>
            }
            <Icon {...IconProps} />
            {text && (
                <Text {...TextProps}>{text}</Text>
            )}
            {IconFilterProps && (
                <Icon {...IconFilterProps}/>
            )}
            {downText && (
                <Text {...TextProps}>{downText}</Text>
            )}
        </Container>
    )
}