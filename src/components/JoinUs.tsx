import * as React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import './JoinUs.css';
import { isBrowser } from 'react-device-detect';

export const JoinUs: React.StatelessComponent<{}> = () => {
    if (isBrowser) {
        return (
            <Grid>
                <Row className="show-grid join-us-title-layout-small">
                    <Col xs={10} xsOffset={1}>
                        <h3 className="join-us-title-font-desktop">Register today!</h3>
                    </Col>
                </Row>
                <Row>
                <Col xs={10} xsOffset={1} className="join-us-content-background">
                <Row className="show-grid join-us-title-layout">
                    <Col xs={10} xsOffset={1}>
                        <p className="join-us-title-font-small content">Our commitment is to provide you the ability to be more efficient, accurate, and connected. Don't miss your opportunity to attend Yeps.</p>
                    </Col>
                </Row>
    
                <Row className="show-grid join-us-title-layout">
                    <Col xs={10} xsOffset={1}>
                        <Button bsStyle="warning" bsSize="large"><a className="registerNowbutton1" href="https://www.eventbrite.com/e/2019-young-entrepreneurs-and-professionals-summit-seattle-yeps-tickets-61850120375">Register Now</a></Button>
                    </Col>
                </Row>
                </Col>
                </Row>
            </Grid>
        );
    }
    return (
        <Grid>
            <Row className="show-grid join-us-title-layout-small">
                <Col xs={10} xsOffset={1}>
                    <h3><span className="join-us-title-font">— Join Us —</span></h3>
                </Col>
            </Row>

            <Row className="show-grid join-us-title-layout">
                <Col xs={10} xsOffset={1}>
                    <p className="join-us-title-font-small">Our commitment is to provide you the ability to be more efficient, accurate, and connected. Don't miss your opportunity to attend Yeps.</p>
                </Col>
            </Row>

            <Row className="show-grid join-us-title-layout">
                <Col xs={10} xsOffset={1}>
                    <Button bsStyle="default" className="btn-default" bsSize="large"><a className="registerNowbutton1" href="https://www.eventbrite.com/e/2019-young-entrepreneurs-and-professionals-summit-seattle-yeps-tickets-61850120375">Register Now</a></Button>
                </Col>
            </Row>
        </Grid>
    );
}

export default JoinUs; 