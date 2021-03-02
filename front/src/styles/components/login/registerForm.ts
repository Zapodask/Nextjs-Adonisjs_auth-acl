import styled from 'styled-components'
import { Form as Unform } from '@unform/web'
import { Input as CInput } from '@/components/input'

export const Container = styled.div`
    display: grid;
    place-items: center;

    main {
        background: ${props => props.theme.colors.secondary};
        width: 400px;
        padding: 40px;
        text-align: center;

        h1 {
        color: white;
        text-transform: uppercase;
        font-weight: 500;
        }
    }
`

export const Form = styled(Unform)`
    button {
        text-align: center;
        background: none;
        border: 0;
        display: block;
        margin: 20px auto;
        padding: 14px 40px;
        border: 2px solid #35d475;
        border-radius: 24px;
        transition: 0.25s;
        color: white;
        outline: none;
        cursor: pointer;
    }
`

export const Input = styled(CInput)`
    text-align: center;
    background: none;
    border: 0;
    width: 200px;
    display: block;
    margin: 20px auto;
    padding: 14px 10px;
    border: 2px solid #5a189a;
    border-radius: 24px;
    transition: 0.25s;
    color: black;
    outline: none;

    &:hover {
        border-color: #0353a4;
    }

    &:focus {
        width: 280px;
        border-color: #35d475;
    }
`
