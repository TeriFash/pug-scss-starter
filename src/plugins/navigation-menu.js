import $ from 'jquery';


export let menuAction = $(function() {

    let watching = $('#offcanvas-nav-primary');
    let trigger = $('#hamburger');

    if (watching.length && trigger.length) {

        watching.on({
            beforeshow() {
                trigger.toggleClass('is-closed is-open');
            },
            beforehide() {
                trigger.toggleClass('is-open is-closed');
            }
        });
    } else {
        console.warn(watching, trigger);
    }
});


export default { menuAction };
