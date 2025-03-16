import {
  Checkbox as GsCheckbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from '@/components/ui/checkbox'
import { CheckIcon } from '@/components/ui/icon'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof GsCheckbox> & {
  title: string
}

export function Checkbox({ title, ...rest }: Props) {
  return (
    <GsCheckbox size="md" isInvalid={false} isDisabled={false} {...rest}>
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel className="!text-body-md text-grayscale-400">
        {title}a
      </CheckboxLabel>
    </GsCheckbox>
  )
}
