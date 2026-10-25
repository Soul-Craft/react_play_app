import Coloris from '@melloware/coloris';
import '@melloware/coloris/dist/coloris.css';

function formAdvanced() {

    if ( !$.fn.select2 ||
         !$.fn.datepicker ||
         !$.fn.clockpicker ) return;

    // Select 2

    $('#select2-1').select2();
    $('#select2-2').select2();
    $('#select2-3').select2();
    $('#select2-4').select2({
        placeholder: 'Select a state',
        allowClear: true
    });

    // Datepicker

    $('#example-datepicker-1').datepicker();
    $('#example-datepicker-2').datepicker();
    $('#example-datepicker-3').datepicker();
    $('#example-datepicker-4')
        .datepicker({
            container:'#example-datepicker-container-4'
        });
    $('#example-datepicker-5')
        .datepicker({
            container:'#example-datepicker-container-5'
        });

    // Clockpicker
    var cpInput = $('.clockpicker').clockpicker();
    // auto close picker on scroll
    $('main').scroll(function() {
        cpInput.clockpicker('hide');
    });

    // Colorpicker (Coloris; bootstrap-colorpicker is unmaintained and breaks on Bootstrap 5.3)

    Coloris.init();
    Coloris({
        el: '#cp-demo-basic, #cp-demo-hex, #cp-demo-component input, #cp-demo-bootstrap',
        alpha: false
    });
    Coloris.setInstance('#cp-demo-hex', { format: 'hex' });
    Coloris.setInstance('#cp-demo-bootstrap', {
        format: 'hex',
        swatches: ['#777777', '#337ab7', '#5cb85c', '#5bc0de', '#f0ad4e', '#d9534f']
    });

}

export default formAdvanced;
