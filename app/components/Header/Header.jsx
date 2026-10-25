import React from 'react';
import pubsub from 'pubsub-js';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router';

import './Header.scss';
import './HeaderMenuLinks.scss';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle: ''
        };
    }

    componentDidMount() {
        this.pubsub_token = pubsub.subscribe('setPageTitle', (ev, title) => {
            this.setState({pageTitle: title});
        });
    }

    componentWillUnmount() {
        pubsub.unsubscribe(this.pubsub_token);
    }

    showSearch() {
        pubsub.publish('showsearch');
    }

    showSettings() {
        pubsub.publish('showsettings');
    }

    render() {
        const ddMenuItem = (<span>
                                <em className="ion-person"></em><sup className="badge bg-danger">3</sup>
                            </span>);

        return (
            <header className="header-container">
                <nav>
                    <ul className="visible-xs visible-sm">
                        <li><a id="sidebar-toggler" href="#" className="menu-link menu-link-slide"><span><em></em></span></a></li>
                    </ul>
                    <ul className="hidden-xs">
                        <li><a id="offcanvas-toggler" href="#" className="menu-link menu-link-slide"><span><em></em></span></a></li>
                    </ul>
                    <h2 className="header-title">{this.state.pageTitle}</h2>

                    <ul className="pull-right">
                        <li>
                            <a href="#" className="ripple" onClick={this.showSearch}>
                                <em className="ion-ios-search-strong"></em>
                            </a>
                        </li>
                        <Dropdown id="basic-nav-dropdown" align="end" as="li">
                            <Dropdown.Toggle as="a" href="#" className="no-caret has-badge ripple">
                              <em className="ion-person"></em>
                              <sup className="badge bg-danger">3</sup>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="md-dropdown-menu" >
                                <Dropdown.Item as={Link} to="/pages/profile" eventKey={3.1}>
                                    <em className="ion-home icon-fw"></em>
                                    Profile
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/pages/messages" eventKey={3.2}><em className="ion-gear-a icon-fw"></em>Messages</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item as={Link} to="/login" eventKey={3.3}><em className="ion-log-out icon-fw"></em>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <li>
                            <a href="#" className="ripple" onClick={this.showSettings}>
                                <em className="ion-gear-b"></em>
                            </a>
                        </li>
                    </ul>

                </nav>
            </header>
        );
    }
}

export default Header;
