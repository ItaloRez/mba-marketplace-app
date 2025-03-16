import {
  Input as GSInput,
  InputField,
  InputIcon,
  InputSlot,
} from '@/components/ui/input'
import { AlertCircleIcon, Eye, EyeOff, LucideIcon } from 'lucide-react-native'
import { ComponentProps, useState } from 'react'
import { Text } from 'react-native'
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from './ui/form-control'
import { Controller, useFormContext } from 'react-hook-form'

type Props = ComponentProps<typeof InputField> & {
  name: string
  isReadOnly?: boolean
  leftIcon?: LucideIcon
  label?: string
}

export function Input({
  name,
  isReadOnly = false,
  leftIcon,
  label,
  ...rest
}: Props) {
  const [showPassword, setShowPassword] = useState(false)

  const { control } = useFormContext()

  const isPassword = rest.secureTextEntry

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange },
        fieldState: { invalid, error },
      }) => {
        const isFilled = !!value && value.length > 0

        return (
          <FormControl
            isInvalid={invalid}
            size="md"
            isReadOnly={isReadOnly}
            className="pt-5"
          >
            <GSInput
              className={'my-1 group'}
              isReadOnly={isReadOnly}
              variant="underlined"
            >
              {label && (
                <FormControlLabel className="absolute -top-3">
                  <FormControlLabelText>
                    <Text
                      className={[
                        'text-label-md group-data-[focus=true]:text-orange-base',
                      ].join(' ')}
                    >
                      {label}
                    </Text>
                  </FormControlLabelText>
                </FormControlLabel>
              )}

              {leftIcon && (
                <InputSlot>
                  <InputIcon
                    as={leftIcon}
                    className={[
                      'group-data-[focus=true]:text-orange-base',
                      isFilled ? 'text-orange-base' : 'text-grayscale-200',
                      invalid && 'invalid:text-semantic-danger',
                    ].join(' ')}
                  />
                </InputSlot>
              )}

              <InputField
                placeholder={rest.placeholder}
                className={['ml-2'].join(' ')}
                value={value}
                onChangeText={onChange}
                {...rest}
                secureTextEntry={isPassword && !showPassword}
              />

              {isPassword && (
                <InputSlot onPress={() => setShowPassword(!showPassword)}>
                  <InputIcon
                    as={showPassword ? EyeOff : Eye}
                    className="text-grayscale-300 "
                  />
                </InputSlot>
              )}
            </GSInput>

            <FormControlError>
              <FormControlErrorIcon
                as={AlertCircleIcon}
                className="h-4 text-semantic-danger"
              />
              <FormControlErrorText className="text-semantic-danger">
                {error?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        )
      }}
    />
  )
}
