import { View } from 'react-native'
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
  max?: number,
  min?: number,
  description?: string,
  date?: Date,
  rain_probability?: number,
  wind_speedy?: string,
  cloudiness?: number
}
export default function HomeTemplate({HeaderProps, TodayData, WeekList }:HomeTemplateInterface) {
  const media = TodayData?.max && TodayData?.min ? (TodayData?.max + TodayData?.min)/2 : null;
  const today = TodayData?.date || `${new Date().getDate()}/${new Date().getMonth()}`
  return (
    <Container>
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
          text: HeaderProps?.city_name
        }}
      />

      <ImageContainer>
        <Image width={284} resizeMode='contain' height={187}/>
      </ImageContainer>

      <CenterTextContainer>
        <Text typeScale='huge'>{media}</Text>
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
          text={`${TodayData?.rain_probability || 0}%`}
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
          text={`${TodayData?.cloudiness || 0} `}
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
            icon: 'cloud'
            }}
            TextProps={{
              typeScale: 'normal'
            }}
            text='10:00'
            upText='29°'
            layout='VERTICAL'
          />
          <ButtonIcon 
            IconProps={{
            icon: 'cloud'
            }}
            TextProps={{
              typeScale: 'normal'
            }}
            text='10:00'
            upText='29°'
            layout='VERTICAL'
          />
          <ButtonIcon 
            IconProps={{
            icon: 'cloud'
            }}
            TextProps={{
              typeScale: 'normal'
            }}
            text='10:00'
            upText='29°'
            layout='VERTICAL'
          />

          <ButtonIcon 
            IconProps={{
            icon: 'cloud'
            }}
            TextProps={{
              typeScale: 'normal'
            }}
            text='10:00'
            upText='29°'
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
          <ButtonIcon 
            IconProps={{
            icon: 'cloud'
            }}
            TextProps={{
              typeScale: 'small'
            }}
            text='13° 11°'
            upText='monday'
            layout='HORIZONTAL'
          />
          <ButtonIcon 
            IconProps={{
            icon: 'wb-sunny'
            }}
            TextProps={{
              typeScale: 'small'
            }}
            upText='monday'
            text='13° 11°'
            layout='HORIZONTAL'
          />
          <ButtonIcon 
            IconProps={{
            icon: 'electrical-services'
            }}
            TextProps={{
              typeScale: 'small'
            }}
            upText='monday'
            text='13° 11°'

            layout='HORIZONTAL'
          />
        </WeatherWeekInfoBox>
      </WeekInfoBox>
      </Content>

    </Container>
  )
}