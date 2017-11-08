$( document ).ready(function(){
  countdown.setLabels(
  	' | | | | | | | | | |',
  	' | | | | | | | | | |',
  	': ',
  	': ',
  	'Coming Soon',
  	function(n){ return n.toString(); });
  var remainder = countdown(new Date(2017, 10, 15),function(ts){$("#countdown").text(ts.toString());});
});
