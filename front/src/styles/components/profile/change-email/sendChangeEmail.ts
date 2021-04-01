import styled from 'styled-components'

export const Container = styled.div`
    border: 2px solid #ced4da;
    border-radius: 5px;
    background: ${props => props.theme.colors.primary};

    display: grid;
    place-items: center;

    main {
        padding: 10px;

        button {
            color: ${props => props.theme.colors.text};
            padding: 10px;
            background: none;
            border: 2px solid black;
            border-radius: 5px;
            outline: none;
            transition: 0.25s;
            cursor: pointer;

            &:hover {
                background: #70e000;
            }
        }
    }
`
