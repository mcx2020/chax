
$('.chax-modal .chax-modal-close').click(function(e){
  e.stopPropagation();
  e.preventDefault();
  $(this).parents(".chax-modal").fadeOut()
})