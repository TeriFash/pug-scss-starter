import $ from 'jquery';


$(function() {
    let watching = $('#my-menu');
    let trigger = $('#hamburger');
    let isClosed = false;

    if (watching.length && trigger.length) {
        watching.on({
            'beforeshow': function() {
                burgerTime();
            },
            'beforehide': function() {
                burgerTime();
            }
        });

    } else {
        console.warn(watching, trigger);
    }

    let burgerTime = () => {

        if (isClosed === true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }
});