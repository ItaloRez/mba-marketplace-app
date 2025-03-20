import { Box } from '@/components/ui/box'
import { Image } from '@/components/ui/image'
import { VStack } from '@/components/ui/vstack'
import React, { useState } from 'react'
import { FlatList, KeyboardAvoidingView, Platform, Text } from 'react-native'

import { HStack } from '@/components/ui/hstack'
import { ArrowRight, Search, SlidersVertical } from 'lucide-react-native'

import Sofa from '@/assets/images/sofa.png'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Productcard } from '@/components/ProductCard'
import { Link } from 'expo-router'
import { FormProvider, useForm } from 'react-hook-form'
import { DrawerFilters } from '@/components/DrawerFilters'

export default function Products() {
  const methods = useForm()
  const [showDrawer, setShowDrawer] = useState(false)

  const products = [
    { id: '1', name: 'Sofá', price: 1999.99, image: Sofa },
    { id: '2', name: 'Poltrona', price: 899.99, image: Sofa },
    { id: '3', name: 'Mesa de centro', price: 599.99, image: Sofa },
    { id: '4', name: 'Rack', price: 799.99, image: Sofa },
    { id: '5', name: 'Estante', price: 1299.99, image: Sofa },
    { id: '6', name: 'Cadeira', price: 399.99, image: Sofa },
    { id: '7', name: 'Sofá-cama', price: 2499.99, image: Sofa },
    { id: '8', name: 'Puff ', price: 299.99, image: Sofa },
    { id: '9', name: 'Mesa de jantar', price: 1599.99, image: Sofa },
    { id: '10', name: 'Cômoda', price: 899.99, image: Sofa },
    { id: '11', name: 'Cama', price: 1999.99, image: Sofa },
    { id: '12', name: 'Guarda-roupa', price: 2999.99, image: Sofa },
    { id: '13', name: 'Criado-mudo', price: 499.99, image: Sofa },
    { id: '14', name: 'Mesa lateral', price: 399.99, image: Sofa },
    { id: '15', name: 'Banco', price: 699.99, image: Sofa },
    { id: '16', name: 'Cadeira de escritório', price: 799.99, image: Sofa },
    { id: '17', name: 'Cadeira gamer', price: 1299.99, image: Sofa },
  ]

  return (
    <>
      <Box className="flex-1 bg-shape-background">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <VStack className="rounded-b-2xl rounded-br-2xl bg-shape-white p-6 gap-8">
            <HStack className="gap-5 items-center">
              <Image
                source={Sofa}
                alt="Logo"
                className="size-14 rounded-xl"
                resizeMode="cover"
              />
              <VStack className="flex-1">
                <Text className="text-title-sm text-grayscale-500">
                  Olá, Brandon!
                </Text>
                <HStack className="self-start">
                  <Link asChild href="/(auth)/home/profile">
                    <Button
                      title="Ver perfil"
                      rightIcon={ArrowRight}
                      variant="link"
                      size="small"
                      fullWidth={false}
                    />
                  </Link>
                </HStack>
              </VStack>
            </HStack>

            <FormProvider {...methods}>
              <VStack>
                <Text className="text-body-sm text-grayscale-500 ">
                  Explore produtos
                </Text>
                <HStack className="gap-1 items-end">
                  <Input
                    placeholder="Pesquisar"
                    leftIcon={Search}
                    name="search"
                    className="flex-1"
                  />

                  {/* <Button
                    leftIcon={SlidersVertical}
                    variant="outline"
                    size="small"
                    iconOnly
                    onPress={() => setShowDrawer(true)}
                  /> */}

                  <DrawerFilters>
                    <Button
                      leftIcon={SlidersVertical}
                      variant="outline"
                      size="small"
                      iconOnly
                    />
                  </DrawerFilters>
                </HStack>
              </VStack>
            </FormProvider>
          </VStack>

          <FlatList
            data={products}
            numColumns={2}
            columnWrapperStyle={{ gap: 8 }}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingVertical: 16,
            }}
            renderItem={({ item }) => (
              <Box style={{ flex: 1, marginBottom: 8 }}>
                <Productcard
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </KeyboardAvoidingView>
      </Box>
    </>
  )
}
