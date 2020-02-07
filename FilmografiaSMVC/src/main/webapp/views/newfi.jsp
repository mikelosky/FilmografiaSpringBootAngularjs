<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>	

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width">
<link href="menunewfi.css" rel="stylesheet" type="text/css">

<title>Inserisci il nuovo Film</title>
</head>
<body>
	<div id="wrapper">
		<div id="subscribeBox">
			<h2>
				<span class="thin"><p>Inserire il nuovo Film</p></span>
			</h2>

			<form class="subscribeForm" name="Subscription Form" id="nuovofilm">

				<input id="nome" type="text" placeholder="Nome Film" name="nome"
					required>
				
				<input id="anno_uscita" type="number" placeholder="Anno Uscita"
					name="anno_uscita" required> <input id="incassi"
					type="number" placeholder="Incassi Totali" name="incassi" required>

				<p>Seleziona la casa produttrice</p>
				<select id="id_casa_prod" name="id_casa_prod">
					<option></option>
					<c:forEach var="current" items="${listCP}">
						<option value="${current.getId()}">
							${current.getNome()}</option>
					</c:forEach>
					
				</select> 
				
				<p>Seleziona gli attori</p>
				<select multiple="multiple" id="my-select" name="attori_list" size="${fn:length(listA)}">
					<c:forEach var="currenta" items="${listA}">
						<option value="${currenta.getId()}">${currenta.getNome()}</option>
					</c:forEach>
				</select>
				


				<%-- <c:forEach var="currenta" items="${listA}">
					<input type="checkbox" name="id_attori"
						value="${currenta.getid_Attori()}" /> ${currenta.getNome()} <br>
				</c:forEach> --%>

				
				<input id="img" type="text" placeholder="Inserisci path Immagine" s
					name="img">
				
				<input id="submit" type="submit" value="Inserisci">
			</form>
		</div>
	</div>
	<script src = "js/nuovo.js"> 
	</script>
</body>
</html>