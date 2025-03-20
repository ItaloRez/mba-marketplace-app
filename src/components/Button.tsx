import {
  ButtonIcon,
  ButtonText,
  Button as GsButton,
} from '@/components/ui/button'
import { LucideIcon } from 'lucide-react-native'
import { ComponentProps, forwardRef } from 'react'
import { tva } from '@gluestack-ui/nativewind-utils/tva'

type Props = Omit<ComponentProps<typeof GsButton>, 'size' | 'variant'> & {
  title?: string
  variant?: 'outline' | 'solid' | 'link'
  size?: 'medium' | 'small'
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
  iconOnly?: boolean
  fullWidth?: boolean
}

const buttonStyle = tva({
  base: 'bg-orange-base h-14 items-center gap-3 rounded-xl data-[active=true]:bg-orange-dark',
  variants: {
    variant: {
      solid: '',
      outline:
        'bg-transparent border border-orange-base data-[active=true]:border-orange-dark data-[active=true]:bg-orange-base/10',
      link: 'bg-transparent data-[active=true]:bg-transparent group',
    },
    size: {
      medium: 'px-5',
      small: 'h-10 px-4',
    },
    iconOnly: {
      true: 'self-start',
      false: '',
    },
    fullWidth: {
      true: 'w-full justify-between',
      false: 'self-start',
    },
  },
  compoundVariants: [
    {
      iconOnly: true,
      fullWidth: true,
      size: 'medium',
      class: 'self-start w-auto w-14 justify-center',
    },
    {
      iconOnly: true,
      fullWidth: true,
      size: 'small',
      class: 'self-start w-auto w-10 justify-center',
    },
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
    {
      variant: 'link',
      size: 'medium',
      class: 'px-0 ',
    },
    {
      variant: 'link',
      size: 'small',
      class: 'px-0',
    },
  ],
})

const buttonTextStyle = tva({
  base: 'text-action-md !text-shape-white',
  variants: {
    variant: {
      solid: '',
      outline: '!text-orange-base',
      link: '!text-orange-base group-data-[active=true]:!text-orange-dark',
    },
    size: {
      medium: 'text-action-md',
      small: 'text-action-sm',
    },
  },
  compoundVariants: [],
})

export const Button = forwardRef<React.ElementRef<typeof GsButton>, Props>(
  (
    {
      title,
      leftIcon,
      rightIcon,
      variant = 'solid',
      size = 'medium',
      iconOnly = false,
      fullWidth = true, // Valor padrão é true
      ...rest
    },
    ref,
  ) => {
    return (
      <GsButton
        ref={ref}
        className={buttonStyle({
          size,
          variant,
          iconOnly,
          fullWidth,
        })}
        {...rest}
      >
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
  },
)
