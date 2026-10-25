function runBootstrap() {

    // POPOVER
    // -----------------------------------

    $('[data-bs-toggle="popover"]').popover();

    // TOOLTIP
    // -----------------------------------

    $('[data-bs-toggle="tooltip"]').tooltip({
        container: 'body'
    });

}

export default runBootstrap;