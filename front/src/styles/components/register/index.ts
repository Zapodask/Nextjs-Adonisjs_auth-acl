import styled from 'styled-components'
import { Form as Unform } from '@unform/web'

export const Container = styled.div`
    width: 100%;
    max-width: 400px;
    min-width: 350px;
    border: 2px solid black;
    border-radius: 15px;
    padding: 15px;
    background: ${props => props.theme.colors.primary};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    main {
        width: 400px;
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
        border: 2px solid #38b000;
        border-radius: 24px;
        transition: 0.25s;
        color: ${props => props.theme.colors.text};
        outline: none;
        cursor: pointer;

        &:hover {
            border-color: #0077b6;
        }

        &:focus {
            border-color: #480ca8;
        }
    }
`
