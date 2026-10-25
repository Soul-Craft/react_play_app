/*!
 *
 * Centric - Bootstrap Admin App + ReactJS
 *
 * Version: 1.7
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

import './Vendor';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import Core from './components/Core/Core';
import './components/Bootstrap/Bootstrap';
import './components/Common/Common';
import './components/Colors/Colors';
import './components/FloatButton/FloatButton';
import Translate from './components/Translate/Translate';

import Dashboard from './components/Dashboard/Dashboard';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import Forms from './components/Forms/Forms';
import Elements from './components/Elements/Elements';
import Tables from './components/Tables/Tables';
import Layouts from './components/Layouts/Layouts';
import User from './components/User/User';
import Maps from './components/Maps/Maps';
import Pages from './components/Pages/Pages';

import './components/Utils/Utils';

Translate();

$(() => {
    // prevent page reload when using dummy anchors
    $(document).on('click', '[href=""],[href="#"]', () => {
        return false;
    })

    // Support for float labels on inputs
    $(document).on('change', '.mda-form-control > input', function() {
        $(this)[this.value.length ? 'addClass' : 'removeClass']('has-value');
    });

})

// Declare routes
createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Core />}>

                {/* Default route*/}
                <Route index element={<Dashboard />} />

                <Route path="dashboard" element={<Dashboard />} />
                <Route path="cards" element={<Cards />} />

                <Route path="charts">
                    <Route path="radial" element={<Charts.Radial />} />
                    <Route path="flot" element={<Charts.Flot />} />
                    <Route path="rickshaw" element={<Charts.Rickshaw />} />
                </Route>

                <Route path="elements">
                    <Route path="bootstrap" element={<Elements.Bootstrapui />} />
                    <Route path="buttons" element={<Elements.Buttons />} />
                    <Route path="colors" element={<Elements.Colors />} />
                    <Route path="grid" element={<Elements.Grid />} />
                    <Route path="gridmasonry" element={<Elements.GridMasonry />} />
                    <Route path="icons" element={<Elements.Icons />} />
                    <Route path="lists" element={<Elements.Lists />} />
                    <Route path="nestable" element={<Elements.Nestable />} />
                    <Route path="spinners" element={<Elements.Spinners />} />
                    <Route path="sweetalert" element={<Elements.Sweetalert />} />
                    <Route path="typography" element={<Elements.Typography />} />
                    <Route path="utilities" element={<Elements.Utilities />} />
                    <Route path="whiteframes" element={<Elements.Whiteframes />} />
                </Route>

                <Route path="tables">
                    <Route path="tableclassic" element={<Tables.TablesClassic />} />
                    <Route path="datatable" element={<Tables.Datatable />} />
                    <Route path="bootgrid" element={<Tables.Bootgrid />} />
                </Route>

                <Route path="forms">
                    <Route path="dropzone" element={<Forms.Dropzone />} />
                    <Route path="editor" element={<Forms.Editor />} />
                    <Route path="advanced" element={<Forms.FormsAdvanced />} />
                    <Route path="classic" element={<Forms.FormsClassic />} />
                    <Route path="material" element={<Forms.Material />} />
                    <Route path="validation" element={<Forms.Validation />} />
                    <Route path="wizard" element={<Forms.Wizard />} />
                    <Route path="xeditable" element={<Forms.XEditable />} />
                </Route>

                <Route path="layouts">
                    <Route path="boxed" element={<Layouts.LayoutsBoxed />} />
                    <Route path="columns" element={<Layouts.LayoutsColumns />} />
                    <Route path="containers" element={<Layouts.LayoutsContainers />} />
                    <Route path="overlap" element={<Layouts.LayoutsOverlap />} />
                    <Route path="tabs" element={<Layouts.LayoutsTabs />} />
                </Route>

                <Route path="maps">
                    <Route path="google" element={<Maps.GoogleMap />} />
                    <Route path="googlefull" element={<Maps.GoogleMapFull />} />
                    <Route path="vector" element={<Maps.VectorMap />} />
                    <Route path="datamaps" element={<Maps.Datamaps />} />
                </Route>

                <Route path="pages">
                    <Route path="blog" element={<Pages.Blog />} />
                    <Route path="blogarticle" element={<Pages.BlogArticle />} />
                    <Route path="contacts" element={<Pages.Contacts />} />
                    <Route path="faq" element={<Pages.Faq />} />
                    <Route path="gallery" element={<Pages.Gallery />} />
                    <Route path="invoice" element={<Pages.Invoice />} />
                    <Route path="messages" element={<Pages.Messages />} />
                    <Route path="pricing" element={<Pages.Pricing />} />
                    <Route path="profile" element={<Pages.Profile />} />
                    <Route path="projects" element={<Pages.Projects />} />
                    <Route path="search" element={<Pages.Search />} />
                    <Route path="timeline" element={<Pages.Timeline />} />
                    <Route path="wall" element={<Pages.Wall />} />
                </Route>

                {/* Not found handler */}
                {/*<Route path="*" element={<NotFound />} />*/}

            </Route>

            {/* User Pages */}
            <Route element={<User.Layout />}>
                <Route path="login" element={<User.Login />} />
                <Route path="signup" element={<User.Signup />} />
                <Route path="recover" element={<User.Recover />} />
                <Route path="lock" element={<User.Lock />} />
            </Route>

        </Routes>
    </BrowserRouter>
);
