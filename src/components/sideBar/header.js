import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    right: 0;
    padding: 5px 15px;
    background: white;
    height: 60px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    align-content: center;
    z-index: 20;
`

const Header = () =>  {
    return (
        <HeaderContainer>
            <h3> <i className="fab fa-stack-overflow pr-3"></i> Header </h3>
            <h3> <i className="fas fa-align-justify"></i> </h3>
        </HeaderContainer>
    )
}

export default Header
