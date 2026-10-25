import React from 'react';
import pubsub from 'pubsub-js';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';

class Projects extends React.Component {

    componentDidMount() {
        pubsub.publish('setPageTitle', this.constructor.name);
    }

    render() {
        return (
            <section>
                <Container fluid>
                    <Row className="mv">
                        <Col sm={4}>
                            <button type="button" className="btn btn-info"><em className="ion-plus mr-sm"></em>Add Project</button>
                        </Col>
                        <Col sm={8} className="text-right hidden-xs">
                            <form className="form-inline">
                                <div className="form-group mr">
                                    <label className="mr"><small>Status</small></label>
                                    <select className="form-control input-sm">
                                        <option>Completed</option>
                                        <option>Active</option>
                                        <option>Paused</option>
                                        <option>Canceled</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="mr"><small>Sort by</small></label>
                                    <select className="form-control input-sm">
                                        <option>Name</option>
                                        <option>Status</option>
                                        <option>Start Date</option>
                                        <option>Finish Date</option>
                                    </select>
                                </div>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} lg={4}>
                            {/* Project card */}
                            <div className="card">
                                <div className="card-heading">
                                    <div className="pull-right">
                                        <span className="label label-info">active</span>
                                    </div>
                                    <div className="card-title">Project #A</div><small>Web development</small>
                                </div>
                                <div className="card-body">
                                    <p><strong>Description:</strong></p>
                                    <div className="pl-lg mb-lg">Ut turpis urna, tristique sed adipiscing nec, luctus quis leo. Fusce nec volutpat ante.</div>
                                    <p><strong>Members:</strong></p>
                                    <div className="pl-lg mb-lg">
                                        <a href="" className="inline">
                                            <img src="img/user/02.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/04.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/05.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/06.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                    </div>
                                    <p><strong>Activity:</strong></p>
                                    <div className="pl-lg">
                                        <ul className="list-inline m0">
                                            <li className="mr">
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">Issues</p>
                                            </li>
                                            <li className="mr">
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">Posts</p>
                                            </li>
                                            <li>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">Tests</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <p><small>56%</small></p>
                                    <ProgressBar now={56} variant="info" className="progress-xs m0"/>
                                </div>
                            </div>
                            {/* end Project card */}
                        </Col>
                        <Col md={6} lg={4}>
                            {/* Project card */}
                            <div className="card">
                                <div className="card-heading">
                                    <div className="pull-right">
                                        <span className="label label-info">active</span>
                                    </div>
                                    <div className="card-title">Project #B</div><small>Web development</small>
                                </div>
                                <div className="card-body">
                                    <p><strong>Description:</strong></p>
                                    <div className="pl-lg mb-lg">Ut turpis urna, tristique sed adipiscing nec, luctus quis leo. Fusce nec volutpat ante.</div>
                                    <p><strong>Members:</strong></p>
                                    <div className="pl-lg mb-lg">
                                        <a href="" className="inline">
                                            <img src="img/user/04.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/03.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/07.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/03.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                    </div>
                                    <p><strong>Activity:</strong></p>
                                    <div className="pl-lg">
                                        <ul className="list-inline m0">
                                            <li className="mr">
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">Issues</p>
                                            </li>
                                            <li className="mr">
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">Posts</p>
                                            </li>
                                            <li>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">Tests</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <p><small>56%</small></p>
                                    <ProgressBar className="progress-xs m0" now={56} variant="danger" />
                                </div>
                            </div>
                            {/* end Project card */}
                        </Col>
                        <Col md={6} lg={4}>
                            {/* Project card */}
                            <div className="card">
                                <div className="card-heading">
                                    <div className="pull-right">
                                        <span className="label label-warning">paused</span>
                                    </div>
                                    <div className="card-title">Project #C</div><small>Web development</small>
                                </div>
                                <div className="card-body">
                                    <p><strong>Description:</strong></p>
                                    <div className="pl-lg mb-lg">Ut turpis urna, tristique sed adipiscing nec, luctus quis leo. Fusce nec volutpat ante.</div>
                                    <p><strong>Members:</strong></p>
                                    <div className="pl-lg mb-lg">
                                        <a href="" className="inline">
                                            <img src="img/user/04.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/03.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/07.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/03.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                    </div>
                                    <p><strong>Activity:</strong></p>
                                    <div className="pl-lg">
                                        <ul className="list-inline m0">
                                            <li className="mr">
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">Issues</p>
                                            </li>
                                            <li className="mr">
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">Posts</p>
                                            </li>
                                            <li>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">Tests</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <p><small>64%</small></p>
                                    <ProgressBar className="progress-xs m0" now={64} variant="success" />
                                </div>
                            </div>
                            {/* end Project card */}
                        </Col>
                        <Col md={6} lg={4}>
                            {/* Project card */}
                            <div className="card">
                                <div className="card-heading">
                                    <div className="pull-right">
                                        <span className="label label-info">active</span>
                                    </div>
                                    <div className="card-title">Project #D</div><small>Web development</small>
                                </div>
                                <div className="card-body">
                                    <p><strong>Description:</strong></p>
                                    <div className="pl-lg mb-lg">Ut turpis urna, tristique sed adipiscing nec, luctus quis leo. Fusce nec volutpat ante.</div>
                                    <p><strong>Members:</strong></p>
                                    <div className="pl-lg mb-lg">
                                        <a href="" className="inline">
                                            <img src="img/user/03.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/07.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/06.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/05.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                    </div>
                                    <p><strong>Activity:</strong></p>
                                    <div className="pl-lg">
                                        <ul className="list-inline m0">
                                            <li className="mr">
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">Issues</p>
                                            </li>
                                            <li className="mr">
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">Posts</p>
                                            </li>
                                            <li>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">Tests</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <p><small>36%</small></p>
                                    <ProgressBar className="progress-xs m0" now={36} variant="warning" />
                                </div>
                            </div>
                            {/* end Project card */}
                        </Col>
                        <Col md={6} lg={4}>
                            {/* Project card */}
                            <div className="card">
                                <div className="card-heading">
                                    <div className="pull-right">
                                        <span className="label label-info">active</span>
                                    </div>
                                    <div className="card-title">Project #A</div><small>Web development</small>
                                </div>
                                <div className="card-body">
                                    <p><strong>Description:</strong></p>
                                    <div className="pl-lg mb-lg">Ut turpis urna, tristique sed adipiscing nec, luctus quis leo. Fusce nec volutpat ante.</div>
                                    <p><strong>Members:</strong></p>
                                    <div className="pl-lg mb-lg">
                                        <a href="" className="inline">
                                            <img src="img/user/02.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/04.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/05.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/06.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                    </div>
                                    <p><strong>Activity:</strong></p>
                                    <div className="pl-lg">
                                        <ul className="list-inline m0">
                                            <li className="mr">
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">Issues</p>
                                            </li>
                                            <li className="mr">
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">Posts</p>
                                            </li>
                                            <li>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">Tests</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <p><small>56%</small></p>
                                    <ProgressBar className="progress-xs m0" now={56} variant="info" />
                                </div>
                            </div>
                            {/* end Project card */}
                        </Col>
                        <Col md={6} lg={4}>
                            {/* Project card */}
                            <div className="card">
                                <div className="card-heading">
                                    <div className="pull-right">
                                        <span className="label label-success">completed</span>
                                    </div>
                                    <div className="card-title">Project #B</div><small>Web development</small>
                                </div>
                                <div className="card-body">
                                    <p><strong>Description:</strong></p>
                                    <div className="pl-lg mb-lg">Ut turpis urna, tristique sed adipiscing nec, luctus quis leo. Fusce nec volutpat ante.</div>
                                    <p><strong>Members:</strong></p>
                                    <div className="pl-lg mb-lg">
                                        <a href="" className="inline">
                                            <img src="img/user/04.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/03.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/07.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/03.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                    </div>
                                    <p><strong>Activity:</strong></p>
                                    <div className="pl-lg">
                                        <ul className="list-inline m0">
                                            <li className="mr">
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">Issues</p>
                                            </li>
                                            <li className="mr">
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">Posts</p>
                                            </li>
                                            <li>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">Tests</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <p><small>100%</small></p>
                                    <ProgressBar className="progress-xs m0" now={100} variant="success" />
                                </div>
                            </div>
                            {/* end Project card */}
                        </Col>
                        <Col md={6} lg={4}>
                            {/* Project card */}
                            <div className="card">
                                <div className="card-heading">
                                    <div className="pull-right">
                                        <span className="label label-warning">paused</span>
                                    </div>
                                    <div className="card-title">Project #C</div><small>Web development</small>
                                </div>
                                <div className="card-body">
                                    <p><strong>Description:</strong></p>
                                    <div className="pl-lg mb-lg">Ut turpis urna, tristique sed adipiscing nec, luctus quis leo. Fusce nec volutpat ante.</div>
                                    <p><strong>Members:</strong></p>
                                    <div className="pl-lg mb-lg">
                                        <a href="" className="inline">
                                            <img src="img/user/04.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/03.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/07.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/03.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                    </div>
                                    <p><strong>Activity:</strong></p>
                                    <div className="pl-lg">
                                        <ul className="list-inline m0">
                                            <li className="mr">
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">Issues</p>
                                            </li>
                                            <li className="mr">
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">Posts</p>
                                            </li>
                                            <li>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">Tests</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <p><small>64%</small></p>
                                    <ProgressBar className="progress-xs m0" now={64} variant="success" />
                                </div>
                            </div>
                            {/* end Project card */}
                        </Col>
                        <Col md={6} lg={4}>
                            {/* Project card */}
                            <div className="card">
                                <div className="card-heading">
                                    <div className="pull-right">
                                        <span className="label label-info">active</span>
                                    </div>
                                    <div className="card-title">Project #D</div><small>Web development</small>
                                </div>
                                <div className="card-body">
                                    <p><strong>Description:</strong></p>
                                    <div className="pl-lg mb-lg">Ut turpis urna, tristique sed adipiscing nec, luctus quis leo. Fusce nec volutpat ante.</div>
                                    <p><strong>Members:</strong></p>
                                    <div className="pl-lg mb-lg">
                                        <a href="" className="inline">
                                            <img src="img/user/03.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/07.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/06.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/05.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                    </div>
                                    <p><strong>Activity:</strong></p>
                                    <div className="pl-lg">
                                        <ul className="list-inline m0">
                                            <li className="mr">
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">Issues</p>
                                            </li>
                                            <li className="mr">
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">Posts</p>
                                            </li>
                                            <li>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">Tests</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <p><small>36%</small></p>
                                    <ProgressBar className="progress-xs m0" now={36} variant="warning" />
                                </div>
                            </div>
                            {/* end Project card */}
                        </Col>
                        <Col md={6} lg={4}>
                            {/* Project card */}
                            <div className="card">
                                <div className="card-heading">
                                    <div className="pull-right">
                                        <span className="label label-info">active</span>
                                    </div>
                                    <div className="card-title">Project #A</div><small>Web development</small>
                                </div>
                                <div className="card-body">
                                    <p><strong>Description:</strong></p>
                                    <div className="pl-lg mb-lg">Ut turpis urna, tristique sed adipiscing nec, luctus quis leo. Fusce nec volutpat ante.</div>
                                    <p><strong>Members:</strong></p>
                                    <div className="pl-lg mb-lg">
                                        <a href="" className="inline">
                                            <img src="img/user/02.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/04.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/05.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                        <a href="" className="inline">
                                            <img src="img/user/06.jpg" alt="project member" className="img-circle thumb32"/>
                                        </a>
                                    </div>
                                    <p><strong>Activity:</strong></p>
                                    <div className="pl-lg">
                                        <ul className="list-inline m0">
                                            <li className="mr">
                                                <h4 className="m0">17</h4>
                                                <p className="text-muted">Issues</p>
                                            </li>
                                            <li className="mr">
                                                <h4 className="m0">780</h4>
                                                <p className="text-muted">Posts</p>
                                            </li>
                                            <li>
                                                <h4 className="m0">23</h4>
                                                <p className="text-muted">Tests</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <p><small>56%</small></p>
                                    <ProgressBar className="progress-xs m0" now={56} variant="info" />
                                </div>
                            </div>
                            {/* end Project card */}
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Projects;
