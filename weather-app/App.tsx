import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import Home from '@screens/Home';
import { Provider } from 'react-redux';
import store from '@store/index';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <StatusBar
        translucent
        backgroundColor="transparent"
      />
        <Home/>
      </Provider>
    </ThemeProvider>
  );
}

