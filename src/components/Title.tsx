import * as React from 'react';
import { Button, ButtonToolbar, Grid, Row, Col } from 'react-bootstrap';

import './Title.css';
import { ColoredLine } from '../constants/ColoredLine';

import {
    isBrowser,
} from "react-device-detect";

export const Title: React.StatelessComponent<{}> = () => {
    if (isBrowser) {
        return (
            <Grid>
                <Row className="show-grid margin-row">
                    <Col md={10} mdOffset={1}>
                        <span className="title-font">Young Entrprenuer and Professional Summit &middot; Seattle</span>
                    </Col>
                </Row>
    
                <Row className="show-grid margin-row-small">
                    <Col md={4} mdOffset={4} className="address-font-desktop">
                        <span>MARCH 1, 2019 | GIX, Bellvue</span>
                    </Col>
                </Row>
    
                <Row className="show-grid margin-row-small margin-bottom-desktop">
                    <Col md={4} mdOffset={4}>
                        <Button bsStyle="warning" bsSize="large">Register Now</Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
    return (
        <Grid>
            <Row className="show-grid margin-row">
                <Col xs={10} xsOffset={1} md={7} mdOffset={3}>
                    <span className="title-font">Young Entrprenuer &amp; Professional Summit</span>
                </Col>
            </Row>

            <Row className="show-grid">
                <Col xs={7} xsOffset={3}>
                    <ColoredLine color="#ffffff" border="solid 1.2px #ffffff" width="70%" height="70%" />
                </Col>
            </Row>

            <Row className="show-grid">
                <Col xs={6} xsOffset={3} className="location-font">
                    <span className="title-font">Seattle</span>
                </Col>
            </Row>

            <Row className="show-grid margin-row">
                <Col xs={6} xsOffset={3} className="address-font">
                    <span className="address-font">MARCH 1, 2019 | GIX, Bellvue</span>
                </Col>
            </Row>

            <Row className="show-grid margin-row">
                <Col xs={6} xsOffset={3} className="location-font">
                <ButtonToolbar>
                    <Button bsStyle="default" className="btn-default" bsSize="large">Agenda</Button>
                </ButtonToolbar>
                </Col>
            </Row>

            <Row className="show-grid margin-row-small margin-bottom">
                <Col xs={6} xsOffset={3} className="location-font">
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large">Register Now</Button>
                </ButtonToolbar>
                </Col>
            </Row>
        </Grid>
    );
}

export default Title;