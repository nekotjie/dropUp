(function($) {

    $.fn.dropUp = function( options ) {

        // Establish our default settings
        var settings = $.extend({
            text: 'Please choose an option',
            arrow: 'img/arrow.png',
        }, options);

        return this.each( function() {

            if ( settings.text ) {
                $(this).find('div>span').text(settings.text);
            }

            if (settings.arrow) {
                $(this).find('div>img').attr('src', settings.arrow);
            }

             $(this).on('click', function() {
                 console.log('click ', $(this).find('ul'));
                 $(this).find('ul').toggle();

                 var drop = $(this);

                 drop.find('li').on('click', function() {
                     event.stopPropagation();   //avoid firing the toggle() click
                     drop.find('div>span').text($(this).text());     //set dropdown text with list item text
                     drop.find('li').unbind();  //remove click handlers otherwise it adds one every time
                     drop.find('ul').hide();
                 });
             })
        });
    }
}(jQuery));
