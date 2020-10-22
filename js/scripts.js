

$(document).ready(function() {
  $("form#age").submit(function(event) {
   event.preventDefault();
    const age = parseInt($("#age1").val());

   if (age >= 18) {
     //$('#legal').hide();
     $('#under-18').hide();
      $('#legal').show();
    } else {
      //$('#under-18').hide();
      $('#legal').hide();
      $('#under-18').show();
    }
     
  });
});
