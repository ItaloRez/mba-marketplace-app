import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Box } from '@/components/ui/box'
import { VStack } from '@/components/ui/vstack'
import { Link } from 'expo-router'
import { ArrowRight, LogOut, Mail, Phone, User } from 'lucide-react-native'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ScrollView, Text } from 'react-native'

import Access from '@/assets/icon/access.svg'
import { ImageUpload } from '@/components/ImageUpload'

export default function Profile() {
  const methods = useForm()
  return (
    <Box className="flex-1 bg-shape-white h-[100vh]">
      <ScrollView
        style={{ height: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box className="flex-1 p-10">
          <Box className="absolute top-0 right-0 mt-6 mr-10">
            <Link asChild href="/(auth)/signIn">
              <Button
                iconOnly
                leftIcon={LogOut}
                variant="outline"
                size="small"
              />
            </Link>
          </Box>

          <FormProvider {...methods}>
            <VStack className="gap-10">
              <VStack className="items-center">
                <ImageUpload />

                <VStack className="gap-5 mt-5 w-full">
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
              </VStack>

              <VStack className="gap-5">
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
                  label="Senha atual"
                  placeholder="Sua senha"
                  leftIcon={Access}
                />
                <Input
                  secureTextEntry
                  name="confirmPassword"
                  label="Nova senha"
                  placeholder="Sua nova senha"
                  leftIcon={Access}
                />
              </VStack>

              <Button title="Atualizar cadastro" alignment="center" />
            </VStack>
          </FormProvider>
        </Box>
      </ScrollView>
    </Box>
  )
}
