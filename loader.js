const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
let percent = 0;

function progressLoader() {
	percent += 25;

	if (percent >= 100) {
		percent = 100;
		progress.textContent = `Loading... ${percent}%`;
		progressBar.style.width = `${percent}%`;
		setTimeout(() => { window.location.href = "https://www.example.com"; }, 500); // Redirect to a different URL upon completing 100%
		return;
	}

	progressBar.style.width = `${percent}%`;
	progress.textContent = `Loading... ${percent}%`;

	setTimeout(progressLoader, 1000); // Call the function again every 1 second until it reaches 100%
}

setTimeout(progressLoader, 1000); // Call the function after 1 second
