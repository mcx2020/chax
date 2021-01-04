// 绑定搜索框相关的事件
searchBox()
function searchBox(){
	bindInputEvent()
	bindSearchOption()
	bindSearchPopover()
	function bindInputEvent(){
		let $input = $('.chax-search-box input')
		let historyRecord = [1,2,3]  // 假设这是一个历史记录
		$input.focus(function(){
			// 输入框被聚焦，显示搜索弹出框，根据输入值和历史记录确定搜索弹出框的内部展示
			$('.chax-search-box .chax-search-popover').addClass('active')
			judgePopOverContent()
		})
		$input.keyup(function(){
			// 输入框中有键按下，根据输入值和历史记录确定搜索弹出框的内部展示
			judgePopOverContent()
		})
		$input.click(function(){
			if($(this).is(':focus')){
				$('.chax-search-box .chax-search-popover').addClass('active')
			}
		})
		function judgePopOverContent(){
			// 根据输入值和历史记录确定搜索弹出框的内部展示
			let valueText = $input.val()
			if(!valueText){
				if(historyRecord.length){
					$('.chax-search-popover').children().filter('.p5').removeClass('active-flex')
						.siblings().addClass('active-flex')
				}else{
					$('.chax-search-popover').children().filter('.p5').removeClass('active-flex')
						.siblings().addClass('active-flex')
						.filter('.p1').removeClass('active-flex')
				}
			}else{
				$('.chax-search-popover').children().removeClass('active-flex')
					.filter('.p5').addClass('active-flex')
			}
		}
	}
	function bindSearchOption(){
		// 悬浮事件
		$('.chax-search-option').hover(function(){
			$('.chax-search-option .chax-option-dropdown').addClass('active')
		},function(){
			$('.chax-search-option .chax-option-dropdown').removeClass('active')
		})
		// 点击事件
		$('.chax-search-option .chax-option-dropdown-item').click(function(){
			let valueText = $(this).text()
			let $input = $('.chax-search-box input')
			// 文本显示切换
			$('.chax-search-option .chax-select-show').text(valueText)
			// 设置输入框距离左边位置，并选中
			let width = $('.chax-search-option').outerWidth(true)
			// 选项菜单删除
			$('.chax-search-option .chax-option-dropdown').removeClass('active')
			$input.css('padding-left',width)
			// 如果输入框有值的话，进行以下后续操作
			if($input.val()){
				// 将输入框选中
				$input.select()
				// 默认输入框选中后，搜索弹出框会弹出，这里把它去掉
				$('.chax-search-box .chax-search-popover').removeClass('active')
			}
		})
	}
	function bindSearchPopover(){
		$(document).mouseup(function(e){
			let _con= $('.chax-search-box .chax-search-popover')
			let $input = $('.chax-search-box input')
			if(!$input.is(':focus') && _con.is(':visible') && !_con.is(e.target) && _con.has(e.target).length===0){
				_con.removeClass('active')
			}
		})
	}
}


