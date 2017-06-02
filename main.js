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

  $('#travel').click(function(){
    travel = !travel
    if(travel){
      $('#traveldes').show();
      $('#examdes').hide();
    }else {
      $('#traveldes').hide();
    }
  });

  var exam = false;
  $('#examination').click(function(){
    exam = !exam
    if(exam){
      $('#examdes').show();
      $('#traveldes').hide();
    }else {
      $('#examdes').hide();
    }
  });
  var background = false;

  $('#back').click(function(){
    background = !background
    if(background){
      $('#background').css({
        'visibility':'visible',
        'opacity':1,
        'height':'400px'
      });
    }else {
      $('#background').css({
        'visibility':'hidden',
        'opacity':0,
        'height':'0px'
      });
    }
  });

  var education = false;

  $('#ed').click(function(){
    education = !education
    if(education){
      $('#education').css({
        'visibility':'visible',
        'opacity':1,
        'height':'400px'
      });
    }else {
      $('#education').css({
        'visibility':'hidden',
        'opacity':0,
        'height':'0px'
      });
    }
  });

  var interest = false;

  $('#int').click(function(){
    interest = !interest
    if(interest){
      $('#interest').css({
        'visibility':'visible',
        'opacity':1,
        'height':'400px'
      });
    }else {
      $('#interest').css({
        'visibility':'hidden',
        'opacity':0,
        'height':'0px'
      });
    }
  });
  /*$('#education').hide();
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
  });*/
});
