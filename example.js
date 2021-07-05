jQuery(document).on('wbk_on_checkout_button_before_display', function(){    
     jQuery("#wbk-to-checkout").css( 'position', 'relative' );
     jQuery("#wbk-to-checkout").appendTo( jQuery('.wbk-timeslot-list').parent() );      
});
