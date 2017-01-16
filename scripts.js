var color = null;
var number = null;

$(function(){
  $('.color-button').on('click', function(){
      color = $(this).attr("data-color");
      number = $(this).closest('body').find('#'+color).text();
      number++;
      $(this).closest('body').find('#'+color).text(number);
      var $box = $('<div class = "color-cube"><button class = "delete">X</button></div>').addClass(color);
      $('.container').append($box);
  });
  $('.container').on('click','.delete', function(){
      $(this).closest('.color-cube').fadeOut('slow');
      //just added a little something 
  });
});
