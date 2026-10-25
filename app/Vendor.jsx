
// Vendor styles
// -----------------------

    // Animate.CSS (compat build keeps the unprefixed class names)
    import 'animate.css/animate.compat.css';
    // Bootstrap (plus the Bootstrap 3 classes the theme's markup still uses)
    import 'bootstrap/dist/css/bootstrap.min.css';
    import './components/Bootstrap/Bootstrap3Compat.scss';
    // Ionicons (v2 icon font, kept with the theme's fonts in public/fonts)
    import './vendor/ionicons.css';
    // Bluimp Gallery
    import 'blueimp-gallery/css/blueimp-gallery.css';
    import 'blueimp-gallery/css/blueimp-gallery-indicator.css';
    import 'blueimp-gallery/css/blueimp-gallery-video.css';
    // Datepicker
    import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css';
    // Rickshaw
    import 'rickshaw/rickshaw.css';
    import Rickshaw from 'rickshaw';
    window.Rickshaw = Rickshaw;
    // Select2
    import 'select2/dist/css/select2.css';
    // Clockpicker
    import 'clockpicker/dist/bootstrap-clockpicker.css';
    // Range Slider
    import 'nouislider/dist/nouislider.css';
    // Summernote
    import 'summernote/dist/summernote-bs5.css';
    // Xeditable
    import 'x-editable-bs5/dist/bootstrap5-editable/css/bootstrap-editable.css';
    // Bootgrid
    import 'jquery-bootgrid/dist/jquery.bootgrid.css';
    // Datatables
    import 'datatables.net-bs5/css/dataTables.bootstrap5.css';
    // Loaders.CSS
    import 'loaders.css/loaders.css';
    // Material Floating Button
    import 'ng-material-floating-button/mfb/dist/mfb.css';
    // Material Colors
    import 'material-colors/dist/colors.css';
    // jVector Maps
    import 'jvectormap-next/jquery-jvectormap.css';

// Vendor scripts
// -----------------------

    // jQuery (global access for the plugins below)
    import $ from './vendor/jquery';
    // jQuery Migrate restores the APIs jQuery 4 removed, which the older plugins still call
    // (its console warnings stay on in development, where they point at those calls)
    import 'jquery-migrate';
    $.migrateMute = import.meta.env.PROD;
    // Bootstrap (global access for x-editable)
    import './vendor/bootstrap';
    // Flot charts (source files: the prebuilt dist bundle is not valid as an ES module)
    import 'flot/source/jquery.colorhelpers.js';
    import 'flot/source/jquery.canvaswrapper.js';
    import 'flot/source/jquery.flot.js';
    import 'flot/source/jquery.flot.saturated.js';
    import 'flot/source/jquery.flot.browser.js';
    import 'flot/source/jquery.flot.drawSeries.js';
    import 'flot/source/jquery.flot.uiConstants.js';
    import 'flot/source/jquery.flot.symbol.js';
    import 'flot/source/jquery.flot.categories.js';
    import 'flot/source/jquery.flot.hover.js';
    import 'flot/source/jquery.flot.time.js';
    import 'flot/source/jquery.flot.legend.js';
    import 'flot/source/jquery.flot.resize.js';
    import 'flot/source/jquery.flot.pie.js';
    import 'flot-spline/js/jquery.flot.spline.js';
    import 'jquery.flot.tooltip/js/jquery.flot.tooltip.js';
    // jVector Maps
    import jvectormap from 'jvectormap-next';
    import worldMill from 'jvectormap-content/world-mill';
    import usMill from 'jvectormap-content/us-mill';
    jvectormap($);
    $.fn.vectorMap('addMap', 'world_mill_en', worldMill);
    $.fn.vectorMap('addMap', 'us_mill_en', usMill);
    // Easypie Charts
    import 'easy-pie-chart/dist/jquery.easypiechart.js';
    // Images Loaded
    import imagesLoaded from 'imagesloaded';
    imagesLoaded.makeJQueryPlugin($);
    // Loaders.CSS
    import 'loaders.css/loaders.css.js';
    // Masonry (global access for other scripts)
    import Masonry from 'masonry-layout';
    window.Masonry = Masonry;
    // Sparkline
    import 'jquery-sparkline';
    // Datepicker
    import 'bootstrap-datepicker';
    // jQuery Knob charts
    import 'jquery-knob';
    // jQuery Form Validation
    import 'jquery-validation';
    import 'jquery-validation/dist/additional-methods.js';
    // jQuery Steps
    import 'jquery-steps/build/jquery.steps.js';
    // Select2
    import select2 from 'select2';
    select2(window, $);
    // Clockpicker
    import 'clockpicker/dist/bootstrap-clockpicker.js';
    // Summernote
    import 'summernote/dist/summernote-bs5.js';
    // Momentjs (global access for other scripts)
    import moment from 'moment';
    window.moment = moment;
    // Xeditable
    import 'x-editable-bs5/dist/bootstrap5-editable/js/bootstrap-editable.js';
    // Google Maps (global access for other scripts)
    import GMaps from 'gmaps';
    window.GMaps = GMaps;
    // Bootgrid
    import 'jquery-bootgrid/dist/jquery.bootgrid.js';
    import 'jquery-bootgrid/dist/jquery.bootgrid.fa.js';
    // Datatables (registers $.fn.dataTable on the shared jQuery)
    import 'datatables.net-bs5';
    // Nestable
    import 'nestable2';
    // Sweet Alert (global access for other scripts)
    import swal from 'sweetalert';
    window.swal = swal;
    // jQuery Localize
    import 'jquery-localize';
    // Blueimp Gallery
    import 'blueimp-gallery/js/blueimp-helper.js';
    import 'blueimp-gallery/js/blueimp-gallery.js';
    import 'blueimp-gallery/js/blueimp-gallery-fullscreen.js';
    import 'blueimp-gallery/js/blueimp-gallery-indicator.js';
    import 'blueimp-gallery/js/blueimp-gallery-video.js';
    import 'blueimp-gallery/js/blueimp-gallery-vimeo.js';
    import 'blueimp-gallery/js/blueimp-gallery-youtube.js';
    import 'blueimp-gallery/js/jquery.blueimp-gallery.js';
