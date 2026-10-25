// The 2016 jQuery plugins read jQuery from the global scope (was webpack's ProvidePlugin),
// so this module must be imported before any of them.
import $ from 'jquery';

window.$ = window.jQuery = $;

export default $;
