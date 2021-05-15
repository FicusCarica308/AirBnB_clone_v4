#!/usr/bin/node
$( document ).ready(function () {
  const amenity_id = [];
  $("INPUT").change(function () {
    if($(this).is("checked")) {
      amenity_id[$(this).attr("data-id")] = $(this).attr("data-name");
    } else {
      delete amenity_id[$(this).attr("data-id")];
    }
    $.each(amenity_id[$(this).attr("data-id")], function (index) {
      $('UL#list_movies').append('<li>' + val.title + '</li>');
    });
  });
});
