<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>

<link href="menuindex.css" rel="stylesheet" type="text/css">
<meta charset="ISO-8859-1" name="viewport"
	content="width=device-width, initial-scale=1">

<title>Filmatron</title>
</head>
<body>
	<div id="mySidebar" class="sidebar">
		<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
		<a href="newcp">New Casa Produttrice</a> 
		<a href="newat">New Attore</a> 
		<a href="newfilm">New Film</a>
		<a href="selectcasaprod">Mod Casa Produttrice</a>
		<a href="selectattori">Mod Attore</a>
		<a href="selectfilmmod">Mod Film</a>
		
		<a href="removeattore">Rem Attore</a>
		<a href="removecp">Rem Casa Produttrice</a>
		<a href="removefilm">Rem Film</a>
		<a href="#">Contact</a>
	</div>
	

	<div id="main">
		<button class="openbtn" onclick="toggle()">Toggle Sidebar</button>

	</div>

	<script src = "js/main.js">
		
	</script>


	<c:forEach var="current" items="${listCP}">
	
	<div class="container">
		<div class="img-container">
			<img
				src="${current.getImg()}"
				alt="">
		</div>
		<div class="user-info">
			<h2>
				<c:out value="${current.getNome()}" />
			</h2>
			<span>"${current.getAnnoFondazione()}"</span>
		</div>
	</div>
	</c:forEach>

</body>
</html>