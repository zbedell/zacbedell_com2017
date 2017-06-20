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
