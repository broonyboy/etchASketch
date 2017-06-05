$(document).ready(function () {
   for (var i=0; i<16 ; i++) {
       for (var x=0; x<16 ; x++) {
           var unit = $("<div class='unit'></div>");
           unit.appendTo('#board');
       }
   }  

    $('#board div').on('mouseenter', function() {
        $(this).addClass('hovered');
    }); 
    
  /*   $('#board div').on('mouseout', function() {
        $(this).removeClass('hovered');
    });  */
});