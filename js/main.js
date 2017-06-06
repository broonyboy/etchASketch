$(document).ready(function () {
   gridSize = 16;
   drawBoard(gridSize);
   

    $('#board div').on('mouseenter', function() {
        $(this).addClass('hovered');
    }); 
    
  /*   $('#board div').on('mouseout', function() {
        $(this).removeClass('hovered');
    });  */
});

function clearBoard() {
    var gridSize = prompt('I have cleared the grid, what size do you want your new one.');
    $('.unit').removeClass('hovered');
    $('#board').empty();
    drawBoard(gridSize);
    etch();
}

function drawBoard(gridSize) {
     $('#board').empty();
    var horiSize = Math.floor(600/gridSize);
    var vertSize =(600/gridSize);
    var divHeight = gridSize * vertSize;
    var divWidth = gridSize * horiSize;
    $('#board').css('height', divHeight);
    $('#board').css('width', divWidth);
    console.log(horiSize,vertSize);
    for (var i=0; i<gridSize; i++) {
        for (var x=0; x<gridSize; x++) {
            var unit = $("<div class='unit' style = 'height: " + vertSize + "px; width: " + horiSize + "px;' ></div>");
            unit.appendTo('#board');
        }
    }    
}

function etch() {
    $('#board div').on('mouseenter', function() {
        $(this).addClass('hovered')
    });
}