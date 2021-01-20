// 
// For clicking on the doom button
// 
document.querySelector('.doom').addEventListener('click', () => {
  if (document.getElementById("centrebutton").classList.contains('doomClass')) {
  	// CLIKING OFF DOOM
  	document.getElementById("centrebutton").classList.remove('doomClass');
  	document.querySelector('.dc').classList.remove('background-container-doom');
  	document.querySelector('.dc').classList.add('background-container');
  	document.getElementById("centrebutton").innerHTML = "24hr support";



  } else {
  	// CLICKING ON DOOM
	  document.getElementById("centrebutton").classList.remove('websitesClass', 'musicClass', 'resumeClass');
	  document.getElementById("centrebutton").classList.add('doomClass');
	  document.querySelector('.dc').classList.remove('background-container', 'background-container-resume' ,'background-container-music', 'background-container-websites');
	  document.querySelector('.dc').classList.add('background-container-doom');
	  document.getElementById("centrebutton").innerHTML = "";

	  document.getElementById("canvasmen").style.visibility = "hidden";
  }
}); 



// 
// For clicking on the websites button
// 
document.querySelector('.websites').addEventListener('click', () => {
  if (document.getElementById("centrebutton").classList.contains('websitesClass')) {
  	// CLICKING OFF WEBSITES
  	document.getElementById("centrebutton").classList.remove('websitesClass');
  	document.querySelector('.dc').classList.remove('background-container-websites');
  	document.querySelector('.dc').classList.add('background-container');
  	document.getElementById("centrebutton").innerHTML = "24hr support";

  } else {
  	  // CLICKING ON WEBSITES
	  document.getElementById("centrebutton").classList.remove('doomClass', 'musicClass', 'resumeClass');
	  document.getElementById("centrebutton").classList.add('websitesClass');
	  document.querySelector('.dc').classList.remove('background-container', 'background-container-resume' ,'background-container-music', 'background-container-doom');
	  document.querySelector('.dc').classList.add('background-container-websites');
	  document.getElementById("centrebutton").innerHTML = "";

	  document.getElementById("canvasmen").style.visibility = "hidden";
  }
}); 




// 
// For clicking on the resume button
// 
document.querySelector('.resume').addEventListener('click', () => {
  // CLICKING OFF RESUME
  if (document.getElementById("centrebutton").classList.contains('resumeClass')) {
  	document.getElementById("centrebutton").classList.remove('resumeClass');
  	document.querySelector('.dc').classList.remove('background-container-resume');
  	document.querySelector('.dc').classList.add('background-container');
  	document.getElementById("centrebutton").innerHTML = "24hr support";

  } else {
  	  // CLICKING ON RESUME
	  document.getElementById("centrebutton").classList.remove('doomClass', 'musicClass', 'websitesClass');
	  document.getElementById("centrebutton").classList.add('resumeClass');
	  document.querySelector('.dc').classList.remove('background-container', 'background-container-websites' ,'background-container-music', 'background-container-doom');
	  document.querySelector('.dc').classList.add('background-container-resume');
	  document.getElementById("centrebutton").innerHTML = "";

	  document.getElementById("canvasmen").style.visibility = "hidden";
  }
}); 





// 
// For clicking on the music button
// 
document.querySelector('.music').addEventListener('click', () => {
	// CLICKING OFF DOOM
  if (document.getElementById("centrebutton").classList.contains('musicClass')) {
  	document.getElementById("centrebutton").classList.remove('musicClass');
  	document.querySelector('.dc').classList.remove('background-container-music');
  	document.querySelector('.dc').classList.add('background-container');
  	document.getElementById("centrebutton").innerHTML = "24hr support";

  } else {
  	  // CLICKING ON DOOM
	  document.getElementById("centrebutton").classList.remove('doomClass', 'resumeClass', 'websitesClass');
	  document.getElementById("centrebutton").classList.add('musicClass');
	  document.querySelector('.dc').classList.remove('background-container', 'background-container-websites' ,'background-container-resume', 'background-container-doom');
	  document.querySelector('.dc').classList.add('background-container-music');
	  document.getElementById("centrebutton").innerHTML = "";

	  document.getElementById("canvasmen").style.visibility = "hidden";
  }
}); 





// 
// For clicking on the 24hr support button
// 
document.getElementById("centrebutton").addEventListener('click', () => {
  if (document.getElementById("canvasmen").style.visibility === "visible") {
  	document.getElementById("canvasmen").style.visibility = "hidden";
  	document.getElementById("centrebutton").innerHTML = "24hr support";

  } else if (document.getElementById("centrebutton").classList.contains('doomClass')) {
  	window.open("https://playclassic.games/games/first-person-shooter-dos-games-online/play-doom-online/play/");
  } else if (document.getElementById("centrebutton").classList.contains('resumeClass')) {
  	window.open("resume.html");
  } else if (document.getElementById("centrebutton").classList.contains('websitesClass')) {
  	window.open("websites.html");
  } else if (document.getElementById("centrebutton").classList.contains('musicClass')) {
  	window.open("music.html");


  }	else {
  		document.getElementById("canvasmen").style.visibility = "visible";
  		document.getElementById("centrebutton").innerHTML = "Issue Resolved";
  	}
});



