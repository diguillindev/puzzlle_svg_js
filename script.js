document.addEventListener('DOMContentLoaded', function () {

//	this image puzzle uses my repository on github
//	if you interested how does it work or want to use it, just visit:
//	https://github.com/Balintgacsf/picture_puzzle

	// all images in one array, the function will choose one of them
	let images = [
		"img/1.webp",
		"img/2.webp",
		"img/3.webp",
		"img/4.webp",
		"img/5.webp",
		"img/6.webp"
	];
  
  // if win
	img_pzl.gameOver = function() {
		// showing the win message, hiding the helper image, and force the overlay to be shown
		document.getElementById("win").style.display = "block";
		document.getElementById("help").style.display = "none";
		document.getElementById("overlay").classList.add("active");
		document.getElementById("menu_opener").classList.add("active");

		// get statics of the play
		let moves = img_pzl.gameOver.results.moves;
		// the time_formatted is an object and it has two values: minutes and the rest of the seconds
		let f_minutes = img_pzl.gameOver.results.time_formatted.minutes;
		let f_seconds = img_pzl.gameOver.results.time_formatted.seconds;
		
		let difficulty = img_pzl.gameOver.results.played_difficulty;
		
		// output the personalized message
		let finalText = "<span>Congratulations</span>! You did it in <span>"+moves+" moves</span> and <span>"+f_minutes+" minute(s)</span> and <span>"+f_seconds+" seconds</span>. The <span>difficulty</span> was <span>"+ difficulty+"</span>.";
		document.getElementById("result").innerHTML = finalText;
	}

	// calling image_puzzle
	img_pzl({
		image: images,
		holder: ".playground"
	});

	// hiding win message and showing the helper image
	document.getElementById("win").style.display = "none";
	document.getElementById("help").style.display = "block";

	// opens the menu and if opened, closes the difficulty and choose overlays
	document.getElementById("menu_opener").addEventListener("click", function() {
		event.currentTarget.classList.toggle("active");
		document.getElementById("overlay").classList.toggle("active");
		document.getElementById("diff_choose").classList.remove("active");
	});

	// if one of the other image button clicked, showing the difficulties
	let diffChoose = document.querySelectorAll(".other_img");
	for(let i = 0; i < diffChoose.length; i++) {
		diffChoose[i].addEventListener("click", showDiffs);
	}

	function showDiffs() {
		document.getElementById("diff_choose").classList.toggle("active");
	}

	// if one of the difficulties has been clicked get it's data-diff and call again the get_img_puzzle with the new value
	let choosenDiff = document.querySelectorAll(".choice");
	for(let i = 0; i < choosenDiff.length; i++) {
		choosenDiff[i].addEventListener("click", getNewImg);
	}

	function getNewImg() {
		let theChoosenOne = event.target.getAttribute("data-diff");
		// closing every menu and overlay in the page
		document.getElementById("win").style.display = "none";
		document.getElementById("help").style.display = "block";
		document.getElementById("overlay").classList.remove("active");
		document.getElementById("diff_choose").classList.remove("active");
		document.getElementById("menu_opener").classList.remove("active");

		// calling the image puzzle
		img_pzl({
			image: images,
			holder: ".playground",
			difficulty: theChoosenOne
		});
    setTimeout(function() {
    // changing the helper image to the actual image
document.querySelector("#help img").setAttribute("src", img_pzl.img);
  }, 300);
	}
  
  setTimeout(function() {
    // changing the helper image to the actual image
document.querySelector("#help img").setAttribute("src", img_pzl.img);
  }, 300);
});