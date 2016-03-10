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




// $('#road-type-wrapper').on('click', function() {
//   if ($('.delivery-weight-dropdown').hasClass('open')) {
//     $('.delivery-weight-dropdown').removeClass('open');
//     $('#delivery-weight-value').parsley().validate();
//   }
//   if ($('.road-type-dropdown').hasClass('open')) {
//     $('.road-type-dropdown').removeClass('open');
//     $('#road-type-value').parsley().validate();
//   } else {
//     $('.road-type-dropdown').addClass('open');
//   }
// });
//
// $('.road-type-dropdown-option').on('click', function() {
//   if($(this).hasClass('checked')) {
//     $(this).find('.form-checkbox').attr('src', '../images/host/checkbox-unchecked.png');
//     $(this).removeClass('checked');
//   } else {
//     $(this).find('.form-checkbox').attr('src', '../images/host/checkbox-checked.png');
//     $(this).addClass('checked');
//   }
//   populateDropDownValue();
// });
//
// $('.road-type-dropdown-other').on('click', function() {
//   if($(this).hasClass('selected')) {
//     $(this).find('.form-checkbox').attr('src', '../images/host/checkbox-unchecked.png');
//     $('.road-type-other-input').hide();
//     $('.road-type-other-input').val('');
//     $(this).removeClass('selected');
//   } else {
//     $(this).find('.form-checkbox').attr('src', '../images/host/checkbox-checked.png');
//     $('.road-type-other-input').show();
//     $(this).addClass('selected');
//   }
//   populateDropDownValue();
// });
//
// $('.host-apply').on('click', function() {
//   console.log('outside');
// });
//
// $('.host-apply').unbind();
//
// $('.road-type-other-input').on('input', function() {
//   populateDropDownValue();
// });
//
// var populateDropDownValue = function() {
//   var values = $(".checked");
//
//     if($('.road-type-other-input').val() === '' && values.length === 0) {
//       $('#road-type-value').val('');
//       return;
//     }
//
//     var string = "";
//     for (var i = 0; i < values.length; i++) {
//       string = string + "" + values[i].textContent + ", ";
//     }
//
//     if($('.road-type-other-input').val().length > 0) {
//       string = string + $('.road-type-other-input').val();
//     } else {
//       string = string.substring(0, string.length - 2);
//     }
//     $('#road-type-value').val(string).parsley().validate();
// }
