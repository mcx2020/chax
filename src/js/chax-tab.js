// 功能：切换 tab 标签
switchTab()
function switchTab(){
  $('.chax-tab .chax-tab-nav-item').hover(function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    let index = $(this).index()
    $('.chax-tab .chax-tab-panel-item').removeClass('active')
      .eq(index).addClass('active')
  })
}
