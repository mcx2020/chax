// 点击复制文本
copyText()
function copyText(){
	$('.chax-copy').click(function(){
		let $targetNode = $($(this).attr('data-chax-copy-target'))
		try{
			let range = document.createRange()
			range.selectNode($targetNode[0])
			window.getSelection().addRange(range)
			document.execCommand('copy')
			window.getSelection().removeAllRanges()
		}catch (error) {
			alert('复制失败')
		}
	})
}
