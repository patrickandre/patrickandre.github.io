  $.ajax({
      url: "https://reqres.in/api/users?page=2",
      type: "GET",
    })
    .done(function(data) {
      console.log("SUCESSS!!!!!!!!!")
      $.each(data, function(key, value) {
        $('#container').append(`<p><strong>${key}</strong>: ${value}</p>`);
      });
    })
    .fail(function(xhr, status, errorThrown) {
      console.log("FAIL!!!!!!!!!, Sorry, there was a problem!")
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
    })
    .always(function(xhr, status) {
      console.log("I DON'T GIVE SHHHHHHHHIIIIIEEE");
      console.log("The request is complete!");
    });