import { View, Text } from 'react-native'
import React from 'react'
import HomeTemplate from '@templates/HomeTemplate'
import { useGetweatherByIPQuery } from '@services/weatherApi';

export default function Home() {
  const {data, isFetching } = useGetweatherByIPQuery(1)
  console.log('data', data?.results);
  // if(isFetching) return (<> <View><Text>Carregando...</Text></View></>)

  return (
    <HomeTemplate TodayData={data?.results} WeekList={data?.results?.forecast.slice(0,5)}/>
  )
}