import { Box } from '@/components/ui/box'
import React from 'react'
import { ScrollView, Text } from 'react-native'

import { ArrowLeft, ChartArea } from 'lucide-react-native'

import { Button } from '@/components/Button'
import { Link } from 'expo-router'
import { Image } from '@/components/ui/image'

import Sofa from '@/assets/images/sofa.png'
import { VStack } from '@/components/ui/vstack'
import { HStack } from '@/components/ui/hstack'
import { Icon } from '@/components/ui/icon'

export default function Products() {
  return (
    <>
      <Box className="flex-1 bg-shape-background h-[100vh] p-6">
        <ScrollView
          style={{ height: '100%' }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Link asChild href="/(auth)/home/products">
            <Button
              title="Voltar"
              leftIcon={ArrowLeft}
              variant="link"
              size="small"
              fullWidth={false}
            />
          </Link>

          <Image
            source={Sofa}
            alt="Logo"
            className="w-full h-48 rounded-xl mt-4"
            resizeMode="cover"
          />

          <VStack className="gap-7 mt-7">
            <VStack className="gap-4">
              <HStack className="justify-between items-center">
                <Text className="text-title-md text-grayscale-400">Sofá</Text>

                <HStack className="gap-1 items-end">
                  <Text className="text-label-md text-grayscale-500 mb-0.5">
                    R$
                  </Text>
                  <Text className="text-title-md text-grayscale-500">
                    35,89
                  </Text>
                </HStack>
              </HStack>

              <Text className="text-body-sm text-grayscale-400">
                {`Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado. \n\nLargura: 1,80m \nAltura do chão: 20cm`}
              </Text>
            </VStack>

            <VStack className="gap-2">
              <Text className="text-title-xs text-grayscale-500">
                Categoria
              </Text>
              <Text className="text-body-xs text-grayscale-400">Móvel</Text>
            </VStack>

            <Box className="bg-blue-light rounded-xl">
              <HStack className="p-3 pl-4 gap-3">
                <Box className="bg-blue-dark rounded-xl p-2">
                  <Icon as={ChartArea} className="text-shape-white size-5" />
                </Box>

                <Text className="text-body-xs text-grayscale-400 text-wrap w-60">
                  <Text className="font-bold">24 pessoas</Text> visualizaram
                  este produto nos últimos 7 dias
                </Text>
              </HStack>
            </Box>
          </VStack>
        </ScrollView>
      </Box>
      <Box className="bg-shape-white ">
        <Box className="p-6 pb-8">
          <HStack className="justify-between items-center">
            <HStack className="items-end gap-1">
              <Text className="text-label-md text-grayscale-500 mb-1">R$</Text>
              <Text className="text-title-lg text-grayscale-500">35,829</Text>
            </HStack>

            <Box>
              <Button
                title="Entrar em contato"
                alignment="start"
                size="small"
              />
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  )
}
