$(function()
{
    // draggable
    $("#n_o").draggable();

    
    // accordion
    $("#my_accordion").accordion({
        collapsible: true
    });
    $("#my_accordion2").accordion({
        collapsible: true
    })
    $("#my_accordion3").accordion({
        collapsible: true
    })

    // form_text_auto_show_autocomplete
    var for_tin_text = 
    ["HSC","HHC","JS","JQ","CSS","HTML"];
    $("#n_tags").autocomplete({
        source: for_tin_text
    });

    // Droppable
    $( "#number_t" ).draggable();
    $( "#number_tt" ).droppable({
    drop: function( event, ui ) {
    $( this )
    .addClass( "ui-state-highlight" )
    .find( "#number_tt" )
    .html( "Dropped!" );
    }
    });


    // Sortable
    $("#for_sortable").sortable();



    // datepicker
    $("#for_datepicker").datepicker();



    // Tabs
    $("#for_tabs").tabs();




    // Tooltips
    $(document).tooltip();




});



// Add Class

$( function() {
    $( "#button" ).on( "click", function() {
        $( "#effect" ).addClass( "newClass", 1000, callback );
        });
    
        function callback() {
        setTimeout(function() {
            $( "#effect" ).removeClass( "newClass" );
        }, 1500 );
    }
});



// Color Animation
$( function() {
var state = true;
$( "#for_button" ).on( "click", function() {
    if ( state ) {
    $( "#for_effect" ).animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 500
    }, 1000 );
    } else {
    $( "#for_effect" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 240
    }, 1000 );
    }
    state = !state;
});
} );




    // hide
    $( document).ready(function() 
    {
    // run the currently selected effect
    function runEffect() {
        // get effect type from
        var selectedEffect = $( "#for_effectTypes" ).val();
    
        // Most effect types need no options passed by default
        var options = {};
        // some effects have required parameters
        if ( selectedEffect === "scale" ) {
            options = { percent: 50 };
        } else if ( selectedEffect === "size" ) {
            options = { to: { width: 200, height: 60 } };
        }
    
        // Run the effect
        $( "#for_eeffect" ).hide( selectedEffect, options, 1000, callback );
        };
    
        // Callback function to bring a hidden box back
        function callback() {
        setTimeout(function() {
            $( "#for_eeffect" ).removeAttr( "style" ).hide().fadeIn();
        }, 1000 );
        };
    
        // Set effect from select menu value
        $( "#name_button" ).on( "click", function() {
        runEffect();
        });




// Remove Class
$( "#just_button" ).on( "click", function() {
$( "#just_effect" ).removeClass( "newClass", 1000, callback );
});

function callback() {
setTimeout(function() {
    $( "#just_effect" ).addClass( "heee" );
}, 1500 );
}




// Resizable

$( "#for_resizable" ).resizable();








// selectable
$( "#for_selectable" ).selectable();



// Dialog
$( "#bol_dialog" ).dialog();





// loding
var progressbar = $( "#for_progressbar" ),
progressLabel = $( ".progress-label" );

progressbar.progressbar({
value: false,
change: function() {
progressLabel.text( progressbar.progressbar( "value" ) + "%" );
},
complete: function() {
progressLabel.text( "Complete!" );
}
});

function progress() {
var val = progressbar.progressbar( "value" ) || 0;

progressbar.progressbar( "value", val + 2 );

if ( val < 99 ) {
setTimeout( progress, 80 );
}
}

setTimeout( progress, 2000 );





});