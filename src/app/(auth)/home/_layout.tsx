import { useClientOnlyValue } from '@/components/useClientOnlyValue'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'
import React from 'react'
import { Pressable, Text } from 'react-native'

import Products from '@/assets/icon/store-04.svg'
import Profile from '@/assets/icon/user.svg'
import { Icon } from '@/components/ui/icon'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />
}

function TabBarButton({
  onPress,
  accessibilityState,
  title,
  icon,
}: BottomTabBarButtonProps & {
  title: string
  icon: React.ComponentProps<typeof Icon>['as']
}) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-1 items-center justify-center gap-1"
    >
      <Icon
        as={icon}
        className={`w-5 h-5 ${accessibilityState?.selected ? 'text-orange-base' : 'text-grayscale-100'}`}
      />
      <Text
        className={`text-label-sm ${accessibilityState?.selected ? 'text-orange-base' : 'text-grayscale-100'}`}
      >
        {title}
      </Text>
    </Pressable>
  )
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="products"
        options={{
          headerShown: false,
          tabBarButton: (props) => (
            <TabBarButton title="Produtos" icon={Products} {...props} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarButton: (props) => (
            <TabBarButton title="Perfil" icon={Profile} {...props} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  )
}
