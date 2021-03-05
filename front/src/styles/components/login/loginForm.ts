import styled from 'styled-components'
import { Form as Unform } from '@unform/web'
import { Input as CInput } from '@/components/input'

export const Container = styled.div`
    display: grid;
    place-items: center;
    color: black;

    main {
        width: 400px;
        padding: 40px;
        text-align: center;

        h1 {
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
        border: 2px solid #70e000;
        border-radius: 24px;
        transition: 0.25s;
        outline: none;
        cursor: pointer;
    }
`

export const Input = styled(CInput)`
    text-align: center;
    background: none;
    border: 0;
    width: 300px;
    display: block;
    margin: 20px auto;
    padding: 14px 10px;
    border: 2px solid #ced4da;
    border-radius: 24px;
    transition: 0.25s;
    outline: none;

    &:hover {
        border-color: #0353a4;
    }

    &:focus {
        width: 380px;
        border-color: #70e000;
    }
`
