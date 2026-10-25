import React from 'react';
import { Outlet } from 'react-router';

function Layout() {
    return (
        <div className="layout-container">
            <div className="page-container bg-blue-grey-900">
                {/* Page content */}
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
