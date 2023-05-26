$(document).ready(function() {
  // Load Google Sheets data
  axios.get('https://sheets.googleapis.com/v4/spreadsheets/1BPHvdHwShwHrS8SBfg5rAJIMGShNWy4V27NlD1D0jWA/values/Sheet1?key=API_KEY')
    .then(function(response) {
      var entries = response.data.values;
      var dashboardContent = '';

      // Iterate over each row in the spreadsheet
      for (var i = 0; i < entries.length; i++) {
        var row = entries[i];
        var column1 = row[0];
        var column2 = row[1];
        // Add more columns as needed

        // Generate HTML for the row
        dashboardContent += '<div class="row">';
        dashboardContent += '<div class="col-md-6">' + column1 + '</div>';
        dashboardContent += '<div class="col-md-6">' + column2 + '</div>';
        dashboardContent += '</div>';
      }

      // Append the generated content to the dashboard container
      $('#reporting-dashboard').html(dashboardContent);
    })
    .catch(function(error) {
      console.log(error);
    });
});
