function aggiornaCasaProduttrice() {
		var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
	    	if (this.readyState === 4)
	    		location.href='/';
	    }
		xhttp.open('put', '/caseprod/modify/' + document.getElementById('id').value, true);
		xhttp.setRequestHeader("Content-Type", "application/json");  
	    xhttp.send(JSON.stringify({
	    	nome: document.getElementById('nome').value,
	    	sedePrincipale: document.getElementById('sedePrincipale').value,
	    	annoFondazione: document.getElementById('annoFondazione').value,
	    	img: document.getElementById('img').value
	    }));
	}
	
	var aggcp = document.getElementById("aggiornamentocasaproduttrice")
	if(aggcp){
	aggcp.addEventListener("submit", function(event){
		  event.preventDefault();
		  aggiornaCasaProduttrice();
		},false);
	}

function aggiornaFilm() {
		var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
	    	if (this.readyState === 4)
	    		location.href='/';
	    }
		xhttp.open('put', '/film/modify/' + document.getElementById('id').value, true);
		xhttp.setRequestHeader("Content-Type", "application/json");
		var form = document.getElementById("aggiornamentofilm");
		var select = form.querySelectorAll("select[name='attori_list']");
		var idc = document.getElementById('id_casa_prod').value;
	
		var attoriList = [];
		for (v of select[0].options)
			if(v.selected === true)
				attoriList.push(
						{
							id: v.value
						});
		
	    xhttp.send(JSON.stringify({
	    	nome: document.getElementById('nome').value,
	    	annoUscita: document.getElementById('anno_uscita').value,
	    	incassi: document.getElementById('incassi').value,
	    	caseProduttrici : {id : document.getElementById('id_casa_prod').value},
	    	attori: attoriList,
	    	img: document.getElementById('img').value
	    }));
	}
	
	var aggfi = document.getElementById("aggiornamentofilm")
	if(aggfi){
	aggfi.addEventListener("submit", function(event){
		  event.preventDefault();
		  aggiornaFilm();
		},false);
	}
	
function aggiornaAttore() {
		var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
	    	if (this.readyState === 4)
	    		location.href='/';
	    }
		xhttp.open('put', '/attori/modify/' + document.getElementById('id').value, true);
		xhttp.setRequestHeader("Content-Type", "application/json");  
	    xhttp.send(JSON.stringify({
	    	nome: document.getElementById('nome').value,
	    	cognome: document.getElementById('cognome').value,
	    	annoNascita: document.getElementById('annoNascita').value,
	    	annoInizioCarriera: document.getElementById('annoInizioCarriera').value,
	    	img: document.getElementById('img').value
	    }));
	}
	
	var aggat = document.getElementById("aggiornamentoattore")
	if(aggat){
	aggat.addEventListener("submit", function(event){
		  event.preventDefault();
		  aggiornaAttore();
		},false);
	}