import {
  BottomSheet,
  BottomSheetBackdrop,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetDragIndicator,
  BottomSheetItem,
  BottomSheetItemText,
  BottomSheetPortal,
  BottomSheetTrigger,
} from '@/components/ui/bottomSheet'
import { Text } from 'react-native'
import { HStack } from '@/components/ui/hstack'
import { Input } from './Input'
import { FormProvider, useForm } from 'react-hook-form'
import { Checkbox } from './Checkbox'
import { Button } from './Button'
import { Box } from './ui/box'
import { VStack } from './ui/vstack'

type Props = {
  children: React.ReactNode
}

export function DrawerFilters({ children }: Props) {
  const methods = useForm()

  return (
    <BottomSheet>
      <BottomSheetTrigger asChild>{children}</BottomSheetTrigger>

      <BottomSheetPortal
        snapPoints={['50%', '75%']}
        backdropComponent={BottomSheetBackdrop}
        handleComponent={BottomSheetDragIndicator}
      >
        <BottomSheetContent className="px-6 pb-8 pt-12">
          <FormProvider {...methods}>
            <VStack className="gap-6">
              <HStack className="justify-between items-center">
                <Text className="text-title-md text-grayscale-500">
                  Filtrar anúncios
                </Text>

                <BottomSheetClose />
              </HStack>

              <VStack className="gap-2">
                <Text className="text-title-xs text-grayscale-400">Valor</Text>

                <HStack className="gap-5">
                  <Input name="minValue" placeholder="De" className="flex-1" />

                  <Input name="maxValue" placeholder="Até" className="flex-1" />
                </HStack>
              </VStack>

              <VStack className="gap-5">
                <Text className="text-title-xs text-grayscale-400">
                  Categoria
                </Text>

                <VStack className="gap-3">
                  <Checkbox title="Brinquedo" value="false" />
                  <Checkbox title="Móvel" value="false" />
                  <Checkbox title="Papelaria" value="false" />
                  <Checkbox title="Saúde & Beleza" value="false" />
                  <Checkbox title="Utensílio" value="false" />
                  <Checkbox title="Vestuário" value="false" />
                </VStack>
              </VStack>
            </VStack>
          </FormProvider>

          <HStack className="gap-3 mt-16">
            <Box className="flex-1">
              <Button
                title="Limpar filtro"
                alignment="center"
                variant="outline"
                size="small"
              />
            </Box>
            <Box className="flex-1">
              <Button title="Filtrar" alignment="center" size="small" />
            </Box>
          </HStack>
        </BottomSheetContent>
      </BottomSheetPortal>
    </BottomSheet>
  )
}
