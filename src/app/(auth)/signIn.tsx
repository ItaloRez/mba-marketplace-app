import React from 'react'
import { Text } from 'react-native'
import { Box } from '@/components/ui/box'
import { Image } from '@/components/ui/image'
import { VStack } from '@/components/ui/vstack'
import Logo from '@/assets/Logo.png'
import { Button, ButtonText } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
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
          <Text className="text-title-lg text-grayscale-500">
            Acesse sua conta
          </Text>
          <Text className="text-body-sm toext-grayscale-300">
            Informe seu e-mail e senha para entrar
          </Text>
        </VStack>
      </VStack>
      <VStack className="gap-10">
        <VStack className="gap-5">
          <Input />
          <Input />
        </VStack>
        <Button>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
      </VStack>
      <VStack>
        <Text className="text-body-md text-grayscale-300">
          Ainda não tem uma conta?
        </Text>
        <Button>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
      </VStack>
    </Box>
  )
}
