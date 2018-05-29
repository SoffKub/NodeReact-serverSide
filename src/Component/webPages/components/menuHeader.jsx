import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const MenuHeader = () => (

<Navbar inverse collapseOnSelect>
    <Navbar.Header>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav>
            <NavDropdown eventKey={3} title="Katergorier" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Skapa din box</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
        </Nav>
        <Nav pullRight>
            <NavItem eventKey={1} href="#">
                Om oss
            </NavItem>
            <NavItem eventKey={2} href="#">
                Video
            </NavItem>
            <NavItem eventKey={1} href="#">
                Sign In
            </NavItem>
            <NavItem eventKey={2} href="#">
                Sign Out
            </NavItem>
        </Nav>
    </Navbar.Collapse>
</Navbar>
);
export default MenuHeader
