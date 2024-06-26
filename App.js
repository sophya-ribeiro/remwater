import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Inicio } from './src/pages/Inicio'
import { Configuracao } from './src/pages/Configuracao'
import { CriarLembrete } from './src/pages/CriarLembrete'

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Black': require('./src/assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('./src/assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Italic': require('./src/assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Light': require('./src/assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('./src/assets/fonts/Poppins-Thin.ttf'),
    'Questrial-Regular': require('./src/assets/fonts/Questrial-Regular.ttf'),
    'Montserrat-VariableFont_wght': require('./src/assets/fonts/Montserrat-VariableFont_wght.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Inicio'
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            gestureDirection: 'horizontal',
          }}>
          <Stack.Screen
            name='Inicio'
            component={Inicio}
            options={{
              headerShown: false,
              presentation: 'Modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right'
            }}
          />

          <Stack.Screen
            name='Configuracao'
            component={Configuracao}
          />

          <Stack.Screen
            name='CriarLembrete'
            component={CriarLembrete}
          />

        </Stack.Navigator>
      </NavigationContainer>

    </View>

  );
}

