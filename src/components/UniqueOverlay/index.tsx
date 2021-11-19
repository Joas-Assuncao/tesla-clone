import React from 'react';
import { useTransform } from 'framer-motion';

import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
    const { scrollYProgress } = useWrapperScroll();

    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

    return (
        <Container>
            <Header>
                <Logo />
                <Burger />
            </Header>


            <Footer style={{ opacity }}>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=Mf4Se4ZGcG8">UI Clone</a></li>
                    <li><a href="https://linkedin.com/in/Joas-Assuncao">made with 💜</a></li>
                    <li><a href="https://github.com/Joas-Assuncao">By Joas-Assuncao</a></li>
                </ul>
            </Footer>
        </Container>
    )
}

export default UniqueOverlay;