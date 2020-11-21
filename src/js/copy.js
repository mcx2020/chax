$('[data-chax-clipboard-target]').click(function(){
  if(!$(this).data().chaxClipboardTarget) return
  try{
    let targetNode = $($(this).data().chaxClipboardTarget)[0]
    let range = document.createRange()
    range.selectNode(targetNode)
    window.getSelection().addRange(range)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
  }catch (error) {
    alert('复制失败')
  }
})