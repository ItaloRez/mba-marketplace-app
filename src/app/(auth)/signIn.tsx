import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Box } from '@/components/ui/box'
import { Image } from '@/components/ui/image'
import { VStack } from '@/components/ui/vstack'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail } from 'lucide-react-native'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Text } from 'react-native'
import { z } from 'zod'

import Access from '@/assets/icon/access.svg'
import Logo from '@/assets/Logo.png'

const schema = z.object({
  email: z
    .string({
      required_error: 'E-mail é obrigatório',
    })
    .email({
      message: 'E-mail inválido',
    }),
  password: z
    .string({
      required_error: 'Senha é obrigatória',
    })
    .min(6, {
      message: 'Senha deve ter no mínimo 6 caracteres',
    }),
})

export default function Home() {
  const methods = useForm({
    resolver: zodResolver(schema),
  })

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
      <VStack className="gap-10 mt-10">
        <VStack className="gap-5">
          <FormProvider {...methods}>
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              label="e-mail"
              leftIcon={Mail}
              name="email"
            />
            <Input
              secureTextEntry
              name="password"
              label="Senha"
              placeholder="Sua senha"
              leftIcon={Access}
            />
          </FormProvider>
        </VStack>

        <Button title="Acessar" rightIcon={ArrowRight} />
      </VStack>
      <VStack className="mt-auto gap-5">
        <Text className="text-body-md text-grayscale-300">
          Ainda não tem uma conta?
        </Text>
        <Button title="Cadastrar" rightIcon={ArrowRight} variant="outline" />
      </VStack>
    </Box>
  )
}
