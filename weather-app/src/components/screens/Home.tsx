import React, { useEffect, useState } from 'react'
import { ITEMS } from '@utils/citys';
import HomeTemplate from '@templates/HomeTemplate'
import { useGetWeatherByCityNameQuery } from '@services/weatherApi';


export default function Home() {
  const [currentValue, setCurrentValue] = useState('Recife,PE');
  const { data } = useGetWeatherByCityNameQuery(currentValue);
  
  const handleChande = (value: string) => {
    setCurrentValue(value)
  } 

  return (
    <HomeTemplate 
      TodayData={data?.results} 
      WeekList={data?.results?.forecast.slice(0,5)}
      DropdownProps={{
        items: ITEMS,
        value: currentValue,
        handleChande,
        isDay: data?.results?.currently
      }}
      />
  )
}