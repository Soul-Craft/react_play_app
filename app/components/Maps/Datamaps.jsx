import React from 'react';
import pubsub from 'pubsub-js';
import { Container, Row, Col, Button } from 'react-bootstrap';

import DatamapsRun from './Datamaps.run';

class Datamaps extends React.Component {

    componentDidMount() {
        pubsub.publish('setPageTitle', this.constructor.name);
        DatamapsRun();
    }

    componentWillUnmount() {
        $(window).off('resize.datamaps');
    }

    render() {
        return (
            <section>
                <Container fluid>
                    <div className="panel panel-default">
                      <div className="panel-heading">Basic Map</div>
                      <div className="panel-body">
                        <div id="datamap-basic"></div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">Customized Arc Map</div>
                      <div className="panel-body">
                        <div id="datamap-arc"></div>
                      </div>
                    </div>
                </Container>
            </section>
        )
    }
}

export default Datamaps;
