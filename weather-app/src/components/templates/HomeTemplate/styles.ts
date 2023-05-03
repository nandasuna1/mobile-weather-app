import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

export type DayAndNight = {
 isDay?: 'dia' | 'noite'
}
export const Container = styled(SafeAreaView)<DayAndNight>`
    flex:1;
    flex-direction: column;
    background-color: ${({theme, isDay}) => isDay === 'dia' ? theme.COLORS.BLUE_300 : theme.COLORS.BLUE_600};
`
export const ImageContainer = styled.View`
    width: 100%;
    align-items: center;
`
export const CenterTextContainer = styled.View<DayAndNight>`
    align-items: center;
`

export const WeatherInfoBox = styled.View<DayAndNight>`
    width: 85%;
    margin-top: 20px;
    padding: 5px;
    flex-direction: row;
    justify-content: space-around;
    align-self: center;

    background-color: ${({theme, isDay}) => isDay === 'dia' ? theme.COLORS.BLUE_500 : theme.COLORS.BLUE_700};
    border-radius: 20px;
`

export const WeekInfoBox = styled.View<DayAndNight>`
    width: 85%;
    margin: 10px 0;

    border-radius: 20px;

    flex-direction: column;
    align-self: center;

    background-color: ${({theme, isDay}) => isDay === 'dia' ? theme.COLORS.BLUE_500 : theme.COLORS.BLUE_700};
`
export const WeatherInfoText = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
`
export const WeatherTodayInfoBox = styled.View`
    width: 100%;
    margin-top: 20px;
    padding: 5px;
    flex-direction: row;
    justify-content: space-around;
    align-self: center;
`

export const WeatherWeekInfoBox = styled.View`
    width: 100%;
    margin-top: 5px;
    padding: 15px;
    flex-direction: column;
    border-radius: 20px;
`

export const List = styled.FlatList``

export const Content = styled.ScrollView`
`