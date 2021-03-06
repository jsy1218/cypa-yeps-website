import * as React from 'react';

import { NavItem, Nav, Navbar } from 'react-bootstrap';
import { KEYNOTE_ROUTE, SPEAKERS_ROUTE, AGENDA_ROUTE, CONNECTIONS_ROUTE } from '../constants/AppRouterConstants';

import './NavBar.css';
import {
    isBrowser
  } from "react-device-detect";

interface Props { } 
interface State { isExpanded: boolean; }

export default class NavBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { isExpanded: false };
    }

    expandCollapse = () => {
        this.setState((s) => ({isExpanded: !s.isExpanded}));
    }
    
    render() {
        let logo = require('../images/yeps-logo@3x.png');
        let collapsedMenu = this.state.isExpanded ? 'collapsed-menu' : 'menu';
        var  BarStyle = isBrowser ? "barstyle-desktop" : "barstyle-phone"
        var  LogoWrapper = isBrowser ? "logo-wrapper" : "logo-wrapper-phone";
        var  LogoFont = isBrowser ? "logo-font" : "logo-font-phone";
        const topStyle = {
            margin: {
              "margin-top": "0px"
            } as React.CSSProperties,
          }

        const sideStyle = {
        margin: {
            "margin-left": "0px",
            "margin-right": "0px"
        } as React.CSSProperties,
        }

        return (
            <div className={'navbar-default'}>
                <Navbar collapseOnSelect fixedTop className={BarStyle}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <img className={LogoWrapper} src={logo} alt="logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle className={'toggle-style'} onClick={this.expandCollapse}/>
                        <Navbar.Text>
                            <span className={LogoFont}>YEPS</span>
                        </Navbar.Text>
                    </Navbar.Header>
                    <Navbar.Collapse style={sideStyle.margin}>
                        <Nav pullRight className={collapsedMenu} style={topStyle.margin}>
                            <NavItem eventKey={1} href={'#' + KEYNOTE_ROUTE}>
                                Keynote
                            </NavItem>
                            <NavItem eventKey={2} href={'#' + SPEAKERS_ROUTE}>
                                Speakers
                            </NavItem>
                            <NavItem eventKey={3} href={'#' + AGENDA_ROUTE}>
                                Agenda
                            </NavItem>
                            <NavItem eventKey={4} href={'#' + CONNECTIONS_ROUTE}>
                                About
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div> 
        )
    }
}