import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import { useColorScheme } from '@/components/useColorScheme'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

// Import Google Fonts
import { DMSans_700Bold } from '@expo-google-fonts/dm-sans'
import {
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins'

import '../../global.css'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export { ErrorBoundary } from 'expo-router'
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated'

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
})

SplashScreen.preventAutoHideAsync()

export default function RootLayoutNav() {
  const colorScheme = useColorScheme()

  const [defaultFontsLoaded, defaultFontError] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    DMSans_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    ...FontAwesome.font,
  })

  const allFontsLoaded = defaultFontsLoaded

  useEffect(() => {
    if (defaultFontError) throw defaultFontError
  }, [defaultFontError])

  useEffect(() => {
    if (allFontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [allFontsLoaded])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider mode={colorScheme === 'dark' ? 'dark' : 'light'}>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Slot />
        </ThemeProvider>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  )
}
