// Sima legördülés a főoldalon
function GoDown(id) {
	var downId = document.getElementById(id);
	downId.scrollIntoView({behavior: "smooth"});
}


// Szolgáltatások megnyitása
var lastService = 'children-riding';

function openText(activeService) {
	if(activeService != lastService) {
		document.getElementById(activeService).style.display="flex";
		document.getElementById(lastService).style.display="none";
		whichId(activeService, lastService);
		lastService = activeService;
	}
}

function whichId(a, b) {
	if(a == 'children-riding') {
		document.getElementById('children-riding-title').style.background = "#e4e4e4";

		if(b == 'horse-riding') {
			document.getElementById('horse-riding-title').style.background = "transparent";
		}
		else if(b == 'stable') {
			document.getElementById('stable-title').style.background = "transparent";
		}
		else if(b == 'horse-police') {
			document.getElementById('horse-police-title').style.background = "transparent";
		}
	}
	if(a == 'horse-riding') {
		document.getElementById('horse-riding-title').style.background = "#e4e4e4";

		if(b == 'children-riding') {
			document.getElementById('children-riding-title').style.background = "transparent";
		}
		else if(b == 'stable') {
			document.getElementById('stable-title').style.background = "transparent";
		}
		else if(b == 'horse-police') {
			document.getElementById('horse-police-title').style.background = "transparent";
		}
	}
	if(a == 'stable') {
		document.getElementById('stable-title').style.background = "#e4e4e4";

		if(b == 'horse-riding') {
			document.getElementById('horse-riding-title').style.background = "transparent";
		}
		else if(b == 'children-riding') {
			document.getElementById('children-riding-title').style.background = "transparent";
		}
		else if(b == 'horse-police') {
			document.getElementById('horse-police-title').style.background = "transparent";
		}
	}
	if(a == 'horse-police') {
		document.getElementById('horse-police-title').style.background = "#e4e4e4";

		if(b == 'horse-riding') {
			document.getElementById('horse-riding-title').style.background = "transparent";
		}
		else if(b == 'children-riding') {
			document.getElementById('children-riding-title').style.background = "transparent";
		}
		else if(b == 'stable') {
			document.getElementById('stable-title').style.background = "transparent";
		}
	}
}