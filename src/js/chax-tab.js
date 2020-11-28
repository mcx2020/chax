$('.chax-tab .chax-tab-nav-item').hover(function(){
  $(this).siblings().removeClass('active')
  $(this).addClass('active')
  let index = $(this).index()
  $('.chax-tab .chax-tab-panel-item').removeClass('active')
    .eq(index).addClass('active')
})