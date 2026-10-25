import $ from 'jquery';
import screenfull from 'screenfull';

function initScreenfull() {

    $(document).on('click', '[data-toggle-fullscreen]', (e) => {
        e.preventDefault();

        if (screenfull.isEnabled) {

            screenfull.toggle();

        } else {
            // Fullscreen not enabled ;
        }

    });
}

export default initScreenfull;