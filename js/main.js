randTrue=false;

$(document).ready(function () {
   gridSize = 16;
   drawBoard(gridSize);
    etch();
   

    /* $('#board div').on('mouseenter', function() {
        $(this).addClass('hovered');
    }); 
    
    $('#board div').on('mouseout', function() {
        $(this).removeClass('hovered');
    });  */
});

function clearBoard() {
    var gridSize = prompt('I have cleared the grid, what size do you want your new one.');
    $('.unit').removeClass('hovered');
    $('#board').empty();
    randTrue=false;
    drawBoard(gridSize);
    etch();
}

function drawBoard(gridSize) {
     $('#board').empty();
    var horiSize = Math.floor(960/gridSize);
    var vertSize =(960/gridSize);
    var divHeight = gridSize * vertSize;
    var divWidth = gridSize * horiSize;
    $('#board').css('height', divHeight);
    $('#board').css('width', divWidth);
    for (var i=0; i<gridSize; i++) {
        for (var x=0; x<gridSize; x++) {
            var unit = $("<div class='unit' style = 'height: " + vertSize + "px; width: " + horiSize + "px;' ></div>");
            unit.appendTo('#board');
        }
    }    
}

function etch() {
    console.log(randTrue);
    $('#board div').on('mouseenter', function() {
        $(this).addClass('hovered')
        if (randTrue === true) {
            changeColour();
            $(this).css("background-color",colour);
        } else {
            $(this).css("background-color",'#ffff00'); 
        }
    });
}

function changeColour() {
    colour = randomColour();
    randTrue = true;
    return randTrue;
}

function randomColour() {
    var hexColor = [];
    hexColor[0] = "#";
    
    for (var i=1; i<7; i++) {
        var x = Math.floor((Math.random()*16));
        
        if (x>-10 && x <=15) {
            switch(x)
            {
                case 10: x="a"
                break;
                case 11: x="b"
                break;
                case 12: x="c"
                break;
                case 13: x="d"
                break;
                case 14: x="e"
                break;
                case 15: x="f"
                break;
            }
        }
        hexColor[i] = x;
    }
    var cString = hexColor.join("");
    return cString
}