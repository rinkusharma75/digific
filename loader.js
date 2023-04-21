var progressBar = document.getElementById("progress");
var statusText = document.getElementById("status");

var progress = 0;
var interval = setInterval(function() {
  if (progress >= 100) {
    clearInterval(interval);
    window.location.href = "http://example.com";
  } else if (progress >= 75) {
    statusText.innerHTML = "Almost there... " + progress + "%";
    progress += 25;
    progressBar.style.width = progress + "%";
  } else if (progress >= 50) {
    statusText.innerHTML = "Halfway there... " + progress + "%";
    progress += 25;
    progressBar.style.width = progress + "%";
  } else if (progress >= 25) {
    statusText.innerHTML = "A quarter done... " + progress + "%";
    progress += 25;
    progressBar.style.width = progress + "%";
  } else {
    statusText.innerHTML = "Loading... " + progress + "%";
    progress += 25;
    progressBar.style.width = progress + "%";
  }
}, 1000);
