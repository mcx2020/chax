// 功能：返回首页
backHome()
function backHome(){
	let backHomeHTML = '<a href="/src" style="position:fixed;bottom:200px;left:200px;padding:0.4em 0.8em;box-shadow:0 8px 15px rgba(47,65,93,0.1)">回到首页</a>'
	let $backHomeHTML = $(backHomeHTML)
	$backHomeHTML.hover(function(){
		$(this).css('color','#0057FF')
	},function(){
		$(this).css('color','#171718')
	})
	$('body').append($backHomeHTML)
}