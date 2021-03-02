import styled from 'styled-components'

export const Container = styled.div`
    header {
        width: 100vw;
        height: 50px;
        background: ${props => props.theme.colors.secondary};
        color: white;

        div {
            width: 100%;
            max-width: 1366px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
        }
    }

    main {
        width: 100%;
        max-width: 1366px;
        margin-left: auto;
        margin-right: auto;
    }
`
