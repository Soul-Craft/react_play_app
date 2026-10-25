function runSweetAlert() {

    $('#swal-demo1').on('click', function(e) {
        e.preventDefault();
        swal('Here\'s a message!');
    });

    $('#swal-demo2').on('click', function(e) {
        e.preventDefault();
        swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
    });

    $('#swal-demo3').on('click', function(e) {
        e.preventDefault();
        swal('Good job!', 'You clicked the button!', 'success');
    });

    $('#swal-demo4').on('click', function(e) {
        e.preventDefault();
        // SweetAlert 2 returns a promise instead of taking a callback
        swal({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                icon: 'warning',
                buttons: [true, 'Yes, delete it!'],
                dangerMode: true
            })
            .then(function(isConfirm) {
                if (isConfirm)
                    swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
            });

    });

    $('#swal-demo5').on('click', function(e) {
        e.preventDefault();
        swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            icon: 'warning',
            buttons: ['No, cancel plx!', 'Yes, delete it!'],
            dangerMode: true,
            closeOnClickOutside: false
        }).then(function(isConfirm) {
            if (isConfirm) {
                swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
            } else {
                swal('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });

    });
}

export default runSweetAlert;
