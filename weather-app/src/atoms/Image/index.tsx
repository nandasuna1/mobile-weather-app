import { ImageSourcePropType } from 'react-native'
import React from 'react'
import { ImageComponent } from './styles'
import DefaultImage from '@assets/SunCloud.png'

export type ImageInterface = {
  source?: ImageSourcePropType;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  width?: number;
  height?: number;
  radius?: number;
}

export default function Image(props: ImageInterface) {
    const { source = DefaultImage, resizeMode = 'contain', width = 100, height = 100 } = props;
    return (
      <ImageComponent
        {...props}
        width={width}
        height={height}
        source={source}
        resizeMode={resizeMode}
      />
    );
  }