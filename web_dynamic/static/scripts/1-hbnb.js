#!/usr/bin/node
$( document ).ready(function () {
  const amenity_id = {};
  $("INPUT").change(function () {
    if($(this).prop("checked")) {
      amenity_id[$(this).attr("data-id")] = $(this).attr("data-name");
    } else {
      delete amenity_id[$(this).attr("data-id")];
    }
    for (const key in amenity_id)
    {
      let name = amenity_id[key]
      $('DIV.amenities h4').text(name)
    }
  });
});
