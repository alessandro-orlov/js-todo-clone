$(document).ready(
  function() {


    // Al click prendo il valore del input .task e lo aggiungo alla lista
    $('.add-task-btn-js').click(function() {
      // Prendo il vaolre dell'input
      var taskValue = $('input.task').val();
      // Clone tamplate dal DOM html
      var cloneLi = $('.tamplate > li').clone();
      // Aggiungo al Tamplate il valore del input
      cloneLi.prepend(taskValue);

      // Inserisco l'elemento nella lista
      $('.lista-task').append(cloneLi);

      // Resetto il valore iniziale (vuoto) dell'input
      taskValue = $('input.task').val('');
    });

    // Premendo il tasto invio inserisco il valore dell'input alla lista
    $('.task').keypress(function(event) {
      if(event.which === 13) {
      // Prendo il vaolre dell'input
      var taskValue = $('input.task').val();
      // Clone tamplate dal DOM html
      var cloneLi = $('.tamplate > li').clone();
      // Aggiungo al Tamplate il valore del input
      cloneLi.prepend(taskValue);

      // Inserisco l'elemento nella lista
      $('.lista-task').append(cloneLi);

      // Resetto il valore iniziale (vuoto) dell'input
      taskValue = $('input.task').val('');
      }
    });

    // Cancello l'elemento dalla lista
    $(document).on('click', '.delete-task-element', function() {
      $(this).parent().remove();
    });

  }); // End document .ready
