// HI! Thanks for checking out my tiny JavaScript file //

var updateClock = function(){

  var currentDate = new Date();
  var epochTime = currentDate.getTime();
  $('#epoch-display').html(epochTime);

  var mmt = moment();
  var bday = moment('1978-12-19 16:30:00');
  var age = mmt.diff(bday, 'seconds');
  $('#ssz').html(age);

  setTimeout(updateClock, 1000);

};

var buttonHandlers = function() {
  $('#learn-more').hover(
    function (){
      $('#learn-more-text').addClass('hover');
    },
    function () {
      $('#learn-more-text').removeClass('hover');
    });
  $('#to-the-batcave').hover(
    function (){
      $('#to-the-batcave-text').addClass('hover');
    },
    function () {
      $('#to-the-batcave-text').removeClass('hover');
    });
    $('#download').hover(
      function (){
        $('#download-text').addClass('hover');
      },
      function () {
        $('#download-text').removeClass('hover');
      });
};
