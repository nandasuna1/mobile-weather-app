import { DayAndNight } from "@templates/HomeTemplate/styles";
import styled from "styled-components/native";

export const DropdownBox = styled.View`
flex: 1;
`

export const DropdownContent= styled.TouchableOpacity`
    flex-direction: row;
    width: 90%;
    align-items: center;
    padding: 10px;

`
export const List = styled.View<DayAndNight>`
    width: 90%;
    height: 200px ;
    background-color: ${({theme, isDay}) => isDay === 'dia' ? theme.COLORS.BLUE_500 : theme.COLORS.BLUE_700};
    align-self: center;
    border-radius: 15px;
    padding: 20px;
` 
export const ListComponent = styled.TouchableOpacity`
    margin: 2px;
`
export const SearchInput = styled.TextInput`
    color: white;
`