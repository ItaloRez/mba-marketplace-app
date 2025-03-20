import React from 'react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Box } from '@/components/ui/box'
import { Image } from '@/components/ui/image'
import { VStack } from '@/components/ui/vstack'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, Phone, User } from 'lucide-react-native'
import { FormProvider, useForm } from 'react-hook-form'
import { ScrollView, Text } from 'react-native'
import { Link } from 'expo-router'
import { z } from 'zod'

import Access from '@/assets/icon/access.svg'
import Logo from '@/assets/Logo.png'
import { ImageUpload } from '@/components/ImageUpload'

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

export default function SignUp() {
  const methods = useForm({
    resolver: zodResolver(schema),
  })

  return (
    <Box className="flex-1 bg-shape-white h-[100vh]">
      <ScrollView
        style={{ height: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box className="flex-1 px-10 py-16">
          <VStack className="w-full justify-center gap-8 items-center">
            <Image
              source={Logo}
              alt="Logo"
              className="w-16 h-12"
              resizeMode="cover"
            />
            <VStack className="w-full gap-2 items-center">
              <Text className="text-title-lg text-grayscale-500">
                Crie sua conta
              </Text>
              <Text className="text-body-sm toext-grayscale-300">
                Informe os seus dados pessoais e de acesso
              </Text>
            </VStack>
          </VStack>

          <FormProvider {...methods}>
            <VStack className="gap-10">
              <VStack className="items-center mt-8">
                <ImageUpload />

                <Input
                  placeholder="Seu nome completo"
                  label="Nome"
                  name="name"
                  leftIcon={User}
                />
                <Input
                  placeholder="(00) 00000-0000"
                  label="Telefone"
                  name="phone"
                  leftIcon={Phone}
                />
              </VStack>

              <VStack>
                <Text className="text-title-sm text-grayscale-500">Acesso</Text>
                <Input
                  placeholder="mail@exemplo.br"
                  label="E-mail"
                  name="email"
                  leftIcon={Mail}
                />
                <Input
                  secureTextEntry
                  name="password"
                  label="Senha"
                  placeholder="Sua senha"
                  leftIcon={Access}
                />
                <Input
                  secureTextEntry
                  name="confirmPassword"
                  label="Confirmar senha"
                  placeholder="Confirme a senha"
                  leftIcon={Access}
                />
              </VStack>

              <Button title="Cadastrar" rightIcon={ArrowRight} />
            </VStack>
          </FormProvider>

          <VStack className="mt-10 gap-5">
            <Text className="text-body-md text-grayscale-300">
              Já tem uma conta?
            </Text>
            <Link asChild href="/(auth)/signIn">
              <Button
                title="Acessar"
                rightIcon={ArrowRight}
                variant="outline"
              />
            </Link>
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  )
}
