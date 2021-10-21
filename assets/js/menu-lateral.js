document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',

        //themeSystem: 'bootstrap',

        // Posiciona los botones del título, mes, semana y día.
        headerToolbar: {
            left: 'title today',
            center: '',
            right: 'dayGridMonth,timeGridDay prev,next',// se elimina el botón de la opción semana "timeGridWeek"   
        },

        customButtons: {
            myCustomButton: {
                text: 'custom!',
                color: 'red',
                click: function() {
                    alert('clicked the custom button!');
                }
            }
        },

        // Propiedad para cambio de lenguaje
        locale: 'es',

        // Evento de mensaje de alerta 
        dateClick: function (event)
        {
            //alert(event);
        },

        selectable: true,
        dateClick: function(info) {
            //alert('Clicked on: ' + info.dateStr);
            //alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            //alert('Current view: ' + info.view.type);
            // change the day's background color just for fun
            info.dayEl.style.backgroundColor = 'var(--secund-color)';
        },

        editable: true,
        events: 
        [{
            id: '1',
            title: 'cita agendada',
            start: '2021-10-13T10:00:00',
            //end: '2021-10-10T16:00:00',
            especialidad: 'Terapia physicologica',
            tipo_cita: 'Presencial',
            allDay: true,
            //startTime: '11:00:00',
            //endTime: '11:30:00',
            color: 'orange',
            //display: 'background'
        }],

        // Modal gestionar cita
        dateClick: function(info) {
            $('#gestionar_cita').modal('show');
        },

        // Modal ver cita
        eventClick: function(info) {
            console.log(info.event);
            $('#ver_cita').modal();
        },
        
        select: function(info) {
            //alert('selected ' + info.startStr + ' to ' + info.endStr);
        },
    });





    // Función para ocultar modal gestionar cita y mostrar el modal de agendar cita
    $("#select_agendar").on( "click", function() {

        $('#gestionar_cita').modal('hide');
        $('#agendar_cita').modal('show');
    });

    // Función para ocultar modal agendar cita o ver cita y mostrar el modal cita eliminada
    $(".select_cancel").on( "click", function() {

        $('#agendar_cita').modal('hide');
        $('#ver_cita').modal('hide');
        $('#eliminar_cita').modal('show');
    });


    $("#select_edit").on( "click", function() {

        $('#ver_cita').modal('hide');
        $('#agendar_cita').modal('show');
    });

    calendar.render();    
});


$( function() {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  
  $( "#tags" ).autocomplete({
    source: availableTags
  });
} );
