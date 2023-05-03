import React, { useEffect, useState } from 'react'
import { ITEMS } from '@utils/citys';
import HomeTemplate from '@templates/HomeTemplate'
import { useGetWeatherByCityNameQuery } from '@services/weatherApi';


export default function Home() {
  const [currentCity, setCurrentCity] = useState('Recife,PE');
  const { data, isFetching } = useGetWeatherByCityNameQuery(currentCity);
  
  const changeCity = (city: string) => {
    setCurrentCity(city)
  }  

  return (
    <HomeTemplate 
      TodayData={data?.results} 
      WeekList={data?.results?.forecast.slice(0,5)}
      DropdownProps={{
        items: ITEMS,
        cidade: currentCity,
        changeCity: changeCity,
        isDay: data?.results?.currently
      }}
      />
  )
}