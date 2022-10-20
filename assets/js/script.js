
$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$('.btn').on('click', function() {
  var task = $(this).siblings('.planed').val();
  var hour = $(this).parent().attr('id');
  
  localStorage.setItem(hour, task);
});

$('#time1 .planed').val(localStorage.getItem('time1'));
$('#time2 .planed').val(localStorage.getItem('time2'));
$('#time3 .planed').val(localStorage.getItem('time3'));
$('#time4 .planed').val(localStorage.getItem('time4'));
$('#time5 .planed').val(localStorage.getItem('time5'));
$('#time6 .planed').val(localStorage.getItem('time6'));
$('#time7 .planed').val(localStorage.getItem('time7'));
$('#time8 .planed').val(localStorage.getItem('time8'));
$('#time9 .planed').val(localStorage.getItem('time9'));

// for(var i = 1; i <= 9; i++){
//     $('#time' + i, '.planed').val(localStorage.getItem('time' + i));
// }

function hourTracker() {
  var currentHour = moment().hour();

  $('.line').each(function() {
    var blockHour = parseInt($(this).attr('id').split('time')[1]);

    if (blockHour < currentHour) {
      $(this).addClass('past');
      $(this).removeClass('future');
      $(this).removeClass('present');
    } 
    else if (blockHour === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
      $(this).removeClass('future');
    } 
    else {
      $(this).removeClass('present');
      $(this).removeClass('past');
      $(this).addClass('future');
    }
  });
}
hourTracker();
