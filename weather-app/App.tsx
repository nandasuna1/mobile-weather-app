import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from '@screens/Home';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor="transparent"
      />   
      <Home/>
    </ThemeProvider>
  );
}

