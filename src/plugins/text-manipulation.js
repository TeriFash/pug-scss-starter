import $ from 'jquery';

// $(function() {
//     $('#slider1').change(function(){
//         $('.my-intro-input').get(0).style.setProperty('--color', $('#slider1').val() + ' ,' + $('#slider1').val() + '%');
//     });
//
//     $('#slider2').change(function(){
//         $('.my-intro-input').get(0).style.setProperty('--l',  $('#slider2').val() + '%');
//     });
//
//     $('#text').on('keyup', function(){
//         var fieldText = $('#text').val();
//         $('h1 span.text').text(fieldText).attr('data-text', fieldText);
//     });
//     $('#text').on('focus', function(){
//         $('h1 span.text').attr('data-text', $('#text').val());
//         $('h1 span.text').text($('#text').val());
//     });
// });

class TypeIt {
    constructor(text, container, speed) {
        this.text = text;
        this.container = container;
        this.speed = speed;
        this.current = 0;
    }

    run() {
        const cont = document.querySelector(this.container);

        cont.append(this.text[this.current]);
        this.current++;

        if (this.current < this.text.length) {
            window.setTimeout( () => {
                this.run();
            }, this.speed);
        }
    }
}

// the code below is just for the demo

// const demoText = new TypeIt('viewer@knave:~$ ', '.text .content', 100);
// demoText.run();

export { TypeIt };