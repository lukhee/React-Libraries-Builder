import React from 'react'
import styled from 'styled-components'

const SideBarContainer = styled.div`
    padding-top:60px;
    background: #0b132b;
    color: white;
`

const sideBar = () => {
    return (
        <SideBarContainer className="d-none d-md-flex col-md-3">
            <h4> Side Bar </h4>
        </SideBarContainer>
    )
}

export default sideBar