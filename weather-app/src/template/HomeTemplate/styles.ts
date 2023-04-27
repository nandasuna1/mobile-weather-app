import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex:1;
    flex-direction: column;
    background-color: ${({theme}) => theme.COLORS.BLUE_300};
    /* padding: 24px; */
`
export const ImageContainer = styled.View`
    width: 100%;
    align-items: center;
`
export const CenterTextContainer = styled.View`
    align-items: center;
`

export const WeatherInfoBox = styled.View`
    width: 85%;
    margin-top: 20px;
    padding: 5px;
    flex-direction: row;
    justify-content: space-around;
    align-self: center;

    background-color: ${({theme}) => theme.COLORS.BLUE_500};
    border-radius: 20px;
`

export const WeekInfoBox = styled.View`
    width: 85%;
    margin: 10px 0;

    border-radius: 20px;

    flex-direction: column;
    align-self: center;

    background-color: ${({theme}) => theme.COLORS.BLUE_500};
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
export const Content = styled.ScrollView``