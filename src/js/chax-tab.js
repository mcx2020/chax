$('.chax-tab-nav-item').hover(function(){
  let index = $(this).index()
  $(this).parents('.chax-tab-nav')
    .siblings('.chax-tab-panel')
    .children('.chax-tab-panel-item').removeClass('active').eq(index).addClass('active')
})