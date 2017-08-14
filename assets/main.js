$(function() {
  var $badgesDiv = $('#badges');
  $.ajax( {
    url: 'https://www.codeschool.com/users/jthoward09.json',
    dataType: 'jsonp',
    success: function(response) {
      var badgeHTML = '';
      // Loop through each object in the course completed array
      $.each(response.courses.completed, function(index, item) {
            badgeHTML += "<div class='course'>" +
                            "<h3>" + item.title + "</h3>" +
                            "<img src='" + item.badge + "' alt='"  + item.title + "'>" +
                            "<a target='_blank' class='btn btn-primary' href='" + item.url + "'>See Courses</a>" +
                          "</div>"

      });
      $("#badges").append(badgeHTML);
    },
    error: function(request, errorType, errorMessage) {
      alert(errorMessage)
    }
  });

});
