$(document).ready(function() {
console.log('hello');
  $('#myTabs a').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
  });

  $('body').scrollspy({
    target: '#navbar-example'
  })

  $('[data-spy="scroll"]').each(function() {
    var $spy = $(this).scrollspy('refresh')
  });
  $('.contactp').hide();

  var contact = false;

  $('#contactbutton').click(function(){
    contact = !contact
    if(contact){
      $('.contactp').show();
    }else {
      $('.contactp').hide();
    }
  });

  $('#traveldes').hide();
  $('#examdes').hide();
  var travel = false;

  $('#travel').hover(function(){
    travel = !travel
    if(travel){
      $('#traveldes').show();
    }else {
      $('#traveldes').hide();
    }
  });

  var exam = false;
  $('#examination').hover(function(){
    exam = !exam
    if(exam){
      $('#examdes').show();
    }else {
      $('#examdes').hide();
    }
  });
  $('#education').hide();
  $('#interest').hide();

  $('#back').click(function() {
    $('#background').slideDown("slow");
    $('#education').slideUp("slow");
    $('#interest').slideUp("slow");
  });

  $('#ed').click(function() {
    $('#education').slideDown("slow");
    $('#background').slideUp("slow");
    $('#interest').slideUp("slow");
  });
  $('#int').click(function() {
    $('#interest').slideDown("slow");
    $('#background').slideUp("slow");
    $('#education').slideUp("slow");
  });
});
