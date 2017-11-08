$( document ).ready(function(){
  countdown.setLabels(
  	' | | | | | | | | | |',
  	' | | | | | | | | | |',
  	': ',
  	': ',
  	'Coming Soon',
  	function(n){ return n.toString(); });
  var remainder = countdown(new Date(2017, 10, 15),function(ts){$("#countdown").text(ts.toString());});
  $('#pupil').hover(function() {
      $(this).fadeTo("slow",1);
  },function() {
      $(this).fadeTo("slow",0);
  });
});
