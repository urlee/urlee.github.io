// 表示の時間制限のJS
$('[data-timer]').each(function() {
  var startDate = $(this).data('timer').start;
  var endDate = $(this).data('timer').end;
  var nowDate = new Date();

  if (startDate) {
    startDate = new Date(startDate);
  } else {
    startDate = nowDate;
  }
  if (endDate) {
    endDate = new Date(endDate);
  }

  if (startDate <= nowDate && (!endDate || nowDate <= endDate)) {
    $(this).removeClass('is-hidden');
  }
  else {
    $(this).addClass('is-hidden');
  }
});
