import styled from 'styled-components'
import { Form as Unform } from '@unform/web'
import { Modal as MModal, Slide as MSlide } from '@material-ui/core'

export const Modal = styled(MModal)`
    display: grid;
    place-items: center;
`

export const Slide = styled(MSlide)`
    width: 100%;
    height: 100%;
    max-width: 500px;
    background: ${props => props.theme.colors.primary};
    border: 2px solid black;
    border-radius: 5%;
    outline: none;
    display: grid;
    place-items: center;

    main {
        h1 {
            text-transform: uppercase;
            font-weight: 500;
        }
    }
`

export const Form = styled(Unform)`
    width: 80%;

    button {
        text-align: center;
        background: none;
        border: 0;
        display: block;
        margin: 20px auto;
        padding: 14px 40px;
        border: 2px solid #38b000;
        border-radius: 24px;
        transition: 0.25s;
        outline: none;
        cursor: pointer;
        color: ${props => props.theme.colors.text};

        &:hover {
            border-color: #0077b6;
        }

        &:focus {
            border-color: #480ca8;
        }
    }
`

export const ForgotButton = styled.button`
    text-align: center;
    background: none;
    border: 0;
    display: block;
    margin: 20px auto;
    padding: 14px 40px;
    border: 2px solid #ba181b;
    border-radius: 24px;
    transition: 0.25s;
    outline: none;
    cursor: pointer;
    color: ${props => props.theme.colors.text};

    &:hover {
        border-color: #f48c06;
    }

    &:focus {
        border-color: #43aa8b;
    }
`
