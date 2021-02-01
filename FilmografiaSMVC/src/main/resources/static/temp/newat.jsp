<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link href="css/menucp.css" rel="stylesheet" type="text/css">
<title>Inserire Nuovo Attore</title>
</head>
<body>
	<div id="wrapper">

		<div id="subscribeBox">
			<h2>
				<span class="thin"></span>
			</h2>
			<p>Inserire in nuovo Attore</p>

			<!-- Start Here: Web Form tutorial -->
			<form class="subscribeForm" name="Subscription Form" id="nuovattore">

				<input id="nome" type="text" placeholder="Nome Attore"
					name="nome" required> 
				<input id="cognome"
					type="text" placeholder="Nome Cognome"
					name="cognome" required>
				
				<input id="annoNascita" type="number"
					placeholder="Anno Nascita" name="annoNascita" required>
				<input id="annoInizioCarriera" type="number"
					placeholder="Anno Inizio" name="annoInizioCarriera" required>
				
				<input id="img" type="text" placeholder="Inserisci path Immagine"
					name="img">
				
				<input id="submit" type="submit" value="Inserisci">

			</form>
		</div>
	</div>
	<script src = "js/nuovo.js"> 
	</script>
</body>
</html>