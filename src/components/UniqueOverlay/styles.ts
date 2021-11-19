import { motion } from 'framer-motion';
import styled from 'styled-components';
import { LogoSVG, BurgerSVG } from './IconSVG';

export const Container = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    padding: 0 1.25rem;
    min-height: 3.25rem;
`;

export const Logo = styled(LogoSVG)`
    height: 1rem;

    cursor: pointer;

`;

export const Burger = styled(BurgerSVG)`
    width: 1.5rem;
    height: 1.5rem;

    padding-right: .3125rem;

    cursor: pointer;
`;

export const Footer = styled(motion.footer)`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    ul {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        li {
            font-size: .875rem;

            list-style: none;

            & + li {
                margin: 10px 0 0;
            }

            a {
                color: #393C41;

                text-decoration: none;

                &:hover {
                    color: #000;
                }
            }
        }
    }

    margin-bottom: 1.875rem;

    @media (min-width: 600px) {
        ul {
            flex-direction: row;

            li + li {
                margin: 0 0 0 1.875rem;
            }
        }
    }
`;
