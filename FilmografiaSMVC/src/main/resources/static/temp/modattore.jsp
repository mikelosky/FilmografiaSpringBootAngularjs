<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link href="css/menucp.css" rel="stylesheet" type="text/css">
</head>
<body>
	<div id="wrapper">

		<div id="subscribeBox">
			<h2>
				<span class="thin"><p>Modifica la Casa Produttrice</p></span>
			</h2>
			
			<!-- Start Here: Web Form tutorial -->
			<form class="subscribeForm" name="Subscription Form" id="aggiornamentoattore">
				<input id="id" type="hidden" value="${attore.getId()}" name="id">	
				<input id="nome" type="text" value="${attore.getNome()}" name="nome" required> 
				<input id="cognome" type="text" value="${attore.getCognome()}" name="cognome" required>
				<!-- Step 1: Add an email field here -->
				<input id="annoNascita" type="number" value="${attore.getAnnoNascita()}" name="annoNascita"
					required>
				<input id="annoInizioCarriera" type="number" value="${attore.getAnnoInizioCarriera()}" name="annoInizioCarriera" required>
				<!-- Step 2: Add an address field here -->
				<input id="img" type="text" value="${attore.getImg()}"
					name="img">
				<!-- Step 3: add a submit button here -->
				<input id="submit" type="submit" value="Inserisci">

			</form>

		</div>
	</div>
	<script src = "js/aggiorna.js"> 

	</script>
</body>
</html>