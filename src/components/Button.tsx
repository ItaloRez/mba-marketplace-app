import {
  ButtonIcon,
  ButtonText,
  Button as GsButton,
} from '@/components/ui/button'
import { LucideIcon } from 'lucide-react-native'
import { ComponentProps } from 'react'
import { tva } from '@gluestack-ui/nativewind-utils/tva'

type Props = Omit<ComponentProps<typeof GsButton>, 'size' | 'variant'> & {
  title?: string
  variant?: 'outline' | 'solid' | 'link'
  size?: 'medium' | 'small'
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
  iconOnly?: boolean
}

const buttonStyle = tva({
  base: 'bg-orange-base h-14 items-center gap-3 rounded-xl data-[active=true]:bg-orange-dark',
  variants: {
    variant: {
      solid: '',
      outline:
        'bg-transparent border border-orange-base data-[active=true]:border-orange-dark data-[active=true]:bg-orange-base/10',
      link: 'bg-transparent data-[active=true]:bg-orange-base/10',
    },
    size: {
      medium: 'px-5',
      small: 'h-10 px-4',
    },
    iconOnly: {
      true: 'self-start',
      false: 'w-full justify-between',
    },
  },
  compoundVariants: [
    {
      iconOnly: true,
      size: 'medium',
      class: 'h-14 w-14',
    },
    {
      iconOnly: true,
      size: 'small',
      class: 'h-10 w-10',
    },
  ],
})

const buttonTextStyle = tva({
  base: 'text-action-md !text-shape-white',
  variants: {
    variant: {
      solid: '',
      outline: '!text-orange-base',
      link: '!text-orange-base',
    },
    size: {
      medium: 'text-action-md',
      small: 'text-action-sm',
    },
  },
  compoundVariants: [],
})

export function Button({
  title,
  leftIcon,
  rightIcon,
  variant = 'solid',
  size = 'medium',
  iconOnly = false,
  ...rest
}: Props) {
  console.log('isIconOnly:', iconOnly) // para depurar
  return (
    <GsButton className={buttonStyle({ size, variant, iconOnly })} {...rest}>
      {leftIcon && (
        <ButtonIcon
          as={leftIcon}
          className={buttonTextStyle({ size, variant })}
        />
      )}
      {title && (
        <ButtonText className={buttonTextStyle({ size, variant })}>
          {title}
        </ButtonText>
      )}
      {rightIcon && (
        <ButtonIcon
          as={rightIcon}
          className={buttonTextStyle({ size, variant })}
        />
      )}
    </GsButton>
  )
}
