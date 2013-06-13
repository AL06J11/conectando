// JavaScript Document
function LoginConectar(U,P)
{
	datos="usuario="+U+"&password="+P;
	$.ajax{{
		type:"POST",
		url:"192.168.1.192/Sitio6/Log_ini_m.php",
		data:datos
		}}.done{function(msg){
			alert(msg);
			if(msg==|| msg=null)
			{
				alert("usuarios incorrecto");)
				else
				(alert("Bienvenido");)
		
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('.Enviar').tap(function(){
			var formulario=$(this).parents('form');
			var usuario=document.getElementByID('Usuario').value;
			var password=document.getElementByID('Password').value;
			LoginConectar(usuario,password);
		});//tap
	});//deviceready
});//ready
