function rimuoviCasaProduttrice() {
		var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
	    	if (this.readyState === 4)
	    		location.href='/';
	    }
		xhttp.open('delete', '/caseprod/delid/' + document.getElementById('id').value, true);
//		xhttp.setRequestHeader("Content-Type", "application/json");  
	    xhttp.send();
	}
	
	var aggcp = document.getElementById("remcaseprod")
	if(aggcp){
	aggcp.addEventListener("submit", function(event){
		  event.preventDefault();
		  rimuoviCasaProduttrice();
		},false);
	}

function rimuoviFilm() {
		var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
	    	if (this.readyState === 4)
	    		location.href='/';
	    }
		xhttp.open('delete', '/film/delid/' + document.getElementById('id').value, true);
//		xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.send();
	}
	
	var aggfi = document.getElementById("remfilm")
	if(aggfi){
	aggfi.addEventListener("submit", function(event){
		  event.preventDefault();
		  rimuoviFilm();
		},false);
	}
	
function rimuoviAttore() {
		var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
	    	if (this.readyState === 4)
	    		location.href='/';
	    }
		xhttp.open('delete', '/attori/delid/' + document.getElementById('id').value, true);
//		xhttp.setRequestHeader("Content-Type", "application/json");  
		xhttp.send();
	}
	
	var aggat = document.getElementById("remattore")
	if(aggat){
	aggat.addEventListener("submit", function(event){
		  event.preventDefault();
		  rimuoviAttore();
		},false);
	}