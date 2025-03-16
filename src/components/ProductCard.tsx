import { ComponentProps } from 'react'
import { Card } from './ui/card'
import { Image } from './ui/image'
import { Text } from 'react-native'
import { HStack } from './ui/hstack'
import { VStack } from './ui/vstack'

type Props = ComponentProps<typeof Card> & {
  image: any
  name: string
  price: number
}

export function Productcard({ name, price, image, ...rest }: Props) {
  return (
    <Card className="p-1 rounded-lg flex-1" {...rest}>
      <Image
        source={image}
        alt={name}
        className="w-full h-24 rounded-lg"
        resizeMode="cover"
      />

      <VStack className="p-1 gap-0.5">
        <Text className="text-body-xs text-grayscale-400">{name}</Text>
        <HStack className="items-center gap-1">
          <Text className="text-label-sm text-grayscale-500 mt-1">R$</Text>
          <Text className="text-title-xs text-grayscale-500 ">
            {price.toLocaleString('pt-BR', {
              style: 'decimal',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </HStack>
      </VStack>
    </Card>
  )
}
