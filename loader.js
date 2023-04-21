const loader = document.querySelector('.loader');
const progress = document.querySelector('.progress');
let percent = 0;

function progressLoader() {
	percent += 25;
	
	if (percent > 100) {
		percent = 100;
		window.location.href = "https://www.example.com"; // Redirect to a different URL upon completing 100%
	}
	
	loader.style.borderTopColor = (percent === 100) ? "#00ff00" : "#3498db"; // Change the color of the border when it reaches 100%
	
	progress.textContent = `Loading... ${percent}%`;
	
	if (percent < 100) {
		setTimeout(progressLoader, 1000); // Call the function again every 1 second until it reaches 100%
	}
}

setTimeout(progressLoader, 1000); // Call the function after 1 second
