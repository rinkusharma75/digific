// const progressBar = document.querySelector('.progress-bar');
// const progress = document.querySelector('.progress');
// let percent = 0;

// function progressLoader() {
// 	percent += 25;

// 	if (percent >= 100) {
// 		percent = 100;
// 		progress.textContent = `Loading... ${percent}%`;
// 		progressBar.style.width = `${percent}%`;
// 		setTimeout(() => { window.location.href = "https://www.example.com"; }, 500); // Redirect to a different URL upon completing 100%
// 		return;
// 	}

// 	progressBar.style.width = `${percent}%`;
// 	progress.textContent = `Loading... ${percent}%`;

// 	setTimeout(progressLoader, 1000); // Call the function again every 1 second until it reaches 100%
// }

// setTimeout(progressLoader, 1000); // Call the function after 1 second


const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
let percent = 0;

function progressLoader() {
	percent += 25;

	if (percent >= 3000) {
		percent = 100;
		progress.textContent = `Redirecting you to the offer page...`;
		progressBar.style.width = `${percent}%`;
		progressBar.style.backgroundColor = "#00ff00"; // Change the progress bar color to green at 100%
		setTimeout(() => { window.location.href = "https://www.example.com"; }, 500); // Redirect to a different URL upon completing 100%
		return;
	}

	progressBar.style.width = `${percent}%`;
	progress.textContent = `Stocks Available!`;

	if (percent === 75) {
		progressBar.style.backgroundColor = "#f39c12"; // Change the progress bar color to orange at 75%
		progress.textContent = `Checking if we have enough inventory to support your order.`;
	} else if (percent === 50) {
		progressBar.style.backgroundColor = "#00ff00"; // Change the progress bar color to green for values greater than 75%
		progress.textContent = `Wow! Congrats! You qualify for this offer.`;
	}
	
	else if (percent === 25) {
		progressBar.style.backgroundColor = "#00ff00"; // Change the progress bar color to green for values greater than 75%
		progress.textContent = `Checking if you qualify for this special offer.`;
	}

	setTimeout(progressLoader, 1000); // Call the function again every 1 second until it reaches 100%
}

setTimeout(progressLoader, 1000); // Call the function after 1 second
