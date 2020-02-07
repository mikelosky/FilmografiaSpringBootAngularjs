<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Modif Casa Prod</title>
<link href="menucp.css" rel="stylesheet" type="text/css">
</head>
<body>
	
	<div id="wrapper">

		<div id="subscribeBox">
			<h2>
				<span class="thin"><p>Modifica la Casa Produttrice</p></span>
			</h2>
			
			<form class="subscribeForm" name="Subscription Form" id="aggiornamentocasaproduttrice">
				<input id="id" type="hidden" value="${casaproduttrice.getId()}" name="id">	
				<input id="nome" type="text" value="${casaproduttrice.getNome()}" name="nome" required> 
				<input id="sedePrincipale" type="text" value="${casaproduttrice.getSedePrincipale()}" name="sedePrincipale" required>

				<input id="annoFondazione" type="number" value="${casaproduttrice.getAnnoFondazione()}" name="annoFondazione" required>

				<input id="img" type="text" value="${casaproduttrice.getImg()}"	name="img">
				
				<input id="submit" type="submit" value="Inserisci">

			</form>

		</div>
	</div>
	<script src = "js/aggiorna.js"> 
	</script>
</body>
</html>