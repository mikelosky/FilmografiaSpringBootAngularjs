<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
	
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link href="css/menucp.css" rel="stylesheet" type="text/css">
<title>Inserire Nuova Casa Produttrice</title>
</head>
<body>
	<div id="wrapper">

		<div id="subscribeBox">
			<h2>
				<span class="thin"><p>Inserire la nuova Casa Produttrice</p></span>
			</h2>
			
			<!-- Start Here: Web Form tutorial -->
			<form class="subscribeForm" name="Subscription Form" id="nuovacasaproduttrice" >

				<input id="nome" type="text" placeholder="Nome Casa Produttrice" name="nome" required> 
				<input id="sedePrincipale" type="text" placeholder="Nome Sede Principale" name="sedePrincipale" required>
				<!-- Step 1: Add an email field here -->
				<input id="annoFondazione" type="number" placeholder="Anno Fondazione" name="annoFondazione"
					required>
				<!-- Step 2: Add an address field here -->
				<input id="img" type="text" placeholder="Inserisci path Immagine"
					name="img">
				<!-- Step 3: add a submit button here -->
				<input id="submit" type="submit" value="Inserisci">

			</form>

		</div>
	</div>
	<script src = "js/nuovo.js"> 
	</script>
</body>
</html>