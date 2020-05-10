import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    right: 0;
    padding: 0 15px;
    background: #1c2541;
    box-shadow: 0px 2px 2px 0 #545b62;
    height: 50px;
    display: flex;
    color: white;
    justify-content: space-between;
    font-size: 25px;
    align-items: center;
    z-index: 20;
`;

const BrandName = styled.span`
    font-family: 'Rock Salt', cursive;
    font-size: 18px;
    font-weight: 600;
    color: #fb5607
`;

const Logo = styled.span`
    display: none;
    @media (max-width: 768px) {
        display: flex
    }
`;

const Header = () =>  {
    return (
        <HeaderContainer>
            <span> <i className="fab fa-stack-overflow"></i> <BrandName>Stack Libraries </BrandName>  </span>
            <Logo> <i className="fas fa-align-justify"></i> </Logo>
        </HeaderContainer>
    )
}

export default Header
