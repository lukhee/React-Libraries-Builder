import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SideBarContainer = styled.div`
    padding-top:60px;
    background: #0b132b;
    color: white;
`;

const MenuList = [
    {
        id: 1,
        link: '',
        name: 'Home',
        fontAweSomeClass: 'home',
    },{
        id: 2,
        link: 'color-picker',
        name: 'Color Picker',
        fontAweSomeClass: 'palette',
    }, {
        id: 3,
        link: 'skelenton',
        name: 'Skelenton',
        fontAweSomeClass: 'truck-loading',
    }, {
        id: 4,
        link: 'lazy-loading',
        name: 'Lazy Loading',
        fontAweSomeClass: 'spinner',
    }, {
        id: 5,
        link: 'dark-mode',
        name: 'Dark Mode',
        fontAweSomeClass: 'toggle-on',
    }
]

const sideBar = () => {
    return (
        <SideBarContainer className="d-none d-md-flex col-md-2 px-0">
            <div className="w-100 pt-3">
                { MenuList.map(menu=> (
                    <NavLink exact to={menu.link}
                        key={menu.id}
                        className="main-nav"
                        activeClassName="main-nav-active">
                        <p className="p-2 pl-4 m-0"> <i className={`pr-2 fas fa-${menu.fontAweSomeClass}`}> </i> {menu.name} </p> </NavLink>
                ))}
            </div>
        </SideBarContainer>
    )
}

export default sideBar