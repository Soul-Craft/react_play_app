import React, { useEffect, useRef } from 'react';
import { useLocation, useOutlet } from 'react-router';

import './Core.scss';
import './LayoutVariants.scss';

import Header from '../Header/Header';
import HeaderSearch from '../Header/HeaderSearch';
import Sidebar from '../Sidebar/Sidebar';
import Settings from '../Settings/Settings';

const animationName = 'rag-fadeIn'

function Core() {
    const location = useLocation();
    const outlet = useOutlet();
    const mainRef = useRef(null);
    const firstRender = useRef(true);

    // On route changes: auto close the sidebar and fade the new page in
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        $('.sidebar-visible').removeClass('sidebar-visible');

        const page = $(mainRef.current).children('section').first().addClass(animationName + '-enter');
        const timer = setTimeout(() => page.removeClass(animationName + '-enter'), 500);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <div className="layout-container">

            <Header />

            <Sidebar />
            <div className="sidebar-layout-obfuscator"></div>

            <main className="main-container" ref={mainRef}>
                {/* Page content (keyed so every path mounts a fresh page) */}
                <React.Fragment key={location.pathname}>
                    {outlet}
                </React.Fragment>

                {/* Page footer */}
                <footer>
                    <span>2017 - Centric app.</span>
                </footer>
            </main>

            {/* Search template */}
            <HeaderSearch/>

            {/* Settings template */}
            <Settings/>

            {/*> yield region="bodyChild" }*/}

        </div>
    );
}

export default Core;
