import styled from 'styled-components'
import { Form as Unform } from '@unform/web'
import { Input as CInput } from '@/components/input'

export const Container = styled.div`
    border: 2px solid #ced4da;
    border-radius: 5px;
    background: ${props => props.theme.colors.primary};

    display: grid;
    place-items: center;
`

export const Form = styled(Unform)`
    padding: 10px;
    width: 100%;

    button {
        background: none;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.25s;

        &:hover {
            background: #70e000;
        }
    }
`

export const Input = styled(CInput)`
    background: none;
    padding: 5px;
    border: 2px solid black;
    border-radius: 5px;
    display: block;
    margin-bottom: 10px;
    text-align: center;
    outline: none;
    transition: 0.25s;

    &:hover {
        border-color: #0353a4;
    }

    &:focus {
        border-color: #70e000;
    }
`
