// document ready means that this script will wait 
// for the page to get loaded before running
$(document).ready(function() {

  // user clicks button with cursor
  $("#user-submit").click(function() {
    ajaxCall();
  });

  // user hits enter while on the input field
  $('#text-field').keypress(function(e){
    if(e.which == 13){
      e.preventDefault();
      e.stopPropagation();
      ajaxCall();
    }
  });

  function ajaxCall() {
    
    // your code will go here

    var input = $("#text-field").val();
    $.ajax({
      //use the data key below to accomplish the immediate below
      //"url":  "/widget?search_keyword=" + input,
      "url":  "/widget",
      "data": {search_keyword: input},
      "method": "GET"
    }).done(function(video){
        $("#search-results").html(video);
    });

  }

});
