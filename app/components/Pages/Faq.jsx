import React from 'react';
import pubsub from 'pubsub-js';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';

class Faq extends React.Component {

    componentDidMount() {
        pubsub.publish('setPageTitle', this.constructor.name);
    }

    render() {

        let accordionHeader = (title) => {
            return (
                <span className="h4">
                    <small>
                        <em className="ion-arrow-right-c text-muted mr icon-lg"></em>
                    </small>
                    {title}
                </span>
            );
        }

        return (
            <section>
                <Container fluid>
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center pb-lg">
                                <h3 className="text-bold">Frequently Asked Questions</h3>
                                <p className="text-muted">Proin non lacinia sapien. Vivamus lorem justo, sollicitudin ac sollicitudin ut, aliquet sed tellus.<br/>Sed venenatis ullamcorper mauris et malesuada. Nunc vel ipsum vitae erat pharetra rhoncus eu eu tellus.</p><br/>
                                <p>Have more questions?</p>
                                <button type="button" className="btn btn-info">Contact with Us</button>
                            </div>
                            <div className="row mt-lg">
                                <div className="col-md-6">
                                   <Accordion>
                                        <Accordion.Item eventKey="1" className="b0">
                                            <Accordion.Header as="div">{accordionHeader('What Assets Can I Use In My Items?')}</Accordion.Header>
                                            <Accordion.Body>
                                            <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam volutpat adipiscing.</p>
                                            <p>Proin ut urna enim. Nam non enim vitae mi semper egestas. Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet.</p>
                                            <div className="pull-right"><small className="text-muted mr">Was this article helpful?</small>
                                                <Button variant="default" size="xs"><em className="ion-chevron-up text-muted"></em></Button>
                                                <Button variant="default" size="xs"><em className="ion-chevron-down text-muted"></em></Button>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2" className="b0">
                                            <Accordion.Header as="div">{accordionHeader('Where is the Market Terms?')}</Accordion.Header>
                                            <Accordion.Body>
                                            <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam volutpat adipiscing.</p>
                                            <p>Proin ut urna enim. Nam non enim vitae mi semper egestas. Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet.</p>
                                            <div className="pull-right"><small className="text-muted mr">Was this article helpful?</small>
                                                <Button variant="default" size="xs"><em className="ion-chevron-up text-muted"></em></Button>
                                                <Button variant="default" size="xs"><em className="ion-chevron-down text-muted"></em></Button>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3" className="b0">
                                            <Accordion.Header as="div">{accordionHeader('Morbi pretium varius aliquam?')}</Accordion.Header>
                                            <Accordion.Body>
                                            <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam volutpat adipiscing.</p>
                                            <p>Proin ut urna enim. Nam non enim vitae mi semper egestas. Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet.</p>
                                            <div className="pull-right"><small className="text-muted mr">Was this article helpful?</small>
                                                <Button variant="default" size="xs"><em className="ion-chevron-up text-muted"></em></Button>
                                                <Button variant="default" size="xs"><em className="ion-chevron-down text-muted"></em></Button>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                   </Accordion>
                                </div>
                                <div className="col-md-6">
                                   <Accordion>
                                        <Accordion.Item eventKey="1" className="b0">
                                            <Accordion.Header as="div">{accordionHeader('How to Contact an Author')}</Accordion.Header>
                                            <Accordion.Body>
                                            <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam volutpat adipiscing.</p>
                                            <p>Proin ut urna enim. Nam non enim vitae mi semper egestas. Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet.</p>
                                            <div className="pull-right"><small className="text-muted mr">Was this article helpful?</small>
                                                <Button variant="default" size="xs"><em className="ion-chevron-up text-muted"></em></Button>
                                                <Button variant="default" size="xs"><em className="ion-chevron-down text-muted"></em></Button>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2" className="b0">
                                            <Accordion.Header as="div">{accordionHeader('What is Item Support?')}</Accordion.Header>
                                            <Accordion.Body>
                                            <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam volutpat adipiscing.</p>
                                            <p>Proin ut urna enim. Nam non enim vitae mi semper egestas. Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet.</p>
                                            <div className="pull-right"><small className="text-muted mr">Was this article helpful?</small>
                                                <Button variant="default" size="xs"><em className="ion-chevron-up text-muted"></em></Button>
                                                <Button variant="default" size="xs"><em className="ion-chevron-down text-muted"></em></Button>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3" className="b0">
                                            <Accordion.Header as="div">{accordionHeader('Where Is My Purchase Code?')}</Accordion.Header>
                                            <Accordion.Body>
                                            <p>Donec congue sagittis mi sit amet tincidunt. Quisque sollicitudin massa vel erat tincidunt blandit. Curabitur quis leo nulla. Phasellus faucibus placerat luctus. Integer fermentum molestie massa at congue. Quisque quis quam dictum diam volutpat adipiscing.</p>
                                            <p>Proin ut urna enim. Nam non enim vitae mi semper egestas. Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet.</p>
                                            <div className="pull-right"><small className="text-muted mr">Was this article helpful?</small>
                                                <Button variant="default" size="xs"><em className="ion-chevron-up text-muted"></em></Button>
                                                <Button variant="default" size="xs"><em className="ion-chevron-down text-muted"></em></Button>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                   </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        );
    }
}

export default Faq;

