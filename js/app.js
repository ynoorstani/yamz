$( document ).ready(function() {
	var indexWayPoint = new Waypoint({
		element: $("#index-header"),
		handler: function() {
			$("#nav-button-index").css("color", "#969696")
			$("#nav-button-about").css("color", "black")
			$("#nav-button-projects").css("color", "black")
			$("#nav-button-contact").css("color", "black")
			$('#index-header .header-title').css("display", "inline").addClass("fadeInDown")
		}
	})
    var aboutWayPoint = new Waypoint({
		element: $("#about-header"),
		handler: function(direction) {
			if (direction === "down") {
				$("#nav-button-about").css("color", "#969696")
				$("#nav-button-index").css("color", "black")
				$("#nav-button-projects").css("color", "black")
				$("#nav-button-contact").css("color", "black")
				$('#about-header .header-title').css("display", "inline").addClass("fadeInDown")
			}
			else {
				$("#nav-button-about").css("color", "black")
				$("#nav-button-index").css("color", "#969696")
				$("#nav-button-projects").css("color", "black")
				$("#nav-button-contact").css("color", "black")	

			}
		}
	})
	var projectWayPoint = new Waypoint({
		element: $("#projects-header"),
		handler: function(direction) {
			if(direction === "down") {
				$("#nav-button-projects").css("color", "#969696")
				$("#nav-button-about").css("color", "black")
				$("#nav-button-index").css("color", "black")
				$("#nav-button-contact").css("color", "black")
				$('#projects-header .header-title').css("display", "inline").addClass("fadeInDown")		
			} 
			else {
				$("#nav-button-projects").css("color", "black")
				$("#nav-button-about").css("color", "#969696")
				$("#nav-button-index").css("color", "black")
				$("#nav-button-contact").css("color", "black")		
			}
		}
	})
	var contactWayPoint = new Waypoint({
		element: $("#contact-header"),
		handler: function(direction) {
			if(direction === "down") {
				$("#nav-button-contact").css("color", "#969696")
				$("#nav-button-about").css("color", "black")
				$("#nav-button-projects").css("color", "black")
				$("#nav-button-index").css("color", "black")
				$('#contact-header .header-title').css("display", "inline").addClass("fadeInDown")	
			}
			else {
				$("#nav-button-contact").css("color", "black")
				$("#nav-button-about").css("color", "black")
				$("#nav-button-projects").css("color", "#969696")
				$("#nav-button-index").css("color", "black")	
			}	
		},
		offset: 200 
	})
});