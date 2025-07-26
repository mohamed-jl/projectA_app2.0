import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      headerShown: false,
      tabBarButton: HapticTab,
      tabBarBackground: TabBarBackground,
      tabBarStyle: Platform.select({
        ios: {
        // Use a transparent background on iOS to show the blur effect
        position: 'absolute',
        },
        default: {},
      }),
      }}>
      <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => (
        <IconSymbol size={28} name="homepod.2.fill" color={color as string} />
        ),
      }}
      />
      <Tabs.Screen
      name="documents"
      options={{
        title: 'Documents',
        tabBarIcon: ({ color }) => (
        <IconSymbol size={28} name="homepod.2.fill" color={color as string} />
        ),
      }}
      />
      <Tabs.Screen
      name="links"
      options={{
        title: 'Links',
        tabBarIcon: ({ color }) => (
        <IconSymbol size={28} name="link" color={color as string} />
        ),
      }}
      />
      <Tabs.Screen
      name="form"
      options={{
        title: 'Form',
        tabBarIcon: ({ color }) => (
        <IconSymbol size={28} name="doc.fill" color={color as string} />
        ),
      }}
      />
    </Tabs>
  );
}
