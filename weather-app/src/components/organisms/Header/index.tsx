import { DropdownComponent, DropdownComponentInterface } from "@molecules/Dropdown";
import { Container } from "./styled";
import { ButtonIcon, ButtonIconInterface } from "@molecules/ButtonIcon";

export type HeaderInterface = {
    ButtonTextIconProps?: ButtonIconInterface;
    ButtonIconProps?: ButtonIconInterface;
    DropdownProps?: DropdownComponentInterface;
}

export function Header({ButtonIconProps, ButtonTextIconProps, DropdownProps}: HeaderInterface) {
    return (
        <Container>
            <DropdownComponent {...DropdownProps} />
            <ButtonIcon {...ButtonIconProps}/>
        </Container>
    )
}