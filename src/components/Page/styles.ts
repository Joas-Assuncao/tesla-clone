import styled from 'styled-components';

export const Container = styled.div`
    .colored:nth-child(1) {
        background: #F1F1F1 url('https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/1000x600/ms-homepage-desktop') center no-repeat;
    }

    .colored:nth-child(2) {
        background: #F1F1F1 url('https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/1000x700/Desktop-ModelY?quality=70') center no-repeat;
    }

    .colored:nth-child(3) {
        background: #F1F1F1 url('https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/1000x700/M3-Homepage-D') center no-repeat;
    }

    .colored:nth-child(4) {
        background: #F1F1F1 url('https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/1000x700/ModelX-Homepage-D') center no-repeat;
    }

    .colored:nth-child(5) {
        background: #F1F1F1 url('https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/1000x900/_25-HP-SolarPanels-D') center no-repeat;
    }

    .colored:nth-child(6) {
        background: #F1F1F1 url('https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/1000x1800/HP-SR-Design-D') center no-repeat;
    }

    .colored:nth-child(7) {
        background: #F1F1F1 url('https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/1200x1080/Desktop-Accessories') center no-repeat;
    }

    @media (min-width: 600px) {
        .colored:nth-child(1) {
        background: #F1F1F1 url('https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/2000x1300/ms-homepage-desktop') center no-repeat;
    }

    .colored:nth-child(2) {
        background: #F1F1F1 url('https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/1400x1166/Desktop-ModelY?quality=70') center no-repeat;
    }

    .colored:nth-child(3) {
        background: #F1F1F1 url('https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/1900x1000/M3-Homepage-D') center no-repeat;
    }

    .colored:nth-child(4) {
        background: #F1F1F1 url('https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/1750x900/ModelX-Homepage-D') center no-repeat;
    }

    .colored:nth-child(5) {
        background: #F1F1F1 url('https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/1500x1300/_25-HP-SolarPanels-D') center no-repeat;
    }

    .colored:nth-child(6) {
        background: #F1F1F1 url('https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/1500x1800/HP-SR-Design-D') center no-repeat;
    }

    .colored:nth-child(7) {
        background: #F1F1F1 url('https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/1500x1150/Desktop-Accessories') center no-repeat;
    }
    }
`;

export const Spacer = styled.div`
    height: 15vh;

    background: #FFF;
`;

/*
Model S = https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop
Model Y = https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70
Model 3 = https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-D
Model X = https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D
SolarPanels = https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D
TelhaSolar = https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D
Acessories = https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories
*/