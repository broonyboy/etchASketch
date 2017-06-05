$(document).ready(function () {
   for (var i=0; i<16 ; i++) {
       for (var x=0; x<16 ; x++) {
           var unit = $("<div class='unit'></div>");
           unit.appendTo('#wrapper');
       }
   }   
});