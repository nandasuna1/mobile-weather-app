import { FlatList, View } from 'react-native'
import React from 'react'
import { CenterTextContainer, Container, Content, ImageContainer, WeatherInfoBox, WeatherInfoText, WeatherTodayInfoBox, WeatherWeekInfoBox, WeekInfoBox } from './styles'
import { Header } from '@molecules/Header'
import { ButtonIcon } from '@molecules/ButtonIcon'

import Text from '@atoms/Text'
import Image from '@atoms/Image'

import rainStatus from '@assets/rainStatus2.png'
import windStatus from '@assets/windStatus.png'
import humidityStatus from '@assets/humidityStatus.png'
import { Icon } from '@atoms/Icon'

export type HomeTemplateInterface = {
  HeaderProps?: {
    city_name?: string,
  },
  TodayData?: DayData,
  WeekList?: DayData[]

}

export type DayData = {
  temp?: number,
  max?: number,
  min?: number,
  description?: string,
  date?: Date,
  rain?: number,
  humidity?: number,
  rain_probability?: number,
  wind_speedy?: string,
  cloudiness?: number
}
export default function HomeTemplate({HeaderProps, TodayData, WeekList }:HomeTemplateInterface) {
  const media = TodayData?.max && TodayData?.min ? (TodayData?.max + TodayData?.min)/2 : null;
  const today = TodayData?.date || `${new Date().getDate()}/${new Date().getMonth()}`
  return (
    <Container isDay={TodayData?.currently}>
      <Content>

      <Header 
        ButtonIconProps={{
          IconProps: {
            size: 25,
            icon: 'notifications'
          },
        }}
        ButtonTextIconProps={{
          IconProps: {
            icon: 'location-pin',
            size: 25
          },
          TextProps: {
            weight:'bold',
            typeScale:'normal',
          },
          IconFilterProps:{
            icon: 'arrow-drop-down',
            size: 40            
          },
          text: HeaderProps?.city
        }}
      />

      <ImageContainer>
        <Image width={284} resizeMode='contain' height={187}/>
      </ImageContainer>

      <CenterTextContainer>
        <Text typeScale='huge'>{TodayData?.temp}</Text>
        <Text typeScale='big'>{TodayData?.description}</Text>
        <Text typeScale='small'>Max.: {TodayData?.max}° Min.:{TodayData?.min}°</Text>
      </CenterTextContainer>


      <WeatherInfoBox>
        <ButtonIcon 
          ImageProps={{
            source: rainStatus,
            width:24,
            height:24,
            resizeMode: 'contain'
          }}
          TextProps={{
            typeScale: 'small'
          }}
          text={`${(TodayData?.rain * 100) || 0}%`}
        />
        <ButtonIcon 
          ImageProps={{
            source: humidityStatus,
            width:24,
            height:24,
            resizeMode: 'contain'
          }}
          TextProps={{
            typeScale: 'small'
          }}
          text={`${TodayData?.humidity || 0} `}
        />
        <ButtonIcon 
          ImageProps={{
            source: windStatus,
            width:24,
            height:24,
            resizeMode: 'contain'
          }}
          TextProps={{
            typeScale: 'small'
          }}
          text={`${TodayData?.wind_speedy || '0km/h'} `}
        />
      </WeatherInfoBox>

      <WeekInfoBox>
        <WeatherInfoText>
          <Text>Today</Text>
          <Text>{today}</Text>
        </WeatherInfoText>

        <WeatherTodayInfoBox>
          <ButtonIcon 
            IconProps={{
            icon: 'wb-sunny'
            }}
            TextProps={{
              typeScale: 'normal'
            }}
            text={TodayData?.sunrise}
            upText='Nascer do Sol'
            layout='VERTICAL'
          />
          <ButtonIcon 
            IconProps={{
            icon: 'nights-stay'
            }}
            TextProps={{
              typeScale: 'normal'
            }}
            text={TodayData?.sunset}
            upText='Por do sol'
            layout='VERTICAL'
          />
        </WeatherTodayInfoBox>
      </WeekInfoBox>

      <WeekInfoBox>
        <WeatherInfoText>
          <Text>Next Forecast</Text>
          <Icon icon='calendar-today'/>
        </WeatherInfoText>

        <WeatherWeekInfoBox>

        <FlatList
          data={WeekList}
          keyExtractor={item => item.date}
          renderItem={({item}) => (
            <ButtonIcon 
            ImageProps={{
              name:item.condition
            }}
            TextProps={{
              typeScale: 'small'
            }}
            text={item.description}
            downText={`${item.max}°${item.min}°`}
            upText={item.weekday}
            layout='HORIZONTAL'
          />
          )}
          contentContainerStyle={WeekList?.length === 0 && {flex: 1}}
          ListEmptyComponent={() => (
            <View><Text>Sem previsoes</Text></View>
          )}
          showsVerticalScrollIndicator={false} 
        />

        </WeatherWeekInfoBox>
      </WeekInfoBox>
      </Content>

    </Container>
  )
}