import { ImageSourcePropType } from 'react-native'
import React from 'react'
import { ImageComponent } from './styles'
import DefaultImage from '@assets/SunCloud.png'

import cloud from '@assets/cloud.png'
import clear_day from '@assets/sun.png'
import cloudly_day from '@assets/cloud.png'
import storm from '@assets/thunder.png'
import hail from '@assets/hail.png'
import clear_night from '@assets/moon.png'
import cloudly_night from '@assets/moonCloud.png'
import snow from '@assets/snow.png'
import rain from '@assets/rain.png'
import fog from '@assets/foggy.png'



export type ImageInterface = {
  source?: ImageSourcePropType;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  width?: number;
  height?: number;
  radius?: number;
  name?: 'storm' | 'snow' | 'hail' | 'rain' | 'fog' | 'clear_day' | 'clear_night' | 'cloud' | 'cloudly_day' | 'cloudly_night' | 'none_day' | 'none_night'
}

export default function Image(props: ImageInterface) {
    const { name, source = DefaultImage, resizeMode = 'contain', width = 20, height = 20 } = props;
    const options = {
      'storm': storm,
      'snow': snow,
      'hail': hail,
      'rain': rain,
      'fog': fog,
      'clear_day':  clear_day,
      'clear_night':  clear_night,
      'cloud':  cloud,
      'cloudly_day':  cloudly_day,
      'cloudly_night':  cloudly_night,
      'none_day':  clear_day,
      'none_night': clear_night
    }

    return (
      <ImageComponent
        {...props}
        width={width}
        height={height}
        source={name ? options[name] :  source}
        resizeMode={resizeMode}
      />
    );
  }