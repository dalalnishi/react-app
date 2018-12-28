import React, {Component} from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Button} from 'reactstrap'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as authAction from '../../action/auth.js';

class Header extends Component{
    btnLogout_Click(e){
        e.preventDefault();
        this.props.action.auth.logoutUser();
    }
    render(){
        return (
        (this.props.auth.token && this.props.auth.token !== "") ?<Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">Demo</NavbarBrand>
        <Nav className="ml-auto" navbar>                      
            <NavItem>
                <NavLink tag={Link} to="/p1">P1</NavLink>                
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/p2">P2</NavLink>                
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/p3">P3</NavLink>                
            </NavItem>
            <NavItem>
                <Button onClick={this.btnLogout_Click.bind(this)}>Logout</Button>                
            </NavItem>
        </Nav>
    </Navbar>:null);
    }    
}
const mapStateToProps = (state) => {
    const { auth } = state;
    return {
        auth: auth
    }
};

const mapDispatchToProps = dispatch => ({
    action: {
        auth: bindActionCreators(authAction, dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)