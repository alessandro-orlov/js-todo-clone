$(document).ready(
  function() {


    // Al click prendo il valore del input .task e lo aggiungo alla lista
    $('.add-task-btn-js').click(function(){

      var taskValue = $('input.task').val();

      $('.lista-task').append('<li>' + taskValue + '<span class="delete-task-element"> <i class="fas fa-times"></i> </span></li>');

      // resetto il valore iniziale (vuoto) dell'input
      taskValue = $('input.task').val('');
    });

    // Cancello l'elemento dalla lista
    $(document).on('click', '.delete-task-element', function() {
      $(this).parent().remove();
    });

  }); // End document .ready
