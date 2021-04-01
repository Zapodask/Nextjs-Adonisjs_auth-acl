import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    nav {
        width: 100%;
        height: 55px;
        background: ${props => props.theme.colors.secondary};
        color: white;

        div {
            width: 100%;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
        }
    }

    main {
        margin-top: 50px;
        width: 100%;
        max-width: 1366px;
        margin-left: auto;
        margin-right: auto; 
    }
`
