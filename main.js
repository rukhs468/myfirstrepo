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
  $('#contactp').hide();

  var contact = false;

  $('#contactbutton').click(function(){
    contact = !contact
    if(contact){
      $('#contactp').show();
    }else {
      $('#contactp').hide();
    }
  });

});
