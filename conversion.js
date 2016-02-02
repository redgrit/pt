//  JQuery to carry out the calcuations 
$(document).ready(function() {

	// convert feet ins to cms
	$("#itom1").click(function() {
		var feet = $("#feet").val() ;
		var ins = $("#ins").val() ;
		var total = Math.round((parseInt(feet * 12) + parseInt(ins)) * 2.54) ;
		$("#cms").val(total) ;
		} ) ;
		
	// convert cms to feet ins
	$("#mtoi1").click(function() {
		var cms = $("#cms").val() ;
		var total = Math.round((parseInt(cms) / 2.54)) ;
		var tot1 = Math.floor(total / 12) 
		var tot2 = total % 12 ;
		$("#feet").val(tot1) ;
		$("#ins").val(tot2) ;
		} ) ;
		
	// convert stones pounds to kgs
	$("#itom2").click(function() {
		var stones = $("#stones").val() ;
		var pounds = $("#pounds").val() ;
		var total = Math.round((parseInt(stones * 14) + parseInt(pounds)) / 2.20462) ;
		$("#kgs").val(total) ;
		} ) ;
		
	// convert kgs to stones pounds
	$("#mtoi2").click(function() {
		var kgs = $("#kgs").val() ;
		var total = Math.round((parseInt(kgs) * 2.20462)) ;
		var tot1 = Math.floor(total / 14) 
		var tot2 = total % 14 ;
		$("#stones").val(tot1) ;
		$("#pounds").val(tot2) ;
		} ) ;
		
	// convert stones pounds to kgs
	$("#itom3").click(function() {
		var ounces = $("#ounces").val() ;
		var total = Math.round(parseInt(ounces) * 28.3495) ;
		$("#grams").val(total) ;
		} ) ;
		
	// convert kgs to stones pounds
	$("#mtoi3").click(function() {
		var grams = $("#grams").val() ;
		var total = Math.round((parseInt(grams) / 28.3495)) ;
		$("#ounces").val(total) ;
		} ) ;
		
	} ) ;
