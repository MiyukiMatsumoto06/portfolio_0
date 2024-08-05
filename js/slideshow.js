$(window).on("load", function() {
 $("#thumbnail img").click(function() {
  let img_src = $(this).attr("src");
  $("#slideshow-image img").attr("src", img_src);
 });

$("#thumbnail1 img").click(function() {
 let img_src = $(this).attr("src");
 $("#slideshow-image1 img").attr("src", img_src);
});

$("#thumbnail2 img").click(function() {
 let img_src = $(this).attr("src");
 $("#slideshow-image2 img").attr("src", img_src);
});

$("#thumbnail3 img").click(function() {
 let img_src = $(this).attr("src");
 $("#slideshow-image3 img").attr("src", img_src);
});

$("#thumbnail4 img").click(function() {
let img_src = $(this).attr("src");
$("#slideshow-image4 img").attr("src", img_src);
});
});
