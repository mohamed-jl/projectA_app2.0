import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [isFontLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [initialRoute, setInitialRoute] = useState<'(tabs)' | 'login'>('login');

  useEffect(() => {
    const checkAuth = async () => {
      const token = await SecureStore.getItemAsync('token');
      setInitialRoute(token ? '(tabs)' : 'login');
      setIsAuthChecked(true);
    };
    checkAuth();
  }, []);

  if (!isFontLoaded || !isAuthChecked) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName={initialRoute}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
