import { Box } from '@/components/ui/box'
import { Image } from '@/components/ui/image'
import { VStack } from '@/components/ui/vstack'
import React from 'react'
import { Text } from 'react-native'

import Logo from '@/assets/Logo.png'

export default function Profile() {
  return (
    <Box className="flex-1 bg-white h-[100vh] px-10 py-16">
      <VStack className="w-full justify-center gap-8 items-center">
        <Image
          source={Logo}
          alt="Logo"
          className="w-16 h-12"
          resizeMode="cover"
        />
        <VStack className="w-full gap-2 items-center">
          <Text className="text-title-lg text-grayscale-500">Perfil</Text>
          <Text className="text-body-sm toext-grayscale-300">
            Informe seu e-mail e senha para entrar
          </Text>
        </VStack>
      </VStack>
    </Box>
  )
}
