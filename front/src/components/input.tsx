import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { Container } from '@/styles/components/input'

interface Props {
  name: string;
  label: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props

export const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <input
        className='form__field'
        id={fieldName}
        ref={inputRef}
        placeholder={label}
        defaultValue={defaultValue}
        {...rest}
      />
      <label className='form__label' htmlFor={fieldName}>{label}</label>
    </Container>
  )
}
