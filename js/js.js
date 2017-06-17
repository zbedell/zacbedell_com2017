var updateClock = function(){

  var currentDate = new Date();
  var epochTime = currentDate.getTime();
  console.log('Unix Epoch Time = ' + epochTime);
  $('#millisecond-display').html(epochTime);

  var humanTime = moment(currentDate.toISOString()).format('h:mm:ss A');

  $('#datetime-display').html(humanTime);

  var mmt = moment();
  var bday = moment('1978-12-19 16:30:00');
  var age = mmt.diff(bday, 'seconds');
  console.log('Seconds Since Zac: '+ age);
  $('#diffSeconds-output').html(age);

  setTimeout(updateClock, 1000);

};
