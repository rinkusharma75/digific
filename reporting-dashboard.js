$(document).ready(function() {
  // Load Google Sheets data
  $.getJSON('https://spreadsheets.google.com/feeds/list/2PACX-1vQ-Dx0aj1hLBnKC5KLBjUqPQo8VsqXhDeR-eExgNY2qHTrQC1qslWTX0pT0Xm07kCcJikTV1gB2j1n2/1/public/values?alt=json', function(data) {
    var entries = data.feed.entry;
    var dashboardContent = '';

    // Iterate over each row in the spreadsheet
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var column1 = entry.gsx$column1.$t;
      var column2 = entry.gsx$column2.$t;
      // Add more columns as needed

      // Generate HTML for the row
      dashboardContent += '<div class="row">';
      dashboardContent += '<div class="col-md-6">' + column1 + '</div>';
      dashboardContent += '<div class="col-md-6">' + column2 + '</div>';
      dashboardContent += '</div>';
    }

    // Append the generated content to the dashboard container
    $('#reporting-dashboard').html(dashboardContent);
  });
});
