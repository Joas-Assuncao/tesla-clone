import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    flex: 1;
`;

export const Heading = styled.div`
    margin-top: 16.5vh;
    
    text-align: center;

    > h1 {
        color: #393C41;

        font-weight: 500;
        font-size: 2.5rem;
        line-height: 3rem;
    }

    > h2 {
        color: #5C5E62;

        font-weight: normal;
        font-size: .875rem;
        line-height: 1.25rem;
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    margin-bottom: 8.125rem;

    > button {
        background: #1A1720;
        color: #FFF;

        padding: .8125rem 2.5rem;

        font-size: .75rem;
        font-weight: 500;
        letter-spacing: .4px;
        text-transform: uppercase;
        
        border: none;
        border-radius: 1.25rem;

        outline: 0;
        opacity: .8;
        cursor: pointer;

        &.white {
            background: #FFF;
            color: #1A1720;

            opacity: .65;
        }

        & + button {
            margin: .625rem 0 0;
        }
    }

    @media (min-width: 600px) {
        flex-direction: row;
        margin-bottom: 5.625rem;

        > button + button {
            margin: 0 0 0 .625rem;
        }
    }
`;