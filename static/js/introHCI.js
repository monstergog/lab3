'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$(".project").click(projectClick);  //Calls projectClick to output text into debugger
	//$(".project").append("<h1>jQuery<h1>");  //appends "jQuery" statement to each .project
	//$(".project").hide(); //hides .project
	
	//$("#testjs").click(buttonChange);
	
	$("#testjs").click(function(e) {
		$(".jumbotron h1").text("Javascript has taken control");
		//$(".jumbotron p").addClass("active");
		$(".jumbotron p").toggleClass("active");
		$("#testjs").text("Please wait...");
	});
}

function projectClick(e) {
	console.log("project clicked");
	e.preventDefault();
	//$(this).css("background-color", "green");
	
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	   $(".project-description").fadeOut();
	}
}

/*function buttonChange(e) {
	var containingProject = $(this).closest("#testjs");
	containingProject.html("<div class='project-description'><p>Stop clicking me<p></div>");
	
}*/