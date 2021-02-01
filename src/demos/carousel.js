// 功能：自动播放轮播
autoPlayCarousel()
function autoPlayCarousel(){
  let $carouselItem = $('.chax-carousel-item')
  let length = $carouselItem.length
  let index = 0
  function getCurrentIndex(){
    return index
  }
  function getNextIndex(){
    return index = (index+1)%length
  }
  function transitionStart(index){
    for(let i=0;i<=5;i++){
      $carouselItem.eq((index+i)%length).css({
        transform:'translateX(-240px)',
        transition:'transform linear 500ms'
      })
    }
  }
  function transitionEnd(index){
    for(let i=0;i<=5;i++){
      $carouselItem.eq((index+i)%length).css({
        transform:'translateX(0)',
        transition:'transform 0s'
      })
    }
  }
  function switchImg(index){
    for(let i=0;i<length;i++){
      $carouselItem.eq((index+i)%length).css({order:i+1})
    }
    $carouselItem.eq((index+length-1)%length).addClass('not-show')
    $carouselItem.eq((index+5)%length).removeClass('not-show')
  }
  function autoSwitchImg(){
    let currentIndex = getCurrentIndex()
    let nextIndex = getNextIndex()
    transitionStart(currentIndex)
    let timer1 = setTimeout(()=>{
      switchImg(nextIndex)
      transitionEnd(currentIndex)
      clearTimeout(timer1)
      let timer2 = setTimeout(()=>{
        clearTimeout(timer2)
        autoSwitchImg()
      },1500)
    },600)

  }
  function executeTransition(){
    setTimeout(()=>{
      autoSwitchImg()
    },1000)
  }
  executeTransition()
}




