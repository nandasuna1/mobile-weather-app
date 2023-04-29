import { Container } from "./styled";
import { ButtonIcon, ButtonIconInterface } from "@molecules/ButtonIcon";


export type HeaderInterface = {
    ButtonTextIconProps?: ButtonIconInterface;
    ButtonIconProps?: ButtonIconInterface;
}

export function Header({ButtonIconProps, ButtonTextIconProps}: HeaderInterface) {
    return (
        <Container>
            <ButtonIcon {...ButtonTextIconProps}/>
            <ButtonIcon {...ButtonIconProps}/>
        </Container>
    )
}