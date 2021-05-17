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

  $.get('http://localhost:5001/api/v1/status/', function (data, status) {
    if (status === 'success') {
      $('DIV#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });

  $('button').click(function () {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:5001/api/v1/places_search/',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: JSON.stringify({ amenities: Object.keys(amenityId) }),
      success: function (data, status) {
        $('SECTION.places').empty();
        for (const object in data) {
          let display;
          const titleBox = `<article><div class="title_box"><h2>${data[object].name}</h2><div class="price_by_night">$${data[object].price_by_night}</div></div>`;
          /* ===GUESTS=== */
          display = (data[object].max_guest > 1) ? 'Guests' : 'Guest';
          const infoGuest = `<div class="information"><div class="max_guest">${data[object].max_guest} ${display}</div>`;
          /* ===ROOMS=== */
          display = (data[object].number_rooms > 1) ? 'Bedrooms' : 'Bedroom';
          const infoRoom = `<div class="number_rooms">${data[object].number_rooms} ${display}</div>`;
          /* ===BATHROOMS=== */
          display = (data[object].number_bathrooms > 1) ? 'Bathrooms' : 'Bathroom';
          const infoBath = `<div class="number_bathrooms">${data[object].number_bathrooms} ${display}</div></div>`;
          const desc = `<div class="description">${data[object].description}</div></article>`;
          const finalHtml = titleBox + infoGuest + infoRoom + infoBath + desc;
          $('SECTION.places').append(finalHtml);
        }
      }
    });
  });
});
