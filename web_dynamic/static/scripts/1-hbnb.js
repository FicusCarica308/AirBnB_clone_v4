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
});
