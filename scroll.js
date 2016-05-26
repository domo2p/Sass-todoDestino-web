$(document).ready(function(){

  $('a.scroll').click(function(e){
	   e.preventDefault();
	    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
    });
});
//$('a').click(function(e){ ... }); // Para todos los enlaces
//$('nav a').click(function(e){ ... }); // Para los enlaces dentro de un menu (<nav>)
//$('header a').click(function(e){ ... }); // ... todos los enlaces de la cabecera
