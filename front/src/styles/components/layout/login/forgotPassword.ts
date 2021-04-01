import styled from 'styled-components'
import { Form as Unform } from '@unform/web'
import { Input as CInput } from '@/components/input'
import { Modal as MModal, Slide as MSlide } from '@material-ui/core'

export const Modal = styled(MModal)`
    display: grid;
    place-items: center;
`

export const Slide = styled(MSlide)`
    width: 100%;
    max-width: 500px;
    background: white;
    border: 2px solid black;
`

export const Form = styled(Unform)`

`

export const Input = styled(CInput)`

`
