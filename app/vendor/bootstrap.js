// x-editable reads the global `bootstrap` (bootstrap.Popover); Bootstrap also registers its
// jQuery interface ($.fn.popover, $.fn.tooltip, ...) on import because window.jQuery is set.
import * as bootstrap from 'bootstrap';

window.bootstrap = bootstrap;

export default bootstrap;
