// 功能：点击后显示气泡
$('.chax-tooltip-click').click(function(e){
  e.preventDefault()
  e.stopPropagation()
  $(this).children('.chax-tooltip').fadeIn()
  setTimeout(()=>{
    $(this).children('.chax-tooltip').fadeOut()
  },1000)
})