import React from 'react'
import { FlatList, View } from 'react-native'
import { CenterTextContainer, Container, Content, ImageContainer, WeatherInfoBox, WeatherInfoText, WeatherTodayInfoBox, WeatherWeekInfoBox, WeekInfoBox } from './styles'

import { ButtonIcon } from '@molecules/ButtonIcon'
import { Icon } from '@atoms/Icon'
import { DropdownComponentInterface } from '@molecules/Dropdown'
import Text from '@atoms/Text'
import Image, { condition_slug } from '@atoms/Image'

import rainStatus from '@assets/rainStatus2.png'
import windStatus from '@assets/windStatus.png'
import humidityStatus from '@assets/humidityStatus.png'
import { Header } from '@organisms/Header'


export type HomeTemplateInterface = {
  HeaderProps?: {
    city_name?: string,
  },
  TodayData?: DayData,
  WeekList?: DayData[],
  DropdownProps?: DropdownComponentInterface
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
  cloudiness?: number,
  currently?: 'dia' | 'noite',
  condition_slug?: condition_slug;
}

export default function HomeTemplate({HeaderProps, TodayData, WeekList, DropdownProps }:HomeTemplateInterface) {
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
        
        DropdownProps={DropdownProps}
      />

      <ImageContainer>
        <Image width={284} resizeMode='contain' height={187} condition={TodayData?.condition_slug}/>
      </ImageContainer>

      <CenterTextContainer isDay={TodayData?.currently}>
        <Text typeScale='huge'>{TodayData?.temp}</Text>
        <Text typeScale='big'>{TodayData?.description}</Text>
        <Text typeScale='small'>Max.: {TodayData?.max}° Min.:{TodayData?.min}°</Text>
      </CenterTextContainer>


      <WeatherInfoBox isDay={TodayData?.currently}>
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

      <WeekInfoBox isDay={TodayData?.currently}>
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

      <WeekInfoBox isDay={TodayData?.currently}>
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
          scrollEnabled={false}
        />

        </WeatherWeekInfoBox>
      </WeekInfoBox>
      </Content>

    </Container>
  )
}