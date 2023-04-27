import React from 'react';
import { TextComponent } from './styles';
import { TextInterface } from './interfaces';

export default function Text(props: TextInterface) {
  const { children } = props;
  return <TextComponent {...props}>{children}</TextComponent>;
}
