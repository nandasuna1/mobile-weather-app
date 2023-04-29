export interface TextInterface  {
  typeScale?: 'small' | 'normal' | 'big' | 'huge';
  letterCase?: 'upper' | 'lower' | 'capitalize';
  weight?: 'bold' | 'black';
  textAlign?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}
