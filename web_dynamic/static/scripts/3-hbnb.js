#!/usr/bin/node
$(document).ready(function () {
  const amenityId = {};
  $('INPUT').change(function () {
    if ($(this).prop('checked')) {
      amenityId[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenityId[$(this).attr('data-id')];
    }
    $('DIV.amenities h4').text(Object.values(amenityId).join(', '));
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
    if (status === 'success') {
      $('DIV#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });

  $.ajax({
    type: "POST",
    url: 'http://localhost:5001/api/v1/places_search/',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    data: {},
    success: function(data){
      alert('junk');
    }
  });
});
