import { View } from 'react-native'
import React from 'react'
import { CenterTextContainer, Container, Content, ImageContainer, WeatherInfoBox, WeatherInfoText, WeatherTodayInfoBox, WeatherWeekInfoBox, WeekInfoBox } from './styles'
import Text from '@atoms/Text'
import { Header } from '@molecules/Header'
import { Icon } from '@atoms/Icon'
import { ButtonIcon } from '@molecules/ButtonIcon'
import Image from '@atoms/Image'
import rainStatus from '@assets/rainStatus2.png'
import windStatus from '@assets/windStatus.png'
import humidityStatus from '@assets/humidityStatus.png'
export default function HomeTemplate() {
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
          text: 'Fortaleza'
        }}
      />

      <ImageContainer>
        <Image width={284} resizeMode='contain' height={187}/>
      </ImageContainer>

      <CenterTextContainer>
        <Text typeScale='huge'>30°</Text>
        <Text typeScale='big'>Precipitations</Text>
        <Text typeScale='small'>Max.: 24° Min.:20°</Text>
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
          text='6%'
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
          text='90%'
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
          text='19km/h'
        />
      </WeatherInfoBox>

      <WeekInfoBox>
        <WeatherInfoText>
          <Text>Today</Text>
          <Text>Mar, 9</Text>
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