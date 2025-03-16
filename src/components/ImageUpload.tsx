import { ImageUp } from 'lucide-react-native'
import { ComponentProps } from 'react'
import { Icon } from './ui/icon'
import { Image as GsImage } from './ui/image'
import { Pressable } from './ui/pressable'

type Props = ComponentProps<typeof GsImage> & {
  onPress?: () => void
}

export function ImageUpload({ source, onPress, ...rest }: Props) {
  const handlePress = () => {
    if (onPress) {
      onPress()
    }
  }

  const hasSource = source !== undefined && source !== null

  return (
    <>
      {hasSource ? (
        <Pressable
          onPress={handlePress}
          className="data-[active=true]:border-2 data-[active=true]:border-orange-base overflow-hidden rounded-lg w-28 h-28"
        >
          <GsImage
            source={source}
            className="w-full h-full"
            resizeMode="cover"
            {...rest}
          />
        </Pressable>
      ) : (
        <Pressable
          onPress={handlePress}
          className="w-28 h-28 bg-orange-base/10 rounded-lg flex items-center justify-center data-[active=true]:bg-orange-base/20"
        >
          <Icon as={ImageUp} className="w-8 h-8 text-orange-base" />
        </Pressable>
      )}
    </>
  )
}
