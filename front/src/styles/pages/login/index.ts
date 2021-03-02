import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 90vh;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

    border: 2px solid black;
`
