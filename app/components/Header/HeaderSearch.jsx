import React from 'react';
import { Modal } from 'react-bootstrap';
import pubsub from 'pubsub-js';
import $ from 'jquery';

class HeaderSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.searchTerm = React.createRef();
    }

    componentDidMount() {
        this.pubsub_token = pubsub.subscribe('showsearch', () => {
            this.open();
        });
    }

    componentWillUnmount() {
        pubsub.unsubscribe(this.pubsub_token);
    }

    onShowModal() {
        // Add class for white backdrop
        $('body').addClass('modal-backdrop-soft');
    }

    onHiddenModal() {
        // Remove class for white backdrop (if not will affect future modals)
        $('body').removeClass('modal-backdrop-soft');
    }

    onShownModal() {
        // Auto focus the search input
        $('.header-input-search').focus();
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('Search form submitted: [' + this.searchTerm.current.value + ']');
    }

    render() {
        return (
            <Modal show={this.state.showModal} onHide={this.close.bind(this)} className="modal modal-top fade modal-search"
                onEnter={this.onShowModal.bind(this)} onExited={this.onHiddenModal.bind(this)} onEntered={this.onShownModal.bind(this)}>
                <Modal.Body>
                    <div className="pull-left">
                        <button type="button" onClick={this.close.bind(this)} className="btn btn-flat"><em className="ion-arrow-left-c icon-24"></em></button>
                    </div>
                    <div className="pull-right">
                        <button type="button" className="btn btn-flat"><em className="ion-android-microphone icon-24"></em></button>
                    </div>
                    <form onSubmit={this.onSubmit.bind(this)} action="#" className="oh">
                        <div className="mda-form-control pt0">
                            <input type="text" ref={this.searchTerm} placeholder="Search.." className="form-control header-input-search" />
                            <div className="mda-form-control-line"></div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default HeaderSearch;




